/**
 * Piotr Piotrowski Architecture & Spatial Design
 * Authentic Projects from CROPKA architects & Professional CV (Edinburgh | Zürich | St. Moritz | Bern | Baden | London)
 * Multilingual Data Store (EN, DE, PL) with Direct Studio Project URLs and Precise Geocodes
 */

const siteData = {
  // Navigation Labels
  nav: {
    architecture: {
      en: "architecture",
      de: "architektur",
      pl: "architektura"
    },
    digitalisation: {
      en: "digitalisation",
      de: "digitalisierung",
      pl: "digitalizacja"
    },
    research: {
      en: "research",
      de: "forschung",
      pl: "badania"
    },
    about: {
      en: "about",
      de: "über",
      pl: "o mnie"
    },
    enquire: {
      en: "enquire",
      de: "anfrage",
      pl: "kontakt"
    }
  },

  // UI Strings
  ui: {
    backToReel: {
      en: "← View Video Reel",
      de: "← Video-Reel anzeigen",
      pl: "← Pokaż wideo"
    },
    copyright: {
      en: "Copyright © Piotr Piotrowski 2026",
      de: "Copyright © Piotr Piotrowski 2026",
      pl: "Copyright © Piotr Piotrowski 2026"
    },
    locationLabel: {
      en: "Location",
      de: "Standort",
      pl: "Lokalizacja"
    },
    yearLabel: {
      en: "Type / Scale",
      de: "Typ / Maßstab",
      pl: "Typ / Skala"
    },
    typologyLabel: {
      en: "Typology",
      de: "Typologie",
      pl: "Typologia"
    },
    clientLabel: {
      en: "Team / Partners",
      de: "Team / Partner",
      pl: "Zespół / Partnerzy"
    },
    scopeLabel: {
      en: "Scope / Status",
      de: "Umfang / Status",
      pl: "Zakres / Status"
    },
    keyFacts: {
      en: "Key Facts & Registry",
      de: "Projektdaten & Spezifikation",
      pl: "Kluczowe dane i rejestr"
    },
    nextProject: {
      en: "Next Project",
      de: "Nächstes Projekt",
      pl: "Następny projekt"
    },
    sendMessage: {
      en: "Send Inquiry",
      de: "Anfrage senden",
      pl: "Wyślij zapytanie"
    },
    sending: {
      en: "Transmitting...",
      de: "Wird gesendet...",
      pl: "Wysyłanie..."
    },
    sentSuccess: {
      en: "Thank you. Your inquiry has been received. Studio Piotrowski will review and respond shortly.",
      de: "Vielen Dank. Ihre Anfrage ist eingegangen. Studio Piotrowski wird sich zeitnah bei Ihnen melden.",
      pl: "Dziękujemy. Twoje zapytanie zostało przesłane. Studio Piotrowski odpowie wkrótce."
    },
    allProjects: {
      en: "Overview",
      de: "Übersicht",
      pl: "Przegląd"
    },
    mapTitle: {
      en: "Global Projects & Career Footprint",
      de: "Globale Projekte & Werdegang",
      pl: "Globalne Projekty i Doświadczenie"
    },
    mapSubtitle: {
      en: "Interactive vector world map displaying built realisations, ongoing commissions, and international competition designs across Switzerland, the UK, Europe, and worldwide.",
      de: "Interaktive Vektor-Weltkarte mit realisierten Bauten, laufenden Grossprojekten und internationalen Wettbewerben in der Schweiz, Grossbritannien, Europa und weltweit.",
      pl: "Interaktywna mapa wektorowa prezentująca zrealizowane obiekty, trwające inwestycje oraz międzynarodowe projekty konkursowe w Szwajcarii, Wielkiej Brytanii, Europie i na świecie."
    },
    filterAll: {
      en: "All Projects",
      de: "Alle Projekte",
      pl: "Wszystkie projekty"
    },
    filterRealisation: {
      en: "Built",
      de: "Gebaut",
      pl: "Zbudowane"
    },
    filterInProgress: {
      en: "In Progress",
      de: "In Planung / Bau",
      pl: "W realizacji"
    },
    filterCompetition: {
      en: "Competition Concept",
      de: "Wettbewerbskonzept",
      pl: "Koncepcja konkursowa"
    },
    studioFilterLabel: {
      en: "Filter by Studio:",
      de: "Nach Büro filtern:",
      pl: "Filtruj wg pracowni:"
    },
    allStudios: {
      en: "All Studios / Collaborations",
      de: "Alle Büros / Partner",
      pl: "Wszystkie pracownie"
    },
    regionFocus: {
      en: "Region Focus:",
      de: "Regionsansicht:",
      pl: "Przybliż region:"
    },
    regionWorld: {
      en: "World",
      de: "Weltweit",
      pl: "Świat"
    },
    regionEurope: {
      en: "Europe",
      de: "Europa",
      pl: "Europa"
    },
    regionSwiss: {
      en: "Switzerland & Alps",
      de: "Schweiz & Alpen",
      pl: "Szwajcaria i Alpy"
    },
    regionUK: {
      en: "United Kingdom",
      de: "Grossbritannien",
      pl: "Wielka Brytania"
    },
    regionPoland: {
      en: "Poland",
      de: "Polen",
      pl: "Polska"
    },
    regionCEE: {
      en: "Poland",
      de: "Polen",
      pl: "Polska"
    },
    visitStudioWeb: {
      en: "Project Page on Studio Web",
      de: "Projektseite beim Büro öffnen",
      pl: "Strona projektu w pracowni"
    },
    viewProjectDetail: {
      en: "View Monograph Spread →",
      de: "Zur Projektdokumentation →",
      pl: "Zobacz prezentację projektu →"
    },
    studioLabel: {
      en: "Studio",
      de: "Büro",
      pl: "Pracownia"
    },
    statusLabel: {
      en: "Project Status",
      de: "Projektstatus",
      pl: "Status projektu"
    },
    projectsCount: {
      en: "projects mapped",
      de: "Projekte erfasst",
      pl: "projektów na mapie"
    }
  },

  // Architecture Manifesto Statement & Map Action
  architectureIntro: {
    p1: {
      en: "Piotr Piotrowski’s architectural work is driven by a search for clarity, character and lasting quality. Drawing inspiration from context, materiality and the logic of nature, he combines strong design ideas with a practical understanding of how buildings are made, used and evolve over time.",
      de: "Die architektonische Arbeit von Piotr Piotrowski ist geprägt von der Suche nach Klarheit, Charakter und dauerhafter Qualität. Inspiration findet er im Kontext, in der Materialität und in der Logik der Natur. Dabei verbindet er starke Entwurfsideen mit einem präzisen Verständnis dafür, wie Gebäude entstehen, genutzt werden und sich über die Zeit bewähren.",
      pl: "Piotr Piotrowski w swojej pracy architektonicznej poszukuje klarowności, charakteru i trwałej jakości. Inspirację czerpie z kontekstu, materiału i logiki natury, łącząc wyraziste idee projektowe z praktycznym rozumieniem tego, jak budynki powstają, funkcjonują i zmieniają się w czasie."
    },
    p2: {
      en: "His experience spans Scotland, Switzerland and Poland, with projects across the UK, France, Belgium, the US, Russia and Bahrain, developed in collaboration with leading architects, engineers and specialists.",
      de: "Seine berufliche Erfahrung umfasst Schottland, die Schweiz und Polen. Projekte führten ihn darüber hinaus nach Grossbritannien, Frankreich, Belgien, in die USA, nach Russland und Bahrain – stets in Zusammenarbeit mit erfahrenen Architekten, Ingenieuren und Fachplanern.",
      pl: "Doświadczenie zawodowe zdobywał w Szkocji, Szwajcarii i Polsce, pracując przy projektach w Wielkiej Brytanii, Francji, Belgii, USA, Rosji i Bahrajnie, we współpracy z uznanymi architektami, inżynierami i specjalistami branżowymi."
    },
    projectsBtn: {
      en: "projects >|",
      de: "projekte >|",
      pl: "projekty >|"
    }
  },

  
  // Research & Publications (ORCID 0009-0009-4058-5684 & Academic Activities)
  researchPage: {
    title: {
      en: "Research & Publications",
      de: "Forschung & Publikationen",
      pl: "Badania i Publikacje"
    },
    subtitle: {
      en: "Academic inquiries, peer-reviewed journal papers, doctoral research blueprints, and international conference contributions focusing on digital tools for material reuse and circular architecture.",
      de: "Wissenschaftliche Untersuchungen, Peer-Review-Journalbeiträge, Doktoratskonzepte und internationale Konferenzbeiträge zu digitalen Werkzeugen für Materialwiederverwendung und zirkuläre Architektur.",
      pl: "Prace naukowe, recenzowane publikacje w czasopismach, ramy badań doktorskich oraz wystąpienia konferencyjne skupione wokół cyfrowych narzędzi dla ponownego użycia materiałów i architektury cyrkularnej."
    },
    orcidLabel: {
      en: "ORCID: 0009-0009-4058-5684",
      de: "ORCID: 0009-0009-4058-5684",
      pl: "ORCID: 0009-0009-4058-5684"
    },
    orcidUrl: "https://orcid.org/0009-0009-4058-5684",
    items: [
      {
        id: "whitepaper-digital-epd",
        date: {
          en: "Mar 2026",
          de: "Mär 2026",
          pl: "Mar 2026"
        },
        typeTag: {
          en: "Industry Whitepaper · buildingSMART Switzerland",
          de: "Branchen-Whitepaper · buildingSMART Switzerland",
          pl: "Biała Księga Branżowa · buildingSMART Switzerland"
        },
        title: {
          en: "Environmental Product Declarations (EPD): Foundation for Integrated Building Assessment",
          de: "Umweltproduktdeklarationen (EPD): Grundlage für eine ganzheitliche Gebäudebeurteilung",
          pl: "Środowiskowe Deklaracje Produktowe (EPD): Podstawa Zintegrowanej Oceny Budynku"
        },
        venue: {
          en: "Bauen digital Schweiz / buildingSMART Switzerland & University of Liechtenstein",
          de: "Bauen digital Schweiz / buildingSMART Switzerland & Universität Liechtenstein",
          pl: "Bauen digital Schweiz / buildingSMART Switzerland & Uniwersytet w Liechtensteinie"
        },
        description: {
          en: "Co-authored industry whitepaper establishing the machine-readable integration of Environmental Product Declarations (EPDs) into BIM workflows and linking them to upcoming EU Digital Product Passports (DPP) for automated lifecycle sustainability assessment.",
          de: "Mitverfasstes Branchen-Whitepaper über die maschinenlesbare Integration von Umweltproduktdeklarationen (EPD) in BIM-Prozesse und deren Verknüpfung mit dem EU-Produktpass (DPP) zur automatisierten Nachhaltigkeitsbeurteilung über den gesamten Lebenszyklus.",
          pl: "Współautorstwo branżowej białej księgi definiującej maszynowo czytelną integrację Deklaracji Środowiskowych (EPD) z procedurami BIM oraz powiązanie z Cyfrowym Paszportem Produktu (DPP) dla zautomatyzowanej oceny cyklu życia budynków."
        },
        linkText: {
          en: "Read University Announcement ↗",
          de: "Universitätsmitteilung lesen ↗",
          pl: "Przeczytaj komunikat uniwersytecki ↗"
        },
        linkUrl: "https://www.uni.li/en/news/2026/03/new-whitepaper-digital-environmental-product-declarations-published",
        image: "assets/images/research_whitepaper_epd.png"
      },
      {
        id: "bim-material-banks",
        date: {
          en: "2026",
          de: "2026",
          pl: "2026"
        },
        typeTag: {
          en: "Doctoral Research Blueprint",
          de: "Doktorats-Forschungsrahmen",
          pl: "Ramy Badań Doktorskich"
        },
        title: {
          en: "BIM-assisted digital material banks: A design-science research blueprint for low-threshold BIM workflows enabling reuse at scale",
          de: "BIM-assisted digital material banks: A design-science research blueprint for low-threshold BIM workflows enabling reuse at scale",
          pl: "BIM-assisted digital material banks: A design-science research blueprint for low-threshold BIM workflows enabling reuse at scale"
        },
        venue: {
          en: "Doctoral Research · University of Liechtenstein",
          de: "Doktoratsforschung · Universität Liechtenstein",
          pl: "Badania Doktorskie · Uniwersytet w Liechtensteinie"
        },
        description: {
          en: "A design-science research framework developing accessible, low-threshold Building Information Modelling (BIM) workflows to populate digital material banks and unlock circular component reuse across building lifecycles.",
          de: "Ein Design-Science-Forschungsrahmen für niederschwellige BIM-Workflows zur Befüllung digitaler Materialbanken und zur Skalierung der Bauteilwiederverwendung über den gesamten Gebäudelebenszyklus.",
          pl: "Ramy badawcze typu Design Science Research tworzące przystępne procedury BIM zasilające cyfrowe banki materiałowe i umożliwiające ponowne wykorzystanie komponentów budowlanych na dużą skalę."
        },
        linkText: {
          en: "View on ORCID ↗",
          de: "Auf ORCID ansehen ↗",
          pl: "Zobacz w ORCID ↗"
        },
        linkUrl: "https://orcid.org/0009-0009-4058-5684",
        image: "assets/images/research_circular.jpg"
      },
      {
        id: "phase0-transdisziplinaritaet",
        date: {
          en: "Dec 2025",
          de: "Dez 2025",
          pl: "Gru 2025"
        },
        typeTag: {
          en: "Peer-Reviewed Journal Article",
          de: "Peer-Review-Journalbeitrag",
          pl: "Recenzowany Artykuł Naukowy"
        },
        title: {
          en: "Issue 3 – Transdisziplinarität",
          de: "Ausgabe 3 – Transdisziplinarität",
          pl: "Wydanie 3 – Transdyscyplinarność"
        },
        venue: {
          en: "Phase0 – Journal für integriertes Planen, Bauen und Betreiben",
          de: "Phase0 – Journal für integriertes Planen, Bauen und Betreiben",
          pl: "Phase0 – Journal für integriertes Planen, Bauen und Betreiben"
        },
        description: {
          en: "Peer-reviewed contribution examining transdisciplinary collaboration methodologies across architecture, engineering, and digital process management in sustainable building design.",
          de: "Peer-Review-Beitrag über transdisziplinäre Kooperationsmethoden zwischen Architektur, Ingenieurwesen und digitalem Prozessmanagement beim nachhaltigen Bauen.",
          pl: "Recenzowana publikacja analizująca metodykę współpracy transdyscyplinarnej między architekturą, inżynierią i zarządzaniem procesami cyfrowymi w zrównoważonym projektowaniu."
        },
        linkText: {
          en: "Read Publication (DOI: 10.21428/71cd88bc.5d00b1e2) ↗",
          de: "Publikation lesen (DOI: 10.21428/71cd88bc.5d00b1e2) ↗",
          pl: "Przeczytaj publikację (DOI: 10.21428/71cd88bc.5d00b1e2) ↗"
        },
        linkUrl: "https://doi.org/10.21428/71cd88bc.5d00b1e2",
        image: "assets/images/research_phase0.jpg"
      },
      {
        id: "nature-reviews-architectural-beauty",
        date: {
          en: "Oct 2024",
          de: "Okt 2024",
          pl: "Paź 2024"
        },
        typeTag: {
          en: "Peer-Reviewed Commentary · Nature Reviews",
          de: "Peer-Review-Perspektive · Nature Reviews",
          pl: "Recenzowany Artykuł Naukowy · Nature Reviews"
        },
        title: {
          en: "Focusing on architectural beauty to reduce construction waste",
          de: "Focusing on architectural beauty to reduce construction waste",
          pl: "Focusing on architectural beauty to reduce construction waste"
        },
        venue: {
          en: "Nature Reviews Earth & Environment · Nature Publishing Group",
          de: "Nature Reviews Earth & Environment · Nature Publishing Group",
          pl: "Nature Reviews Earth & Environment · Nature Publishing Group"
        },
        description: {
          en: "Perspective published in Nature Reviews Earth & Environment investigating how architectural quality, timeless aesthetics, and emotional durability act as primary leverage points in mitigating demolition and building waste.",
          de: "Publikation in Nature Reviews Earth & Environment über die Bedeutung von architektonischer Qualität, Ästhetik und langlebiger Wertschätzung zur drastischen Reduzierung von Bau- und Abbruchabfällen.",
          pl: "Publikacja w Nature Reviews Earth & Environment badająca, jak jakość architektoniczna, ponadczasowa estetyka i trwałość emocjonalna stanowią kluczowe narzędzia redukcji odpadów budowlanych."
        },
        linkText: {
          en: "Read in Nature (DOI: 10.1038/s43017-024-00609-y) ↗",
          de: "Bei Nature lesen (DOI: 10.1038/s43017-024-00609-y) ↗",
          pl: "Przeczytaj w Nature (DOI: 10.1038/s43017-024-00609-y) ↗"
        },
        linkUrl: "https://doi.org/10.1038/s43017-024-00609-y",
        image: "assets/images/research_nature.jpg"
      },
      {
        id: "sri-conference-2024",
        date: {
          en: "Jun 2024",
          de: "Jun 2024",
          pl: "Cze 2024"
        },
        typeTag: {
          en: "International Congress Presentation",
          de: "Internationaler Kongressvortrag",
          pl: "Prezentacja na Kongresie Międzynarodowym"
        },
        title: {
          en: "Sustainability Research & Innovation Congress (SRI2024 / SSD2024)",
          de: "Sustainability Research & Innovation Congress (SRI2024 / SSD2024)",
          pl: "Sustainability Research & Innovation Congress (SRI2024 / SSD2024)"
        },
        venue: {
          en: "Helsinki & Espoo, Finland · Sustainability Science Days",
          de: "Helsinki & Espoo, Finnland · Sustainability Science Days",
          pl: "Helsinki i Espoo, Finlandia · Sustainability Science Days"
        },
        description: {
          en: "Presented research on digital workflows for circular construction and material reuse at the world's leading transdisciplinary sustainability congress convening over 1,300 global experts to foster action-oriented dialogue between disciplines.",
          de: "Präsentation von Forschungsergebnissen zu digitalen Workflows für zirkuläres Bauen und Materialwiederverwendung auf dem weltweit führenden Nachhaltigkeitskongress mit über 1'300 Experten in Helsinki & Espoo.",
          pl: "Wystąpienie naukowe prezentujące cyfrowe procedury dla budownictwa cyrkularnego i ponownego wykorzystania materiałów podczas wiodącego światowego kongresu zrównoważonego rozwoju z udziałem ponad 1300 ekspertów."
        },
        linkText: {
          en: "Congress Information & Program ↗",
          de: "Kongressinformationen & Programm ↗",
          pl: "Informacje o Kongresie i Program ↗"
        },
        linkUrl: "https://sricongress.org/",
        image: "assets/images/research_sri.jpg"
      },
      {
        id: "archivolta-lakhta-center",
        date: {
          en: "2013",
          de: "2013",
          pl: "2013"
        },
        typeTag: {
          en: "Architectural Essay & Technical Monograph",
          de: "Architekturmonografie & Fachtext",
          pl: "Monografia Techniczna i Esej Architektoniczny"
        },
        title: {
          en: "The Flame of the North. Lakhta Center, St. Petersburg",
          de: "The Flame of the North. Lakhta Center, St. Petersburg",
          pl: "Płomień Północy. Lakhta Center, Sankt Petersburg"
        },
        venue: {
          en: "Archivolta Magazine · ISSN 1506-5928",
          de: "Archivolta Magazin · ISSN 1506-5928",
          pl: "Kwartalnik Archivolta · ISSN 1506-5928"
        },
        description: {
          en: "Architectural and structural analysis of the Lakhta Center skyscraper, investigating complex parametric geometry, cold-climate building envelope engineering, and large-scale structural innovation.",
          de: "Architektonische und strukturelle Analyse des Lakhta Center Hochhauses mit Fokus auf komplexe parametrische Geometrien und Kaltklima-Fassadentechnologien.",
          pl: "Analiza architektoniczna i konstrukcyjna wieżowca Lakhta Center, badająca złożoną geometrię parametryczną, inżynierię powłok w klimacie chłodnym oraz innowacje wielkoskalowe."
        },
        linkText: {
          en: "View on ORCID (ISSN: 1506-5928) ↗",
          de: "Auf ORCID ansehen (ISSN: 1506-5928) ↗",
          pl: "Zobacz w ORCID (ISSN: 1506-5928) ↗"
        },
        linkUrl: "https://orcid.org/0009-0009-4058-5684",
        image: "assets/images/research_lakhta.jpg"
      }
    ]
  },

  // Project Status Translations
  statusTypes: {
    realisation: {
      en: "Built",
      de: "Gebaut",
      pl: "Zbudowany"
    },
    in_progress: {
      en: "In Progress",
      de: "In Planung / Bau",
      pl: "W realizacji"
    },
    competition: {
      en: "Competition Concept",
      de: "Wettbewerbskonzept",
      pl: "Koncepcja konkursowa"
    }
  },

  // Architecture Monograph Projects (with integrated Le Taguy & kit-homes)
  categories: {
    architecture: {
      title: {
        en: "Architecture & Spatial Design",
        de: "Architektur & Raumgestaltung",
        pl: "Architektura i Projektowanie Przestrzeni"
      },
      subtitle: {
        en: "Bespoke residences, major competition entries, modular kit-homes, iconic bridges, and alpine interiors across Switzerland, the UK, France, and Poland.",
        de: "Maßgeschneiderte Residenzen, Wettbewerbsprojekte, Modulhäuser, Brückenbauwerke und alpine Innenarchitektur in der Schweiz, Grossbritannien, Frankreich und Polen.",
        pl: "Unikalne rezydencje, projekty konkursowe, domy modułowe, mosty oraz luksusowe wnętrza alpejskie w Szwajcarii, Wielkiej Brytanii, Francji i Polsce."
      },
      items: [
        {
          id: "le-taguy-chamonix",
          title: {
            en: "Residence Le Taguy",
            de: "Residenz Le Taguy",
            pl: "Apartament Le Taguy"
          },
          year: "2021 · 24 m²",
          location: {
            en: "Saint-Gervais Mont-Blanc, France",
            de: "Saint-Gervais Mont-Blanc, Frankreich",
            pl: "Saint-Gervais Mont-Blanc, Francja"
          },
          typology: {
            en: "Luxury Micro-Apartment & Bespoke Joinery",
            de: "Alpines Luxus-Mikroapartment & Möbelbau",
            pl: "Luksusowe mikro-wnętrze alpejskie"
          },
          client: {
            en: "Private Client / CROPKA architects",
            de: "Privatkunde / CROPKA architects",
            pl: "Klient prywatny / CROPKA architects"
          },
          scope: {
            en: "Realisation (Built) — Complete Interior Planning & Craft",
            de: "Realisierung (Gebaut) — Vollständiger Innenausbau",
            pl: "Realizacja — Kompleksowy projekt wnętrza i rzemiosło"
          },
          image: "assets/images/letaguy/CROPKA_Le_Taguy_Mont_Blanc_Living_Room_01_1200_834.jpg",
          isEditorialLayout: true,
          leadIntro: {
            en: "Located in the stunning Mont-Blanc region, this holiday apartment provides the ultimate luxury and comfort within an extremely compact 24 m² footprint. Surrounding alpine landscapes directly influenced the tactile material palette: natural wood veneers, local slate, bright ash wood flooring, and light, serene tones.",
            de: "Am Fuße des Mont-Blanc-Massivs gelegen, bietet dieses Ferienapartment höchsten Komfort und Eleganz auf kompakten 24 m² Grundfläche. Die alpine Umgebung bestimmte die Haptik der Materialien: Echtholzfurniere, regionaler Schiefer, helle Eschenholzböden und beruhigende Naturtöne.",
            pl: "Zlokalizowany w rejonie Mont-Blanc apartament wakacyjny łączy luksus i funkcjonalność na powierzchni zaledwie 24 m². Otaczający krajobraz zdefiniował paletę materiałową: naturalne forniry drewniane, lokalny łupek, deski jesionowe oraz szlachetną zieleń marmuru."
          },
          editorialSections: [
            {
              type: "hero_spread",
              image: "assets/images/letaguy/CROPKA_Le_Taguy_Mont_Blanc_Living_Room_01_1200_834.jpg",
              format: "landscape",
              caption: {
                en: "Main living salon with panoramic alpine view, custom dining bench, and ash wood flooring.",
                de: "Wohnsalon mit Panoramablick auf die Alpen, maßgefertigter Sitzbank und Eschenparkett.",
                pl: "Strefa dzienna z panoramicznym widokiem na Alpy, wbudowaną ławą jadalną i jesionową podłogą."
              }
            },
            {
              type: "asymmetric_split",
              align: "left_text",
              title: {
                en: "Tactile Materiality & Nature Reflection",
                de: "Haptische Materialität & Naturbezug",
                pl: "Haptyczność Materiałów i Dialog z Naturą"
              },
              text: {
                en: "A tactile green marble wall in the bathroom with its leathered texture resembles a frameless aperture into the pine forest. Local slate vanity surfaces and brushed metal details ground the compact volume in traditional alpine craftsmanship, elevated by precise modern joinery.",
                de: "Eine grüne Marmorwand im Bad mit samtig-lederartiger Textur wirkt wie ein rahmenloses Fenster in den Bergwald. Regionaler Schiefer und gebürstetes Metall verbinden alpine Handwerkstradition mit zeitgenössischer Präzision.",
                pl: "Zielony marmur w łazience o fakturze miękkiej skóry przypomina bezramowe okno otwarte na alpejski las. Płytki z lokalnego łupka i szczotkowana stal łączą tradycyjne rzemiosło z nowoczesną geometrią."
              },
              quote: {
                en: "“The tactile leathered marble wall resembles a frameless window into the alpine forest.”",
                de: "„Die samtige Marmorwand wirkt wie ein rahmenloses Fenster in den Bergwald.“",
                pl: "„Faktura zielonego marmuru przypomina bezramowe okno otwarte na alpejski las.”"
              },
              image: "assets/images/letaguy/CROPKA_Le_Taguy_Mont_Blanc_Bathroom_01_1200_834.jpg",
              format: "portrait",
              imageCaption: {
                en: "Tactile green leathered marble bathroom wall and bespoke slate vanity.",
                de: "Badezimmer mit grünem Ledermarmor und Schieferwaschtisch.",
                pl: "Łazienka z zielonym marmurem i blatem z łupka."
              }
            },
            {
              type: "mixed_format_row",
              imageLeft: "assets/images/letaguy/CROPKA_Le_Taguy_Mont_Blanc_Living_Room_04_1200_834.jpg",
              formatLeft: "landscape",
              captionLeft: {
                en: "Concealed dining storage and bespoke ash joinery detailing.",
                de: "Versteckter Stauraum in der Sitzbank und feine Eschenholz-Details.",
                pl: "Ukryte schowki w ławie jadalnej i precyzyjne detale stolarskie."
              },
              imageRight: "assets/images/letaguy/CROPKA_Le_Taguy_Mont_Blanc_Living_Room_06_1200_834.jpg",
              formatRight: "portrait",
              captionRight: {
                en: "Compact lounge setting with integrated audio.",
                de: "Kompakte Lounge mit integriertem Soundsystem.",
                pl: "Strefa wypoczynkowa ze zintegrowanym nagłośnieniem."
              }
            },
            {
              type: "asymmetric_split",
              align: "right_text",
              title: {
                en: "Spatial Optimization: 24 m² Micro-Living",
                de: "Raumoptimierung: Luxus auf 24 m²",
                pl: "Optymalizacja Przestrzeni: Luksus na 24 m²"
              },
              text: {
                en: "Despite the compact footprint, intelligent three-dimensional planning accommodated two full double beds and an additional elevated bunk bed. Storage space is seamlessly concealed under the living room bench, beneath mattresses, and within floor-to-ceiling cabinet volumes. A custom climbing wall provides playful, vertical access to the upper bunk.",
                de: "Trotz der geringen Fläche bietet die dreidimensionale Raumausnutzung Platz für zwei Doppelbetten und ein Hochbett. Stauraum ist unsichtbar in Bänken, Podesten und Schrankwänden integriert. Eine Kletterwand ermöglicht den spielerischen Aufstieg zum oberen Bett.",
                pl: "Dzięki trójwymiarowej aranżacji wygospodarowano miejsce na dwa pełnowymiarowe łóżka podwójne oraz dodatkowe łóżko piętrowe. Schowki ukryto pod ławą, łóżkami i w szafach. Autorska ścianka wspinaczkowa stanowi kreatywne wejście na górne łóżko."
              },
              image: "assets/images/letaguy/CROPKA_Le_Taguy_Mont_Blanc_Bedroom_03_1200_834.jpg",
              format: "portrait",
              imageCaption: {
                en: "Custom wood climbing wall providing vertical access to the upper bunk.",
                de: "Integrierte Kletterwand als Aufstieg zum oberen Hochbett.",
                pl: "Drewniana ścianka wspinaczkowa prowadząca na górne łóżko."
              }
            },
            {
              type: "duo_portraits",
              imageLeft: "assets/images/letaguy/CROPKA_Le_Taguy_Mont_Blanc_Bedroom_01_1200_834.jpg",
              formatLeft: "portrait",
              captionLeft: {
                en: "Master sleeping alcove with integrated lighting and natural wood grain.",
                de: "Hauptschlafnische mit integriertem Lichtband und Holzmaserung.",
                pl: "Główna wnęka sypialna z nastrojowym oświetleniem liniowym."
              },
              imageRight: "assets/images/letaguy/CROPKA_Le_Taguy_Mont_Blanc_Bathroom_02_1200_834.jpg",
              formatRight: "portrait",
              captionRight: {
                en: "Slate shower stall and matte black minimalist fittings.",
                de: "Schieferdusche mit mattschwarzen minimalistischen Armaturen.",
                pl: "Kabina prysznicowa z łupka i matowa czarna armatura."
              }
            }
          ],
          credits: [
            {
              label: { en: "Architecture & Interiors", de: "Architektur & Innenarchitektur", pl: "Architektura i Wnętrza" },
              value: "CROPKA architects (Piotr Piotrowski, Monika Piotrowska)"
            },
            {
              label: { en: "Location", de: "Standort", pl: "Lokalizacja" },
              value: "Saint-Gervais Mont-Blanc, Haute-Savoie, France"
            },
            {
              label: { en: "Usable Floor Area", de: "Nutzfläche", pl: "Powierzchnia użytkowa" },
              value: "24 m² (Micro-Apartment)"
            },
            {
              label: { en: "Primary Materials", de: "Materialien", pl: "Materiały" },
              value: "Green Leathered Marble, Natural Ash Wood, French Slate, Charred Veneers"
            },
            {
              label: { en: "Year Completed", de: "Fertigstellung", pl: "Rok ukończenia" },
              value: "2021"
            }
          ],
          nextProjectId: "vst-bridge-warsaw",
          nextProjectCategory: "architecture"
        },
        {
          id: "vst-bridge-warsaw",
          title: {
            en: "Karowa-Okrzei Bridge",
            de: "Karowa-Okrzei Brücke",
            pl: "Most Karowa-Okrzei"
          },
          year: "2017 · Span: 450 m",
          location: {
            en: "Warsaw, Poland",
            de: "Warschau, Polen",
            pl: "Warszawa, Polska"
          },
          typology: {
            en: "Pedestrian & Cyclist Double-Arch Bridge",
            de: "Fuß- und Radwegbrücke mit Doppelbogen",
            pl: "Pieszo-rowerowy most łukowy nad Wisłą"
          },
          client: {
            en: "CROPKA architects | Gruner AG | Forum Architekci",
            de: "CROPKA architects | Gruner AG | Forum Architekci",
            pl: "CROPKA architects | Gruner AG | Forum Architekci"
          },
          scope: {
            en: "Competition Entry",
            de: "Wettbewerbsbeitrag",
            pl: "Konkurs architektoniczny"
          },
          image: "assets/images/VST_1200_675_drone.jpg",
          description: {
            en: "The Karowa-Okrzei Bridge is an important element in the complex urbanscape of Warsaw. It not only provides a necessary link in the city’s circulation but complements the panorama of the capital's historic centre. A double arch is both structural engineering and aesthetic driven. Generous headroom under the deck and retention of existing boulevard levels ensure the promenade's continuity is preserved.",
            de: "Die Karowa-Okrzei-Brücke fügt sich harmonisch in das Stadtpanorama von Warschau ein. Die Doppelbogen-Konstruktion verbindet strukturelle Ingenieurskunst mit skulpturaler Eleganz, ohne mit historischen Wahrzeichen zu konkurrieren. Sie garantiert großzügige Durchfahrtshöhen und den nahtlosen Fluss entlang der Weichsel-Boulevards.",
            pl: "Most Karowa-Okrzei to kluczowy element panoramy Warszawy łączący Trakt Królewski z Pragą. Forma podwójnego łuku łączy wybitną inżynierię ze szlachetną estetyką, tworząc ikoniczną przeprawę pieszo-rowerową z poszanowaniem otwartego bulwaru wiślanego."
          }
        },
        {
          id: "zollhaus-zurich",
          title: {
            en: "Zollhaus Mixed-Use",
            de: "Zollhaus Zürich",
            pl: "Zollhaus Zurych"
          },
          year: "2016 · 14,300 m²",
          location: {
            en: "Zürich, Switzerland",
            de: "Zürich, Schweiz",
            pl: "Zurych, Szwajcaria"
          },
          typology: {
            en: "Multi-Family Residential, Retail & Co-Working",
            de: "Wohnen, Gewerbe, Bildung & Gastronomie",
            pl: "Zespół wielorodzinny, biura i usługi"
          },
          client: {
            en: "Kalkbreite Cooperative / CROPKA architects",
            de: "Genossenschaft Kalkbreite / CROPKA",
            pl: "Spółdzielnia Kalkbreite / CROPKA"
          },
          scope: {
            en: "Competition / 2000-Watt Society Standard",
            de: "Wettbewerb / 2000-Watt-Gesellschaft",
            pl: "Konkurs / Standard 2000-Watt Society"
          },
          image: "assets/images/zollhaus_flats_offices_restaurant.jpg",
          description: {
            en: "A contemporary solution to modern multifamily living. The project combines living, working, education, leisure and retail together to form an almost completely self-sufficient community. Located in the heart of Zurich, this stylish development delivers extraordinary energy performance aiming for the 2000 Watt Society standard.",
            de: "Ein zukunftsweisendes Konzept für mehrgeschossiges urbanes Wohnen. Das Projekt vereint Wohnen, Arbeiten, Bildung und Gewerbe zu einem autarken Quartier im Zentrum von Zürich, konsequent optimiert nach den Standards der 2000-Watt-Gesellschaft.",
            pl: "Innowacyjne rozwiązanie dla wielorodzinnego życia w centrum Zurychu. Projekt łączy mieszkania, przestrzenie pracy, edukację i handel w samowystarczalną wspólnotę spełniającą rygorystyczne kryteria standardu 2000 Watt Society."
          }
        },
        {
          id: "thun-crematorium",
          title: {
            en: "Thun Crematorium 'EO IPSO'",
            de: "Krematorium Thun 'EO IPSO'",
            pl: "Krematorium w Thun 'EO IPSO'"
          },
          year: "2017 · 2,485 m²",
          location: {
            en: "Thun, Switzerland",
            de: "Thun, Schweiz",
            pl: "Thun, Szwajcaria"
          },
          typology: {
            en: "Sacred & Public Landscape Architecture",
            de: "Sakral- & Landschaftsarchitektur",
            pl: "Architektura sakralna i krajobraz"
          },
          client: {
            en: "Town of Thun / CROPKA | TW arch | FLOR",
            de: "Stadt Thun / CROPKA | TW arch | FLOR",
            pl: "Miasto Thun / CROPKA | TW arch | FLOR"
          },
          scope: {
            en: "Open Architectural Competition",
            de: "Offener Architekturwettbewerb",
            pl: "Otwarty konkurs architektoniczny"
          },
          image: "assets/images/KRE_exterior_01.jpg",
          description: {
            en: "An understated and classically elegant building form houses a new crematorium for the town of Thun. The architecture and landscape work closely together to create a space dedicated to contemplation. Internal, airy gardens grant a serene atmosphere, and warm private spaces bring solace to visitors.",
            de: "Ein zurückhaltender, klassisch eleganter Baukörper eingebettet in die alpine Landschaft von Thun. Lichtdurchflutete Atriumgärten und natürliche Materialien schaffen eine würdevolle, kontemplative Atmosphäre des Trostes.",
            pl: "Powściągliwa i elegancka forma nowego krematorium w Thun. Architektura i krajobraz tworzą harmonijną przestrzeń kontemplacji, z wewnętrznymi ogrodami i naturalnym światłem wnoszącym ukojenie."
          }
        },
        {
          id: "tvp-headquarters",
          title: {
            en: "TVP Broadcaster Headquarters",
            de: "TVP Medienzentrum Warschau",
            pl: "Nowa Siedziba TVP Warszawa"
          },
          year: "2018 · 23,700 m²",
          location: {
            en: "Warsaw, Poland",
            de: "Warschau, Polen",
            pl: "Warszawa, Polska"
          },
          typology: {
            en: "Media Broadcast Campus & Studios",
            de: "Medien-Campus & Fernsehstudios",
            pl: "Centrala telewizyjna i studia transmisyjne"
          },
          client: {
            en: "CROPKA architects & FORUM Architekci",
            de: "CROPKA architects & FORUM Architekci",
            pl: "CROPKA architects & FORUM Architekci"
          },
          scope: {
            en: "Awarded Jury's Commendation",
            de: "Auszeichnung im int. Wettbewerb",
            pl: "Wyróżnienie w konkursie międzynarodowym"
          },
          image: "assets/images/tvp_01_woronicza_1200_675.jpg",
          description: {
            en: "Awarded with a jury commendation, the design for the Polish TV HQ houses two large studios with a high-level fully glazed panoramic studio overlooking Warsaw. The newsroom forms the dynamic heart of the building, while a central gate and public plaza integrate the campus with the urban realm.",
            de: "Prämierter Entwurf für den TVP-Hauptsitz mit zwei Großraumstudios und einem spektakulären verglasten Panoramastudio. Die Newsroom-Zentrale bildet den lebendigen Mittelpunkt, ergänzt durch ein monumentales Torgebäude und eine öffentliche Plaza.",
            pl: "Wyróżniony projekt nowej siedziby Telewizji Polskiej przy ul. Woronicza. Obejmuje dwa duże studia telewizyjne, przeszklone studio panoramiczne, centralną bramę urbanistyczną oraz zadaszony plac publiczny otwierający kampus na miasto."
          }
        },
        {
          id: "house-in-lomnica",
          title: {
            en: "House in Łomnica",
            de: "Haus in Łomnica",
            pl: "Dom w Łomnicy"
          },
          year: "2019 · 295 m²",
          location: {
            en: "Łomnica, Poland",
            de: "Łomnica, Polen",
            pl: "Łomnica, Polska"
          },
          typology: {
            en: "Private Residential / Passivhaus",
            de: "Einfamilienhaus / Passivhaus",
            pl: "Rezydencja prywatna / Dom pasywny"
          },
          client: {
            en: "Private Client / CROPKA architects",
            de: "Privatkunde / CROPKA architects",
            pl: "Klient prywatny / CROPKA architects"
          },
          scope: {
            en: "Realisation (Built) — Complete Design",
            de: "Realisierung (Gebaut) — Gesamtplanung",
            pl: "Realizacja — Projekt kompleksowy i wykonanie"
          },
          image: "assets/images/CROPKA_MYS_front_1200_675.jpg",
          description: {
            en: "Surrounded by the Karkonosze (Giant Mountains) and Rudawy ranges, this Passivhaus residence maximizes scenic mountain views. Clad in traditional Shou-Sugi-Ban charred timber with anthracite ceramic tiles and high-thermal-mass clay block walls, combining vernacular texture with ultra-low energy performance.",
            de: "Eingebettet in das Panorama des Riesengebirges verbindet dieses Passivhaus traditionell verkohltes Shou-Sugi-Ban Lärchenholz mit modernen Tonblock-Speichermassen, anthrazitfarbenen Ziegeln und raumhoher Verglasung.",
            pl: "Rezydencja pasywna w Łomnicy z panoramą Karkonoszy i Rudaw Janowickich. Elewacja z opalanego drewna modrzewiowego Shou-Sugi-Ban połączona z lokalnym granitem i ścianami ceramicznymi o wysokiej bezwładności cieplnej."
          }
        },
        {
          id: "gillian-kit-home",
          title: {
            en: "Gillian Kit-Home",
            de: "Gillian Modulhaus",
            pl: "Dom Modułowy Gillian"
          },
          year: "2020 · 60 m²",
          location: {
            en: "United Kingdom / Switzerland",
            de: "Großbritannien / Schweiz",
            pl: "Wielka Brytania / Szwajcaria"
          },
          typology: {
            en: "Compact Prefabricated Living",
            de: "Kompaktes Holzmodulhaus",
            pl: "Kompaktowy ekologiczny dom modułowy"
          },
          client: {
            en: "Kit-Homes Collection / CROPKA",
            de: "Modulhaus-Kollektion / CROPKA",
            pl: "Kolekcja domów modułowych / CROPKA"
          },
          scope: {
            en: "Realisation / Prefabrication System",
            de: "Realisierung / Modulsystem",
            pl: "Realizacja / System prefabrykacji"
          },
          image: "assets/images/gillian_1403_800.jpg",
          description: {
            en: "Gillian represents a fresh approach to traditional architectural forms through sustainable timber technology. This affordable compact kit home optimizes internal flow to deliver a spacious open-plan living core with zero wasted circulation.",
            de: "Gillian interpretiert traditionelle Bauformen neu durch nachhaltige Holzrahmenbauweise. Das kompakte Modulhaus maximiert den nutzbaren Wohnraum bei minimalen Baukosten und exzellenter Energieeffizienz.",
            pl: "Gillian to nowoczesna interpretacja tradycyjnej bryły z wykorzystaniem technologii ekologicznego szkieletu drewnianego. Kompaktowy dom optymalizuje komunikację, oferując przestronną strefę dzienną."
          }
        },
        {
          id: "uallas-kit-home",
          title: {
            en: "Uallas Kit-Home",
            de: "Uallas Modulhaus",
            pl: "Dom Modułowy Uallas"
          },
          year: "2020 · 170 m²",
          location: {
            en: "United Kingdom / Switzerland",
            de: "Großbritannien / Schweiz",
            pl: "Wielka Brytania / Szwajcaria"
          },
          typology: {
            en: "Family Modular Eco-Residence",
            de: "Modulares Familien-Ökohaus",
            pl: "Rodzinny modułowy dom ekologiczny"
          },
          client: {
            en: "Kit-Homes Collection / CROPKA",
            de: "Modulhaus-Kollektion / CROPKA",
            pl: "Kolekcja domów modułowych / CROPKA"
          },
          scope: {
            en: "Realisation / Modular Architecture",
            de: "Realisierung / Systementwicklung",
            pl: "Realizacja / Standaryzacja modułowa"
          },
          image: "assets/images/uallas.jpg",
          description: {
            en: "Uallas is a progressive design featuring highly flexible indoor and outdoor spaces realized through sustainable materials to deliver generous spatial volume for contemporary family living.",
            de: "Uallas ist ein zukunftsweisendes Einfamilienhaus mit flexiblen Raumkonfigurationen und markanter zeitgenössischer Holzbauästhetik.",
            pl: "Uallas to progresywny projekt domu jednorodzinnego z elastycznym układem wnętrz z naturalnych, ekologicznych materiałów."
          }
        },
        {
          id: "ossolineum-museum",
          title: {
            en: "Museum of Lubomirski Princes",
            de: "Museum der Fürsten Lubomirski",
            pl: "Muzeum Książąt Lubomirskich"
          },
          year: "2018 · 7,962 m²",
          location: {
            en: "Wrocław, Poland",
            de: "Breslau, Polen",
            pl: "Wrocław, Polska"
          },
          typology: {
            en: "Cultural & Museum Institution",
            de: "Kultur- & Museumsbau",
            pl: "Obiekt muzealno-wystawienniczy"
          },
          client: {
            en: "Ossolineum National Institute",
            de: "Nationales Ossolineum Institut",
            pl: "Zakład Narodowy im. Ossolińskich"
          },
          scope: {
            en: "Architectural Competition",
            de: "Architekturwettbewerb",
            pl: "Konkurs architektoniczny"
          },
          image: "assets/images/Muzeum_Ossolineum_02_1200x675.jpg",
          description: {
            en: "Harmoniously fitting into the historic Wrocław urban fabric with a 50-degree sloped extensive green roof dialoguing with the Ossolineum gardens. Features a perforated bronze facade inspired by an 18th-century panorama of Lviv.",
            de: "Ein präzise in das historische Gefüge von Breslau eingepasster Museumsbau mit begrüntem Steildach und einer perforierten Bronzefassade.",
            pl: "Nowe Muzeum Książąt Lubomirskich we Wrocławiu z zielonym dachem korespondującym z ogrodami Ossolineum oraz perforowaną fasadą z brązu."
          }
        },
        {
          id: "mxv-rail-bridge",
          title: {
            en: "Viaduc de la Baye de Clarens",
            de: "Viadukt Baye de Clarens",
            pl: "Wiadukt Baye de Clarens"
          },
          year: "2016 · Span: 130 m",
          location: {
            en: "Montreux, Switzerland",
            de: "Montreux, Schweiz",
            pl: "Montreux, Szwajcaria"
          },
          typology: {
            en: "Extradosed Railway Viaduct",
            de: "Extradosed Eisenbahnbrücke",
            pl: "Ekstradosowy wiadukt kolejowy"
          },
          client: {
            en: "CROPKA architects | GMASP",
            de: "CROPKA architects | GMASP",
            pl: "CROPKA architects | GMASP"
          },
          scope: {
            en: "Infrastructure Competition",
            de: "Infrastrukturwettbewerb",
            pl: "Konkurs infrastrukturalny"
          },
          image: "assets/images/mxv_01_valley_1200_675.jpg",
          description: {
            en: "An enclosed extradosed railway viaduct designed to accommodate differential geological movements over a 100-year lifetime with precast modular concrete and internal prestressed cables.",
            de: "Eine geschlossene Extradosed-Eisenbahnbrücke über die Schlucht von Montreux, ausgelegt auf seismische Verschiebungen.",
            pl: "Wiadukt kolejowy w szwajcarskich Alpach zaprojektowany na kompensację przesunięć tektonicznych z prefabrykowanego betonu sprężonego."
          }
        },
        {
          id: "spylaw-park-house",
          title: {
            en: "Spylaw Park Residence",
            de: "Residenz Spylaw Park",
            pl: "Dom w Spylaw Park"
          },
          year: "2015 · 173 m²",
          location: {
            en: "Edinburgh, Scotland",
            de: "Edinburgh, Schottland",
            pl: "Edynburg, Szkocja"
          },
          typology: {
            en: "Inward Courtyard Private House",
            de: "Atrium-Wohnhaus mit Zinkkröpfung",
            pl: "Dom atrialny z czarnym cynkiem"
          },
          client: {
            en: "Private Client / CROPKA architects",
            de: "Privatkunde / CROPKA architects",
            pl: "Klient prywatny / CROPKA architects"
          },
          scope: {
            en: "Realisation (Built) — Concept & Planning",
            de: "Realisierung (Gebaut) — Planung & Ausführung",
            pl: "Realizacja — Projekt i wykonanie"
          },
          image: "assets/images/Spylaw_Edinburgh_CROPKA_1200_675.jpg",
          description: {
            en: "An inward-focused private residence organized around a rainwater-harvesting courtyard pool. A dramatic black zinc cantilevered volume rests above a white base, capped with a Scandinavian turf roof.",
            de: "Ein introvertiertes Privathaus in Edinburgh um einen Gartenhof mit schwarzem Zinkauskragungskörper und Gründach.",
            pl: "Prywatny dom w Edynburgu zorganizowany wokół wewnętrznego patio ze zbiornikiem retencyjnym i bryłą z czarnego cynku."
          }
        }
      ]
    },

    research: {
      title: {
        en: "Research & Computational Practice",
        de: "Forschung & Digitale Praxis",
        pl: "Badania i Praktyka Obliczeniowa"
      },
      subtitle: {
        en: "Doctoral research on digital material passports, circular economy frameworks, and Minergie-P modular prototypes.",
        de: "Doktorarbeit über digitale Materialpässe, Zirkularität im Bauwesen und Minergie-P-Prototypen.",
        pl: "Praca doktorska w zakresie paszportów materiałowych, gospodarka cyrkularna i prototypy Minergie-P."
      },
      items: [
        {
          id: "augusta-raurica",
          title: {
            en: "Augusta Raurica Modular Envelope",
            de: "Augusta Raurica Modulhülle",
            pl: "Augusta Raurica Powłoka Modułowa"
          },
          year: "2014 · 7,253 m²",
          location: {
            en: "Augst, Switzerland",
            de: "Augst, Schweiz",
            pl: "Augst, Szwajcaria"
          },
          typology: {
            en: "Archaeological Center / Minergie-P",
            de: "Forschungszentrum / Minergie-P",
            pl: "Centrum Archeologiczne / Minergie-P"
          },
          client: {
            en: "Kanton Basel-Landschaft / CROPKA",
            de: "Kanton Basel-Landschaft / CROPKA",
            pl: "Kanton Bazylea-Okręg / CROPKA"
          },
          scope: {
            en: "Minergie-P Sustainable Optimization",
            de: "Minergie-P Nachhaltigkeitskonzept",
            pl: "Optymalizacja standardu Minergie-P"
          },
          image: "assets/images/augusta_02_1200.jpg",
          description: {
            en: "Archaeological finds center conceived as a flexible timber modular structure. External glu-lam frames free the internal floorplates, with Brettstapel solid timber panels and an intelligent responsive louvered skin minimizing solar thermal gains under Swiss Minergie-P standards.",
            de: "Archäologisches Fundzentrum mit außenliegender Brettschichtholz-Tragstruktur für stützenfreie Innenräume. Brettstapel-Elemente und eine intelligente Lamellenfassade optimieren das Raumklima nach Minergie-P-Kriterien.",
            pl: "Ośrodek znalezisk archeologicznych o konstrukcji z drewna klejonego i paneli Brettstapel. Zewnętrzne ramy konstrukcyjne uwalniają wnętrze, a inteligentne żaluzje fasadowe ograniczają zyski słoneczne w standardzie Minergie-P."
          }
        },
        {
          id: "hkpb-pedestrian-bridge",
          title: {
            en: "HKPB Parametric Bridge",
            de: "HKPB Parametrische Brücke",
            pl: "Kładka Parametryczna HKPB"
          },
          year: "2014 · Span: 70 m",
          location: {
            en: "Hradec Králové, Czech Republic",
            de: "Königgrätz, Tschechien",
            pl: "Hradec Králové, Czechy"
          },
          typology: {
            en: "Parametric Infrastructure & Urban Furniture",
            de: "Parametrische Brücke & Parkmöbel",
            pl: "Infrastruktura parametryczna i mebel miejski"
          },
          client: {
            en: "CROPKA architects | vanOmmeren Architekten",
            de: "CROPKA architects | vanOmmeren Architekten",
            pl: "CROPKA architects | vanOmmeren Architekten"
          },
          scope: {
            en: "Computational Bridge Design",
            de: "Parametrischer Wettbewerbsbeitrag",
            pl: "Projekt konkursowy kładki pieszej"
          },
          image: "assets/images/01_HKPB_CAM_AeroSouth_People_web.jpg",
          description: {
            en: "Bridge as a primary piece of park furniture across the Elbe river. The computational steel rib design functions as a continuous meeting platform, seating area, and viewpoints uniting human circulation with riverside ecology.",
            de: "Eine Fußgängerbrücke als integrales Parkmöbel über die Elbe. Die parametrische Stahlrippen-Struktur dient gleichzeitig als Aussichtsplattform, Treffpunkt und ökologische Wegeverbindung.",
            pl: "Kładka nad Łabą zaprojektowana jako zintegrowany mebel miejski. Parametryczna struktura żeber stalowych tworzy przestrzeń spotkań, taras widokowy i spójne połączenie z parkiem nadbrzeżnym."
          }
        },
        {
          id: "kindergarten-wildenstein",
          title: {
            en: "Kindergarten Wildenstein",
            de: "Kindergarten Wildenstein",
            pl: "Przedszkole Wildenstein"
          },
          year: "2015 · 424 m²",
          location: {
            en: "Rorschacherberg, Switzerland",
            de: "Rorschacherberg, Schweiz",
            pl: "Rorschacherberg, Szwajcaria"
          },
          typology: {
            en: "Educational / Topographical Architecture",
            de: "Bildungsbau / Topographisches Konzept",
            pl: "Edukacja / Architektura topograficzna"
          },
          client: {
            en: "Gemeinde Rorschacherberg / CROPKA",
            de: "Gemeinde Rorschacherberg / CROPKA",
            pl: "Gmina Rorschacherberg / CROPKA"
          },
          scope: {
            en: "Competition Entry",
            de: "Wettbewerbserfolg",
            pl: "Projekt konkursowy"
          },
          image: "assets/images/front_diagram.jpg",
          description: {
            en: "Eco-friendly educational building inspired by the geometry of Rubik's Snake. Extends across the hillside with a green turf roof, connecting classrooms around a central daylight atrium and bridging directly over the access road to the primary school.",
            de: "Ökologischer Bildungsbau an einem Hang des Rorschacherbergs, inspiriert von der Rubik's Snake Geometrie. Ein begehbares Gründach und ein zentrales Lichtatrium verbinden alle Funktionsbereiche.",
            pl: "Ekologiczne przedszkole na zboczu w Rorschacherberg inspirowane geometrią Węża Rubika. Kaskadowa bryła z zielonym dachem łączy sale dydaktyczne wokół centralnego atrium pełnego światła."
          }
        }
      ]
    },
    digitalisation: {
      title: {
        en: "Digitalisation & Computational Systems",
        de: "Digitalisierung & Parametrische Systeme",
        pl: "Digitalizacja i Systemy Parametryczne"
      },
      subtitle: {
        en: "Advanced OpenBIM coordination, algorithmic geometry, prefabricated timber modular configurators, and automated digital fabrication workflows.",
        de: "Ganzheitliche OpenBIM-Koordination, algorithmische Geometrien, parametrische Modulhaus-Konfiguratoren und digitale Fertigung.",
        pl: "Kompleksowa koordynacja OpenBIM, geometria algorytmiczna, parametryczne konfiguratory domów modułowych i cyfrowa prefabrykacja."
      },
      items: [
        {
          id: "kit-homes-configurator",
          title: {
            en: "Kit-Homes Parametric Configurator",
            de: "Kit-Homes Parametrischer Konfigurator",
            pl: "Konfigurator Parametryczny Kit-Homes"
          },
          year: "2016–2022",
          location: {
            en: "Switzerland & Poland",
            de: "Schweiz & Polen",
            pl: "Szwajcaria i Polska"
          },
          typology: {
            en: "Computational Prefabricated Housing System",
            de: "Digitales modulares Holzbausystem",
            pl: "Cyfrowy system modułowy domów z drewna"
          },
          client: {
            en: "CROPKA architects / R&D",
            de: "CROPKA architects / F&E",
            pl: "CROPKA architects / B+R"
          },
          scope: {
            en: "Algorithmic Design Engine & CNC Fabrication Workflow",
            de: "Parametrisches Entwurfstool & CNC-Fertigung",
            pl: "Silnik algorytmiczny i cyfrowa produkcja CNC"
          },
          image: "assets/images/front_diagram.jpg",
          description: {
            en: "A cutting-edge algorithmic housing configurator that generates personalized timber dwellings based on site topography, solar orientation, and family requirements with direct export to CNC fabrication lines.",
            de: "Ein hochentwickelter algorithmischer Konfigurator für nachhaltige Holzhäuser, der Entwürfe anhand von Topografie, Sonneneinstrahlung und Kundenwünschen direkt für die CNC-Fertigung generiert.",
            pl: "Zaawansowany algorytmiczny konfigurator domów drewnianych generujący indywidualne warianty bryły w oparciu o ukształtowanie terenu i nasłonecznienie z bezpośrednim eksportem do obrabiarek CNC."
          }
        },
        {
          id: "hkpb-parametric-bridge-dig",
          title: {
            en: "HKPB Parametric Bridge",
            de: "HKPB Parametrische Brücke",
            pl: "Kładka Parametryczna HKPB"
          },
          year: "2014",
          location: {
            en: "Elbe River, Hradec Králové, Czech Republic",
            de: "Königgrätz Elbe, Tschechien",
            pl: "Hradec Králové, Łaba, Czechy"
          },
          typology: {
            en: "Parametric Steel Infrastructure & Urban Furniture",
            de: "Parametrische Infrastruktur",
            pl: "Infrastruktura parametryczna i mebel miejski"
          },
          client: {
            en: "CROPKA architects | vanOmmeren Architekten",
            de: "CROPKA architects | vanOmmeren Architekten",
            pl: "CROPKA architects | vanOmmeren Architekten"
          },
          scope: {
            en: "Algorithmic Geometric & Structural Optimization",
            de: "Geometrische Optimierung",
            pl: "Optymalizacja geometryczna i parametryczna"
          },
          image: "assets/images/01_HKPB_CAM_AeroSouth_People_web.jpg",
          description: {
            en: "A lightweight generative pedestrian bridge utilizing parametric structural ribbing that dynamically responds to bending moments while integrating urban park seating.",
            de: "Eine leichte, generativ entworfene Fußgängerbrücke mit parametrischer Rippenstruktur, die statische Biegemomente aufnimmt und Sitzlandschaften integriert.",
            pl: "Lekka kładka piesza zaprojektowana algorytmicznie z parametrycznym ożebrowaniem reagującym na siły zginające i integrującym meble miejskie."
          }
        },
        {
          id: "bim-spital-baden-agnes",
          title: {
            en: "Kantonsspital Baden — OpenBIM Management",
            de: "Kantonsspital Baden, OpenBIM-Management",
            pl: "Szpital Kantonalny Baden — Koordynacja OpenBIM"
          },
          year: "2016–2023",
          location: {
            en: "Baden, Switzerland",
            de: "Baden, Schweiz",
            pl: "Baden, Szwajcaria"
          },
          typology: {
            en: "Major Healthcare Complex (CHF 478M)",
            de: "Großspitalneubau (CHF 478 Mio.)",
            pl: "Nowy kompleks szpitalny (CHF 478M)"
          },
          client: {
            en: "Kantonsspital Baden AG / Nickl & Partner",
            de: "Kantonsspital Baden AG / Nickl & Partner",
            pl: "Kantonsspital Baden AG / Nickl & Partner"
          },
          scope: {
            en: "Multi-Disciplinary OpenBIM Management & Coordination",
            de: "OpenBIM Koordination & Kollisionsprüfung",
            pl: "Zarządzanie OpenBIM i detekcja kolizji"
          },
          image: "assets/images/augusta_02_1200.jpg",
          description: {
            en: "Full-scale OpenBIM model management for one of Switzerland's largest medical infrastructure projects, unifying architectural, structural, and complex MEP installations across 76,000 m².",
            de: "Umfassendes OpenBIM-Modellmanagement für eines der größten Spitalprojekte der Schweiz mit 76.000 m² Nutzfläche und hochkomplexer Haustechnik.",
            pl: "Koordynacja modeli OpenBIM dla jednej z największych inwestycji medycznych w Szwajcarii o powierzchni 76 000 m², integrująca architekturę, konstrukcję i zaawansowane instalacje."
          }
        },
        {
          id: "noga-parametric-tower",
          title: {
            en: "NOGA Parametric Tower",
            de: "NOGA Parametrischer Turm",
            pl: "Wieża Parametryczna NOGA"
          },
          year: "2011",
          location: {
            en: "Manama, Bahrain",
            de: "Manama, Bahrain",
            pl: "Manama, Bahrajn"
          },
          typology: {
            en: "LEED Gold High-Rise Skyscraper",
            de: "LEED Gold Wolkenkratzer",
            pl: "Wieżowiec ze standardem LEED Gold"
          },
          client: {
            en: "NOGA / RMJM",
            de: "NOGA / RMJM",
            pl: "NOGA / RMJM"
          },
          scope: {
            en: "Solar-Responsive Algorithmic Facade",
            de: "Solar-optimierte Fassadengeometrie",
            pl: "Fasada optymalizowana solarnie"
          },
          image: "assets/images/research_lakhta.jpg",
          description: {
            en: "A computational high-rise envelope engineered to minimize extreme desert solar heat gain through algorithmic shading louvers and integrated environmental geometry.",
            de: "Eine digital optimierte Hochhausfassade mit algorithmisch gesteuerten Verschattungslamellen zur Minimierung der Kühllasten im Wüstenklima.",
            pl: "Elewacja wieżowca zaprojektowana algorytmicznie w celu redukcji przegrzewania budynku w klimacie pustynnym poprzez zintegrowane żaluzje strukturalne."
          }
        }
      ]
    }
  },

  // ==========================================================================
  // COMPREHENSIVE CV & CROPKA GEOLOCATED PROJECTS DATABASE
  // Exact Site Geocodes for Sub-City Level Resolution
  // ==========================================================================
  cvProjects: [
    // --- Schneider & Schneider (Aarau, Switzerland) ---
    {
      id: "schneider-theodor-kocher",
      title: {
        en: "Theodor Kocher Haus, Inselspital Bern",
        de: "Theodor Kocher Haus, Inselspital Bern",
        pl: "Theodor Kocher Haus, Inselspital Bern"
      },
      year: "2015–...",
      type: "in_progress",
      studio: "Schneider & Schneider",
      studioUrl: "https://schneiderschneider.ch/projects/organzentrum-inselspital-bern/",
      location: {
        en: "Bern, Switzerland",
        de: "Bern, Schweiz",
        pl: "Berno, Szwajcaria"
      },
      lat: 46.9472,
      lng: 7.4230,
      scale: "CHF 270.0M · 30,600 m²",
      typology: {
        en: "New Women’s Clinic & Organ Center (Minergie P-Eco)",
        de: "Frauenklinik und Organzentrum (Minergie P-Eco)",
        pl: "Klinika Kobiet i Centrum Organów (Minergie P-Eco)"
      },
      role: {
        en: "Project Lead, BIM Manager, Site Supervision & Tendering",
        de: "Projektleitung, Ausschreibung & Realisierung, BIM-Management",
        pl: "Kierownik Projektu, BIM Manager, Nadzór Budowlany"
      }
    },
    {
      id: "schneider-zwischenbau-insel",
      title: {
        en: "Zwischenbau UKRO, Inselspital Bern",
        de: "Zwischenbau, Inselspital Bern",
        pl: "Zwischenbau UKRO, Inselspital Bern"
      },
      year: "2018–2020",
      type: "realisation",
      studio: "Schneider & Schneider",
      studioUrl: "https://schneiderschneider.ch/projects/rechtsmedizin-und-klinische-forschung-bern/",
      location: {
        en: "Bern, Switzerland",
        de: "Bern, Schweiz",
        pl: "Berno, Szwajcaria"
      },
      lat: 46.9505,
      lng: 7.4265,
      scale: "CHF 80.0M · 3,250 m²",
      typology: {
        en: "Underground University Clinic for Radio-Oncology",
        de: "Unterirdisches Gebäude für Radio-Onkologie (UKRO)",
        pl: "Podziemny budynek Kliniki Radioonkologii (UKRO)"
      },
      role: {
        en: "Project Lead, Tendering & Construction Supervision",
        de: "Projektleitung — Ausschreibung und Realisierung, Bauaufsicht",
        pl: "Kierownik Projektu — Przetargi, Realizacja i Nadzór"
      }
    },
    {
      id: "schneider-burger-holding",
      title: {
        en: "Burger Holding AG Headquarters",
        de: "Hauptsitz Burger Holding AG",
        pl: "Siedziba Główna Burger Holding AG"
      },
      year: "2019–2020",
      type: "realisation",
      studio: "Schneider & Schneider",
      studioUrl: "https://schneiderschneider.ch/projects/verwaltungsgebaude-wagasa-zollikhofen/",
      location: {
        en: "Rotkreuz, Switzerland",
        de: "Rotkreuz, Schweiz",
        pl: "Rotkreuz, Szwajcaria"
      },
      lat: 47.1417,
      lng: 8.4312,
      scale: "Corporate Campus",
      typology: {
        en: "Corporate Headquarters & Administration",
        de: "Unternehmenszentrale & Verwaltungsbau",
        pl: "Centrala korporacyjna i biura"
      },
      role: {
        en: "Project Leadership",
        de: "Projektleitung",
        pl: "Prowadzenie projektu"
      }
    },
    {
      id: "schneider-hirslanden-aarau",
      title: {
        en: "Hirslanden Klinik Aarau — Neubau Schachenallee",
        de: "Neubau Schachenallee, Hirslanden Klinik Aarau",
        pl: "Hirslanden Klinik Aarau — Schachenallee"
      },
      year: "2018–...",
      type: "in_progress",
      studio: "Schneider & Schneider",
      studioUrl: "https://schneiderschneider.ch/projects/hirslanden-klinik-aarau-neubau-schachenallee/",
      location: {
        en: "Aarau, Switzerland",
        de: "Aarau, Schweiz",
        pl: "Aarau, Szwajcaria"
      },
      lat: 47.3980,
      lng: 8.0375,
      scale: "Healthcare Facility",
      typology: {
        en: "Hospital Wing & Medical Extension",
        de: "Klinikneubau & Medizintechnik",
        pl: "Skrzydło szpitalne i medyczne"
      },
      role: {
        en: "BIM Management & Coordination",
        de: "BIM-Management",
        pl: "Zarządzanie BIM i koordynacja"
      }
    },
    {
      id: "schneider-ksa-aarau",
      title: {
        en: "Kantonsspital Aarau (KSA)",
        de: "Kantonsspital Aarau (KSA)",
        pl: "Szpital Kantonalny Aarau (KSA)"
      },
      year: "2018–2019",
      type: "competition",
      studio: "Schneider & Schneider",
      studioUrl: "https://schneiderschneider.ch/projects/kantonsspital-aarau/",
      location: {
        en: "Aarau, Switzerland",
        de: "Aarau, Schweiz",
        pl: "Aarau, Szwajcaria"
      },
      lat: 47.3870,
      lng: 8.0510,
      scale: "Masterplan Stage 2",
      typology: {
        en: "Hospital Logistics & Expansion Masterplan",
        de: "Wettbewerb, 2. Etappe, Logistikplanung & BIM",
        pl: "Konkurs, etap 2, logistyka szpitalna i BIM"
      },
      role: {
        en: "Competition Team & Logistics BIM Planning",
        de: "Wettbewerbsteam & Logistikkoordination",
        pl: "Projekt konkursowy i koordynacja BIM"
      }
    },
    {
      id: "schneider-avz-appenzell",
      title: {
        en: "Ambulantes Versorgungszentrum Plus (AVZ+)",
        de: "Ambulantes Versorgungszentrum Plus (AVZ+)",
        pl: "Centrum Opieki Ambulatoryjnej AVZ+ Appenzell"
      },
      year: "2018–...",
      type: "in_progress",
      studio: "Schneider & Schneider",
      studioUrl: "https://schneiderschneider.ch/projects/kantonales-spital-appenzell/",
      location: {
        en: "Appenzell Innerrhoden, Switzerland",
        de: "Appenzell Innerrhoden, Schweiz",
        pl: "Appenzell Innerrhoden, Szwajcaria"
      },
      lat: 47.3312,
      lng: 9.4093,
      scale: "Regional Healthcare Center",
      typology: {
        en: "Outpatient Medical & Healthcare Hub",
        de: "Ambulatorium & Gesundheitszentrum",
        pl: "Ośrodek leczenia ambulatoryjnego"
      },
      role: {
        en: "BIM Management",
        de: "BIM-Management",
        pl: "Zarządzanie procesem BIM"
      }
    },
    {
      id: "schneider-frauenfeld",
      title: {
        en: "Kantonsspital Frauenfeld — Projekt HORIZONT",
        de: "Kantonsspital Frauenfeld, Projekt HORIZONT",
        pl: "Szpital Kantonalny Frauenfeld — Projekt HORIZONT"
      },
      year: "2018–2019",
      type: "realisation",
      studio: "Schneider & Schneider",
      studioUrl: "https://schneiderschneider.ch/projects/kantonsspital-frauenfeld-projekt-horizont/",
      location: {
        en: "Frauenfeld, Switzerland",
        de: "Frauenfeld, Schweiz",
        pl: "Frauenfeld, Szwajcaria"
      },
      lat: 47.5583,
      lng: 8.8988,
      scale: "Hospital Infrastructure",
      typology: {
        en: "Major Hospital Modernization",
        de: "Klinikerweiterung & Detaillierte Türplanung",
        pl: "Modernizacja i infrastruktura szpitalna"
      },
      role: {
        en: "Specialist Door & Access Planning",
        de: "Spezialisierte Tür- und Schleusenplanung",
        pl: "Projektowanie śluz i systemów drzwiowych"
      }
    },

    // --- Nickl & Partner (Zürich, Switzerland) ---
    {
      id: "nickl-baden-agnes",
      title: {
        en: "Kantonsspital Baden — Projekt Agnes",
        de: "Kantonsspital Baden, Projekt Agnes",
        pl: "Szpital Kantonalny Baden — Projekt Agnes"
      },
      year: "2016–2023",
      type: "realisation",
      studio: "Nickl & Partner",
      studioUrl: "https://www.nickl-partner.com/projekte/kantonsspital-baden-agnes/",
      location: {
        en: "Baden, Switzerland",
        de: "Baden, Schweiz",
        pl: "Baden, Szwajcaria"
      },
      lat: 47.4737,
      lng: 8.3087,
      scale: "CHF 478.0M · 76,215 m²",
      typology: {
        en: "New Central Cantonal Hospital Complex",
        de: "Zentraler Spitalneubau & Operationszentrum",
        pl: "Nowy centralny kompleks szpitalny i sale operacyjne"
      },
      role: {
        en: "Project Lead Architecture Team, Client Representation & Scheduling",
        de: "Projektleitung Architektenteam, Vertretung ggü. Bauherrschaft, Terminplanung",
        pl: "Kierownik Zespołu Architektów, Reprezentant Inwestora, Harmonogramowanie"
      }
    },

    // --- ProjX (Champfèr / St. Moritz, Switzerland) ---
    {
      id: "projx-badrutts-palace",
      title: {
        en: "Badrutt's Palace Hotel Renovation",
        de: "Umbau Badrutt's Palace Hotel",
        pl: "Modernizacja Hotelu Badrutt's Palace"
      },
      year: "2013–2015",
      type: "realisation",
      studio: "ProjX",
      studioUrl: "https://badruttspalace.com/",
      location: {
        en: "St. Moritz, Switzerland",
        de: "St. Moritz, Schweiz",
        pl: "St. Moritz, Szwajcaria"
      },
      lat: 46.4983,
      lng: 9.8394,
      scale: "5-Star Luxury Heritage Hotel",
      typology: {
        en: "Historic Grand Hotel Luxury Reconfiguration",
        de: "Umbau & Neugestaltung des Luxushotels",
        pl: "Modernizacja historycznego hotelu 5-gwiazdkowego"
      },
      role: {
        en: "Project Lead & Client Representative",
        de: "Projektmanagement & Bauherrenvertreter",
        pl: "Zarządzanie projektem i reprezentacja inwestora"
      }
    },
    {
      id: "projx-champfer-villas",
      title: {
        en: "Luxury Alpine Residences Engadin",
        de: "Luxus-Wohnprojekte Engadin",
        pl: "Luksusowe Rezydencje Alpejskie w Engadynie"
      },
      year: "2013–2015",
      type: "realisation",
      studio: "ProjX",
      studioUrl: "https://badruttspalace.com/",
      location: {
        en: "Champfèr / St. Moritz, Switzerland",
        de: "Champfèr / St. Moritz, Schweiz",
        pl: "Champfèr / St. Moritz, Szwajcaria"
      },
      lat: 46.4789,
      lng: 9.8136,
      scale: "High-End Residential",
      typology: {
        en: "Exclusive Alpine Chalets & Private Villas",
        de: "Exklusive Chalets & Luxusresidenzen",
        pl: "Ekskluzywne rezydencje i wille alpejskie"
      },
      role: {
        en: "Project Management, Lead & Site Supervision",
        de: "Projektleitung und Bauleitung von Luxus-Wohnprojekten",
        pl: "Prowadzenie projektu i nadzór budowlany"
      }
    },

    // --- Santiago Calatrava (Zürich, Switzerland) ---
    {
      id: "calatrava-mons-station",
      title: {
        en: "Mons Central Railway Station (Gare de Mons)",
        de: "Hauptbahnhof Mons, Belgien",
        pl: "Dworzec Główny w Mons (Gare de Mons)"
      },
      year: "2011–2013",
      type: "realisation",
      studio: "Santiago Calatrava",
      studioUrl: "https://calatrava.com/news/reader/gare-de-mons-by-santiago-calatrava.html",
      location: {
        en: "Mons, Belgium",
        de: "Mons, Belgien",
        pl: "Mons, Belgia"
      },
      lat: 50.4542,
      lng: 3.9567,
      scale: "€ 130.0 Million",
      typology: {
        en: "High-Speed Rail Hub & Landmark Footbridge for European Capital of Culture",
        de: "Neuer Hauptbahnhof für Mons ‒ Europäische Kulturhauptstadt 2015",
        pl: "Węzeł kolejowy dużej prędkości na Europejską Stolicę Kultury"
      },
      role: {
        en: "Architect & Team Lead — Building Envelope, Glazing, Lifts & MEP Coordination",
        de: "Teamleitung — Gebäudehülle, Verglasung, Aufzüge, Koordinierung HLKSE",
        pl: "Architekt i Lider Zespołu — Fasady, Przeszklenia, Windy i Koordynacja MEP"
      }
    },

    // --- RMJM (Edinburgh, Scotland / Global) ---
    {
      id: "rmjm-royal-museum",
      title: {
        en: "Royal Museum (National Museum of Scotland) Renovation",
        de: "Royal Museum, Renovierung des Nationalmuseums",
        pl: "Muzeum Królewskie (National Museum of Scotland) Rewitalizacja"
      },
      year: "2005",
      type: "realisation",
      studio: "RMJM",
      studioUrl: "https://rmjm.com/",
      location: {
        en: "Chambers St, Old Town, Edinburgh, UK",
        de: "Edinburgh Old Town, Grossbritannien",
        pl: "Edynburg, Stare Miasto, Szkocja"
      },
      lat: 55.9469,
      lng: -3.1892,
      scale: "National Heritage Landmark",
      typology: {
        en: "Victorian Museum Hall & Circulation Transformation",
        de: "Renovierung und Erschliessung des historischen Museums",
        pl: "Rewitalizacja wiktoriańskiego gmachu muzealnego"
      },
      role: {
        en: "Exhibition Space & Heritage Renovation Planning",
        de: "Bestandsaufnahme & Detailplanung",
        pl: "Projektowanie przestrzeni ekspozycyjnych"
      }
    },
    {
      id: "rmjm-tron-kirk",
      title: {
        en: "Tron Kirk Historic Church Tourism & Heritage Centre",
        de: "Tron Kirk, Anpassung der historischen Kirche zum Infozentrum",
        pl: "Kościół Tron Kirk — Centrum Informacji i Turystyki"
      },
      year: "2006",
      type: "realisation",
      studio: "RMJM",
      studioUrl: "https://rmjm.com/",
      location: {
        en: "Royal Mile / High St, Edinburgh, UK",
        de: "Edinburgh Royal Mile, Grossbritannien",
        pl: "Edynburg, Royal Mile, Szkocja"
      },
      lat: 55.9500,
      lng: -3.1878,
      scale: "Royal Mile Heritage Asset",
      typology: {
        en: "17th-Century Church Adaptation into Cultural Visitor Hub",
        de: "Umnutzung der historischen Kirche an der Royal Mile",
        pl: "Adaptacja XVII-wiecznego kościoła przy Royal Mile"
      },
      role: {
        en: "Conservation Architecture & Exhibition Detailing",
        de: "Denkmalgerechte Umnutzungsplanung",
        pl: "Projekt adaptacji konserwatorskiej"
      }
    },
    {
      id: "rmjm-kings-stables",
      title: {
        en: "King's Stables Road Mixed-Use Masterplan",
        de: "Kingʼs Stables Road Wohn-Einkaufs-Büroobjekt",
        pl: "King's Stables Road Zespół Wielofunkcyjny"
      },
      year: "2005",
      type: "competition",
      studio: "RMJM",
      studioUrl: "https://rmjm.com/",
      location: {
        en: "Grassmarket / King's Stables Rd, Edinburgh, UK",
        de: "Edinburgh, Grossbritannien",
        pl: "Edynburg, Szkocja, UK"
      },
      lat: 55.9472,
      lng: -3.2014,
      scale: "Old Town Masterplan",
      typology: {
        en: "Residential, Retail & Commercial Urban Quarter",
        de: "Wohn- und Geschäftsquartier unterhalb des Castle Rock",
        pl: "Koncepcja kwartału mieszkaniowo-usługowego"
      },
      role: {
        en: "Urban Concept & Volumetric Studies",
        de: "Städtebauliche Konzeptentwicklung",
        pl: "Studium urbanistyczne i kompozycja brył"
      }
    },
    {
      id: "rmjm-bells-brae",
      title: {
        en: "Bells Brae 6 & 10 Commercial Conversion",
        de: "Bells Brae 6 & 10, Umbau Büroobjekte",
        pl: "Bells Brae 6 & 10, Adaptacja Biurowa"
      },
      year: "2010–2011",
      type: "realisation",
      studio: "RMJM",
      studioUrl: "https://rmjm.com/",
      location: {
        en: "Dean Village, Edinburgh, UK",
        de: "Edinburgh Dean Village, Grossbritannien",
        pl: "Edynburg Dean Village, Szkocja"
      },
      lat: 55.9520,
      lng: -3.2167,
      scale: "Dean Village Historic Context",
      typology: {
        en: "Commercial Office Refurbishment & Adaptive Reuse",
        de: "Umbau und Modernisierung denkmalgeschützter Büroflächen",
        pl: "Modernizacja i adaptacja zabytkowych biur"
      },
      role: {
        en: "Lead Architect & Technical Delivery",
        de: "Projektarchitekt",
        pl: "Architekt prowadzący"
      }
    },
    {
      id: "rmjm-napier-university",
      title: {
        en: "Edinburgh Napier University (Sighthill Campus)",
        de: "Napier University, Edinburgh",
        pl: "Edinburgh Napier University (Kampus Sighthill)"
      },
      year: "2008–2010",
      type: "realisation",
      studio: "RMJM",
      studioUrl: "https://rmjm.com/",
      location: {
        en: "Sighthill, Bankhead Ave, Edinburgh, UK",
        de: "Edinburgh Sighthill, Grossbritannien",
        pl: "Edynburg Sighthill, Szkocja, UK"
      },
      lat: 55.9248,
      lng: -3.2885,
      scale: "£ 48.0M · 24,428 m² · BREEAM",
      typology: {
        en: "University Campus Academic & Health Sciences Hub",
        de: "Neuer Campus für Napier University ‒ Neubauten & BREEAM",
        pl: "Nowy kampus uniwersytecki i budynki wydziałowe"
      },
      role: {
        en: "Architect — MEP Coordination, Tendering, Executive Detailing & Site Supervision",
        de: "Architekt — Ausführungsplanung, HLKSE-Koordination, BREEAM & Bauaufsicht",
        pl: "Architekt — Dokumentacja wykonawcza, przetargi, certyfikacja BREEAM i nadzór"
      }
    },
    {
      id: "rmjm-jewel-esk-college",
      title: {
        en: "Jewel & Esk Valley College (JEVC Campuses)",
        de: "Jewel & Esk Valley College, Edinburgh & Dalkeith",
        pl: "Jewel & Esk Valley College (Kampusy Edinburgh i Midlothian)"
      },
      year: "2007–2008",
      type: "realisation",
      studio: "RMJM",
      studioUrl: "https://rmjm.com/",
      location: {
        en: "Milton Road / Dalkeith, UK",
        de: "Edinburgh & Dalkeith, Grossbritannien",
        pl: "Edynburg i Dalkeith, UK"
      },
      lat: 55.9410,
      lng: -3.1110,
      scale: "£ 52.0 Million",
      typology: {
        en: "Higher Education Campuses in Edinburgh & Midlothian",
        de: "Neue Campus-Bauten für JEVC College",
        pl: "Nowoczesne kampusy edukacyjne i laboratoria"
      },
      role: {
        en: "Planning Documentation, Structural Coordination & Site Inspections",
        de: "Baugenehmigungsplanung, Koordinierung mit Statikern, Bauaufsicht",
        pl: "Dokumentacja do pozwolenia na budowę, koordynacja konstrukcyjna"
      }
    },
    {
      id: "rmjm-doncaster-arena",
      title: {
        en: "Doncaster Bloodstock Sales Arena",
        de: "Doncaster Bloodstock Sales Arena",
        pl: "Doncaster Bloodstock Sales Arena"
      },
      year: "2006–2008",
      type: "realisation",
      studio: "RMJM",
      studioUrl: "https://rmjm.com/",
      location: {
        en: "Doncaster, England, UK",
        de: "Doncaster, Grossbritannien",
        pl: "Doncaster, Anglia, UK"
      },
      lat: 53.5228,
      lng: -1.1285,
      scale: "£ 5.5 Million · Scottish Design Award",
      typology: {
        en: "Thoroughbred Bloodstock Auction Complex & Grandstand",
        de: "Prestigeträchtiger Auktionskomplex für Rennpferde",
        pl: "Prestiżowy kompleks aukcyjny koni wyścigowych"
      },
      role: {
        en: "Executive Detailing, Engineering Coordination & Site Oversight",
        de: "Ausführungsplanung, Koordination mit Fachingenieuren, Bauaufsicht",
        pl: "Projekt wykonawczy, koordynacja inżynierska i nadzór budowy"
      }
    },
    {
      id: "rmjm-newcastle-rye-hill",
      title: {
        en: "Newcastle College Rye Hill House",
        de: "Newcastle College Rye Hill House",
        pl: "Newcastle College Rye Hill House"
      },
      year: "2006",
      type: "realisation",
      studio: "RMJM",
      studioUrl: "https://rmjm.com/",
      location: {
        en: "Newcastle upon Tyne, UK",
        de: "Newcastle, Grossbritannien",
        pl: "Newcastle upon Tyne, UK"
      },
      lat: 54.9667,
      lng: -1.6250,
      scale: "£ 5.2M · 3,300 m² · Lord Mayor's Award",
      typology: {
        en: "Adaptive Reuse & Modern Extension to Heritage Asset",
        de: "Moderner Ausbau des historischen Objekts",
        pl: "Nowoczesna rozbudowa obiektu zabytkowego"
      },
      role: {
        en: "Executive Planning & Site Quality Inspections",
        de: "Ausführungsplanung und Baustelleninspektionen",
        pl: "Projekt wykonawczy i inspekcje budowlane"
      }
    },
    {
      id: "rmjm-noga-bahrain",
      title: {
        en: "NOGA Headquarters Skyscraper",
        de: "NOGA Wolkenkratzer (LEED Gold)",
        pl: "Wieżowiec Centrali NOGA (LEED Gold)"
      },
      year: "2011",
      type: "competition",
      studio: "RMJM",
      studioUrl: "https://rmjm.com/",
      location: {
        en: "Manama, Bahrain",
        de: "Manama, Bahrain",
        pl: "Manama, Bahrajn"
      },
      lat: 26.2285,
      lng: 50.5860,
      scale: "High-Rise Tower · LEED Gold",
      typology: {
        en: "National Oil & Gas Authority Headquarters Skyscraper",
        de: "Nachhaltiger Wolkenkratzer-Entwurf",
        pl: "Wieżowiec korporacyjny ze standardem LEED Gold"
      },
      role: {
        en: "Parametric Facade & High-Rise Concept Architecture",
        de: "Fassaden- und Hochhauskonzeption",
        pl: "Koncepcja architektoniczna i fasady wieżowca"
      }
    },
    {
      id: "rmjm-avia-park",
      title: {
        en: "Avia Park Commercial & Retail Center",
        de: "Avia Park Einkaufszentrum",
        pl: "Centrum Handlowo-Usługowe Avia Park"
      },
      year: "2005",
      type: "realisation",
      studio: "RMJM",
      studioUrl: "https://rmjm.com/",
      location: {
        en: "Moscow, Russia",
        de: "Moskau, Russland",
        pl: "Moskwa, Rosja"
      },
      lat: 55.7903,
      lng: 37.5314,
      scale: "Mega-Scale Retail Hub",
      typology: {
        en: "Major Commercial & Lifestyle Destination",
        de: "Großflächiges Einkaufs- und Freizeitzentrum",
        pl: "Wielkopowierzchniowe centrum handlowo-rozrywkowe"
      },
      role: {
        en: "Retail Planning & Spatial Strategy",
        de: "Entwurfsplanung und Erschließungskonzept",
        pl: "Koncepcja układu przestrzennego i komunikacji"
      }
    },
    {
      id: "rmjm-moscow-city-tower",
      title: {
        en: "Moscow City Business Centre Skyscraper",
        de: "Moscow City Business Centre Wolkenkratzer",
        pl: "Wieżowiec Moscow City Business Centre"
      },
      year: "2005",
      type: "competition",
      studio: "RMJM",
      studioUrl: "https://rmjm.com/",
      location: {
        en: "Moscow City, Russia",
        de: "Moskau City, Russland",
        pl: "Moskwa City, Rosja"
      },
      lat: 55.7494,
      lng: 37.5370,
      scale: "Super-Tall Skyscraper",
      typology: {
        en: "High-Rise Commercial & Financial Center Concept",
        de: "Wolkenkratzerkonzeption im Finanzdistrikt",
        pl: "Koncepcja wieżowca biurowego w centrum finansowym"
      },
      role: {
        en: "Tower Geometry & Structural Concept",
        de: "Turmgeometrie & Vorentwurf",
        pl: "Geometria wieży i koncepcja strukturalna"
      }
    },
    {
      id: "rmjm-syetun",
      title: {
        en: "Syetun Residential Settlement",
        de: "Syetun Wohnsiedlung",
        pl: "Osiedle Mieszkaniowe Syetun"
      },
      year: "2005",
      type: "competition",
      studio: "RMJM",
      studioUrl: "https://rmjm.com/",
      location: {
        en: "Setun River, Moscow, Russia",
        de: "Moskau, Russland",
        pl: "Moskwa, Rosja"
      },
      lat: 55.7200,
      lng: 37.4500,
      scale: "Residential Quarter",
      typology: {
        en: "Masterplanned Riverside Housing Community",
        de: "Städtebauliche Konzeption für Wohnquartier",
        pl: "Koncepcja osiedla mieszkaniowego nad rzeką"
      },
      role: {
        en: "Masterplan Layout & Typology Design",
        de: "Städtebaulicher Entwurf",
        pl: "Projekt urbanistyczny i typologia mieszkań"
      }
    },
    {
      id: "rmjm-pyramids-park",
      title: {
        en: "Pyramids Business Park Factory Conversion",
        de: "Pyramids Business Park, Fabrikumbau",
        pl: "Pyramids Business Park — Konwersja Fabryki"
      },
      year: "2005–2006",
      type: "realisation",
      studio: "RMJM",
      studioUrl: "https://rmjm.com/",
      location: {
        en: "Bathgate, West Lothian, Scotland, UK",
        de: "Bathgate, Grossbritannien",
        pl: "Bathgate, Szkocja, UK"
      },
      lat: 55.8970,
      lng: -3.6150,
      scale: "Industrial Adaptive Reuse",
      typology: {
        en: "High-Tech Manufacturing Plant to Modern Office Campus",
        de: "Fabrikumbau zu modernem Technologie- und Bürozentrum",
        pl: "Adaptacja zakładu produkcyjnego na park biurowy"
      },
      role: {
        en: "Envelope Refurbishment & Interior Workspace Planning",
        de: "Fassaden- und Innenausbauplanung",
        pl: "Projekt rewitalizacji elewacji i wnętrz"
      }
    },

    // --- Trevor Black Architects (Highlands, Scotland) ---
    {
      id: "trevor-black-highland",
      title: {
        en: "Highland Residential & Conservation Projects",
        de: "Wohn- und Denkmalprojekte Highlands",
        pl: "Rezydencje i Obiekty Zabytkowe w Highlands"
      },
      year: "2004–2005",
      type: "realisation",
      studio: "Trevor Black Architects",
      studioUrl: "",
      location: {
        en: "Invergordon / Scottish Highlands, UK",
        de: "Invergordon, Schottland",
        pl: "Invergordon / Highlands, Szkocja"
      },
      lat: 57.6900,
      lng: -4.1700,
      scale: "Vernacular Architecture",
      typology: {
        en: "Highland Vernacular Dwellings & Historic Restorations",
        de: "Traditionelle Wohnbauten & Denkmalrestaurierung",
        pl: "Tradycyjne domy szkockie i renowacje zabytków"
      },
      role: {
        en: "Assistant Architect",
        de: "Assistant Architekt",
        pl: "Asystent Architekta"
      }
    },

    // --- Studio Barańska – Bernardi (Wrocław, Poland) ---
    {
      id: "baranska-wroclaw",
      title: {
        en: "Wrocław Commercial & Residential Architecture",
        de: "Wrocław Gewerbe- und Wohnbauten",
        pl: "Obiekty Komercyjne i Mieszkaniowe we Wrocławiu"
      },
      year: "2003",
      type: "realisation",
      studio: "Studio Barańska – Bernardi",
      studioUrl: "",
      location: {
        en: "Wrocław, Poland",
        de: "Breslau, Polen",
        pl: "Wrocław, Polska"
      },
      lat: 51.1079,
      lng: 17.0385,
      scale: "Urban Architecture",
      typology: {
        en: "Urban Infill & Commercial Interiors",
        de: "Gewerbeobjekte und Innenausbau",
        pl: "Architektura miejska i wnętrza komercyjne"
      },
      role: {
        en: "Assistant Architect",
        de: "Assistant Architekt",
        pl: "Asystent Architekta"
      }
    },

    // --- CROPKA architects (Edinburgh / Zürich / St. Moritz) ---
    {
      id: "cropka-taguy",
      title: {
        en: "Residence Le Taguy",
        de: "Residenz Le Taguy",
        pl: "Apartament Le Taguy"
      },
      year: "2021",
      type: "realisation",
      studio: "CROPKA architects",
      studioUrl: "https://cropka.com/projects-list/54-le-taguy/",
      location: {
        en: "Saint-Gervais Mont-Blanc, France",
        de: "Saint-Gervais Mont-Blanc, Frankreich",
        pl: "Saint-Gervais Mont-Blanc, Francja"
      },
      lat: 45.8920,
      lng: 6.7120,
      scale: "24 m² Micro-Apartment",
      typology: {
        en: "Luxury Micro-Living & Alpine Bespoke Joinery",
        de: "Alpines Luxus-Mikroapartment",
        pl: "Luksusowe mikro-wnętrze alpejskie"
      },
      role: {
        en: "Founding Partner / Lead Architect",
        de: "Partner / Gesamtplanung",
        pl: "Główny Architekt / Partner"
      },
      hasInternalDetail: true,
      internalId: "le-taguy-chamonix",
      internalCategory: "architecture"
    },
    {
      id: "cropka-lomnica",
      title: {
        en: "House in Łomnica",
        de: "Haus in Łomnica",
        pl: "Dom w Łomnicy"
      },
      year: "2019",
      type: "realisation",
      studio: "CROPKA architects",
      studioUrl: "https://cropka.com/projects-list/55-mys/",
      location: {
        en: "Łomnica, Giant Mountains, Poland",
        de: "Łomnica, Riesengebirge, Polen",
        pl: "Łomnica, Karkonosze, Polska"
      },
      lat: 50.8750,
      lng: 15.8050,
      scale: "295 m² · Passivhaus",
      typology: {
        en: "Passivhaus Mountain Residence in Shou-Sugi-Ban Charred Wood",
        de: "Passivhaus mit verkohlter Holzfassade",
        pl: "Rezydencja pasywna z opalanego drewna"
      },
      role: {
        en: "Founding Partner / Lead Architect",
        de: "Partner / Gesamtplanung",
        pl: "Główny Architekt / Partner"
      },
      hasInternalDetail: true,
      internalId: "house-in-lomnica",
      internalCategory: "architecture"
    },
    {
      id: "cropka-spylaw",
      title: {
        en: "Spylaw Park Residence",
        de: "Residenz Spylaw Park",
        pl: "Dom w Spylaw Park"
      },
      year: "2015",
      type: "realisation",
      studio: "CROPKA architects",
      studioUrl: "https://cropka.com/projects-list/42-spylaw-house/",
      location: {
        en: "Colinton, Edinburgh, Scotland, UK",
        de: "Edinburgh Colinton, Grossbritannien",
        pl: "Edynburg Colinton, Szkocja, UK"
      },
      lat: 55.9080,
      lng: -3.2620,
      scale: "173 m²",
      typology: {
        en: "Inward Courtyard Private House with Black Zinc & Turf Roof",
        de: "Atrium-Wohnhaus mit Zinkkröpfung und Gründach",
        pl: "Dom atrialny z czarnym cynkiem i dachem darniowym"
      },
      role: {
        en: "Partner / Concept & Technical Delivery",
        de: "Partner / Gesamtplanung",
        pl: "Główny Architekt / Partner"
      },
      hasInternalDetail: true,
      internalId: "spylaw-park-house",
      internalCategory: "architecture"
    },
    {
      id: "cropka-gillian",
      title: {
        en: "Gillian Kit-Home",
        de: "Gillian Modulhaus",
        pl: "Dom Modułowy Gillian"
      },
      year: "2020",
      type: "realisation",
      studio: "CROPKA architects",
      studioUrl: "https://cropka.com/projects-list/44-kit-homes-gillian/",
      location: {
        en: "United Kingdom / Switzerland",
        de: "Grossbritannien / Schweiz",
        pl: "Wielka Brytania / Szwajcaria"
      },
      lat: 55.9585,
      lng: -3.1950,
      scale: "60 m² Prefabricated System",
      typology: {
        en: "Sustainable Modular Kit-Home System",
        de: "Nachhaltiges Holzmodulhaus",
        pl: "Ekologiczny dom modułowy"
      },
      role: {
        en: "Partner / System Design",
        de: "Partner / Systementwicklung",
        pl: "Główny Architekt / Partner"
      },
      hasInternalDetail: true,
      internalId: "gillian-kit-home",
      internalCategory: "architecture"
    },
    {
      id: "cropka-uallas",
      title: {
        en: "Uallas Kit-Home",
        de: "Uallas Modulhaus",
        pl: "Dom Modułowy Uallas"
      },
      year: "2020",
      type: "realisation",
      studio: "CROPKA architects",
      studioUrl: "https://cropka.com/projects-list/43-kit-homes-uallas/",
      location: {
        en: "United Kingdom / Switzerland",
        de: "Grossbritannien / Schweiz",
        pl: "Wielka Brytania / Szwajcaria"
      },
      lat: 55.9380,
      lng: -3.2200,
      scale: "170 m² Modular Eco-Residence",
      typology: {
        en: "Flexible Family Modular Eco-Residence",
        de: "Modulares Familien-Ökohaus",
        pl: "Rodzinny modułowy dom ekologiczny"
      },
      role: {
        en: "Partner / System Design",
        de: "Partner / Systementwicklung",
        pl: "Główny Architekt / Partner"
      },
      hasInternalDetail: true,
      internalId: "uallas-kit-home",
      internalCategory: "architecture"
    },
    {
      id: "cropka-vst-bridge",
      title: {
        en: "Karowa-Okrzei Bridge",
        de: "Karowa-Okrzei Brücke",
        pl: "Most Karowa-Okrzei"
      },
      year: "2017",
      type: "competition",
      studio: "CROPKA architects",
      studioUrl: "https://cropka.com/projects-list/26-vst-bridge-warsaw",
      location: {
        en: "Vistula River / Powiśle, Warsaw, Poland",
        de: "Warschau Weichsel, Polen",
        pl: "Warszawa, Powiśle / Praga, Polska"
      },
      lat: 52.2415,
      lng: 21.0220,
      scale: "Span: 450 m",
      typology: {
        en: "Pedestrian & Cyclist Double-Arch Bridge over Vistula River",
        de: "Fuß- und Radwegbrücke mit Doppelbogen",
        pl: "Pieszo-rowerowy most łukowy nad Wisłą"
      },
      role: {
        en: "Competition Entry in Consortium with Gruner AG & Forum Architekci",
        de: "Wettbewerbsbeitrag mit Gruner AG & Forum",
        pl: "Projekt konkursowy w konsorcjum z Gruner AG i Forum Architekci"
      },
      hasInternalDetail: true,
      internalId: "vst-bridge-warsaw",
      internalCategory: "architecture"
    },
    {
      id: "cropka-tvp",
      title: {
        en: "TVP Broadcaster Headquarters",
        de: "TVP Medienzentrum Warschau",
        pl: "Nowa Siedziba TVP Warszawa"
      },
      year: "2018",
      type: "competition",
      studio: "CROPKA architects",
      studioUrl: "https://cropka.com/projects-list/51-tvp/",
      location: {
        en: "Woronicza 17, Mokotów, Warsaw, Poland",
        de: "Warschau Mokotów, Polen",
        pl: "Warszawa, ul. Woronicza 17, Polska"
      },
      lat: 52.1905,
      lng: 21.0090,
      scale: "23,700 m² · Jury Commendation",
      typology: {
        en: "Television Broadcast Campus, Studios & Public Gateway",
        de: "Medien-Campus & Fernsehstudios",
        pl: "Centrala telewizyjna i studia transmisyjne"
      },
      role: {
        en: "Competition Entry Awarded with Jury's Commendation",
        de: "Auszeichnung im int. Wettbewerb",
        pl: "Wyróżnienie w konkursie międzynarodowym"
      },
      hasInternalDetail: true,
      internalId: "tvp-headquarters",
      internalCategory: "architecture"
    },
    {
      id: "cropka-zollhaus",
      title: {
        en: "Zollhaus Mixed-Use",
        de: "Zollhaus Zürich",
        pl: "Zollhaus Zurych"
      },
      year: "2016",
      type: "competition",
      studio: "CROPKA architects",
      studioUrl: "https://cropka.com/projects-list/52-zollhaus/",
      location: {
        en: "Zollstrasse / Kreis 5, Zürich, Switzerland",
        de: "Zürich Kreis 5, Schweiz",
        pl: "Zurych, Kreis 5, Szwajcaria"
      },
      lat: 47.3820,
      lng: 8.5280,
      scale: "14,300 m² · 2000-Watt Society",
      typology: {
        en: "Multi-Family Residential, Retail & Co-Working Community",
        de: "Wohnen, Gewerbe, Bildung & Gastronomie",
        pl: "Zespół wielorodzinny, biura i usługi"
      },
      role: {
        en: "Competition Entry",
        de: "Wettbewerbsbeitrag",
        pl: "Projekt konkursowy"
      },
      hasInternalDetail: true,
      internalId: "zollhaus-zurich",
      internalCategory: "architecture"
    },
    {
      id: "cropka-thun-crematorium",
      title: {
        en: "Thun Crematorium 'EO IPSO'",
        de: "Krematorium Thun 'EO IPSO'",
        pl: "Krematorium w Thun 'EO IPSO'"
      },
      year: "2017",
      type: "competition",
      studio: "CROPKA architects",
      studioUrl: "https://cropka.com/projects-list/47-thun-crematorium/",
      location: {
        en: "Thun, Switzerland",
        de: "Thun, Schweiz",
        pl: "Thun, Szwajcaria"
      },
      lat: 46.7580,
      lng: 7.6280,
      scale: "2,485 m²",
      typology: {
        en: "Sacred & Contemplative Landscape Architecture",
        de: "Sakral- & Landschaftsarchitektur",
        pl: "Architektura sakralna i krajobraz"
      },
      role: {
        en: "Open Competition Entry",
        de: "Offener Architekturwettbewerb",
        pl: "Otwarty konkurs architektoniczny"
      },
      hasInternalDetail: true,
      internalId: "thun-crematorium",
      internalCategory: "architecture"
    },
    {
      id: "cropka-ossolineum",
      title: {
        en: "Museum of Lubomirski Princes (Ossolineum)",
        de: "Museum der Fürsten Lubomirski",
        pl: "Muzeum Książąt Lubomirskich"
      },
      year: "2018",
      type: "competition",
      studio: "CROPKA architects",
      studioUrl: "https://cropka.com/projects-list/50-ossolineum/",
      location: {
        en: "Szewska St, Wrocław, Poland",
        de: "Breslau Altstadt, Polen",
        pl: "Wrocław, ul. Szewska, Polska"
      },
      lat: 51.1140,
      lng: 17.0340,
      scale: "7,962 m²",
      typology: {
        en: "National Museum with Perforated Bronze Facade",
        de: "Kultur- & Museumsbau mit Bronzefassade",
        pl: "Gmach muzealny z perforowaną fasadą z brązu"
      },
      role: {
        en: "Architectural Competition",
        de: "Architekturwettbewerb",
        pl: "Konkurs architektoniczny"
      },
      hasInternalDetail: true,
      internalId: "ossolineum-museum",
      internalCategory: "architecture"
    },
    {
      id: "cropka-mxv",
      title: {
        en: "Viaduc de la Baye de Clarens",
        de: "Viadukt Baye de Clarens",
        pl: "Wiadukt Baye de Clarens"
      },
      year: "2016",
      type: "competition",
      studio: "CROPKA architects",
      studioUrl: "https://cropka.com/projects-list/49-mxv/",
      location: {
        en: "Gorges du Chauderon, Montreux, Switzerland",
        de: "Montreux Schlucht, Schweiz",
        pl: "Montreux, Alpy Vaud, Szwajcaria"
      },
      lat: 46.4312,
      lng: 6.9106,
      scale: "Span: 130 m",
      typology: {
        en: "Extradosed Alpine Railway Viaduct in Precast Modular Concrete",
        de: "Extradosed Eisenbahnbrücke",
        pl: "Ekstradosowy wiadukt kolejowy w Alpach"
      },
      role: {
        en: "Infrastructure Competition with GMASP",
        de: "Infrastrukturwettbewerb",
        pl: "Konkurs infrastrukturalny"
      },
      hasInternalDetail: true,
      internalId: "mxv-rail-bridge",
      internalCategory: "architecture"
    },
    {
      id: "cropka-augusta",
      title: {
        en: "Augusta Raurica Finds Center",
        de: "Augusta Raurica Modulhülle",
        pl: "Augusta Raurica Powłoka Modułowa"
      },
      year: "2014",
      type: "competition",
      studio: "CROPKA architects",
      studioUrl: "https://cropka.com/projects-list/46-augusta-raurica/",
      location: {
        en: "Augst, Switzerland",
        de: "Augst, Schweiz",
        pl: "Augst, Szwajcaria"
      },
      lat: 47.5333,
      lng: 7.7167,
      scale: "7,253 m² · Minergie-P",
      typology: {
        en: "Timber Modular Archaeological Center",
        de: "Forschungszentrum / Minergie-P",
        pl: "Centrum Archeologiczne / Minergie-P"
      },
      role: {
        en: "Minergie-P Sustainable Optimization",
        de: "Minergie-P Nachhaltigkeitskonzept",
        pl: "Optymalizacja standardu Minergie-P"
      },
      hasInternalDetail: true,
      internalId: "augusta-raurica",
      internalCategory: "research"
    },
    {
      id: "cropka-hkpb",
      title: {
        en: "HKPB Parametric Bridge",
        de: "HKPB Parametrische Brücke",
        pl: "Kładka Parametryczna HKPB"
      },
      year: "2014",
      type: "competition",
      studio: "CROPKA architects",
      studioUrl: "https://cropka.com/projects-list/45-hkpb-bridge/",
      location: {
        en: "Elbe River, Hradec Králové, Czech Republic",
        de: "Königgrätz Elbe, Tschechien",
        pl: "Hradec Králové, Łaba, Czechy"
      },
      lat: 50.2104,
      lng: 15.8252,
      scale: "Span: 70 m",
      typology: {
        en: "Parametric Steel Infrastructure & Park Furniture",
        de: "Parametrische Brücke & Parkmöbel",
        pl: "Infrastruktura parametryczna i mebel miejski"
      },
      role: {
        en: "Computational Design Competition with vanOmmeren Architekten",
        de: "Parametrischer Wettbewerbsbeitrag",
        pl: "Projekt konkursowy kładki pieszej"
      },
      hasInternalDetail: true,
      internalId: "hkpb-pedestrian-bridge",
      internalCategory: "research"
    },
    {
      id: "cropka-kindergarten",
      title: {
        en: "Kindergarten Wildenstein",
        de: "Kindergarten Wildenstein",
        pl: "Przedszkole Wildenstein"
      },
      year: "2015",
      type: "competition",
      studio: "CROPKA architects",
      studioUrl: "https://cropka.com/projects-list/48-kindergarten-wildenstein/",
      location: {
        en: "Rorschacherberg, Switzerland",
        de: "Rorschacherberg, Schweiz",
        pl: "Rorschacherberg, Szwajcaria"
      },
      lat: 47.4720,
      lng: 9.5050,
      scale: "424 m²",
      typology: {
        en: "Topographical Educational Architecture with Green Roof",
        de: "Bildungsbau / Topographisches Konzept",
        pl: "Edukacja / Architektura topograficzna"
      },
      role: {
        en: "Competition Entry",
        de: "Wettbewerbserfolg",
        pl: "Projekt konkursowy"
      },
      hasInternalDetail: true,
      internalId: "kindergarten-wildenstein",
      internalCategory: "research"
    }
  ],

  // About Piotr Piotrowski - Verified credentials
  about: {
    title: {
      en: "Piotr Piotrowski",
      de: "Piotr Piotrowski",
      pl: "Piotr Piotrowski"
    },
    subtitle: {
      en: "Architect | Circularity & BIM Strategist | Founder, CROPKA architects",
      de: "Architekt | Zirkularitäts- & BIM-Stratege | Gründer, CROPKA architects",
      pl: "Architekt IARP | Strateg Cyrkularności i BIM | Założyciel CROPKA architects"
    },
    role: {
      en: "PhD (Uni.li) | M.Arch | Member of SIA (CH), ARB (UK), IARP (PL)",
      de: "Dr. sc. (Uni.li) | M.Arch | Mitglied SIA (CH), ARB (UK), IARP (PL)",
      pl: "Dr inż. arch. (Uni.li) | Członek SIA (CH), ARB (UK), IARP (PL)"
    },
    paragraphs: [
      {
        en: "Piotr Piotrowski is an international architect, researcher, and founding director of CROPKA architects with offices in Edinburgh, Zürich, and St. Moritz. Having worked alongside globally renowned practices including Santiago Calatrava, RMJM, Schneider & Schneider, and Nickl & Partner, his practice unites Swiss precision with British spatial innovation.",
        de: "Piotr Piotrowski ist international tätiger Architekt, Forscher und Gründer von CROPKA architects mit Standorten in Edinburgh, Zürich und St. Moritz. Nach leitenden Stationen bei Santiago Calatrava, RMJM, Schneider & Schneider und Nickl & Partner verbindet er Schweizer Präzision mit britischer Innovationskraft.",
        pl: "Piotr Piotrowski to międzynarodowy architekt, naukowiec i współzałożyciel pracowni CROPKA architects z biurami w Edynburgu, Zurychu i St. Moritz. Doświadczenie zdobywał m.in. u Santiago Calatravy, RMJM, Schneider & Schneider oraz Nickl & Partner, łącząc szwajcarską precyzję z brytyjskim podejściem do innowacji przestrzennych."
      },
      {
        en: "He completed his doctoral thesis at the University of Liechtenstein on 'BIM-Assisted Digital Material Banks', establishing pioneering frameworks for circular building passports, automated life-cycle decarbonization (LCA), and Design for Deconstruction (DfD).",
        de: "Seine Promotion an der Universität Liechtenstein widmete sich dem Thema 'BIM-Assisted Digital Material Banks' zur Entwicklung zirkulärer Materialpässe, automatisierter Lebenszyklusanalysen (LCA) und dekonstruktionsgerechter Fügemethoden.",
        pl: "Obronił doktorat na Uniwersytecie w Liechtensteinie w dziedzinie 'Cyfrowych Banków Materiałów w środowisku BIM', tworząc pionierskie modele paszportów materiałowych, analiz LCA i projektowania obiektów do demontażu (DfD)."
      }
    ],
    disciplines: [
      {
        title: { en: "Architectural Services", de: "Architekturdienstleistungen", pl: "Usługi Architektoniczne" },
        desc: { en: "From major hospital infrastructure and high-speed rail landmarks to luxury Passivhaus chalets and urban bridges.", de: "Von Spitälern und Hochgeschwindigkeitsbahnhöfen bis zu Passivhaus-Residenzen und Brücken.", pl: "Od infrastruktury szpitalnej i dworców po luksusowe rezydencje pasywne i mosty." }
      },
      {
        title: { en: "Circularity Consulting", de: "Zirkularitätsberatung", pl: "Doradztwo w zakresie cyrkularności" },
        desc: { en: "Digital material passports, life-cycle decarbonization (LCA), and Design for Deconstruction (DfD).", de: "Digitale Materialpässe, Ökobilanzierung (LCA) und rückbaubare Konstruktionsprinzipien.", pl: "Paszporty materiałowe budynków, dekarbonizacja cyklu życia (LCA) i zasady DfD." }
      },
      {
        title: { en: "BIM & VDC Consulting", de: "BIM & VDC Beratung", pl: "Doradztwo BIM & VDC" },
        desc: { en: "High-level information modeling, complex multidisciplinary coordination, and 4D/5D computational workflows.", de: "Hochkomplexe Fachkoordination, Modellierungsstandards und 4D/5D-Prozessoptimierung.", pl: "Zaawansowane modelowanie informacji o budynku, koordynacja międzybranżowa i procesy 4D/5D." }
      },
      {
        title: { en: "Research Cooperation", de: "Forschungskooperation", pl: "Współpraca Badawcza" },
        desc: { en: "Academic collaborations on digital material banks, sustainable timber systems, and kinetic prototypes.", de: "Akademische Forschungsprojekte zu Materialbanken, modularem Holzbau und nachhaltigen Fassaden.", pl: "Projekty badawczo-naukowe w zakresie banków materiałów, prefabrykacji drewnianej i fasad." }
      }
    ]
  },

  // Enquire Section
  enquire: {
    title: {
      en: "Studio Inquiry",
      de: "Studio-Anfrage",
      pl: "Zapytanie Ofertowe"
    },
    subtitle: {
      en: "Direct consultation for architectural commissions, circularity audits, and computational VDC strategy.",
      de: "Direkte Kontaktaufnahme für Architekturaufträge, Zirkularitätsberatung und VDC-Strategie.",
      pl: "Bezpośredni kontakt w sprawie projektów architektonicznych, audytów cyrkularności i strategii VDC."
    },
    services: [
      {
        id: "architecture",
        label: {
          en: "Architectural services",
          de: "Architekturdienstleistungen",
          pl: "Usługi architektoniczne"
        }
      },
      {
        id: "circularity",
        label: {
          en: "Circularity consulting",
          de: "Zirkularitätsberatung",
          pl: "Doradztwo w zakresie cyrkularności"
        }
      },
      {
        id: "bim",
        label: {
          en: "BIM & VDC consulting",
          de: "BIM & VDC Beratung",
          pl: "Doradztwo BIM & VDC"
        }
      },
      {
        id: "research",
        label: {
          en: "Research cooperation",
          de: "Forschungskooperation",
          pl: "Współpraca badawcza"
        }
      }
    ],
    labels: {
      name: {
        en: "Your Name / Organization",
        de: "Ihr Name / Organisation",
        pl: "Imię i nazwisko / Organizacja"
      },
      email: {
        en: "Direct Email Address",
        de: "E-Mail-Adresse",
        pl: "Adres e-mail"
      },
      service: {
        en: "Primary Area of Interest",
        de: "Hauptinteressengebiet",
        pl: "Główny obszar zainteresowania"
      },
      location: {
        en: "Project Location / Timeframe",
        de: "Projektstandort / Zeitrahmen",
        pl: "Lokalizacja projektu / Horyzont czasowy"
      },
      message: {
        en: "Project Brief & Objectives",
        de: "Projektbeschreibung & Ziele",
        pl: "Opis projektu i cele"
      },
      studioEmail: {
        en: "Direct Contact: studio@piotrowski.arch | info@cropka.com",
        de: "Direktkontakt: studio@piotrowski.arch | info@cropka.com",
        pl: "Kontakt bezpośredni: studio@piotrowski.arch | info@cropka.com"
      }
    }
  }
};
