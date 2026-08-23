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
    this.lang = lang;
    const filteredProjects = projects.filter(p => {
      const matchStatus = this.currentFilter === 'all' || p.type === this.currentFilter;
      const matchStudio = this.currentStudio === 'all' || p.studio === this.currentStudio;
      return matchStatus && matchStudio;
    });
    this.filteredProjects = filteredProjects;

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
              <span class="region-bar-label">${ui.filterStatus ? ui.filterStatus[lang] : 'Status:'}</span>
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

  renderHoverCardContent(target, lang, isFromCluster = false) {
    const ui = siteData.ui;

    // Multi-project Cluster Card
    if (target && target.count > 1) {
      const projectsList = target.projects || [];
      return `
        <div class="hover-card-inner hover-cluster-inner">
          <div class="hover-card-top">
            <div class="hover-card-top-left">
              <span class="hover-status-tag hover-cluster-tag">${target.count} ${lang === 'pl' ? 'Projekty' : (lang === 'de' ? 'Projekte' : 'Projects')}</span>
            </div>
            <button class="hover-card-close-btn" aria-label="Close project info">✕</button>
          </div>
          
          <div class="hover-cluster-zoom-tip">
            <span>${lang === 'pl' ? 'Wybierz projekt poniżej lub przybliż mapę' : (lang === 'de' ? 'Projekt auswählen oder heranzoomen' : 'Select a project below or zoom into map')}</span>
          </div>

          <div class="hover-cluster-items-list">
            ${projectsList.map(project => {
              const statusText = siteData.statusTypes[project.type] ? siteData.statusTypes[project.type][lang] : project.type;
              const statusClass = `badge-${project.type}`;
              return `
                <div class="hover-cluster-entry" data-project-id="${project.id}" role="button" tabindex="0" title="${project.title[lang]}">
                  <div class="hover-cluster-entry-header">
                    <span class="hover-cluster-entry-title">${project.title[lang]}</span>
                    <span class="hover-cluster-entry-arrow">›</span>
                  </div>
                  <div class="hover-cluster-entry-meta">
                    <span class="hover-status-tag ${statusClass}">${statusText}</span>
                    <span>${project.studio}</span> · <span>${project.year}</span>
                  </div>
                  ${project.scale ? `
                    <div class="hover-cluster-entry-scale">${project.scale}</div>
                  ` : ''}
                  ${project.awards ? `
                    <div class="hover-cluster-awards-preview">${project.awards}</div>
                  ` : ''}
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }

    // Single Project Card
    const project = target.project || target;
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

    const backLabel = lang === 'pl' ? 'Wróć' : (lang === 'de' ? 'Zurück' : 'Back');

    return `
      <div class="hover-card-inner">
        <div class="hover-card-top">
          <div class="hover-card-top-left">
            ${isFromCluster ? `
              <button class="hover-back-to-cluster-btn" aria-label="Back to combined projects list">
                <span class="back-arrow">←</span> <span>${backLabel}</span>
              </button>
            ` : ''}
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

        ${project.awards ? `
          <div class="hover-meta-row hover-awards-row">
            <span class="meta-label">Awards:</span>
            <span class="meta-value hover-awards-val">${project.awards}</span>
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

    // 6. Mouse Drag Panning
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

    // 7. Multi-Touch Gestures: Pinch-to-Zoom & Touch Panning
    let touchMode = 'none'; // 'none' | 'pan' | 'pinch'
    let touchStartPoints = [];
    let initialPinchDist = 0;
    let initialPinchMidpoint = { x: 0, y: 0 };
    let touchStartViewBox = { x: 0, y: 0, w: 1000, h: 415 };

    const getTouchDistance = (t1, t2) => {
      return Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
    };

    const getTouchMidpoint = (t1, t2) => {
      return {
        x: (t1.clientX + t2.clientX) * 0.5,
        y: (t1.clientY + t2.clientY) * 0.5
      };
    };

    canvasContainer.addEventListener('touchstart', (e) => {
      if (e.target.closest('#projectHoverCard') || e.target.closest('button') || e.target.closest('select')) {
        return;
      }

      if (e.touches.length === 1) {
        touchMode = 'pan';
        touchStartPoints = [{ x: e.touches[0].clientX, y: e.touches[0].clientY }];
        touchStartViewBox = { x: this.viewBox.x, y: this.viewBox.y, w: this.viewBox.w, h: this.viewBox.h };
      } else if (e.touches.length === 2) {
        e.preventDefault();
        touchMode = 'pinch';
        initialPinchDist = getTouchDistance(e.touches[0], e.touches[1]);
        initialPinchMidpoint = getTouchMidpoint(e.touches[0], e.touches[1]);
        touchStartViewBox = { x: this.viewBox.x, y: this.viewBox.y, w: this.viewBox.w, h: this.viewBox.h };
      }
    }, { passive: false });

    canvasContainer.addEventListener('touchmove', (e) => {
      if (touchMode === 'none') return;
      e.preventDefault(); // Prevent native browser viewport pinch-zoom & page scrolling

      const rect = canvasContainer.getBoundingClientRect();
      const containerAspect = Math.max(0.2, rect.width / rect.height);
      const maxH = 415;
      const maxW = Math.min(1000, maxH * containerAspect);

      if (touchMode === 'pan' && e.touches.length === 1) {
        const dx = e.touches[0].clientX - touchStartPoints[0].x;
        const dy = e.touches[0].clientY - touchStartPoints[0].y;

        const scaleX = this.viewBox.w / rect.width;
        const scaleY = this.viewBox.h / rect.height;

        const newX = touchStartViewBox.x - dx * scaleX;
        const newY = touchStartViewBox.y - dy * scaleY;

        this.viewBox.x = Math.max(0, Math.min(1000 - this.viewBox.w, newX));
        this.viewBox.y = Math.max(8, Math.min(425 - this.viewBox.h, newY));

        this.updateViewBox(svgEl, containerEl);
        this.updateHoverCardPosition(hoverCard, canvasContainer);
      } else if (touchMode === 'pinch' && e.touches.length === 2) {
        const currentDist = getTouchDistance(e.touches[0], e.touches[1]);
        if (initialPinchDist <= 0 || currentDist <= 0) return;

        const pinchRatio = initialPinchDist / currentDist;
        const currentMidpoint = getTouchMidpoint(e.touches[0], e.touches[1]);

        const newW = Math.max(0.4, Math.min(maxW, touchStartViewBox.w * pinchRatio));
        const newH = newW / containerAspect;

        // Focal point relative to canvas container
        const relX = Math.max(0, Math.min(1, (initialPinchMidpoint.x - rect.left) / rect.width));
        const relY = Math.max(0, Math.min(1, (initialPinchMidpoint.y - rect.top) / rect.height));

        // Translation offset from dragging the midpoint
        const midDx = currentMidpoint.x - initialPinchMidpoint.x;
        const midDy = currentMidpoint.y - initialPinchMidpoint.y;
        const scaleX = newW / rect.width;
        const scaleY = newH / rect.height;

        let newX = touchStartViewBox.x + (touchStartViewBox.w - newW) * relX - (midDx * scaleX);
        let newY = touchStartViewBox.y + (touchStartViewBox.h - newH) * relY - (midDy * scaleY);

        this.viewBox.w = newW;
        this.viewBox.h = newH;
        this.viewBox.x = Math.max(0, Math.min(1000 - newW, newX));
        this.viewBox.y = Math.max(8, Math.min(425 - newH, newY));

        this.updateViewBox(svgEl, containerEl);
        this.updateHoverCardPosition(hoverCard, canvasContainer);
      }
    }, { passive: false });

    const handleTouchEnd = (e) => {
      if (e.touches.length === 1) {
        touchMode = 'pan';
        touchStartPoints = [{ x: e.touches[0].clientX, y: e.touches[0].clientY }];
        touchStartViewBox = { x: this.viewBox.x, y: this.viewBox.y, w: this.viewBox.w, h: this.viewBox.h };
      } else if (e.touches.length === 0) {
        touchMode = 'none';
      }
    };

    canvasContainer.addEventListener('touchend', handleTouchEnd);
    canvasContainer.addEventListener('touchcancel', handleTouchEnd);

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

      const backBtn = e.target.closest('.hover-back-to-cluster-btn');
      if (backBtn) {
        e.stopPropagation();
        const clusterToRestore = this.currentCluster || this.lastActiveCluster;
        if (clusterToRestore) {
          this.showHoverCard(hoverCard, canvasContainer, this.currentPinEl, clusterToRestore, lang, false);
        }
        return;
      }

      const clusterEntry = e.target.closest('.hover-cluster-entry');
      if (clusterEntry && !e.target.closest('.hover-monograph-btn') && !e.target.closest('a')) {
        e.stopPropagation();
        const projId = clusterEntry.dataset.projectId;
        const project = (siteData.cvProjects || []).find(p => p.id === projId);
        if (project) {
          this.currentCluster = this.currentCluster || this.lastActiveCluster;
          this.showHoverCard(hoverCard, canvasContainer, this.currentPinEl, project, lang, true);
        }
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
  /**
   * Computes dynamic clusters based on physical screen distance between projects.
   * Merges dots when screen distance < thresholdPixels (default 20px).
   */
  getClusters(filteredProjects, svgRect) {
    if (!filteredProjects || filteredProjects.length === 0) return [];
    if (!svgRect || svgRect.width <= 0) {
      return filteredProjects.map(p => {
        const pt = this.projectPoint(p.lng, p.lat);
        return {
          id: p.id,
          x: pt.x,
          y: pt.y,
          count: 1,
          projects: [p],
          ids: [p.id]
        };
      });
    }

    const scaleX = svgRect.width / this.viewBox.w;
    const scaleY = svgRect.height / this.viewBox.h;

    // Physical screen distance threshold in pixels: dots within 18px merge
    const thresholdPixels = 18;

    const projected = filteredProjects.map(p => {
      const pt = this.projectPoint(p.lng, p.lat);
      const screenX = (pt.x - this.viewBox.x) * scaleX;
      const screenY = (pt.y - this.viewBox.y) * scaleY;
      return {
        project: p,
        svgX: pt.x,
        svgY: pt.y,
        screenX,
        screenY
      };
    });

    const clusters = [];
    projected.forEach(item => {
      let bestCluster = null;
      let minDistance = Infinity;

      for (const cl of clusters) {
        const dist = Math.hypot(cl.screenX - item.screenX, cl.screenY - item.screenY);
        if (dist < thresholdPixels && dist < minDistance) {
          minDistance = dist;
          bestCluster = cl;
        }
      }

      if (bestCluster) {
        bestCluster.projects.push(item.project);
        bestCluster.ids.push(item.project.id);
        bestCluster.count++;
        // Update center of cluster
        bestCluster.screenX = bestCluster.projects.reduce((acc, p) => {
          const pt = this.projectPoint(p.lng, p.lat);
          return acc + (pt.x - this.viewBox.x) * scaleX;
        }, 0) / bestCluster.count;
        bestCluster.screenY = bestCluster.projects.reduce((acc, p) => {
          const pt = this.projectPoint(p.lng, p.lat);
          return acc + (pt.y - this.viewBox.y) * scaleY;
        }, 0) / bestCluster.count;
        bestCluster.x = this.viewBox.x + (bestCluster.screenX / scaleX);
        bestCluster.y = this.viewBox.y + (bestCluster.screenY / scaleY);
      } else {
        clusters.push({
          id: item.project.id,
          x: item.svgX,
          y: item.svgY,
          screenX: item.screenX,
          screenY: item.screenY,
          count: 1,
          projects: [item.project],
          ids: [item.project.id]
        });
      }
    });

    return clusters;
  },

  /**
   * Updates viewBox and dynamically renders merged/clustered pins with count badges
   */
  updateViewBox(svgEl, containerEl) {
    if (!svgEl) return;
    svgEl.setAttribute('viewBox', `${this.viewBox.x.toFixed(4)} ${this.viewBox.y.toFixed(4)} ${this.viewBox.w.toFixed(4)} ${this.viewBox.h.toFixed(4)}`);

    const pinsLayer = svgEl.querySelector('#mapPinsLayer');
    const hoverCard = containerEl.querySelector('#projectHoverCard');
    const canvasContainer = containerEl.querySelector('#mapCanvasContainer') || containerEl;
    if (!pinsLayer) return;

    const svgRect = svgEl.getBoundingClientRect();
    if (svgRect.width <= 0 || svgRect.height <= 0) return;

    const scaleX = svgRect.width / this.viewBox.w;
    const scaleY = svgRect.height / this.viewBox.h;
    const pixelsPerSvgUnit = Math.max(scaleX, scaleY);

    const projects = this.filteredProjects || siteData.cvProjects || [];
    const clusters = this.getClusters(projects, svgRect);
    const lang = this.lang || 'en';

    pinsLayer.innerHTML = clusters.map(cl => {
      const isCluster = cl.count > 1;
      const isSelected = cl.ids.includes(this.activeProjectId);

      const rDotSvg = (isCluster ? 3.8 : 3.2) / pixelsPerSvgUnit;
      const rHaloSvg = (isCluster ? 7.5 : 6.0) / pixelsPerSvgUnit;
      const rHitboxSvg = (isCluster ? 18.0 : 14.0) / pixelsPerSvgUnit;

      const badgeOffsetX = 6.5 / pixelsPerSvgUnit;
      const badgeOffsetY = -6.5 / pixelsPerSvgUnit;
      const rBadgeBg = 5.2 / pixelsPerSvgUnit;
      const badgeFontSize = 7.5 / pixelsPerSvgUnit;

      return `
        <g class="map-pin-node ${isCluster ? 'map-pin-cluster' : ''} ${isSelected ? 'is-active' : ''}" 
           data-cluster-ids="${cl.ids.join(',')}"
           data-project-id="${cl.projects[0].id}"
           data-is-cluster="${isCluster ? 'true' : 'false'}"
           data-svg-x="${cl.x.toFixed(4)}"
           data-svg-y="${cl.y.toFixed(4)}"
           transform="translate(${cl.x.toFixed(4)}, ${cl.y.toFixed(4)})"
           tabindex="0"
           role="button">
          
          <!-- Hitbox -->
          <circle class="pin-hitbox" r="${rHitboxSvg.toFixed(5)}" />
          
          <!-- Outer Halo Ring -->
          <circle class="pin-halo-ring ${isCluster ? 'pin-cluster-halo' : ''}" r="${rHaloSvg.toFixed(5)}" />
          
          <!-- Core Solid Dot -->
          <circle class="pin-dot ${isCluster ? 'pin-cluster-dot' : ''}" r="${rDotSvg.toFixed(5)}" />

          <!-- Tiny Count Badge (Top-Right of Dot) -->
          ${isCluster ? `
            <g class="cluster-badge-group" transform="translate(${badgeOffsetX.toFixed(5)}, ${badgeOffsetY.toFixed(5)})">
              <circle class="cluster-badge-bg" r="${rBadgeBg.toFixed(5)}" />
              <text class="cluster-badge-text" font-size="${badgeFontSize.toFixed(5)}" text-anchor="middle" dominant-baseline="central">${cl.count}</text>
            </g>
          ` : ''}
        </g>
      `;
    }).join('');

    // Bind event listeners on pins
    const pinNodes = pinsLayer.querySelectorAll('.map-pin-node');
    pinNodes.forEach(pin => {
      const clusterIds = (pin.dataset.clusterIds || pin.dataset.projectId || '').split(',');
      const isCluster = pin.dataset.isCluster === 'true';
      const cluster = clusters.find(cl => cl.ids.join(',') === clusterIds.join(',')) || {
        projects: (siteData.cvProjects || []).filter(p => clusterIds.includes(p.id)),
        x: parseFloat(pin.dataset.svgX || 0),
        y: parseFloat(pin.dataset.svgY || 0),
        count: clusterIds.length
      };

      if (!cluster.projects || !cluster.projects.length) return;

      pin.addEventListener('mouseenter', () => {
        clearTimeout(this.tooltipTimeout);
        this.activeProjectId = cluster.projects[0].id;
        this.showHoverCard(hoverCard, canvasContainer, pin, isCluster ? cluster : cluster.projects[0], lang);
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
        if (isCluster) {
          // Smoothly zoom in centered on cluster to separate the dots
          const canvasRect = canvasContainer.getBoundingClientRect();
          const containerAspect = Math.max(0.2, canvasRect.width / canvasRect.height);
          const zoomTargetW = Math.max(0.4, this.viewBox.w * 0.45);
          const zoomTargetH = zoomTargetW / containerAspect;
          const targetX = Math.max(0, Math.min(1000 - zoomTargetW, cluster.x - zoomTargetW / 2));
          const targetY = Math.max(8, Math.min(425 - zoomTargetH, cluster.y - zoomTargetH / 2));

          this.animateViewBoxTo(svgEl, containerEl, { x: targetX, y: targetY, w: zoomTargetW, h: zoomTargetH }, 600);
        } else {
          this.activeProjectId = cluster.projects[0].id;
          this.showHoverCard(hoverCard, canvasContainer, pin, cluster.projects[0], lang);
        }
      });
    });
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

  showHoverCard(hoverCard, canvasContainer, pinEl, target, lang, isFromCluster = false) {
    if (target && target.count > 1) {
      this.currentCluster = target;
      this.lastActiveCluster = target;
    } else if (!isFromCluster) {
      this.currentCluster = null;
    }

    hoverCard.innerHTML = this.renderHoverCardContent(target, lang, isFromCluster);
    hoverCard.dataset.activePin = target.id || (target.projects && target.projects[0].id) || '';
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
