/**
 * Piotr Piotrowski Architecture & Spatial Design
 * Core Application Controller
 * - Invertible Color Theme (White / Black) with Local Persistence
 * - Multilingual Support (EN, DE, PL)
 * - PC Sequenced Entrance Animations
 * - Polestar-Inspired Mobile Navigation Drawer
 * - Dynamic Video <-> Project Stage Switcher
 * - Interactive Vector World Map & Geocoded Projects Engine
 * - J. Mayer H. Inspired Magazine Editorial Layouts (Landscape & Portrait Mix)
 * - Interactive B&W to Full-Color Scroll-Over / Hover Imagery
 * - Modern Frictionless Anti-Spam Inquiry Handling
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- State Initialization ---
  const state = {
    theme: localStorage.getItem('piotrowski_theme') || 'dark',
    lang: localStorage.getItem('piotrowski_lang') || 'en',
    activeCategory: null,
    activeItemId: null,
    isContentOpen: false,
    formOpenedAt: 0,
    isMobileMenuOpen: false
  };

  // --- DOM Elements ---
  const desktopNavList = document.getElementById('desktopNavList');
  const mobileNavList = document.getElementById('mobileNavList');
  const viewportStage = document.getElementById('viewportStage');
  const contentStage = document.getElementById('contentStage');
  const stageBody = document.getElementById('stageBody');
  const heroVideo = document.getElementById('heroVideo');
  const desktopBrandLogo = document.getElementById('desktopBrandLogo');
  const mobileBrandLogo = document.getElementById('mobileBrandLogo');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenuDrawer = document.getElementById('mobileMenuDrawer');
  const langButtons = document.querySelectorAll('.lang-btn');

  // ==========================================================================
  // 1. INITIALIZATION & ENTRANCE ANIMATIONS
  // ==========================================================================
  
  function init() {
    applyTheme(state.theme);
    renderNavigation();
    updateStaticTranslations();
    bindEvents();

    // Global navigation handler for inter-component linking
    window.handleDirectItemNavigation = (categoryKey, itemId) => {
      handleItemClick(categoryKey, itemId);
    };

    // Trigger Desktop Entrance Animation after brief DOM paint
    requestAnimationFrame(() => {
      setTimeout(() => {
        document.body.classList.remove('loading-state');
        document.body.classList.add('site-loaded');
      }, 50);
    });
  }

  // ==========================================================================
  // 2. THEME ENGINE (White / Black Color Inversion)
  // ==========================================================================

  function applyTheme(newTheme) {
    state.theme = newTheme === 'light' ? 'light' : 'dark';
    localStorage.setItem('piotrowski_theme', state.theme);
    document.body.classList.toggle('theme-light', state.theme === 'light');

    // Update switcher active labels across desktop and mobile
    document.querySelectorAll('.theme-label-white').forEach(el => {
      el.classList.toggle('active', state.theme === 'light');
    });
    document.querySelectorAll('.theme-label-black').forEach(el => {
      el.classList.toggle('active', state.theme === 'dark');
    });

    // Refresh World Map dimensions/colors if active
    if (state.activeCategory === 'architecture' && window.WorldMapController) {
      const svgEl = document.querySelector('#worldMapSvg');
      const containerEl = document.querySelector('.vector-world-map-fullscreen');
      if (svgEl && containerEl) {
        window.WorldMapController.updateViewBox(svgEl, containerEl);
      }
    }
  }

  function toggleTheme() {
    const nextTheme = state.theme === 'light' ? 'dark' : 'light';
    applyTheme(nextTheme);
  }

  // ==========================================================================
  // 3. MULTILINGUAL ENGINE
  // ==========================================================================

  function setLanguage(newLang) {
    if (!['en', 'de', 'pl'].includes(newLang)) return;
    state.lang = newLang;
    localStorage.setItem('piotrowski_lang', newLang);

    // Update active state on all language switcher buttons
    langButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === newLang);
    });

    // Re-render navigation with new translations
    renderNavigation();
    updateStaticTranslations();

    // Re-render current stage content if active
    if (state.isContentOpen) {
      if (state.activeCategory === 'architecture') {
        if (stageBody.classList.contains('has-fullscreen-map')) {
          renderWorldMapView();
        } else {
          renderArchitectureIntroView();
        }
      } else if (state.activeCategory === 'digitalisation') {
        renderDigitalisationView();
      } else if (state.activeCategory === 'research') {
        renderResearchView();
      } else if (state.activeItemId) {
        renderProjectDetail(state.activeCategory, state.activeItemId);
      } else if (state.activeCategory === 'about') {
        renderAboutView();
      } else if (state.activeCategory === 'enquire') {
        renderEnquireView();
      } else if (state.activeCategory) {
        renderCategoryOverview(state.activeCategory);
      }
    }
  }

  function updateStaticTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (siteData.ui[key] && siteData.ui[key][state.lang]) {
        el.textContent = siteData.ui[key][state.lang];
      }
    });
  }

  // ==========================================================================
  // 4. NAVIGATION RENDERING (Desktop & Mobile)
  // ==========================================================================

  function renderNavigation() {
    const navKeys = ['architecture', 'digitalisation', 'research', 'about', 'enquire'];

    // Desktop Nav HTML
    desktopNavList.innerHTML = navKeys.map((key, index) => {
      const categoryData = siteData.categories[key];
      const hasSubmenu = (categoryData && categoryData.items && categoryData.items.length > 0 && key !== 'digitalisation' && key !== 'research') || key === 'architecture';
      const isActive = state.activeCategory === key;
      const navLabel = siteData.nav[key] ? siteData.nav[key][state.lang] : key;

      let submenuHtml = '';
      
      // If it's Architecture (hosts the World Map Explorer & Status Filters)
      if (key === 'architecture') {
        const isMapActive = state.activeCategory === 'architecture';
        submenuHtml = `
          <ul class="nav-submenu" id="desktop-submenu-${key}">
            <li>
              <button class="submenu-btn ${isMapActive && (!window.WorldMapController || window.WorldMapController.currentFilter === 'all') ? 'active' : ''}" data-category="architecture" data-map-filter="all">
                ${siteData.ui.filterAll[state.lang]}
              </button>
            </li>
            <li>
              <button class="submenu-btn ${isMapActive && window.WorldMapController && window.WorldMapController.currentFilter === 'realisation' ? 'active' : ''}" data-category="architecture" data-map-filter="realisation">
                ${siteData.ui.filterRealisation[state.lang]}
              </button>
            </li>
            <li>
              <button class="submenu-btn ${isMapActive && window.WorldMapController && window.WorldMapController.currentFilter === 'in_progress' ? 'active' : ''}" data-category="architecture" data-map-filter="in_progress">
                ${siteData.ui.filterInProgress[state.lang]}
              </button>
            </li>
            <li>
              <button class="submenu-btn ${isMapActive && window.WorldMapController && window.WorldMapController.currentFilter === 'competition' ? 'active' : ''}" data-category="architecture" data-map-filter="competition">
                ${siteData.ui.filterCompetition[state.lang]}
              </button>
            </li>
          </ul>
        `;
      } else if (hasSubmenu) {
        const subItems = categoryData.items.map(item => {
          const isSubActive = state.activeItemId === item.id;
          return `
            <li>
              <button class="submenu-btn ${isSubActive ? 'active' : ''}" data-category="${key}" data-item-id="${item.id}">
                ${item.title[state.lang]}
              </button>
            </li>
          `;
        }).join('');

        submenuHtml = `
          <ul class="nav-submenu" id="desktop-submenu-${key}">
            <li>
              <button class="submenu-btn ${state.activeCategory === key && !state.activeItemId ? 'active' : ''}" data-category="${key}" data-overview="true">
                ${siteData.ui.allProjects[state.lang]}
              </button>
            </li>
            ${subItems}
          </ul>
        `;
      }

      return `
        <li class="nav-item ${isActive ? 'active' : ''}" style="--item-idx: ${index}" data-nav-key="${key}">
          <button class="nav-btn" data-category="${key}">
            <span>${navLabel}</span>
          </button>
          ${submenuHtml}
        </li>
      `;
    }).join('');

    // Mobile Nav HTML
    mobileNavList.innerHTML = navKeys.map(key => {
      const isActive = state.activeCategory === key;
      const navLabel = siteData.nav[key] ? siteData.nav[key][state.lang] : key;

      return `
        <div class="mobile-nav-item ${isActive ? 'active' : ''}" data-nav-key="${key}">
          <button class="mobile-nav-btn" data-category="${key}">
            <span>${navLabel}</span>
          </button>
        </div>
      `;
    }).join('');
  }

  // ==========================================================================
  // 5. STAGE CONTENT CONTROLLERS (Video <-> Content)
  // ==========================================================================

  function showVideoReel() {
    state.isContentOpen = false;
    state.activeCategory = null;
    state.activeItemId = null;

    viewportStage.classList.remove('content-active');
    contentStage.setAttribute('aria-hidden', 'true');
    renderNavigation();

    if (heroVideo.paused) {
      heroVideo.play().catch(() => {});
    }
  }

  function activateStage() {
    state.isContentOpen = true;
    viewportStage.classList.add('content-active');
    contentStage.setAttribute('aria-hidden', 'false');
    contentStage.scrollTop = 0;
    renderNavigation();
  }

  function handleCategoryClick(categoryKey) {
    if (state.activeCategory === categoryKey && state.isContentOpen && !state.activeItemId) {
      showVideoReel();
      return;
    }

    state.activeCategory = categoryKey;
    state.activeItemId = null;

    if (categoryKey === 'architecture') {
      renderArchitectureIntroView();
    } else if (categoryKey === 'digitalisation') {
      renderDigitalisationView();
    } else if (categoryKey === 'research') {
      renderResearchView();
    } else if (categoryKey === 'about') {
      renderAboutView();
    } else if (categoryKey === 'enquire') {
      renderEnquireView();
    } else if (siteData.categories[categoryKey]) {
      renderCategoryOverview(categoryKey);
    }
  }

  function handleItemClick(categoryKey, itemId) {
    state.activeCategory = categoryKey;
    state.activeItemId = itemId;
    renderProjectDetail(categoryKey, itemId);
  }

  // ==========================================================================
  // 6. VIEW TEMPLATES
  // ==========================================================================

  // --- 0. Architecture Intro Manifesto View ---
  function renderArchitectureIntroView() {
    stageBody.classList.remove('has-fullscreen-map');
    const intro = siteData.architectureIntro;

    stageBody.innerHTML = `
      <div class="architecture-intro-stage">
        <div class="architecture-statement-wrap">
          <p class="architecture-statement-p">${intro.p1[state.lang]}</p>
          <p class="architecture-statement-p">${intro.p2[state.lang]}</p>
        </div>
        <div class="architecture-projects-action">
          <button class="architecture-map-btn" id="openWorldMapBtn" aria-label="Open Interactive Project World Map">
            <span class="map-btn-text">${intro.projectsBtn[state.lang]}</span>
          </button>
        </div>
      </div>
    `;

    const openMapBtn = document.getElementById('openWorldMapBtn');
    if (openMapBtn) {
      openMapBtn.addEventListener('click', () => {
        renderWorldMapView('all');
      });
    }

    activateStage();
  }

  // --- 1. Interactive Vector World Map View ---
  function renderWorldMapView(initialFilter = 'all') {
    stageBody.classList.add('has-fullscreen-map');
    if (window.WorldMapController) {
      window.WorldMapController.currentFilter = initialFilter;
      window.WorldMapController.render(stageBody, state.lang);
    } else {
      stageBody.innerHTML = `<div style="padding: 40px; text-align: center;">Loading World Map Explorer...</div>`;
    }
    activateStage();
  }

  // --- 2. Digitalisation Live Coding Animation View ---
  let digitalisationTypingTimers = [];

  function renderDigitalisationView() {
    stageBody.classList.remove('has-fullscreen-map');

    // Clear any previous animation timers
    digitalisationTypingTimers.forEach(t => clearTimeout(t));
    digitalisationTypingTimers = [];

    const enquireBtnLabels = {
      en: 'enquire_',
      de: 'anfrage_',
      pl: 'skontaktuj sie_'
    };
    const currentEnquireLabel = enquireBtnLabels[state.lang] || 'enquire_';

    stageBody.innerHTML = `
      <div class="digitalisation-stage-wrapper">
        <div class="digitalisation-code-grid">
          
          <!-- Column 1: class Automation (Right-Aligned Against Central Axis) -->
          <div class="code-column code-column-left" id="codeCol1" aria-label="Automation Python class module">
            <pre class="code-pre"><code class="code-block" id="codeBlock1"></code><span class="typing-cursor" id="cursorCol1">▌</span></pre>
          </div>

          <!-- Column 2: class ProcessManagement & class Sustainability (Left-Aligned From Central Axis) -->
          <div class="code-column code-column-right" id="codeCol2" aria-label="Process Management and Sustainability Python classes module">
            <pre class="code-pre"><code class="code-block" id="codeBlock2"></code><span class="typing-cursor" id="cursorCol2">▌</span></pre>
          </div>

        </div>

        <!-- Bottom Centre Enquire Button with Flashing Cursor (Hidden until typing finishes) -->
        <div class="digitalisation-enquire-wrap" id="digitalisationEnquireWrap">
          <button class="digitalisation-enquire-btn" id="digitalisationEnquireBtn" aria-label="Navigate to enquire page">
            <span class="enquire-btn-text">${currentEnquireLabel}</span><span class="enquire-btn-cursor">▌</span>
          </button>
        </div>
      </div>
    `;

    const enquireBtn = document.getElementById('digitalisationEnquireBtn');
    if (enquireBtn) {
      enquireBtn.addEventListener('click', () => {
        handleCategoryClick('enquire');
      });
    }

    activateStage();
    startDigitalisationCodeAnimation();
  }

  function startDigitalisationCodeAnimation() {
    const codeDataByLang = {
      en: {
        col1: [
          'class Automation:',
          '    def planning():',
          '        reduce_manual_work()',
          '        automate_tasks()',
          '',
          '    def BIM():',
          '        coordinate_disciplines()',
          '        manage_model_data()',
          '        quality_control()',
          '',
          '    def artificial_intelligence():',
          '        check_regulatory_compliance()',
          '        evaluate_feasibility()'
        ],
        col2: [
          'class ProcessManagement:',
          '    def digital_workflows():',
          '        structure_processes()',
          '        connect_teams()',
          '        manage_information_flow()',
          '',
          'class Sustainability:',
          '    def circular_construction():',
          '        identify_reusable_components()',
          '        populate_material_banks()',
          '        connect_BIM_to_reuse()',
          '',
          '    def environmental_impact():',
          '        assess_embodied_carbon()',
          '        compare_options()'
        ]
      },
      de: {
        col1: [
          'class Automatisierung:',
          '    def planung():',
          '        manuellen_aufwand_reduzieren()',
          '        aufgaben_automatisieren()',
          '',
          '    def BIM():',
          '        fachdisziplinen_koordinieren()',
          '        modelldaten_verwalten()',
          '        qualitaetskontrolle()',
          '',
          '    def kuenstliche_intelligenz():',
          '        bauvorschriften_pruefen()',
          '        machbarkeit_bewerten()'
        ],
        col2: [
          'class Prozessmanagement:',
          '    def digitale_arbeitsablaeufe():',
          '        prozesse_strukturieren()',
          '        teams_verbinden()',
          '        informationsfluss_steuern()',
          '',
          'class Nachhaltigkeit:',
          '    def zirkulaeres_bauen():',
          '        wiederverwendbare_bauteile_identifizieren()',
          '        materialbanken_befuellen()',
          '        BIM_mit_wiederverwendung_verknuepfen()',
          '',
          '    def umweltauswirkungen():',
          '        graue_energie_bewerten()',
          '        varianten_vergleichen()'
        ]
      },
      pl: {
        col1: [
          'class Automatyzacja:',
          '    def projektowanie():',
          '        redukuj_prace_manualna()',
          '        automatyzuj_zadania()',
          '',
          '    def BIM():',
          '        koordynuj_branze()',
          '        zarzadzaj_danymi_modelu()',
          '        kontrola_jakosci()',
          '',
          '    def sztuczna_inteligencja():',
          '        weryfikuj_zgodnosc_z_przepisami()',
          '        oceniaj_wykonalnosc()'
        ],
        col2: [
          'class ZarzadzanieProcesem:',
          '    def cyfrowe_procesy():',
          '        strukturyzuj_procesy()',
          '        lacz_zespoly()',
          '        zarzadzaj_przeplywem_informacji()',
          '',
          'class ZrownowazonyRozwoj:',
          '    def budownictwo_cyrkularne():',
          '        identyfikuj_elementy_do_ponownego_uzycia()',
          '        zasilaj_banki_materialowe()',
          '        lacz_BIM_z_recyklingiem()',
          '',
          '    def wplyw_srodowiskowy():',
          '        szacuj_slad_weglowy()',
          '        porownuj_warianty()'
        ]
      }
    };

    const currentLangData = codeDataByLang[state.lang] || codeDataByLang.en;
    const col1Lines = currentLangData.col1;
    const col2Lines = currentLangData.col2;

    function formatPartialLine(fullLine, partial) {
      if (!partial) return '&nbsp;';
      const leadCount = partial.length - partial.trimStart().length;
      const indentHtml = '&nbsp;'.repeat(leadCount);
      const trimmed = partial.trimStart();

      if (fullLine.trimStart().startsWith('class ')) {
        if (trimmed.length <= 5) {
          return `${indentHtml}<span class="code-kw">${trimmed}</span>`;
        } else {
          let rest = trimmed.substring(6);
          let colon = '';
          if (rest.endsWith(':')) {
            rest = rest.slice(0, -1);
            colon = ':';
          }
          return `${indentHtml}<span class="code-kw">class</span> <b class="code-class-name">${rest}</b>${colon}`;
        }
      } else if (fullLine.trimStart().startsWith('def ')) {
        if (trimmed.length <= 3) {
          return `${indentHtml}<span class="code-kw">${trimmed}</span>`;
        } else {
          const rest = trimmed.substring(4);
          if (rest.includes('(')) {
            const parts = rest.split('(');
            const funcName = parts[0];
            const afterParen = '(' + parts.slice(1).join('(');
            return `${indentHtml}<span class="code-kw">def</span> <i class="code-func-name">${funcName}</i>${afterParen}`;
          } else {
            return `${indentHtml}<span class="code-kw">def</span> <i class="code-func-name">${rest}</i>`;
          }
        }
      } else {
        if (trimmed.includes('(')) {
          const parts = trimmed.split('(');
          const callName = parts[0];
          const afterParen = '(' + parts.slice(1).join('(');
          return `${indentHtml}<span class="code-call">${callName}</span>${afterParen}`;
        } else {
          return `${indentHtml}<span class="code-call">${trimmed}</span>`;
        }
      }
    }

    function typeWriter(blockEl, cursorEl, lines, onComplete) {
      let lineIdx = 0;
      let charIdx = 0;
      let currentLineEl = null;

      function step() {
        if (lineIdx >= lines.length) {
          if (cursorEl) {
            cursorEl.style.display = 'none';
          }
          if (onComplete) onComplete();
          return;
        }

        const fullLine = lines[lineIdx];

        if (fullLine === '') {
          const emptyEl = document.createElement('div');
          emptyEl.className = 'code-line empty-line';
          emptyEl.innerHTML = '&nbsp;';
          blockEl.appendChild(emptyEl);
          lineIdx++;
          charIdx = 0;
          currentLineEl = null;
          const timer = setTimeout(step, 50);
          digitalisationTypingTimers.push(timer);
          return;
        }

        if (!currentLineEl) {
          currentLineEl = document.createElement('div');
          currentLineEl.className = 'code-line';
          blockEl.appendChild(currentLineEl);
        }

        charIdx++;
        const partial = fullLine.substring(0, charIdx);
        currentLineEl.innerHTML = formatPartialLine(fullLine, partial);

        if (charIdx >= fullLine.length) {
          lineIdx++;
          charIdx = 0;
          currentLineEl = null;
          const linePause = fullLine.startsWith('class ') ? 80 : 40;
          const timer = setTimeout(step, linePause);
          digitalisationTypingTimers.push(timer);
        } else {
          const speed = Math.floor(13 + Math.random() * 9);
          const timer = setTimeout(step, speed);
          digitalisationTypingTimers.push(timer);
        }
      }

      step();
    }

    let completedColumns = 0;
    function checkAllComplete() {
      completedColumns++;
      if (completedColumns >= 2) {
        const enquireWrap = document.getElementById('digitalisationEnquireWrap');
        if (enquireWrap) {
          enquireWrap.classList.add('visible');
        }
      }
    }

    const block1 = document.getElementById('codeBlock1');
    const cursor1 = document.getElementById('cursorCol1');
    const block2 = document.getElementById('codeBlock2');
    const cursor2 = document.getElementById('cursorCol2');

    if (block1 && cursor1) {
      typeWriter(block1, cursor1, col1Lines, checkAllComplete);
    }

    if (block2 && cursor2) {
      const startTimer = setTimeout(() => {
        typeWriter(block2, cursor2, col2Lines, checkAllComplete);
      }, 160);
      digitalisationTypingTimers.push(startTimer);
    }
  }


  // --- 2.5. Research & Publications Alternating View ---
  function renderResearchView() {
    stageBody.classList.remove('has-fullscreen-map');
    const research = siteData.researchPage;
    if (!research) {
      console.error("researchPage data not found in siteData");
      return;
    }

    const entriesHtml = (research.items || []).map((item, idx) => {
      const isReversed = idx % 2 === 1;
      return `
        <article class="research-entry-card ${isReversed ? 'is-reversed' : ''}">
          
          <!-- Media Side -->
          <div class="research-entry-media">
            <div class="research-media-frame">
              <img src="${item.image}" alt="${item.title[state.lang]}" loading="lazy" class="research-media-img">
              <span class="research-media-badge">${item.date[state.lang]}</span>
            </div>
          </div>

          <!-- Content Side -->
          <div class="research-entry-content">
            <div class="research-meta-tags">
              <span class="research-type-tag">${item.typeTag[state.lang]}</span>
              <span class="research-date-tag">${item.date[state.lang]}</span>
            </div>

            <h2 class="research-entry-title">${item.title[state.lang]}</h2>
            <div class="research-entry-venue">${item.venue[state.lang]}</div>

            <p class="research-entry-desc">${item.description[state.lang]}</p>

            <div class="research-entry-actions">
              <a href="${item.linkUrl}" target="_blank" rel="noopener noreferrer" class="research-link-btn">
                <span>${item.linkText[state.lang]}</span>
              </a>
            </div>
          </div>

        </article>
      `;
    }).join('');

    stageBody.innerHTML = `
      <div class="research-page-wrapper">
        
        <!-- Header Block -->
        <div class="research-header-block">
          <div class="research-header-text">
            <h1 class="research-title">${research.title[state.lang]}</h1>
            <p class="research-subtitle">${research.subtitle[state.lang]}</p>
          </div>
          <div class="research-orcid-action">
            <a href="${research.orcidUrl}" target="_blank" rel="noopener noreferrer" class="orcid-badge-btn" title="View ORCID Record">
              <svg class="orcid-icon" viewBox="0 0 256 256" width="16" height="16" fill="currentColor">
                <path d="M128,0A128,128,0,1,0,256,128,128,128,0,0,0,128,0ZM86.35,186.29H66.6V78.89h19.75Zm-9.87-120a11.45,11.45,0,1,1,11.45-11.45A11.46,11.46,0,0,1,76.48,66.29Zm120.73,73.66c0,29.83-19.16,46.34-47.53,46.34H110.1V78.89h41.44C179.36,78.89,197.21,97.74,197.21,139.95Zm-19.92,0c0-23.2-10.74-33.72-27.91-33.72H130.64v67.45h18.74C166.55,173.67,177.29,163.15,177.29,139.95Z"/>
              </svg>
              <span>${research.orcidLabel[state.lang]}</span>
              <span class="orcid-arrow">↗</span>
            </a>
          </div>
        </div>

        <!-- Alternating Entries -->
        <div class="research-entries-list">
          ${entriesHtml}
        </div>

      </div>
    `;

    activateStage();
  }

  // --- 3. Category Overview ---
  function renderCategoryOverview(categoryKey) {
    stageBody.classList.remove('has-fullscreen-map');
    const category = siteData.categories[categoryKey];
    if (!category) return;

    const cardsHtml = category.items.map(item => `
      <div class="project-card" data-category="${categoryKey}" data-item-id="${item.id}" role="button" tabindex="0" aria-label="${item.title[state.lang]}">
        <div class="card-img-wrap">
          <img src="${item.image}" alt="${item.title[state.lang]}" loading="lazy">
        </div>
        <div class="card-meta">${item.year} · ${item.location[state.lang]}</div>
        <h3 class="card-title">${item.title[state.lang]}</h3>
      </div>
    `).join('');

    stageBody.innerHTML = `
      <div class="category-overview">
        <header class="category-header">
          <h1 class="category-title">${category.title[state.lang]}</h1>
          <p class="category-subtitle">${category.subtitle[state.lang]}</p>
        </header>
        <div class="projects-card-grid">
          ${cardsHtml}
        </div>
      </div>
    `;

    activateStage();
  }

  // --- 3. Single Project Showcase (Supports J. Mayer H. Editorial Magazine Layout) ---
  function renderProjectDetail(categoryKey, itemId) {
    stageBody.classList.remove('has-fullscreen-map');
    const category = siteData.categories[categoryKey];
    if (!category) return;
    const item = category.items.find(i => i.id === itemId);
    if (!item) return;

    // A. If Project has an Editorial Magazine Layout (e.g. Residence Le Taguy)
    if (item.isEditorialLayout) {
      let sectionsHtml = '';

      if (item.editorialSections && item.editorialSections.length > 0) {
        sectionsHtml = item.editorialSections.map(sec => {
          if (sec.type === 'hero_spread') {
            return `
              <section class="editorial-hero-spread">
                <div class="editorial-img-box landscape-box">
                  <img src="${sec.image}" alt="${item.title[state.lang]}" loading="lazy">
                </div>
                ${sec.caption ? `<p class="media-caption">${sec.caption[state.lang]}</p>` : ''}
              </section>
            `;
          }

          if (sec.type === 'asymmetric_split') {
            const isAlignRight = sec.align === 'right_text';
            return `
              <section class="editorial-asymmetric-row ${isAlignRight ? 'align-right-text' : ''}">
                <div class="editorial-text-col">
                  ${sec.title ? `<h2 class="editorial-subheading">${sec.title[state.lang]}</h2>` : ''}
                  <p class="editorial-paragraph">${sec.text[state.lang]}</p>
                  ${sec.quote ? `
                    <div class="editorial-quote-card">
                      <p>${sec.quote[state.lang]}</p>
                    </div>
                  ` : ''}
                </div>
                <div class="editorial-media-col">
                  <div class="editorial-img-box portrait-box">
                    <img src="${sec.image}" alt="${sec.title ? sec.title[state.lang] : ''}" loading="lazy">
                  </div>
                  ${sec.imageCaption ? `<p class="media-caption">${sec.imageCaption[state.lang]}</p>` : ''}
                </div>
              </section>
            `;
          }

          if (sec.type === 'mixed_format_row') {
            return `
              <section class="editorial-mixed-format-row">
                <div class="editorial-mixed-left">
                  <div class="editorial-img-box landscape-box">
                    <img src="${sec.imageLeft}" alt="" loading="lazy">
                  </div>
                  ${sec.captionLeft ? `<p class="media-caption">${sec.captionLeft[state.lang]}</p>` : ''}
                </div>
                <div class="editorial-mixed-right">
                  <div class="editorial-img-box portrait-box">
                    <img src="${sec.imageRight}" alt="" loading="lazy">
                  </div>
                  ${sec.captionRight ? `<p class="media-caption">${sec.captionRight[state.lang]}</p>` : ''}
                </div>
              </section>
            `;
          }

          if (sec.type === 'duo_portraits') {
            return `
              <section class="editorial-duo-portraits">
                <div class="editorial-duo-item">
                  <div class="editorial-img-box portrait-box">
                    <img src="${sec.imageLeft}" alt="" loading="lazy">
                  </div>
                  ${sec.captionLeft ? `<p class="media-caption">${sec.captionLeft[state.lang]}</p>` : ''}
                </div>
                <div class="editorial-duo-item">
                  <div class="editorial-img-box portrait-box">
                    <img src="${sec.imageRight}" alt="" loading="lazy">
                  </div>
                  ${sec.captionRight ? `<p class="media-caption">${sec.captionRight[state.lang]}</p>` : ''}
                </div>
              </section>
            `;
          }

          return '';
        }).join('');
      }

      let creditsHtml = '';
      if (item.credits && item.credits.length > 0) {
        const creditBlocks = item.credits.map(c => `
          <div class="credit-block">
            <span class="credit-label">${c.label[state.lang]}</span>
            <span class="credit-val">${c.value}</span>
          </div>
        `).join('');

        creditsHtml = `
          <section class="editorial-credits-section">
            <h3 class="credits-title">${siteData.ui.keyFacts[state.lang]}</h3>
            <div class="credits-grid">
              ${creditBlocks}
            </div>
          </section>
        `;
      }

      let nextProjectHtml = '';
      if (item.nextProjectId) {
        const nextCatKey = item.nextProjectCategory || categoryKey;
        const nextCat = siteData.categories[nextCatKey];
        const nextItem = nextCat ? nextCat.items.find(i => i.id === item.nextProjectId) : null;
        if (nextItem) {
          nextProjectHtml = `
            <div class="editorial-next-banner" data-category="${nextCatKey}" data-item-id="${nextItem.id}" role="button" tabindex="0">
              <div>
                <span class="next-label">${siteData.ui.nextProject[state.lang]}</span>
                <h4 class="next-project-title">${nextItem.title[state.lang]}</h4>
              </div>
              <span class="next-arrow">→</span>
            </div>
          `;
        }
      }

      stageBody.innerHTML = `
        <article class="editorial-project-page">
          <header class="editorial-header">
            <div class="editorial-eyebrow">${category.title[state.lang]} · ${item.year}</div>
            <h1 class="editorial-title">${item.title[state.lang]}</h1>
            <div class="editorial-master-rule"></div>
          </header>

          <div class="editorial-facts-ribbon">
            <div class="fact-item">
              <span class="fact-label">${siteData.ui.yearLabel[state.lang]}</span>
              <span class="fact-value">${item.year}</span>
            </div>
            <div class="fact-item">
              <span class="fact-label">${siteData.ui.locationLabel[state.lang]}</span>
              <span class="fact-value">${item.location[state.lang]}</span>
            </div>
            <div class="fact-item">
              <span class="fact-label">${siteData.ui.typologyLabel[state.lang]}</span>
              <span class="fact-value">${item.typology[state.lang]}</span>
            </div>
            <div class="fact-item">
              <span class="fact-label">${siteData.ui.clientLabel[state.lang]}</span>
              <span class="fact-value">${item.client[state.lang]}</span>
            </div>
          </div>

          <div class="editorial-intro-container">
            <p class="editorial-lead-text">${item.leadIntro ? item.leadIntro[state.lang] : item.description[state.lang]}</p>
          </div>

          ${sectionsHtml}
          ${creditsHtml}
          ${nextProjectHtml}
        </article>
      `;

      activateStage();
      return;
    }

    // B. Standard Showcase Layout
    stageBody.innerHTML = `
      <article class="project-showcase">
        <header class="project-header">
          <div class="project-category-tag">${category.title[state.lang]}</div>
          <h1 class="project-title">${item.title[state.lang]}</h1>
        </header>

        <div class="project-media-container">
          <img src="${item.image}" alt="${item.title[state.lang]}" class="project-image">
        </div>

        <div class="project-details-grid">
          <div class="project-description">
            <p>${item.description[state.lang]}</p>
          </div>

          <div class="project-metadata">
            <div class="meta-row">
              <span class="meta-label">${siteData.ui.yearLabel[state.lang]}</span>
              <span class="meta-value">${item.year}</span>
            </div>
            <div class="meta-row">
              <span class="meta-label">${siteData.ui.locationLabel[state.lang]}</span>
              <span class="meta-value">${item.location[state.lang]}</span>
            </div>
            <div class="meta-row">
              <span class="meta-label">${siteData.ui.typologyLabel[state.lang]}</span>
              <span class="meta-value">${item.typology[state.lang]}</span>
            </div>
            <div class="meta-row">
              <span class="meta-label">${siteData.ui.clientLabel[state.lang]}</span>
              <span class="meta-value">${item.client[state.lang]}</span>
            </div>
            <div class="meta-row">
              <span class="meta-label">${siteData.ui.scopeLabel[state.lang]}</span>
              <span class="meta-value">${item.scope[state.lang]}</span>
            </div>
          </div>
        </div>
      </article>
    `;

    activateStage();
  }

  // --- 4. About Piotr Piotrowski ---
  function renderAboutView() {
    stageBody.classList.remove('has-fullscreen-map');
    const about = siteData.about;
    const paragraphsHtml = about.paragraphs.map(p => `
      <p class="about-paragraph">${p[state.lang]}</p>
    `).join('');

    const disciplinesHtml = about.disciplines.map((d, index) => `
      <div class="discipline-card">
        <div class="discipline-number">0${index + 1} //</div>
        <h3 class="discipline-title">${d.title[state.lang]}</h3>
        <p class="discipline-desc">${d.desc[state.lang]}</p>
      </div>
    `).join('');

    stageBody.innerHTML = `
      <div class="about-view">
        <header class="about-header">
          <h1 class="about-title">${about.title[state.lang]}</h1>
          <p class="about-role">${about.role[state.lang]}</p>
        </header>

        <div class="about-narrative">
          ${paragraphsHtml}
        </div>

        <div class="disciplines-grid">
          ${disciplinesHtml}
        </div>
      </div>
    `;

    activateStage();
  }

  // --- 5. Studio Enquiry Contact Form ---
  function renderEnquireView() {
    stageBody.classList.remove('has-fullscreen-map');
    const enquire = siteData.enquire;
    state.formOpenedAt = Date.now();

    const serviceOptionsHtml = enquire.services.map(s => `
      <option value="${s.id}">${s.label[state.lang]}</option>
    `).join('');

    stageBody.innerHTML = `
      <div class="enquire-view">
        <header class="enquire-header">
          <h1 class="enquire-title">${enquire.title[state.lang]}</h1>
          <p class="enquire-subtitle">${enquire.subtitle[state.lang]}</p>
        </header>

        <form class="enquire-form" id="studioEnquireForm" novalidate>
          
          <div class="hp-input-wrap" aria-hidden="true">
            <label for="studio_sec_fax">Do not fill this</label>
            <input type="text" id="studio_sec_fax" name="studio_sec_fax" tabindex="-1" autocomplete="off">
          </div>

          <div class="form-group">
            <label class="form-label" for="clientName">${enquire.labels.name[state.lang]} *</label>
            <input type="text" class="form-input" id="clientName" name="clientName" required placeholder="...">
          </div>

          <div class="form-group">
            <label class="form-label" for="clientEmail">${enquire.labels.email[state.lang]} *</label>
            <input type="email" class="form-input" id="clientEmail" name="clientEmail" required placeholder="name@domain.com">
          </div>

          <div class="form-group">
            <label class="form-label" for="serviceType">${enquire.labels.service[state.lang]}</label>
            <select class="form-select" id="serviceType" name="serviceType">
              ${serviceOptionsHtml}
            </select>
          </div>

          <div class="form-group">
            <label class="form-label" for="projectLocation">${enquire.labels.location[state.lang]}</label>
            <input type="text" class="form-input" id="projectLocation" name="projectLocation" placeholder="e.g. Zurich / Q3 2026">
          </div>

          <div class="form-group">
            <label class="form-label" for="projectMessage">${enquire.labels.message[state.lang]} *</label>
            <textarea class="form-textarea" id="projectMessage" name="projectMessage" required placeholder="..."></textarea>
          </div>

          <div class="form-feedback" id="formFeedback" role="alert"></div>

          <div class="form-footer">
            <button type="submit" class="submit-btn" id="submitBtn">
              ${siteData.ui.sendMessage[state.lang]}
            </button>
            <div class="direct-contact">
              ${enquire.labels.studioEmail[state.lang]}
            </div>
          </div>

        </form>
      </div>
    `;

    activateStage();
    bindEnquireFormHandler();
  }

  function bindEnquireFormHandler() {
    const form = document.getElementById('studioEnquireForm');
    const feedback = document.getElementById('formFeedback');
    const submitBtn = document.getElementById('submitBtn');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const honeypot = document.getElementById('studio_sec_fax');
      if (honeypot && honeypot.value.trim() !== '') {
        console.warn('Spam bot honeypot triggered.');
        return;
      }

      const elapsedMs = Date.now() - state.formOpenedAt;
      if (elapsedMs < 1500) {
        console.warn('Spam bot speed threshold triggered.');
        return;
      }

      const name = document.getElementById('clientName').value.trim();
      const email = document.getElementById('clientEmail').value.trim();
      const message = document.getElementById('projectMessage').value.trim();

      if (!name || !email || !message) {
        feedback.textContent = state.lang === 'de' 
          ? 'Bitte füllen Sie alle erforderlichen Felder aus.'
          : (state.lang === 'pl' ? 'Proszę wypełnić wszystkie wymagane pola.' : 'Please fill in all required fields.');
        feedback.classList.add('show');
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = siteData.ui.sending[state.lang];

      setTimeout(() => {
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = siteData.ui.sendMessage[state.lang];
        feedback.textContent = siteData.ui.sentSuccess[state.lang];
        feedback.classList.add('show');
      }, 750);
    });
  }

  // ==========================================================================
  // 7. EVENT DELEGATION & LISTENERS
  // ==========================================================================

  function bindEvents() {
    // White / Black Theme Switcher clicks
    document.addEventListener('click', (e) => {
      const themeChoice = e.target.closest('[data-theme-choice]');
      if (themeChoice && themeChoice.dataset.themeChoice) {
        e.preventDefault();
        applyTheme(themeChoice.dataset.themeChoice);
        return;
      }

      const themeToggle = e.target.closest('[data-theme-toggle]');
      if (themeToggle) {
        e.preventDefault();
        toggleTheme();
        return;
      }
    });

    // Language Switcher clicks
    document.addEventListener('click', (e) => {
      const langBtn = e.target.closest('.lang-btn');
      if (langBtn && langBtn.dataset.lang) {
        setLanguage(langBtn.dataset.lang);
      }
    });

    // Desktop Nav clicks
    desktopNavList.addEventListener('click', (e) => {
      const submenuBtn = e.target.closest('.submenu-btn');
      if (submenuBtn) {
        const category = submenuBtn.dataset.category;
        const itemId = submenuBtn.dataset.itemId;
        const isOverview = submenuBtn.dataset.overview === 'true';
        const mapFilter = submenuBtn.dataset.mapFilter;

        if (category === 'architecture' && mapFilter) {
          state.activeCategory = 'architecture';
          state.activeItemId = null;
          renderWorldMapView(mapFilter);
        } else if (isOverview) {
          state.activeCategory = category;
          state.activeItemId = null;
          renderCategoryOverview(category);
        } else if (itemId) {
          handleItemClick(category, itemId);
        }
        return;
      }

      const navBtn = e.target.closest('.nav-btn');
      if (navBtn) {
        const category = navBtn.dataset.category;
        handleCategoryClick(category);
      }
    });

    // Mobile Nav clicks
    mobileNavList.addEventListener('click', (e) => {
      const mobileSubBtn = e.target.closest('.mobile-submenu-btn');
      if (mobileSubBtn) {
        const category = mobileSubBtn.dataset.category;
        const itemId = mobileSubBtn.dataset.itemId;
        const isOverview = mobileSubBtn.dataset.overview === 'true';
        const mapFilter = mobileSubBtn.dataset.mapFilter;

        closeMobileMenu();

        if (category === 'architecture' && mapFilter) {
          state.activeCategory = 'architecture';
          state.activeItemId = null;
          renderWorldMapView(mapFilter);
        } else if (isOverview) {
          state.activeCategory = category;
          state.activeItemId = null;
          renderCategoryOverview(category);
        } else if (itemId) {
          handleItemClick(category, itemId);
        }
        return;
      }

      const mobileNavBtn = e.target.closest('.mobile-nav-btn');
      if (mobileNavBtn) {
        const category = mobileNavBtn.dataset.category;
        closeMobileMenu();
        handleCategoryClick(category);
      }
    });

    // Card clicks inside overview & Next Project banner clicks
    stageBody.addEventListener('click', (e) => {
      const card = e.target.closest('.project-card');
      if (card) {
        const category = card.dataset.category;
        const itemId = card.dataset.itemId;
        handleItemClick(category, itemId);
        return;
      }

      const nextBanner = e.target.closest('.editorial-next-banner');
      if (nextBanner) {
        const category = nextBanner.dataset.category;
        const itemId = nextBanner.dataset.itemId;
        handleItemClick(category, itemId);
        return;
      }
    });

    // Brand Logo clicks -> return to video reel
    desktopBrandLogo.addEventListener('click', (e) => {
      e.preventDefault();
      showVideoReel();
    });
    mobileBrandLogo.addEventListener('click', (e) => {
      e.preventDefault();
      closeMobileMenu();
      showVideoReel();
    });

    // Mobile Hamburger Toggle (Polestar Style)
    mobileMenuBtn.addEventListener('click', () => {
      if (state.isMobileMenuOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (state.isMobileMenuOpen) {
          closeMobileMenu();
        } else if (state.isContentOpen) {
          showVideoReel();
        }
      }
    });
  }

  function openMobileMenu() {
    state.isMobileMenuOpen = true;
    mobileMenuBtn.classList.add('active');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    mobileMenuDrawer.classList.add('open');
    mobileMenuDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    state.isMobileMenuOpen = false;
    mobileMenuBtn.classList.remove('active');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    mobileMenuDrawer.classList.remove('open');
    mobileMenuDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Run initialization
  init();
});
