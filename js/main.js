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
  // ==========================================================================
  // 0. ASSET URL RESOLVER (Local Development vs. Cloudflare R2 Production CDN)
  // ==========================================================================
  const MEDIA_CDN_CONFIG = {
    // Configurable CDN domain for Cloudflare R2:
    r2PublicUrl: 'https://assets.piotr.owski.ch'
  };

  function getAssetUrl(path) {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('//') || path.startsWith('data:')) {
      return path;
    }

    const isLocal = window.location.hostname === 'localhost' ||
                    window.location.hostname === '127.0.0.1' ||
                    window.location.hostname === '' ||
                    window.location.protocol === 'file:';

    const cleanPath = path.replace(/^\.?\//, '');

    if (isLocal) {
      return window.location.protocol === 'file:' ? cleanPath : `/${cleanPath}`;
    }

    const cdnBase = (window.SITE_MEDIA_CDN || MEDIA_CDN_CONFIG.r2PublicUrl).replace(/\/$/, '');
    return `${cdnBase}/${cleanPath}`;
  }

  window.getAssetUrl = getAssetUrl;

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
  const prefersReducedMotion = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initHeroVideo() {
    if (!heroVideo) return;
    const isLocal = window.location.hostname === 'localhost' ||
                    window.location.hostname === '127.0.0.1' ||
                    window.location.hostname === '' ||
                    window.location.protocol === 'file:';

    const videoUrl = isLocal ? '/assets/videos/PPwebVideoIntro.mp4' : getAssetUrl('assets/videos/PPwebVideoIntro.mp4');

    if (!heroVideo.getAttribute('data-loaded')) {
      heroVideo.setAttribute('data-loaded', '1');
      heroVideo.removeAttribute('poster');
      const markVideoReady = () => heroVideo.classList.add('is-ready');
      heroVideo.addEventListener('loadeddata', markVideoReady, { once: true });
      heroVideo.addEventListener('canplay', markVideoReady, { once: true });
      heroVideo.src = videoUrl;
      const sourceEl = heroVideo.querySelector('source');
      if (sourceEl) {
        sourceEl.src = videoUrl;
      }
      heroVideo.muted = true;
      heroVideo.defaultMuted = true;
      heroVideo.setAttribute('muted', '');
      heroVideo.setAttribute('playsinline', '');
      heroVideo.setAttribute('webkit-playsinline', '');
      heroVideo.load();
      if (heroVideo.readyState >= 2) {
        markVideoReady();
      }
    }

    if (prefersReducedMotion()) {
      heroVideo.pause();
      return;
    }

    const playPromise = heroVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        heroVideo.muted = true;
        heroVideo.play().catch(() => {});
        const unlockPlay = () => {
          if (!prefersReducedMotion()) {
            heroVideo.play().catch(() => {});
          }
          document.removeEventListener('touchstart', unlockPlay);
          document.removeEventListener('click', unlockPlay);
        };
        document.addEventListener('touchstart', unlockPlay, { once: true, passive: true });
        document.addEventListener('click', unlockPlay, { once: true, passive: true });
      });
    }
  }

  function init() {
    applyTheme(state.theme);
    updateLanguageButtons(state.lang);
    document.documentElement.lang = state.lang;
    renderNavigation();
    updateStaticTranslations();
    renderHeroOverlay();
    bindEvents();
    initRouter();

    // Only load & play hero video automatically when landing on the home reel
    if (!state.isContentOpen) {
      initHeroVideo();
    }

    // Global navigation handler for inter-component linking
    window.handleDirectItemNavigation = (categoryKey, itemId) => {
      handleItemClick(categoryKey, itemId);
    };

    // Global auto-recovery for CDN images if path format differs (production R2 only)
    document.addEventListener('error', (e) => {
      const isLocalHost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      if (!isLocalHost && e.target && e.target.tagName === 'IMG') {
        const img = e.target;
        if (!img.dataset.retried) {
          img.dataset.retried = '1';
          if (img.src.includes('/assets/images/')) {
            img.src = img.src.replace('/assets/images/', '/images/');
          }
        }
      }
    }, true);

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
    document.documentElement.classList.toggle('theme-light', state.theme === 'light');
    document.body.classList.toggle('theme-light', state.theme === 'light');

    // Update switcher state across desktop and mobile
    document.querySelectorAll('.theme-label-white').forEach(el => {
      el.classList.toggle('active', state.theme === 'light');
    });
    document.querySelectorAll('.theme-label-black').forEach(el => {
      el.classList.toggle('active', state.theme === 'dark');
    });
    document.querySelectorAll('.theme-pill-switch, [data-theme-toggle]').forEach(btn => {
      btn.setAttribute('aria-checked', state.theme === 'dark' ? 'true' : 'false');
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

  function updateLanguageButtons(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  function setLanguage(newLang) {
    if (!['en', 'de', 'pl'].includes(newLang)) return;
    state.lang = newLang;
    localStorage.setItem('piotrowski_lang', newLang);
    document.documentElement.lang = newLang;

    // Update active state on all language switcher buttons across desktop & mobile
    updateLanguageButtons(newLang);

    // Re-render navigation with new translations
    renderNavigation();
    updateStaticTranslations();
    renderHeroOverlay();

    // Re-render current stage content if active
    if (state.isContentOpen) {
      if (state.activeItemId) {
        renderProjectDetail(state.activeCategory, state.activeItemId);
      } else if (state.activeCategory === 'architecture') {
        if (stageBody.classList.contains('has-fullscreen-map')) {
          renderWorldMapView();
        } else {
          renderArchitectureIntroView();
        }
      } else if (state.activeCategory === 'digitalisation') {
        renderDigitalisationView();
      } else if (state.activeCategory === 'research') {
        renderResearchView();
      } else if (state.activeCategory === 'about') {
        renderAboutView();
      } else if (state.activeCategory === 'enquire') {
        renderEnquireView();
      } else if (state.activeCategory) {
        renderCategoryOverview(state.activeCategory);
      }
    }
  }

  function renderHeroOverlay() {
    let overlayEl = document.getElementById('heroIntroCaption');
    const videoContainer = document.getElementById('videoContainer');
    if (!videoContainer) return;

    if (!overlayEl) {
      overlayEl = document.createElement('div');
      overlayEl.id = 'heroIntroCaption';
      overlayEl.className = 'hero-intro-caption';
      videoContainer.appendChild(overlayEl);
    }

    const copyByLang = {
      en: {
        name: 'Piotr Piotrowski, Dr. sc.',
        role: 'Architect, engineer and researcher | Aarau, Switzerland',
        desc: 'Independent advice on BIM, digital workflows and circular construction. Combining over 20 years of architectural practice with doctoral research and software development.',
        workLink: 'Selected Work →',
        researchLink: 'Research →',
        aboutLink: 'About →'
      },
      de: {
        name: 'Piotr Piotrowski, Dr. sc.',
        role: 'Architekt, Ingenieur und Forscher | Aarau, Schweiz',
        desc: 'Unabhängige Beratung zu BIM, digitalen Workflows und zirkulärem Bauen. Über 20 Jahre Architekturpraxis verbunden mit Doktoratsforschung und Softwareentwicklung.',
        workLink: 'Ausgewählte Projekte →',
        researchLink: 'Forschung →',
        aboutLink: 'Über →'
      },
      pl: {
        name: 'Piotr Piotrowski, dr inż. arch.',
        role: 'Architekt, inżynier i badacz | Aarau, Szwajcaria',
        desc: 'Niezależne doradztwo w zakresie BIM, procesów cyfrowych i budownictwa cyrkularnego. Ponad 20 lat praktyki architektonicznej połączone z badaniami doktorskimi i tworzeniem oprogramowania.',
        workLink: 'Wybrane projekty →',
        researchLink: 'Badania →',
        aboutLink: 'O mnie →'
      }
    };
    const c = copyByLang[state.lang] || copyByLang.en;

    overlayEl.innerHTML = `
      <div class="hero-caption-inner">
        <div class="hero-caption-text">
          <p class="hero-caption-name">${c.name}</p>
          <p class="hero-caption-role">${formatSplitSpanHtml(c.role, ' | ', ['about-role-text', 'about-role-sep', 'about-role-loc'])}</p>
          <p class="hero-caption-desc">${c.desc}</p>
        </div>
      </div>
    `;
    syncResponsiveLineBreaks();
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
  // 4. NAVIGATION RENDERING (Desktop & Mobile — Crawlable <a> Links)
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
        const isMapActive = state.activeCategory === 'architecture' && stageBody.classList.contains('has-fullscreen-map');
        submenuHtml = `
          <ul class="nav-submenu" id="desktop-submenu-${key}">
            <li>
              <a href="/architecture/map/" class="submenu-btn ${isMapActive && (!window.WorldMapController || window.WorldMapController.currentFilter === 'all') ? 'active' : ''}" data-category="architecture" data-map-filter="all">
                ${siteData.ui.filterAll[state.lang]}
              </a>
            </li>
            <li>
              <a href="/architecture/realisation/" class="submenu-btn ${isMapActive && window.WorldMapController && window.WorldMapController.currentFilter === 'realisation' ? 'active' : ''}" data-category="architecture" data-map-filter="realisation">
                ${siteData.ui.filterRealisation[state.lang]}
              </a>
            </li>
            <li>
              <a href="/architecture/in_progress/" class="submenu-btn ${isMapActive && window.WorldMapController && window.WorldMapController.currentFilter === 'in_progress' ? 'active' : ''}" data-category="architecture" data-map-filter="in_progress">
                ${siteData.ui.filterInProgress[state.lang]}
              </a>
            </li>
            <li>
              <a href="/architecture/competition/" class="submenu-btn ${isMapActive && window.WorldMapController && window.WorldMapController.currentFilter === 'competition' ? 'active' : ''}" data-category="architecture" data-map-filter="competition">
                ${siteData.ui.filterCompetition[state.lang]}
              </a>
            </li>
          </ul>
        `;
      } else if (hasSubmenu) {
        const subItems = categoryData.items.map(item => {
          const isSubActive = state.activeItemId === item.id;
          return `
            <li>
              <a href="/${key}/${item.id}/" class="submenu-btn ${isSubActive ? 'active' : ''}" data-category="${key}" data-item-id="${item.id}">
                ${item.title[state.lang]}
              </a>
            </li>
          `;
        }).join('');

        submenuHtml = `
          <ul class="nav-submenu" id="desktop-submenu-${key}">
            <li>
              <a href="/${key}/" class="submenu-btn ${state.activeCategory === key && !state.activeItemId ? 'active' : ''}" data-category="${key}" data-overview="true">
                ${siteData.ui.allProjects[state.lang]}
              </a>
            </li>
            ${subItems}
          </ul>
        `;
      }

      return `
        <li class="nav-item ${isActive ? 'active' : ''}" style="--item-idx: ${index}" data-nav-key="${key}">
          <a href="/${key}/" class="nav-btn" data-category="${key}">
            <span>${navLabel}</span>
          </a>
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
          <a href="/${key}/" class="mobile-nav-btn" data-category="${key}">
            <span>${navLabel}</span>
          </a>
        </div>
      `;
    }).join('');
  }

  // ==========================================================================
  // 5. STAGE CONTENT CONTROLLERS (Video <-> Content)
  // ==========================================================================

  // ==========================================================================
  // ROUTER, METADATA SYNC & DEEP-LINKING ENGINE
  // ==========================================================================

  const ROUTE_META = {
    home: {
      path: '/',
      title: 'Piotr Piotrowski PhD | Architect, Engineer and Researcher',
      desc: 'Architect, engineer and researcher combining over 20 years of practice with independent advice on BIM, digital tools and circular construction.'
    },
    architecture: {
      path: '/architecture/',
      title: 'Architecture | Piotr Piotrowski PhD',
      desc: 'Two decades of architectural practice, from individual homes to hospitals, towers and infrastructure. Selected projects and personal contributions.'
    },
    map: {
      path: '/map/',
      title: 'Project Map | Piotr Piotrowski PhD',
      desc: 'Explore my contributions to architectural projects across countries and practices, from housing and public buildings to transport infrastructure.'
    },
    map_competition: {
      path: '/architecture/competition/',
      title: 'Architecture Competitions | Piotr Piotrowski PhD',
      desc: 'Explore architectural competition entries by location.'
    },
    map_in_progress: {
      path: '/architecture/in_progress/',
      title: 'Projects in Progress | Piotr Piotrowski PhD',
      desc: 'Explore architectural projects currently in development.'
    },
    map_realisation: {
      path: '/architecture/realisation/',
      title: 'Built Projects | Piotr Piotrowski PhD',
      desc: 'Explore completed buildings and infrastructure projects by location.'
    },
    research: {
      path: '/research/',
      title: 'Circular Construction Research | Piotr Piotrowski PhD',
      desc: 'Research connecting BIM data with building component reuse. Doctoral findings, publications and tools developed through architectural practice.'
    },
    digitalisation: {
      path: '/digitalisation/',
      title: 'BIM and Digital Tools | Piotr Piotrowski PhD',
      desc: 'BIM advice and digital tools grounded in architectural practice. Turning project requirements into workflows, automation and usable building data.'
    },
    about: {
      path: '/about/',
      title: 'About Piotr Piotrowski PhD',
      desc: 'Architect and engineer with a PhD in digital material banks. Connecting international project experience, research and software development.'
    },
    enquire: {
      path: '/enquire/',
      title: 'Contact Piotr Piotrowski PhD',
      desc: 'Discuss your project with an architect, engineer and researcher offering independent advice on BIM, digitalisation and circular construction.'
    }
  };

  const ITEM_META_OVERRIDES = {
    'kantonsspital-baden': {
      title: 'Kantonsspital Baden | Piotr Piotrowski PhD',
      desc: 'Architectural Project Lead at Nickl and Partner, managing the architectural planning team and coordinating specialist consultants.'
    },
    'augusta-raurica': {
      title: 'Augusta Raurica | Piotr Piotrowski PhD',
      desc: 'A competition proposal using modular timber construction and external structural frames to create flexible archaeological workspaces.'
    },
    'gillian-kit-home': {
      title: 'Gillian Kit Home | Piotr Piotrowski PhD',
      desc: 'A compact 60 m² kit home with generous shared living space and minimal circulation.'
    },
    'house-in-lomnica': {
      title: 'House in Łomnica | Piotr Piotrowski PhD',
      desc: 'An airy, spacious passive house in the Karkonosze Mountains, combining energy efficiency with charred timber cladding.'
    },
    'kindergarten-wildenstein': {
      title: 'Kindergarten Wildenstein | Piotr Piotrowski PhD',
      desc: 'A kindergarten competition proposal linking flexible learning spaces through a central atrium and connecting to the existing school.'
    },
    'le-taguy-chamonix': {
      title: 'Residence Le Taguy | Piotr Piotrowski PhD',
      desc: 'Interior design for a 24 m² Alpine apartment, integrating sleeping areas and concealed storage within a compact plan.'
    },
    'mxv-rail-bridge': {
      title: 'Viaduc de la Baye de Clarens | Piotr Piotrowski PhD',
      desc: 'A railway bridge competition proposal developed with GMASP, addressing ground movement through a modular concrete structure.'
    },
    'ossolineum-museum': {
      title: 'Museum of the Lubomirski Princes | Piotr Piotrowski PhD',
      desc: 'A museum competition proposal in Wrocław with a green roof and perforated bronze façade recalling the collection’s origins in Lviv.'
    },
    'spylaw-park-house': {
      title: 'Spylaw Park | Piotr Piotrowski PhD',
      desc: 'A courtyard house concept in Edinburgh, bringing daylight and privacy to a tightly constrained site.'
    },
    'thun-crematorium': {
      title: 'Thun Crematorium | Piotr Piotrowski PhD',
      desc: 'A crematorium competition proposal arranged around internal gardens, with sheltered spaces for gathering and private reflection.'
    },
    'tvp-headquarters': {
      title: 'TVP Headquarters | Piotr Piotrowski PhD',
      desc: 'A commended competition design with FORUM Architekci, bringing television production and public space together within Warsaw’s TVP campus.'
    },
    'uallas-kit-home': {
      title: 'Uallas Kit Home | Piotr Piotrowski PhD',
      desc: 'A 170 m² kit home design exploring flexible family living and connections between indoor and outdoor spaces.'
    },
    'vst-bridge-warsaw': {
      title: 'Vistula Footbridge | Piotr Piotrowski PhD',
      desc: 'A competition proposal for a pedestrian and cycle bridge in Warsaw, preserving continuity along the riverside promenade.'
    },
    'zollhaus-zurich': {
      title: 'Zollhaus Zürich | Piotr Piotrowski PhD',
      desc: 'A competition proposal bringing housing, work, education and shared amenities together on a central Zürich site.'
    },
    'archivolta-lakhta-center': {
      title: 'Lakhta Center Geometry and Façade | Piotr Piotrowski PhD',
      desc: 'An article on the geometry of the Lakhta Center and the engineering of its double skin façade.'
    },
    'bim-material-banks': {
      title: 'Digital Material Banks | Piotr Piotrowski PhD',
      desc: 'From existing BIM models to component reuse. Doctoral research combining expert interviews, prototype development and real building data.'
    },
    'nature-reviews-architectural-beauty': {
      title: 'Architectural Beauty and Reuse | Piotr Piotrowski PhD',
      desc: 'A perspective published in Nature Reviews Earth and Environment on how architectural quality can extend building life and reduce waste.'
    },
    'phase0-transdisziplinaritaet': {
      title: 'BIM for Material Reuse | Piotr Piotrowski PhD',
      desc: 'Research with practitioners in Switzerland and Liechtenstein on the information and tools needed to make BIM useful for component reuse.'
    },
    'sri-conference-2024': {
      title: 'SRI Congress 2024 | Piotr Piotrowski PhD',
      desc: 'A conference presentation on digital workflows for material reuse in construction.'
    },
    'whitepaper-digital-epd': {
      title: 'Environmental Product Declarations and Building Assessment | Piotr Piotrowski PhD',
      desc: 'A white paper on how environmental product declarations and digital product passports can support building assessment.'
    }
  };

  function updateDocumentMetadata(metaKey, itemObj = null, customPath = null) {
    const fallback = ROUTE_META[metaKey] || ROUTE_META.home;
    let title = fallback.title;
    let desc = fallback.desc;
    let canonicalPath = customPath || fallback.path;

    if (itemObj) {
      const override = itemObj.id ? ITEM_META_OVERRIDES[itemObj.id] : null;
      if (override) {
        title = override.title;
        desc = override.desc;
      } else {
        const itemTitle = (itemObj.title && (itemObj.title[state.lang] || itemObj.title.en)) || '';
        const itemDesc = (itemObj.description && (itemObj.description[state.lang] || itemObj.description.en))
          || (itemObj.leadIntro && (itemObj.leadIntro[state.lang] || itemObj.leadIntro.en))
          || fallback.desc;
        if (itemTitle) {
          title = `${itemTitle} | Piotr Piotrowski PhD`;
        }
        desc = itemDesc.slice(0, 160);
      }
    }

    const fullCanonical = `https://piotr.owski.ch${canonicalPath}`;
    document.title = title;

    const setMeta = (selector, attr, val) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, val);
    };

    setMeta('meta[name="description"]', 'content', desc);
    setMeta('link[rel="canonical"]', 'href', fullCanonical);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', desc);
    setMeta('meta[property="og:url"]', 'content', fullCanonical);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', desc);
    setMeta('meta[name="twitter:url"]', 'content', fullCanonical);

    const upsertMeta = (attrName, attrValue, contentVal) => {
      const selector = `meta[${attrName}="${attrValue}"]`;
      let el = document.querySelector(selector);
      if (contentVal) {
        if (!el) {
          el = document.createElement('meta');
          el.setAttribute(attrName, attrValue);
          document.head.appendChild(el);
        }
        el.setAttribute('content', contentVal);
      } else if (el) {
        el.remove();
      }
    };

    const projectImageUrl = (itemObj && itemObj.image)
      ? (itemObj.image.startsWith('http') ? itemObj.image : `https://assets.piotr.owski.ch/${itemObj.image.replace(/^\/+/, '')}`)
      : '';
    upsertMeta('property', 'og:image', projectImageUrl);
    upsertMeta('name', 'twitter:image', projectImageUrl);
    setMeta('meta[name="twitter:card"]', 'content', projectImageUrl ? 'summary_large_image' : 'summary');
  }

  function updateUrlRoute(routeStr, push = true) {
    const cleanRoute = (routeStr || '').replace(/^[\/#]+/, '').trim();
    const targetPath = cleanRoute ? `/${cleanRoute}/` : '/';
    
    // Check if path or hash needs updating
    if (window.location.pathname !== targetPath || window.location.hash) {
      if (push && window.history && window.history.pushState) {
        window.history.pushState({ route: cleanRoute }, '', targetPath);
      } else if (window.history && window.history.replaceState) {
        window.history.replaceState({ route: cleanRoute }, '', targetPath);
      }
    }
  }

  function handleUrlRouting() {
    // Read both clean path and legacy hash anchors for 100% compatibility
    const pathSegment = window.location.pathname.replace(/^\/+|\/+$/g, '').trim();
    const hashSegment = window.location.hash.replace(/^[\/#]+/, '').trim();
    const raw = hashSegment || pathSegment;
    
    if (!raw || raw === 'home' || raw === 'video') {
      if (state.isContentOpen) {
        showVideoReel(false);
      }
      return;
    }

    const segments = raw.split('/').map(s => decodeURIComponent(s.trim())).filter(Boolean);
    const primary = segments[0]?.toLowerCase();
    const secondary = segments[1];

    if (primary === 'research') {
      state.activeCategory = 'research';
      state.activeItemId = null;
      renderResearchView();
      if (secondary) {
        scrollToResearchArticle(secondary);
      }
    } else if (primary === 'architecture') {
      state.activeCategory = 'architecture';
      if (secondary && ['map', 'all', 'realisation', 'in_progress', 'competition'].includes(secondary)) {
        state.activeItemId = null;
        renderWorldMapView(secondary === 'map' ? 'all' : secondary);
      } else if (secondary) {
        state.activeItemId = secondary;
        renderProjectDetail('architecture', secondary);
      } else {
        state.activeItemId = null;
        renderArchitectureIntroView();
      }
    } else if (primary === 'digitalisation') {
      if (secondary === 'bim-spital-baden-agnes') {
        state.activeCategory = 'architecture';
        state.activeItemId = 'kantonsspital-baden';
        updateUrlRoute('architecture/kantonsspital-baden', false);
        renderProjectDetail('architecture', 'kantonsspital-baden');
        return;
      }
      state.activeCategory = 'digitalisation';
      if (secondary) {
        state.activeItemId = secondary;
        renderProjectDetail('digitalisation', secondary);
      } else {
        state.activeItemId = null;
        renderDigitalisationView();
      }
    } else if (primary === 'map') {
      state.activeCategory = 'architecture';
      state.activeItemId = null;
      renderWorldMapView('all');
    } else if (primary === 'about' || primary === 'cv') {
      state.activeCategory = 'about';
      state.activeItemId = null;
      renderAboutView();
    } else if (primary === 'enquire' || primary === 'contact') {
      state.activeCategory = 'enquire';
      state.activeItemId = null;
      renderEnquireView();
    } else {
      // 1. Check if primary matches any research article ID directly
      const researchItem = siteData.researchPage?.items?.find(i => i.id === primary || (secondary && i.id === secondary));
      if (researchItem) {
        state.activeCategory = 'research';
        state.activeItemId = null;
        renderResearchView();
        scrollToResearchArticle(researchItem.id);
        return;
      }

      // 2. Check if primary matches an item inside categories
      let foundCategory = null;
      let foundItem = null;

      if (siteData.categories) {
        for (const [catKey, catData] of Object.entries(siteData.categories)) {
          if (catKey.toLowerCase() === primary) {
            foundCategory = catKey;
            if (secondary && catData.items) {
              foundItem = catData.items.find(it => it.id.toLowerCase() === secondary.toLowerCase());
            }
            break;
          }
          if (catData.items) {
            const match = catData.items.find(it => it.id.toLowerCase() === primary.toLowerCase());
            if (match) {
              foundCategory = catKey;
              foundItem = match;
              break;
            }
          }
        }
      }

      if (foundCategory) {
        state.activeCategory = foundCategory;
        if (foundItem) {
          state.activeItemId = foundItem.id;
          renderProjectDetail(foundCategory, foundItem.id);
        } else {
          state.activeItemId = null;
          renderCategoryOverview(foundCategory);
        }
      } else {
        showVideoReel(false);
      }
    }
  }

  function scrollToResearchArticle(articleId) {
    if (!articleId) return;

    const attemptScroll = (retries = 6) => {
      const targetEl = document.getElementById(articleId) || document.querySelector(`[data-research-id="${articleId}"]`);
      if (targetEl) {
        targetEl.classList.add('is-target-highlight');
        if (contentStage) {
          const topOffset = targetEl.offsetTop - 24;
          contentStage.scrollTo({
            top: Math.max(0, topOffset),
            behavior: 'smooth'
          });
        } else {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setTimeout(() => {
          targetEl.classList.remove('is-target-highlight');
        }, 3200);
      } else if (retries > 0) {
        setTimeout(() => attemptScroll(retries - 1), 100);
      }
    };

    setTimeout(() => attemptScroll(6), 120);
  }

  function initRouter() {
    window.addEventListener('popstate', () => {
      handleUrlRouting();
    });
    window.addEventListener('hashchange', () => {
      handleUrlRouting();
    });

    // Delegate copy-link clicks on research articles
    document.addEventListener('click', (e) => {
      const copyBtn = e.target.closest('.research-copy-link-btn');
      if (copyBtn) {
        e.preventDefault();
        e.stopPropagation();
        const route = copyBtn.dataset.copyRoute;
        const cleanRoute = (route || '').replace(/^[\/#]+/, '');
        const fullUrl = `${window.location.origin}/${cleanRoute}/`;
        
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(fullUrl).then(() => {
            const label = copyBtn.querySelector('.copy-label');
            const originalText = label ? label.textContent : '';
            if (label) {
              label.textContent = state.lang === 'de' ? 'Link kopiert!' : (state.lang === 'pl' ? 'Skopiowano link!' : 'Link copied!');
            }
            copyBtn.classList.add('copied');
            setTimeout(() => {
              if (label) label.textContent = originalText;
              copyBtn.classList.remove('copied');
            }, 2200);
          }).catch(() => {});
        }
        updateUrlRoute(cleanRoute, true);
      }
    });

    // Process route on initial load (clean path or hash)
    const pathSegment = window.location.pathname.replace(/^\/+|\/+$/g, '').trim();
    const hashSegment = window.location.hash.replace(/^[\/#]+/, '').trim();
    if (pathSegment || hashSegment) {
      handleUrlRouting();
    } else {
      updateDocumentMetadata('home');
    }
  }

  function showVideoReel(updateUrl = true) {
    state.isContentOpen = false;
    state.activeCategory = null;
    state.activeItemId = null;

    if (updateUrl) {
      updateUrlRoute('');
    }
    updateDocumentMetadata('home');

    viewportStage.classList.remove('content-active');
    contentStage.setAttribute('aria-hidden', 'true');
    renderNavigation();

    if (heroVideo && !prefersReducedMotion()) {
      if (!heroVideo.getAttribute('data-loaded')) {
        initHeroVideo();
      } else if (heroVideo.paused) {
        heroVideo.play().catch(() => {});
      }
    }
  }

  function activateStage() {
    state.isContentOpen = true;
    viewportStage.classList.add('content-active');
    contentStage.setAttribute('aria-hidden', 'false');
    contentStage.scrollTop = 0;
    renderNavigation();
  }

  function handleCategoryClick(categoryKey, updateUrl = true) {
    state.activeCategory = categoryKey;
    state.activeItemId = null;

    if (updateUrl) {
      updateUrlRoute(categoryKey);
    }

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
    } else if (siteData.categories && siteData.categories[categoryKey]) {
      renderCategoryOverview(categoryKey);
    }
  }

  function handleItemClick(categoryKey, itemId, updateUrl = true) {
    state.activeCategory = categoryKey;
    state.activeItemId = itemId;

    if (updateUrl) {
      updateUrlRoute(`${categoryKey}/${itemId}`);
    }

    renderProjectDetail(categoryKey, itemId);
  }

  // ==========================================================================
  // 6. VIEW TEMPLATES
  // ==========================================================================

  // --- 0. Architecture Intro Manifesto View ---
  function renderArchitectureIntroView() {
    stageBody.classList.remove('has-fullscreen-map');
    updateDocumentMetadata('architecture');
    const intro = siteData.architectureIntro;

    stageBody.innerHTML = `
      <div class="architecture-intro-stage">
        <div class="architecture-statement-wrap">
          <p class="architecture-statement-p">${intro.p1[state.lang]}</p>
          <p class="architecture-statement-p">${intro.p2[state.lang]}</p>
        </div>
        <div class="architecture-projects-action">
          <a href="/map/" class="architecture-map-btn" id="openWorldMapBtn" aria-label="Open Interactive Project World Map">
            <span class="map-btn-text">${intro.projectsBtn[state.lang]}</span>
          </a>
        </div>
      </div>
    `;

    const openMapBtn = document.getElementById('openWorldMapBtn');
    if (openMapBtn) {
      openMapBtn.addEventListener('click', (e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        updateUrlRoute('map');
        renderWorldMapView('all');
      });
    }

    activateStage();
  }

  // --- 1. Interactive Vector World Map View ---
  function renderWorldMapView(initialFilter = 'all') {
    stageBody.classList.add('has-fullscreen-map');
    const targetPath = initialFilter && initialFilter !== 'all' ? `/architecture/${initialFilter}/` : '/map/';
    const filterMetaKeys = {
      competition: 'map_competition',
      in_progress: 'map_in_progress',
      realisation: 'map_realisation'
    };
    const metaKey = filterMetaKeys[initialFilter] || 'map';
    updateDocumentMetadata(metaKey, null, targetPath);
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
    updateDocumentMetadata('digitalisation');

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
          <a href="/enquire/" class="digitalisation-enquire-btn" id="digitalisationEnquireBtn" aria-label="Navigate to enquire page">
            <span class="enquire-btn-text">${currentEnquireLabel}</span><span class="enquire-btn-cursor">▌</span>
          </a>
        </div>
      </div>
    `;

    const enquireBtn = document.getElementById('digitalisationEnquireBtn');
    if (enquireBtn) {
      enquireBtn.addEventListener('click', (e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
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

    if (prefersReducedMotion()) {
      const renderInstant = (blockEl, cursorEl, lines) => {
        if (!blockEl) return;
        blockEl.innerHTML = lines.map(line =>
          line === ''
            ? '<div class="code-line empty-line">&nbsp;</div>'
            : `<div class="code-line">${formatPartialLine(line, line)}</div>`
        ).join('');
        if (cursorEl) cursorEl.style.display = 'none';
      };
      renderInstant(block1, cursor1, col1Lines);
      renderInstant(block2, cursor2, col2Lines);
      const enquireWrap = document.getElementById('digitalisationEnquireWrap');
      if (enquireWrap) {
        enquireWrap.classList.add('visible');
      }
      return;
    }

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
    updateDocumentMetadata('research');
    const research = siteData.researchPage;
    if (!research) {
      console.error("researchPage data not found in siteData");
      return;
    }

    const entriesHtml = (research.items || []).map((item, idx) => {
      const isReversed = idx % 2 === 1;
      const imagesList = item.images && item.images.length > 0 ? item.images : (item.image ? [item.image] : []);
      const isMultiImage = imagesList.length > 1;

      // Extract 4-digit year for corner badge (e.g. 'Aug 2026' -> '2026')
      const yearOnly = (item.year || item.date[state.lang] || '').match(/\b(19|20)\d{2}\b/)?.[0] || item.date[state.lang];

      const creditHtml = item.imageCredit ? `
        <a href="${item.imageCredit.url}" target="_blank" rel="noopener noreferrer" class="research-media-credit" title="${item.imageCredit.text}">
          ${item.imageCredit.text}
        </a>
      ` : '';

      const mediaHtml = isMultiImage ? `
        <div class="research-media-frame research-media-multi" data-count="${imagesList.length}">
          <div class="research-multi-grid">
            ${imagesList.map((imgSrc, imgIdx) => `
              <div class="research-multi-item">
                <img src="${getAssetUrl(imgSrc)}" alt="${item.title[state.lang]} - ${imgIdx + 1}" loading="lazy" class="research-media-img">
                ${imgIdx === 0 ? `<span class="research-media-badge">${yearOnly}</span>` : ''}
                ${imgIdx === imagesList.length - 1 ? creditHtml : ''}
              </div>
            `).join('')}
          </div>
        </div>
      ` : `
        <div class="research-media-frame">
          <div class="research-image-wrap">
            <img src="${getAssetUrl(item.image)}" alt="${item.title[state.lang]}" loading="lazy" class="research-media-img">
            <span class="research-media-badge">${yearOnly}</span>
            ${creditHtml}
          </div>
        </div>
      `;

      return `
        <article id="${item.id}" data-research-id="${item.id}" class="research-entry-card ${isReversed ? 'is-reversed' : ''}">
          
          <!-- Media Side -->
          <div class="research-entry-media">
            ${mediaHtml}
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
              ${item.secondLinkUrl && item.secondLinkText ? `
                <a href="${item.secondLinkUrl}" target="_blank" rel="noopener noreferrer" class="research-link-btn">
                  <span>${item.secondLinkText[state.lang] || item.secondLinkText.en}</span>
                </a>
              ` : ''}
              <button type="button" class="research-copy-link-btn" data-copy-route="research/${item.id}" title="Copy direct link to this publication">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
                <span class="copy-label">${state.lang === 'de' ? 'Direktlink' : (state.lang === 'pl' ? 'Kopiuj link' : 'Copy link')}</span>
              </button>
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
    updateDocumentMetadata(categoryKey);
    const category = siteData.categories[categoryKey];
    if (!category) return;

    const cardsHtml = category.items.map(item => `
      <a href="/${categoryKey}/${item.id}/" class="project-card" data-category="${categoryKey}" data-item-id="${item.id}" aria-label="${item.title[state.lang]}">
        ${item.image ? `
          <div class="card-img-wrap">
            <img src="${getAssetUrl(item.image)}" alt="${item.title[state.lang]}" loading="lazy">
          </div>
        ` : ''}
        <div class="card-meta">${item.year} · ${item.location[state.lang]}</div>
        <h3 class="card-title">${item.title[state.lang]}</h3>
      </a>
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

    updateDocumentMetadata(categoryKey, item, `/${categoryKey}/${item.id}/`);

    // A. If Project has an Editorial Magazine Layout (e.g. Residence Le Taguy)
    if (item.isEditorialLayout) {
      let sectionsHtml = '';

      if (item.editorialSections && item.editorialSections.length > 0) {
        sectionsHtml = item.editorialSections.map(sec => {
          if (sec.type === 'hero_spread') {
            return `
              <section class="editorial-hero-spread">
                <div class="editorial-img-box landscape-box">
                  <img src="${getAssetUrl(sec.image)}" alt="${item.title[state.lang]}" loading="lazy">
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
                    <img src="${getAssetUrl(sec.image)}" alt="${sec.title ? sec.title[state.lang] : ''}" loading="lazy">
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
                    <img src="${getAssetUrl(sec.imageLeft)}" alt="" loading="lazy">
                  </div>
                  ${sec.captionLeft ? `<p class="media-caption">${sec.captionLeft[state.lang]}</p>` : ''}
                </div>
                <div class="editorial-mixed-right">
                  <div class="editorial-img-box portrait-box">
                    <img src="${getAssetUrl(sec.imageRight)}" alt="" loading="lazy">
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
                    <img src="${getAssetUrl(sec.imageLeft)}" alt="" loading="lazy">
                  </div>
                  ${sec.captionLeft ? `<p class="media-caption">${sec.captionLeft[state.lang]}</p>` : ''}
                </div>
                <div class="editorial-duo-item">
                  <div class="editorial-img-box portrait-box">
                    <img src="${getAssetUrl(sec.imageRight)}" alt="" loading="lazy">
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
            <a href="/${nextCatKey}/${nextItem.id}/" class="editorial-next-banner" data-category="${nextCatKey}" data-item-id="${nextItem.id}">
              <div>
                <span class="next-label">${siteData.ui.nextProject[state.lang]}</span>
                <h4 class="next-project-title">${nextItem.title[state.lang]}</h4>
              </div>
              <span class="next-arrow">→</span>
            </a>
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

        ${item.image ? `
          <div class="project-media-container">
            <img src="${getAssetUrl(item.image)}" alt="${item.title[state.lang]}" class="project-image">
          </div>
        ` : ''}

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
  function formatSplitSpanHtml(text, separator, partClasses) {
    const idx = text ? text.lastIndexOf(separator) : -1;
    if (idx === -1) return `<span class="${partClasses[0]}">${text || ''}</span>`;
    const first = text.slice(0, idx);
    const second = text.slice(idx + separator.length);
    return `<span class="${partClasses[0]}">${first}</span><span class="${partClasses[1]}" aria-hidden="true">${separator}</span><span class="${partClasses[2]}">${second}</span>`;
  }

  function syncResponsiveLineBreaks() {
    const pairs = [
      ['#aboutTitle', '.about-title-name', '.about-title-degree'],
      ['#aboutRole', '.about-role-text', '.about-role-loc'],
      ['.hero-caption-role', '.about-role-text', '.about-role-loc']
    ];
    pairs.forEach(([containerSel, firstSel, secondSel]) => {
      const container = document.querySelector(containerSel);
      if (!container) return;
      container.classList.remove('is-multiline');
      const firstEl = container.querySelector(firstSel);
      const secondEl = container.querySelector(secondSel);
      if (firstEl && secondEl && secondEl.offsetTop > firstEl.offsetTop + 2) {
        container.classList.add('is-multiline');
      }
    });
  }

  function renderAboutView() {
    stageBody.classList.remove('has-fullscreen-map');
    updateDocumentMetadata('about');
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

    const titleHtml = formatSplitSpanHtml(
      about.title[state.lang],
      ', ',
      ['about-title-name', 'about-title-comma', 'about-title-degree']
    );
    const roleHtml = formatSplitSpanHtml(
      about.role[state.lang],
      ' | ',
      ['about-role-text', 'about-role-sep', 'about-role-loc']
    );

    stageBody.innerHTML = `
      <div class="about-view">
        <header class="about-header">
          <div class="about-header-main">
            <h1 class="about-title" id="aboutTitle">${titleHtml}</h1>
            <p class="about-role" id="aboutRole">${roleHtml}</p>
          </div>
          ${about.linkedinUrl ? `
            <div class="about-linkedin-action">
              <a href="${about.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="orcid-badge-btn about-linkedin-btn" title="View LinkedIn Profile">
                <svg class="orcid-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>${about.linkedinLabel ? about.linkedinLabel[state.lang] : 'LinkedIn Profile'}</span>
                <span class="orcid-arrow">↗</span>
              </a>
            </div>
          ` : ''}
        </header>

        <div class="about-narrative">
          ${paragraphsHtml}
        </div>

        <div class="disciplines-grid">
          ${disciplinesHtml}
        </div>
      </div>
    `;

    syncResponsiveLineBreaks();
    activateStage();
  }

  // --- 5. Studio Enquiry Contact Form ---
  function renderEnquireView() {
    stageBody.classList.remove('has-fullscreen-map');
    updateDocumentMetadata('enquire');
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

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const honeypot = document.getElementById('studio_sec_fax');
      if (honeypot && honeypot.value.trim() !== '') {
        console.warn('Spam bot honeypot triggered.');
        return;
      }

      const elapsedMs = Date.now() - (state.formOpenedAt || Date.now());
      if (elapsedMs < 1200) {
        console.warn('Spam bot speed threshold triggered.');
        return;
      }

      const name = document.getElementById('clientName').value.trim();
      const email = document.getElementById('clientEmail').value.trim();
      const serviceType = document.getElementById('serviceType')?.value || 'architecture';
      const projectLocation = document.getElementById('projectLocation')?.value.trim() || '';
      const message = document.getElementById('projectMessage').value.trim();

      if (!name || !email || !message) {
        feedback.textContent = state.lang === 'de' 
          ? 'Bitte füllen Sie alle erforderlichen Felder aus.'
          : (state.lang === 'pl' ? 'Proszę wypełnić wszystkie wymagane pola.' : 'Please fill in all required fields.');
        feedback.className = 'form-feedback show is-error';
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = siteData.ui.sending[state.lang];
      feedback.className = 'form-feedback';
      feedback.textContent = '';

      try {
        const payload = {
          clientName: name,
          clientEmail: email,
          serviceType: serviceType,
          projectLocation: projectLocation,
          projectMessage: message,
          lang: state.lang,
          studio_sec_fax: honeypot ? honeypot.value : ''
        };

        const res = await fetch('/api/enquire', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const resData = await res.json().catch(() => null);

        if (res.ok && resData && resData.success === true) {
          form.reset();
          feedback.textContent = siteData.ui.sentSuccess[state.lang];
          feedback.className = 'form-feedback show is-success';
        } else {
          feedback.textContent = (resData && resData.error) || siteData.ui.sendError[state.lang];
          feedback.className = 'form-feedback show is-error';
        }
      } catch (err) {
        console.error('Error submitting enquiry form:', err);
        feedback.textContent = siteData.ui.sendError[state.lang];
        feedback.className = 'form-feedback show is-error';
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = siteData.ui.sendMessage[state.lang];
      }
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

    // Desktop Nav clicks (supports native middle/Cmd+click open in new tab)
    desktopNavList.addEventListener('click', (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

      const submenuBtn = e.target.closest('.submenu-btn');
      if (submenuBtn) {
        e.preventDefault();
        const category = submenuBtn.dataset.category;
        const itemId = submenuBtn.dataset.itemId;
        const isOverview = submenuBtn.dataset.overview === 'true';
        const mapFilter = submenuBtn.dataset.mapFilter;

        if (category === 'architecture' && mapFilter) {
          state.activeCategory = 'architecture';
          state.activeItemId = null;
          updateUrlRoute(mapFilter === 'all' ? 'architecture/map' : `architecture/${mapFilter}`);
          renderWorldMapView(mapFilter);
        } else if (isOverview) {
          state.activeCategory = category;
          state.activeItemId = null;
          updateUrlRoute(category);
          renderCategoryOverview(category);
        } else if (itemId) {
          handleItemClick(category, itemId);
        }
        return;
      }

      const navBtn = e.target.closest('.nav-btn');
      if (navBtn) {
        e.preventDefault();
        const category = navBtn.dataset.category;
        handleCategoryClick(category);
      }
    });

    // Mobile Nav clicks
    mobileNavList.addEventListener('click', (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

      const mobileSubBtn = e.target.closest('.mobile-submenu-btn');
      if (mobileSubBtn) {
        e.preventDefault();
        const category = mobileSubBtn.dataset.category;
        const itemId = mobileSubBtn.dataset.itemId;
        const isOverview = mobileSubBtn.dataset.overview === 'true';
        const mapFilter = mobileSubBtn.dataset.mapFilter;

        closeMobileMenu();

        if (category === 'architecture' && mapFilter) {
          state.activeCategory = 'architecture';
          state.activeItemId = null;
          updateUrlRoute(mapFilter === 'all' ? 'architecture/map' : `architecture/${mapFilter}`);
          renderWorldMapView(mapFilter);
        } else if (isOverview) {
          state.activeCategory = category;
          state.activeItemId = null;
          updateUrlRoute(category);
          renderCategoryOverview(category);
        } else if (itemId) {
          handleItemClick(category, itemId);
        }
        return;
      }

      const mobileNavBtn = e.target.closest('.mobile-nav-btn');
      if (mobileNavBtn) {
        e.preventDefault();
        const category = mobileNavBtn.dataset.category;
        closeMobileMenu();
        handleCategoryClick(category);
      }
    });

    // Card clicks inside overview & Next Project banner clicks
    stageBody.addEventListener('click', (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

      const card = e.target.closest('.project-card');
      if (card) {
        e.preventDefault();
        const category = card.dataset.category;
        const itemId = card.dataset.itemId;
        handleItemClick(category, itemId);
        return;
      }

      const nextBanner = e.target.closest('.editorial-next-banner');
      if (nextBanner) {
        e.preventDefault();
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

    // Responsive multi-line header alignment + font load re-check
    let resizeBreakTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeBreakTimer);
      resizeBreakTimer = setTimeout(syncResponsiveLineBreaks, 60);
    });
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(syncResponsiveLineBreaks).catch(() => {});
    }

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
