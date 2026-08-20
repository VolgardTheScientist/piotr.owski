/**
 * Piotr Piotrowski Architecture & Spatial Design
 * Vector World Map Engine
 * - National Geographic & MapChart Standard Robinson World Projection (1000x500 Canvas)
 * - Absolute Constant Project Dot Size (Physical Invariance across all Zoom & Region Focus changes)
 * - Inhabited World Framing: South America sits naturally low near bottom controls at max zoom-out
 * - Strict Clamping: No Empty Background Borders/Stripes Can Ever Appear
 * - Infinite Ocean Filling & Seamless Container Background Color
 * - Clean Antimeridian Geometry (Zero Horizontal Lines / Stripes)
 * - Full Viewport Immersive Stage
 * - Start at World View -> Smooth Cinematic Zoom into Europe
 * - Ultra-Deep Close-Up Zoom (Down to 0.4 units) for complete individual dot separation
 * - Mouse Wheel Zooming & Click-Drag Panning
 * - Reliable, Non-Flickering Floating Project Data Card next to Hovered Pin
 * - Direct Clickable Links to Exact Project Pages on Studio Websites
 */

window.WorldMapController = {
  currentFilter: 'all',
  currentStudio: 'all',
  activeProjectId: null,
  
  // Current ViewBox State in Inhabited World Framing (x, y, w, h)
  viewBox: { x: 0, y: 10, w: 1000, h: 415 },
  
  // Target Centers for Region Focus (Dynamically fitted to container aspect ratio)
  regionCenters: {
    world: { cx: 500, cy: 215, w: 1000, h: 415 },
    europe: { cx: 522, cy: 100, w: 105, h: 70 },
    swiss: { cx: 521, cy: 110, w: 22, h: 16 },
    uk: { cx: 494, cy: 87, w: 26, h: 28 },
    poland: { cx: 543.5, cy: 96, w: 28, h: 20 }
  },

  // Robinson Interpolation Table (National Geographic Standard)
  robinsonTable: [
    [0, 1.0000, 0.0000],
    [5, 0.9986, 0.0620],
    [10, 0.9954, 0.1240],
    [15, 0.9900, 0.1860],
    [20, 0.9822, 0.2480],
    [25, 0.9730, 0.3100],
    [30, 0.9600, 0.3720],
    [35, 0.9427, 0.4340],
    [40, 0.9216, 0.4958],
    [45, 0.8962, 0.5571],
    [50, 0.8679, 0.6176],
    [55, 0.8350, 0.6769],
    [60, 0.7986, 0.7346],
    [65, 0.7597, 0.7903],
    [70, 0.7186, 0.8435],
    [75, 0.6732, 0.8936],
    [80, 0.6213, 0.9394],
    [85, 0.5722, 0.9761],
    [90, 0.5322, 1.0000]
  ],

  // Animation Frame Handle
  animHandle: null,
  isDragging: false,
  dragStart: { x: 0, y: 0 },
  startViewBox: { x: 0, y: 0 },
  hasIntroAnimated: false,
  tooltipTimeout: null,
  currentPinEl: null,

  getRobinsonFactors(latDeg) {
    const absLat = Math.min(90.0, Math.abs(latDeg));
    const idx = Math.min(17, Math.floor(absLat / 5));
    const rem = (absLat % 5) / 5.0;
    const r0 = this.robinsonTable[idx];
    const r1 = this.robinsonTable[idx + 1] || r0;
    const fx = r0[1] + rem * (r1[1] - r0[1]);
    const fy = r0[2] + rem * (r1[2] - r0[2]);
    const signY = latDeg >= 0 ? -1.0 : 1.0;
    return { fx, fy: signY * fy };
  },

  // MapChart / National Geographic Robinson Projection Helper
  projectPoint(lng, lat) {
    const { fx, fy } = this.getRobinsonFactors(lat);
    const x = 500.0 + (lng / 180.0) * 482.5 * fx;
    const y = 250.0 + fy * 240.0;
    return { x, y };
  },

  render(containerEl, lang = 'en') {
    const projects = siteData.cvProjects || [];
    const ui = siteData.ui;

    // Filter projects
    const filteredProjects = projects.filter(p => {
      const matchStatus = this.currentFilter === 'all' || p.type === this.currentFilter;
      const matchStudio = this.currentStudio === 'all' || p.studio === this.currentStudio;
      return matchStatus && matchStudio;
    });

    // Studios List
    const studiosSet = new Set(projects.map(p => p.studio).filter(Boolean));
    const studioOptionsHtml = Array.from(studiosSet).sort().map(st => `
      <option value="${st}" ${this.currentStudio === st ? 'selected' : ''}>${st}</option>
    `).join('');

    // Continents SVG (Robinson Projection, Non-scaling borders, static background)
    const continentsSvgHtml = (typeof worldMapPaths !== 'undefined' ? worldMapPaths : []).map(cp => `
      <path class="map-land-path" d="${cp.d}" />
    `).join('');

    // Uniform Clean Project Pins SVG (Sizes dynamically scaled to maintain constant screen pixel size)
    const dotsSvgHtml = filteredProjects.map(p => {
      const pt = this.projectPoint(p.lng, p.lat);
      const isSelected = this.activeProjectId === p.id;

      return `
        <g class="map-pin-node ${isSelected ? 'is-active' : ''}" 
           data-project-id="${p.id}" 
           transform="translate(${pt.x.toFixed(4)}, ${pt.y.toFixed(4)})"
           tabindex="0"
           role="button">
          
          <!-- Invisible Outer Touch/Hover Hitbox -->
          <circle class="pin-hitbox" r="6.0" />
          
          <!-- Outer Subtle Halo Ring -->
          <circle class="pin-halo-ring" r="3.2" />
          
          <!-- Uniform Core Solid Dot -->
          <circle class="pin-dot" r="1.8" />
        </g>
      `;
    }).join('');

    // Fullstage Vector Map Component Layout
    containerEl.innerHTML = `
      <div class="vector-world-map-fullscreen">
        
        <!-- Ambient Overlay Header Controls (Top Bar) -->
        <div class="map-floating-topbar">
          
          <div class="map-title-block">
            <h1 class="map-title-text">${ui.mapTitle[lang]}</h1>
            <span class="map-project-tally">
              <strong>${filteredProjects.length}</strong> ${ui.projectsCount[lang]}
            </span>
          </div>

          <!-- Top-Right Project Type Selection Menu & Studio Filter -->
          <div class="map-topbar-right-controls">
            <!-- Project Type Selection Menu (Clean Minimalist Typography) -->
            <div class="map-floating-filters" role="group" aria-label="Filter projects by type">
              <button class="map-filter-pill ${this.currentFilter === 'all' ? 'active' : ''}" data-filter="all">
                ${ui.filterAll[lang]}
              </button>
              <button class="map-filter-pill ${this.currentFilter === 'realisation' ? 'active' : ''}" data-filter="realisation">
                ${ui.filterRealisation[lang]}
              </button>
              <button class="map-filter-pill ${this.currentFilter === 'in_progress' ? 'active' : ''}" data-filter="in_progress">
                ${ui.filterInProgress[lang]}
              </button>
              <button class="map-filter-pill ${this.currentFilter === 'competition' ? 'active' : ''}" data-filter="competition">
                ${ui.filterCompetition[lang]}
              </button>
            </div>

            <!-- Studio Dropdown Filter -->
            <div class="map-studio-dropdown-wrap">
              <select id="mapStudioFilterSelect" class="map-studio-select" aria-label="${ui.studioFilterLabel[lang]}">
                <option value="all">${ui.allStudios[lang]}</option>
                ${studioOptionsHtml}
              </select>
            </div>
          </div>

        </div>

        <!-- Interactive SVG Stage (Fills Entire Screen Area) -->
        <div class="map-canvas-container" id="mapCanvasContainer">
          
          <svg id="worldMapSvg" 
               class="world-map-svg-element" 
               viewBox="${this.viewBox.x} ${this.viewBox.y} ${this.viewBox.w} ${this.viewBox.h}" 
               preserveAspectRatio="xMidYMid slice">
            
            <defs>
              <pattern id="mapSubtleGrid" width="25" height="25" patternUnits="userSpaceOnUse">
                <path d="M 25 0 L 0 0 0 25" fill="none" stroke="rgba(128, 128, 128, 0.05)" stroke-width="0.3"/>
              </pattern>
            </defs>

            <!-- Infinite Seamless Ocean Background -->
            <rect x="-3000" y="-3000" width="7000" height="7000" class="map-ocean-surface" />
            <rect x="-3000" y="-3000" width="7000" height="7000" fill="url(#mapSubtleGrid)" />

            <!-- Latitude / Longitude Graticule Lines -->
            <g class="map-graticules-layer">
              <line x1="0" y1="250" x2="1000" y2="250" class="graticule-line equator" />
              <line x1="500" y1="0" x2="500" y2="500" class="graticule-line prime-meridian" />
              <line x1="0" y1="73.7" x2="1000" y2="73.7" class="graticule-line" />
              <line x1="0" y1="160.7" x2="1000" y2="160.7" class="graticule-line" />
              <line x1="0" y1="339.3" x2="1000" y2="339.3" class="graticule-line" />
              <line x1="0" y1="426.3" x2="1000" y2="426.3" class="graticule-line" />
              <line x1="258.7" y1="0" x2="258.7" y2="500" class="graticule-line" />
              <line x1="741.3" y1="0" x2="741.3" y2="500" class="graticule-line" />
            </g>

            <!-- Continents -->
            <g class="map-continents-layer">
              ${continentsSvgHtml}
            </g>

            <!-- Project Pins -->
            <g class="map-pins-layer" id="mapPinsLayer">
              ${dotsSvgHtml}
            </g>

          </svg>

          <!-- Floating Project Data Card (Positioned beside hovered dot) -->
          <div class="project-hover-card" id="projectHoverCard" aria-hidden="true">
            <!-- Dynamically populated -->
          </div>

          <!-- Bottom Navigation Bar (Region Focus Shortcuts) -->
          <div class="map-bottom-controls">
            
            <!-- Region Focus Shortcuts -->
            <div class="region-shortcuts-bar">
              <span class="region-bar-label">${ui.regionFocus[lang]}</span>
              <button class="region-shortcut-btn" data-region="world">${ui.regionWorld[lang]}</button>
              <button class="region-shortcut-btn active" data-region="europe">${ui.regionEurope ? ui.regionEurope[lang] : 'Europe'}</button>
              <button class="region-shortcut-btn" data-region="swiss">${ui.regionSwiss[lang]}</button>
              <button class="region-shortcut-btn" data-region="uk">${ui.regionUK[lang]}</button>
              <button class="region-shortcut-btn" data-region="poland">${ui.regionPoland ? ui.regionPoland[lang] : (ui.regionCEE ? ui.regionCEE[lang] : 'Poland')}</button>
            </div>

          </div>

          <!-- Interaction Hint -->
          <div class="map-interaction-hint">
            <span>Scroll to Zoom · Drag to Pan · Hover Dot for Details</span>
          </div>

        </div>

      </div>
    `;

    this.bindEvents(containerEl, lang);

    // Initial Cinematic Entrance: Start World -> Smooth Zoom to Europe
    if (!this.hasIntroAnimated) {
      this.hasIntroAnimated = true;
      this.viewBox = { x: 0, y: 10, w: 1000, h: 415 };
      this.updateViewBox(containerEl.querySelector('#worldMapSvg'), containerEl);

      setTimeout(() => {
        const svgEl = containerEl.querySelector('#worldMapSvg');
        if (svgEl) {
          this.focusRegion(svgEl, containerEl, 'europe', 1600);
        }
      }, 550);
    } else {
      this.updateViewBox(containerEl.querySelector('#worldMapSvg'), containerEl);
    }
  },

  renderHoverCardContent(project, lang) {
    const ui = siteData.ui;
    const statusText = siteData.statusTypes[project.type] ? siteData.statusTypes[project.type][lang] : project.type;
    const statusClass = `badge-${project.type}`;

    let studioLinkHtml = '';
    if (project.studioUrl && project.studioUrl.trim() !== '') {
      studioLinkHtml = `
        <a href="${project.studioUrl}" target="_blank" rel="noopener noreferrer" class="hover-studio-link" title="Open ${project.title[lang]} at ${project.studio}">
          <span class="link-label">${project.studio}</span>
          <span class="link-arrow">↗</span>
        </a>
      `;
    } else {
      studioLinkHtml = `<span class="hover-studio-name">${project.studio}</span>`;
    }

    let monographBtnHtml = '';
    if (project.hasInternalDetail && project.internalId) {
      monographBtnHtml = `
        <button class="hover-monograph-btn" data-category="${project.internalCategory || 'architecture'}" data-item-id="${project.internalId}">
          ${ui.viewProjectDetail[lang]}
        </button>
      `;
    }

    return `
      <div class="hover-card-inner">
        <div class="hover-card-top">
          <div class="hover-card-top-left">
            <span class="hover-status-tag ${statusClass}">${statusText}</span>
            <span class="hover-year">${project.year}</span>
          </div>
          <button class="hover-card-close-btn" aria-label="Close project info">✕</button>
        </div>
        
        <h2 class="hover-project-title">${project.title[lang]}</h2>
        
        <div class="hover-meta-row">
          <span class="meta-label">${ui.studioLabel[lang]}:</span>
          ${studioLinkHtml}
        </div>

        <div class="hover-meta-row">
          <span class="meta-label">${ui.locationLabel[lang]}:</span>
          <span class="meta-value">${project.location[lang]}</span>
        </div>

        ${project.scale ? `
          <div class="hover-meta-row">
            <span class="meta-label">Scale:</span>
            <span class="meta-value">${project.scale}</span>
          </div>
        ` : ''}

        ${monographBtnHtml}
      </div>
    `;
  },

  bindEvents(containerEl, lang) {
    const svgEl = containerEl.querySelector('#worldMapSvg');
    const canvasContainer = containerEl.querySelector('#mapCanvasContainer');
    const hoverCard = containerEl.querySelector('#projectHoverCard');

    // 1. Status Filter Pills
    containerEl.querySelectorAll('.map-filter-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        this.currentFilter = btn.dataset.filter;
        this.render(containerEl, lang);

        // Sync submenu active class under architecture
        document.querySelectorAll('[data-map-filter]').forEach(subBtn => {
          subBtn.classList.toggle('active', subBtn.dataset.mapFilter === this.currentFilter);
        });
      });
    });

    // 2. Studio Dropdown Filter
    const studioSelect = containerEl.querySelector('#mapStudioFilterSelect');
    if (studioSelect) {
      studioSelect.addEventListener('change', (e) => {
        this.currentStudio = e.target.value;
        this.render(containerEl, lang);
      });
    }

    // 3. Region Focus Shortcut Buttons
    containerEl.querySelectorAll('.region-shortcut-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const regionKey = btn.dataset.region;
        containerEl.querySelectorAll('.region-shortcut-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.focusRegion(svgEl, containerEl, regionKey, 1100);
      });
    });



    // 5. Strict Native Mouse Wheel Zooming (Framed to Inhabited World: Greenland -> South America)
    canvasContainer.addEventListener('wheel', (e) => {
      e.preventDefault();
      
      const rect = canvasContainer.getBoundingClientRect();
      const cursorX = e.clientX - rect.left;
      const cursorY = e.clientY - rect.top;

      const relX = Math.max(0, Math.min(1, cursorX / rect.width));
      const relY = Math.max(0, Math.min(1, cursorY / rect.height));

      const containerAspect = Math.max(0.5, rect.width / rect.height);
      
      // Inhabited world height span is 415 (y=10 to y=425)
      const maxH = 415;
      const maxW = Math.min(1000, maxH * containerAspect);

      const zoomFactor = e.deltaY < 0 ? 0.82 : 1.20;

      const newW = Math.max(0.4, Math.min(maxW, this.viewBox.w * zoomFactor));
      const newH = newW / containerAspect;

      // Adjust origin centered on cursor
      let newX = this.viewBox.x + (this.viewBox.w - newW) * relX;
      let newY = this.viewBox.y + (this.viewBox.h - newH) * relY;

      // Strict Clamping: Camera stays tightly inside inhabited globe range [0, 1000] in X, [8, 425] in Y
      this.viewBox.w = newW;
      this.viewBox.h = newH;
      this.viewBox.x = Math.max(0, Math.min(1000 - newW, newX));
      this.viewBox.y = Math.max(8, Math.min(425 - newH, newY));

      this.updateViewBox(svgEl, containerEl);
      this.updateHoverCardPosition(hoverCard, canvasContainer);
    }, { passive: false });

    // 6. Click and Drag Panning with Strict Inhabited World Bounding
    canvasContainer.addEventListener('mousedown', (e) => {
      if (e.target.closest('#projectHoverCard') || e.target.closest('button') || e.target.closest('select')) {
        return;
      }

      this.isDragging = true;
      canvasContainer.classList.add('is-panning');
      this.dragStart = { x: e.clientX, y: e.clientY };
      this.startViewBox = { x: this.viewBox.x, y: this.viewBox.y };
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;

      const rect = canvasContainer.getBoundingClientRect();
      const dx = e.clientX - this.dragStart.x;
      const dy = e.clientY - this.dragStart.y;

      const scaleX = this.viewBox.w / rect.width;
      const scaleY = this.viewBox.h / rect.height;

      const newX = this.startViewBox.x - dx * scaleX;
      const newY = this.startViewBox.y - dy * scaleY;

      // Strict Bounding: South America stays near bottom, Greenland near top
      this.viewBox.x = Math.max(0, Math.min(1000 - this.viewBox.w, newX));
      this.viewBox.y = Math.max(8, Math.min(425 - this.viewBox.h, newY));

      this.updateViewBox(svgEl, containerEl);
      this.updateHoverCardPosition(hoverCard, canvasContainer);
    });

    window.addEventListener('mouseup', () => {
      if (this.isDragging) {
        this.isDragging = false;
        canvasContainer.classList.remove('is-panning');
      }
    });

    // 7. Robust Project Pin Hover Card Handler
    const pinNodes = containerEl.querySelectorAll('.map-pin-node');
    pinNodes.forEach(pin => {
      const projId = pin.dataset.projectId;
      const project = (siteData.cvProjects || []).find(p => p.id === projId);
      if (!project) return;

      pin.addEventListener('mouseenter', () => {
        clearTimeout(this.tooltipTimeout);
        this.activeProjectId = projId;
        this.showHoverCard(hoverCard, canvasContainer, pin, project, lang);
      });

      pin.addEventListener('mouseleave', () => {
        this.tooltipTimeout = setTimeout(() => {
          if (!hoverCard.matches(':hover')) {
            this.hideHoverCard(hoverCard);
          }
        }, 200);
      });

      pin.addEventListener('click', (e) => {
        e.stopPropagation();
        this.activeProjectId = projId;
        this.showHoverCard(hoverCard, canvasContainer, pin, project, lang);
      });
    });

    hoverCard.addEventListener('mouseenter', () => {
      clearTimeout(this.tooltipTimeout);
    });

    hoverCard.addEventListener('mouseleave', () => {
      this.hideHoverCard(hoverCard);
    });

    hoverCard.addEventListener('click', (e) => {
      const closeBtn = e.target.closest('.hover-card-close-btn');
      if (closeBtn) {
        e.stopPropagation();
        this.hideHoverCard(hoverCard);
        return;
      }

      const monographBtn = e.target.closest('.hover-monograph-btn');
      if (monographBtn) {
        const cat = monographBtn.dataset.category || 'architecture';
        const itemId = monographBtn.dataset.itemId;
        if (itemId && typeof window.handleDirectItemNavigation === 'function') {
          window.handleDirectItemNavigation(cat, itemId);
        }
      }
    });

    // Dismiss info card if clicking on empty map canvas
    canvasContainer.addEventListener('click', (e) => {
      if (!e.target.closest('.map-pin-node') && !e.target.closest('#projectHoverCard') && !e.target.closest('button') && !e.target.closest('select')) {
        this.hideHoverCard(hoverCard);
      }
    });

    window.addEventListener('resize', () => {
      this.updateViewBox(svgEl, containerEl);
      this.updateHoverCardPosition(hoverCard, canvasContainer);
    });
  },

  /**
   * Focuses on a specific region, dynamically tailoring the target viewBox to match screen aspect ratio
   */
  focusRegion(svgEl, containerEl, regionKey, duration = 1100) {
    const canvasContainer = containerEl.querySelector('#mapCanvasContainer') || containerEl;
    const rect = canvasContainer.getBoundingClientRect();
    const containerAspect = Math.max(0.2, rect.width / rect.height);

    const reg = this.regionCenters[regionKey] || this.regionCenters.world;
    let targetW, targetH;

    if (regionKey === 'world') {
      targetH = reg.h;
      targetW = Math.min(1000, targetH * containerAspect);
    } else {
      // Ensure the region is fully visible across both portrait and landscape aspect ratios
      targetW = Math.max(reg.w || 25, (reg.h || 20) * containerAspect);
      targetH = targetW / containerAspect;
    }

    const targetX = Math.max(0, Math.min(1000 - targetW, reg.cx - targetW / 2));
    const targetY = Math.max(8, Math.min(425 - targetH, reg.cy - targetH / 2));

    this.animateViewBoxTo(svgEl, containerEl, { x: targetX, y: targetY, w: targetW, h: targetH }, duration);
  },

  /**
   * Updates viewBox and dynamically calculates exact constant physical screen radius for all project dots
   */
  updateViewBox(svgEl, containerEl) {
    if (!svgEl) return;
    svgEl.setAttribute('viewBox', `${this.viewBox.x.toFixed(4)} ${this.viewBox.y.toFixed(4)} ${this.viewBox.w.toFixed(4)} ${this.viewBox.h.toFixed(4)}`);

    const svgRect = svgEl.getBoundingClientRect();
    if (svgRect.width > 0 && svgRect.height > 0) {
      // In SVG with preserveAspectRatio="xMidYMid slice", the effective rendering scale
      // in screen pixels per 1 SVG coordinate unit is Math.max(scaleX, scaleY).
      const scaleX = svgRect.width / this.viewBox.w;
      const scaleY = svgRect.height / this.viewBox.h;
      const pixelsPerSvgUnit = Math.max(scaleX, scaleY);

      // Constant physical CSS pixel dimensions across ALL zoom levels & region presets:
      // Core dot: radius = 3.2px (diameter 6.4px)
      // Halo ring: radius = 6.0px (diameter 12px)
      // Hitbox: radius = 14px (diameter 28px)
      const rDotSvg = 3.2 / pixelsPerSvgUnit;
      const rHaloSvg = 6.0 / pixelsPerSvgUnit;
      const rHitboxSvg = 14.0 / pixelsPerSvgUnit;

      const dots = svgEl.querySelectorAll('.pin-dot');
      dots.forEach(d => d.setAttribute('r', rDotSvg.toFixed(5)));

      const halos = svgEl.querySelectorAll('.pin-halo-ring');
      halos.forEach(h => {
        h.setAttribute('r', rHaloSvg.toFixed(5));
      });

      const hitboxes = svgEl.querySelectorAll('.pin-hitbox');
      hitboxes.forEach(hb => hb.setAttribute('r', rHitboxSvg.toFixed(5)));
    }
  },

  stepZoom(svgEl, containerEl, factor) {
    const canvasContainer = containerEl.querySelector('#mapCanvasContainer') || containerEl;
    const rect = canvasContainer.getBoundingClientRect();
    const containerAspect = Math.max(0.5, rect.width / rect.height);
    
    const maxH = 415;
    const maxW = Math.min(1000, maxH * containerAspect);

    const newW = Math.max(0.4, Math.min(maxW, this.viewBox.w * factor));
    const newH = newW / containerAspect;

    const newX = Math.max(0, Math.min(1000 - newW, this.viewBox.x + (this.viewBox.w - newW) * 0.5));
    const newY = Math.max(8, Math.min(425 - newH, this.viewBox.y + (this.viewBox.h - newH) * 0.5));

    this.animateViewBoxTo(svgEl, containerEl, { x: newX, y: newY, w: newW, h: newH }, 400);
  },

  animateViewBoxTo(svgEl, containerEl, targetBox, duration = 1200) {
    if (!svgEl) return;
    if (this.animHandle) cancelAnimationFrame(this.animHandle);

    const startX = this.viewBox.x;
    const startY = this.viewBox.y;
    const startW = this.viewBox.w;
    const startH = this.viewBox.h;

    const diffX = targetBox.x - startX;
    const diffY = targetBox.y - startY;
    const diffW = targetBox.w - startW;
    const diffH = targetBox.h - startH;

    const startTime = performance.now();

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      
      const ease = 1 - Math.pow(1 - progress, 3);

      this.viewBox.x = startX + diffX * ease;
      this.viewBox.y = startY + diffY * ease;
      this.viewBox.w = startW + diffW * ease;
      this.viewBox.h = startH + diffH * ease;

      this.updateViewBox(svgEl, containerEl);

      if (progress < 1) {
        this.animHandle = requestAnimationFrame(step);
      } else {
        this.animHandle = null;
      }
    };

    this.animHandle = requestAnimationFrame(step);
  },

  showHoverCard(hoverCard, canvasContainer, pinEl, project, lang) {
    hoverCard.innerHTML = this.renderHoverCardContent(project, lang);
    hoverCard.dataset.activePin = project.id;
    this.currentPinEl = pinEl;

    this.positionHoverCard(hoverCard, canvasContainer, pinEl);
    hoverCard.classList.add('is-visible');
    hoverCard.setAttribute('aria-hidden', 'false');
  },

  hideHoverCard(hoverCard) {
    if (hoverCard) {
      hoverCard.classList.remove('is-visible');
      hoverCard.setAttribute('aria-hidden', 'true');
      this.activeProjectId = null;
      this.currentPinEl = null;
    }
  },

  positionHoverCard(hoverCard, canvasContainer, pinEl) {
    if (!pinEl || !canvasContainer) return;

    const pinRect = pinEl.getBoundingClientRect();
    const containerRect = canvasContainer.getBoundingClientRect();

    const pinCenterX = pinRect.left - containerRect.left + pinRect.width / 2;
    const pinCenterY = pinRect.top - containerRect.top + pinRect.height / 2;

    const cardRect = hoverCard.getBoundingClientRect();
    const isMobile = window.innerWidth < 992 || containerRect.width < 992;
    const cardWidth = cardRect.width > 0 ? cardRect.width : (isMobile ? 275 : 290);
    const cardHeight = cardRect.height > 0 ? cardRect.height : 170;

    const marginX = 10;
    const maxAvailableWidth = containerRect.width;

    // 1. Calculate X position
    // Prefer placing directly to the right of the dot
    let left = pinCenterX + 16;

    // If placing to the right overflows the screen edge, place to the left of the dot
    if (left + cardWidth > maxAvailableWidth - marginX) {
      left = pinCenterX - cardWidth - 16;
    }

    // If it now overflows the left edge, shift along X axis so it is guaranteed to fit fully on screen
    if (left < marginX) {
      left = marginX;
    }
    if (left + cardWidth > maxAvailableWidth - marginX) {
      left = Math.max(marginX, maxAvailableWidth - cardWidth - marginX);
    }

    // 2. Calculate Y position
    const minTop = isMobile ? 80 : 30;
    const maxTop = containerRect.height - cardHeight - (isMobile ? 55 : 30);

    let top = pinCenterY - 24;

    // On mobile mode: If X-shift causes the info box to horizontally span across the dot,
    // also shift along the Y-axis (above or below) so the dot is never covered!
    const dotMargin = 14;
    const isHorizontallyCoveringDot = (left <= pinCenterX + dotMargin) && (left + cardWidth >= pinCenterX - dotMargin);

    if (isMobile && isHorizontallyCoveringDot) {
      const placeBelowTop = pinCenterY + 16;
      const placeAboveTop = pinCenterY - cardHeight - 16;

      if (placeBelowTop <= maxTop) {
        top = placeBelowTop;
      } else if (placeAboveTop >= minTop) {
        top = placeAboveTop;
      } else {
        top = placeBelowTop <= containerRect.height - cardHeight - 20 ? placeBelowTop : placeAboveTop;
      }
    } else {
      if (top < minTop) {
        top = pinCenterY + 16; // place below pin if too close to top bar
      }
      if (top > maxTop) {
        top = pinCenterY - cardHeight - 16; // place above pin if too close to bottom bar
      }
    }

    // Strict clamping for Y axis
    top = Math.max(minTop, Math.min(maxTop, top));

    hoverCard.style.position = 'absolute';
    hoverCard.style.left = `${Math.round(left)}px`;
    hoverCard.style.top = `${Math.round(top)}px`;
  },

  updateHoverCardPosition(hoverCard, canvasContainer) {
    if (hoverCard && hoverCard.classList.contains('is-visible') && this.currentPinEl) {
      this.positionHoverCard(hoverCard, canvasContainer, this.currentPinEl);
    }
  }
};
