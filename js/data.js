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
      en: "Concepts",
      de: "Entwürfe",
      pl: "Koncepcje"
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
    filterStatus: {
      en: "Status:",
      de: "Status:",
      pl: "Status:"
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
      en: "Research spanning digital methods for material reuse, circular construction, computational approaches to complex architectural form, and questions of beauty, longevity and durability in architecture.",
      de: "Forschung zu digitalen Methoden für Bauteilwiederverwendung, zirkuläres Bauen, computergestützten Ansätzen für komplexe architektonische Formen sowie Fragen zu Schönheit, Langlebigkeit und Beständigkeit in der Architektur.",
      pl: "Badania obejmujące cyfrowe metody ponownego wykorzystania materiałów, budownictwo cyrkularne, obliczeniowe podejścia do złożonych form architektonicznych oraz zagadnienia piękna, trwałości i ponadczasowości w architekturze."
    },
    orcidLabel: {
      en: "ORCID: 0009-0009-4058-5684",
      de: "ORCID: 0009-0009-4058-5684",
      pl: "ORCID: 0009-0009-4058-5684"
    },
    orcidUrl: "https://orcid.org/0009-0009-4058-5684",
    items: [
      {
        id: "bim-material-banks",
        date: {
          en: "Aug 2026",
          de: "Aug 2026",
          pl: "Sie 2026"
        },
        typeTag: {
          en: "doctoral thesis",
          de: "Doktorarbeit",
          pl: "praca doktorska"
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
          en: "Borrow from Library (swisscovery) ↗",
          de: "In Bibliothek ausleihen (swisscovery) ↗",
          pl: "Wypożycz w bibliotece (swisscovery) ↗"
        },
        linkUrl: "https://swisscovery.ch/permalink/41SLSP_NETWORK/ck7c0t/alma991173082312305501",
        images: [
          "assets/images/research_circular_cover.webp",
          "assets/images/research_circular.webp"
        ],
        image: "assets/images/research_circular_cover.webp"
      },
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
          en: "Co-authored industry whitepaper examining the Digital Product Passport (DPP) for construction products, its regulatory framework, data structure and integration with openBIM, and its role in supporting transparent, interoperable and circular construction practices.",
          de: "Mitverfasstes Branchen-Whitepaper über den Digitalen Produktpass (DPP) für Bauprodukte, dessen regulatorischen Rahmen, Datenstruktur und Integration mit openBIM sowie seine Rolle bei der Förderung transparenter, interoperabler und zirkulärer Bauweisen.",
          pl: "Współautorstwo branżowej białej księgi analizującej Cyfrowy Paszport Produktu (DPP) dla wyrobów budowlanych, jego ramy regulacyjne, strukturę danych i integrację z openBIM oraz jego rolę we wspieraniu przejrzystych, interoperacyjnych i cyrkularnych praktyk budowlanych."
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
          en: "BIM-enabled material reuse: Needs and barriers from a Swiss–Liechtenstein perspective",
          de: "BIM-enabled material reuse: Needs and barriers from a Swiss–Liechtenstein perspective",
          pl: "BIM-enabled material reuse: Needs and barriers from a Swiss–Liechtenstein perspective"
        },
        venue: {
          en: "Phase0 – Journal für integriertes Planen, Bauen und Betreiben",
          de: "Phase0 – Journal für integriertes Planen, Bauen und Betreiben",
          pl: "Phase0 – Journal für integriertes Planen, Bauen und Betreiben"
        },
        description: {
          en: "Peer-reviewed study examining the practical needs and barriers to BIM-enabled material reuse in Switzerland and Liechtenstein. Based on interviews with industry professionals and a prototype Digital Material Bank, it identifies requirements for lean, automated digital workflows capable of supporting material reuse at scale.",
          de: "Peer-Review-Studie zu den praktischen Bedürfnissen und Barrieren der BIM-gestützten Materialwiederverwendung in der Schweiz und in Liechtenstein. Auf der Grundlage von Experteninterviews und einem Prototyp einer Digitalen Materialbank definiert sie Anforderungen an schlanke, automatisierte digitale Workflows für die zirkuläre Bauteilwiederverwendung.",
          pl: "Recenzowane badanie naukowe analizujące praktyczne potrzeby i bariery w ponownym wykorzystaniu materiałów z wykorzystaniem BIM w Szwajcarii i Liechtensteinie. Na podstawie wywiadów z ekspertami branżowymi i prototypu Cyfrowego Banku Materiałowego określa wymagania dla zautomatyzowanych procesów cyfrowych wspierających obieg zamknięty na dużą skalę."
        },
        linkText: {
          en: "Read Publication (DOI: 10.21428/71cd88bc.5d00b1e2) ↗",
          de: "Publikation lesen (DOI: 10.21428/71cd88bc.5d00b1e2) ↗",
          pl: "Przeczytaj publikację (DOI: 10.21428/71cd88bc.5d00b1e2) ↗"
        },
        linkUrl: "https://doi.org/10.21428/71cd88bc.5d00b1e2",
        image: "assets/images/research_phase0.webp"
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
        image: "assets/images/research_nature.webp"
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
        image: "assets/images/research_sri.webp",
        imageCredit: {
          text: "© Marty B",
          url: "https://commons.wikimedia.org/wiki/File:University_of_Helsinki,_Main_Building_(52890135967).jpg"
        }
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
        images: [
          "assets/images/research_lakhta.webp",
          "assets/images/research_lakhta_2.webp"
        ],
        image: "assets/images/research_lakhta.webp"
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
      en: "Concepts",
      de: "Entwürfe",
      pl: "Koncepcje"
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
          image: "assets/images/research_lakhta.webp",
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
  // COMPREHENSIVE CV & CROPKA GEOLOCATED PROJECTS DATABASE (61 Projects from Official Register)
  // ==========================================================================
  cvProjects: [
    {
      id: "p01-schneider-schneider-theodor-kocher-",
      title: {
        en: "Theodor Kocher Haus, Inselspital",
        de: "Theodor Kocher Haus, Inselspital",
        pl: "Theodor Kocher Haus, Inselspital"
      },
      year: "2015",
      type: "realisation",
      studio: "Schneider & Schneider",
      studioUrl: "https://schneiderschneider.ch/projects/organzentrum-inselspital-bern-2/",
      location: {
        en: "Bern, Switzerland",
        de: "Bern, Schweiz",
        pl: "Bern, Szwajcaria"
      },
      lat: 46.948,
      lng: 7.4474,
      scale: "30.600m2"

    },
    {
      id: "p02-schneider-schneider-zwischenbau-ins",
      title: {
        en: "Zwischenbau, Inselspital",
        de: "Zwischenbau, Inselspital",
        pl: "Zwischenbau, Inselspital"
      },
      year: "2018",
      type: "realisation",
      studio: "Schneider & Schneider",
      studioUrl: "https://schneiderschneider.ch/projects/organzentrum-inselspital-bern-2/",
      location: {
        en: "Bern, Switzerland",
        de: "Bern, Schweiz",
        pl: "Bern, Szwajcaria"
      },
      lat: 46.948,
      lng: 7.4474,
      scale: "3.250m2"

    },
    {
      id: "p03-schneider-schneider-corporate-headq",
      title: {
        en: "Corporate Headquartes",
        de: "Corporate Headquartes",
        pl: "Corporate Headquartes"
      },
      year: "2019",
      type: "realisation",
      studio: "Schneider & Schneider",
      studioUrl: "https://schneiderschneider.ch/projects/ausbau-bueroetage/",
      location: {
        en: "Rotkreuz, Switzerland",
        de: "Rotkreuz, Schweiz",
        pl: "Rotkreuz, Szwajcaria"
      },
      lat: 47.1415,
      lng: 8.4312,
      scale: ""

    },
    {
      id: "p04-schneider-schneider-neubau-schachen",
      title: {
        en: "Neubau Schachenallee Hirslanden Klinik Aarau",
        de: "Neubau Schachenallee Hirslanden Klinik Aarau",
        pl: "Neubau Schachenallee Hirslanden Klinik Aarau"
      },
      year: "2018",
      type: "in_progress",
      studio: "Schneider & Schneider",
      studioUrl: "https://schneiderschneider.ch/projects/hirslanden-klinik-aarau-neubau-schachenallee-2/",
      location: {
        en: "Aarau, Switzerland",
        de: "Aarau, Schweiz",
        pl: "Aarau, Szwajcaria"
      },
      lat: 47.3925,
      lng: 8.0442,
      scale: ""

    },
    {
      id: "p05-schneider-schneider-ambulantes-vers",
      title: {
        en: "Ambulantes Versorgungszentrum Plus (AVZ+)",
        de: "Ambulantes Versorgungszentrum Plus (AVZ+)",
        pl: "Ambulantes Versorgungszentrum Plus (AVZ+)"
      },
      year: "2018",
      type: "competition",
      studio: "Schneider & Schneider",
      studioUrl: "https://schneiderschneider.ch/",
      location: {
        en: "Appenzell Innerrhoden, Switzerland",
        de: "Appenzell Innerrhoden, Schweiz",
        pl: "Appenzell Innerrhoden, Szwajcaria"
      },
      lat: 47.3314,
      lng: 9.4093,
      scale: ""

    },
    {
      id: "p06-schneider-schneider-kantonsspital-a",
      title: {
        en: "Kantonsspital Aarau",
        de: "Kantonsspital Aarau",
        pl: "Kantonsspital Aarau"
      },
      year: "2018",
      type: "competition",
      studio: "Schneider & Schneider",
      studioUrl: "https://schneiderschneider.ch/projects/kantonsspital-aarau/",
      location: {
        en: "Aarau, Switzerland",
        de: "Aarau, Schweiz",
        pl: "Aarau, Szwajcaria"
      },
      lat: 47.3925,
      lng: 8.0442,
      scale: ""

    },
    {
      id: "p07-schneider-schneider-kantonsspital-f",
      title: {
        en: "Kantonsspital Frauenfeld Projekt HORIZONT",
        de: "Kantonsspital Frauenfeld Projekt HORIZONT",
        pl: "Kantonsspital Frauenfeld Projekt HORIZONT"
      },
      year: "2018",
      type: "realisation",
      studio: "Schneider & Schneider",
      studioUrl: "https://schneiderschneider.ch/projects/kantonsspital-frauenfeld-projekt-horizont/",
      location: {
        en: "Frauenfeld, Switzerland",
        de: "Frauenfeld, Schweiz",
        pl: "Frauenfeld, Szwajcaria"
      },
      lat: 47.5574,
      lng: 8.8989,
      scale: ""

    },
    {
      id: "p08-schneider-schneider-future-liebegg",
      title: {
        en: "Future Liebegg",
        de: "Future Liebegg",
        pl: "Future Liebegg"
      },
      year: "2024",
      type: "in_progress",
      studio: "Schneider & Schneider",
      studioUrl: "https://schneiderschneider.ch/projects/landwirtschaftliches-zentrum-future-liebegg-campus/",
      location: {
        en: "Gränichen, Switzerland",
        de: "Gränichen, Schweiz",
        pl: "Gränichen, Szwajcaria"
      },
      lat: 47.3597,
      lng: 8.0997,
      scale: ""

    },
    {
      id: "p09-schneider-schneider-kantonsspital-s",
      title: {
        en: "Kantonsspital St. Gallen (Haus 08)",
        de: "Kantonsspital St. Gallen (Haus 08)",
        pl: "Kantonsspital St. Gallen (Haus 08)"
      },
      year: "2023",
      type: "in_progress",
      studio: "Schneider & Schneider",
      studioUrl: "https://schneiderschneider.ch/projects/erweiterung-kantonsspital-st-gallen-haus-08p/",
      location: {
        en: "St. Gallen, Switzerland",
        de: "St. Gallen, Schweiz",
        pl: "St. Gallen, Szwajcaria"
      },
      lat: 47.4245,
      lng: 9.3767,
      scale: ""

    },
    {
      id: "p10-schneider-schneider-interventionsze",
      title: {
        en: "Interventionszentrum Zoll St. Margrethen",
        de: "Interventionszentrum Zoll St. Margrethen",
        pl: "Interventionszentrum Zoll St. Margrethen"
      },
      year: "2020",
      type: "in_progress",
      studio: "Schneider & Schneider",
      studioUrl: "https://schneiderschneider.ch/projects/zollgebaeude-st-margrethen/",
      location: {
        en: "St. Margrethen, Switzerland",
        de: "St. Margrethen, Schweiz",
        pl: "St. Margrethen, Szwajcaria"
      },
      lat: 47.4539,
      lng: 9.6322,
      scale: ""

    },
    {
      id: "p11-schneider-schneider-nordbau-aeschba",
      title: {
        en: "Nordbau Aeschbachquartier",
        de: "Nordbau Aeschbachquartier",
        pl: "Nordbau Aeschbachquartier"
      },
      year: "2020",
      type: "in_progress",
      studio: "Schneider & Schneider",
      studioUrl: "https://schneiderschneider.ch/projects/umbau-nordbau-aarau/",
      location: {
        en: "Aarau, Switzerland",
        de: "Aarau, Schweiz",
        pl: "Aarau, Szwajcaria"
      },
      lat: 47.3925,
      lng: 8.0442,
      scale: ""

    },
    {
      id: "p12-schneider-schneider-bahnhofsareal-b",
      title: {
        en: "Bahnhofsareal Bremgarten",
        de: "Bahnhofsareal Bremgarten",
        pl: "Bahnhofsareal Bremgarten"
      },
      year: "2020",
      type: "in_progress",
      studio: "Schneider & Schneider",
      studioUrl: "https://schneiderschneider.ch/projects/bahnhofsareal-bremgarten-2/",
      location: {
        en: "Bremgarten, Switzerland",
        de: "Bremgarten, Schweiz",
        pl: "Bremgarten, Szwajcaria"
      },
      lat: 47.3512,
      lng: 8.3397,
      scale: ""

    },
    {
      id: "p13-schneider-schneider-aarreha-zofinge",
      title: {
        en: "aarReha Zofingen Überbauung",
        de: "aarReha Zofingen Überbauung",
        pl: "aarReha Zofingen Überbauung"
      },
      year: "2025",
      type: "in_progress",
      studio: "Schneider & Schneider",
      studioUrl: "https://schneiderschneider.ch/",
      location: {
        en: "Zofingen, Switzerland",
        de: "Zofingen, Schweiz",
        pl: "Zofingen, Szwajcaria"
      },
      lat: 47.2882,
      lng: 7.9452,
      scale: ""

    },
    {
      id: "p14-nickl-partner-kantonsspital-baden-p",
      title: {
        en: "Kantonsspital Baden Projekt Agnes",
        de: "Kantonsspital Baden Projekt Agnes",
        pl: "Kantonsspital Baden Projekt Agnes"
      },
      year: "2016",
      type: "realisation",
      studio: "Nickl & Partner",
      studioUrl: "https://www.nickl-partner.com/projekte/kantonsspital-baden/",
      location: {
        en: "Baden, Switzerland",
        de: "Baden, Schweiz",
        pl: "Baden, Szwajcaria"
      },
      lat: 47.4736,
      lng: 8.3087,
      scale: "76.215m2 / CHF 478M"
,
      awards: "World Architecture Festival (WAF) Award 2025, \nHealing Architecture Award 2025, \nEuropean Healthcare Design Award 2025"

    },
    {
      id: "p15-projx-luxury-private-apartment",
      title: {
        en: "Luxury private apartment",
        de: "Luxury private apartment",
        pl: "Luxury private apartment"
      },
      year: "2013",
      type: "realisation",
      studio: "ProjX",
      studioUrl: "https://www.projx.ch/realizations/privatwohnung-im-luxussegment/",
      location: {
        en: "St. Moritz, Switzerland",
        de: "St. Moritz, Schweiz",
        pl: "St. Moritz, Szwajcaria"
      },
      lat: 46.4908,
      lng: 9.8355,
      scale: ""

    },
    {
      id: "p16-projx-refurbishment-of-badrutt-s-pa",
      title: {
        en: "Refurbishment of Badrutt's Palace Hotel",
        de: "Refurbishment of Badrutt's Palace Hotel",
        pl: "Refurbishment of Badrutt's Palace Hotel"
      },
      year: "2014",
      type: "realisation",
      studio: "ProjX",
      studioUrl: "https://badruttspalace.com/",
      location: {
        en: "St. Moritz, Switzerland",
        de: "St. Moritz, Schweiz",
        pl: "St. Moritz, Szwajcaria"
      },
      lat: 46.4908,
      lng: 9.8355,
      scale: ""

    },
    {
      id: "p17-santiago-calatrava-reggio-emilia-st",
      title: {
        en: "Reggio Emilia Stazione Mediopadana",
        de: "Reggio Emilia Stazione Mediopadana",
        pl: "Reggio Emilia Stazione Mediopadana"
      },
      year: "2012",
      type: "realisation",
      studio: "Santiago Calatrava",
      studioUrl: "https://calatrava.com/projects/reggio-emilia-stazione-mediopadana-reggio-emilia.html",
      location: {
        en: "Reggio Emilia, Italy",
        de: "Reggio Emilia, Italien",
        pl: "Reggio Emilia, Włochy"
      },
      lat: 44.6983,
      lng: 10.6306,
      scale: "€80M"
,
      awards: "ECCS European Steel Design Award 2009"

    },
    {
      id: "p18-santiago-calatrava-aerospace-museum",
      title: {
        en: "Aerospace Museum",
        de: "Aerospace Museum",
        pl: "Aerospace Museum"
      },
      year: "2012",
      type: "competition",
      studio: "Santiago Calatrava",
      studioUrl: "",
      location: {
        en: "Doha, Qatar",
        de: "Doha, Qatar",
        pl: "Doha, Qatar"
      },
      lat: 25.2854,
      lng: 51.531,
      scale: "64,000 m²"

    },
    {
      id: "p19-santiago-calatrava-margaret-hunt-hi",
      title: {
        en: "Margaret Hunt Hill Bridge",
        de: "Margaret Hunt Hill Bridge",
        pl: "Margaret Hunt Hill Bridge"
      },
      year: "2011",
      type: "realisation",
      studio: "Santiago Calatrava",
      studioUrl: "https://calatrava.com/projects/margaret-hunt-hill-bridge.html",
      location: {
        en: "Dallas, United States",
        de: "Dallas, USA",
        pl: "Dallas, USA"
      },
      lat: 32.7767,
      lng: -96.797,
      scale: "Lenght: 358m Span: 184m"
,
      awards: "ECCS European Award for Steel Bridges 2012"

    },
    {
      id: "p20-santiago-calatrava-train-station",
      title: {
        en: "Train station",
        de: "Train station",
        pl: "Train station"
      },
      year: "2011",
      type: "realisation",
      studio: "Santiago Calatrava",
      studioUrl: "https://calatrava.ch/projects/gare-de-mons-mons.html",
      location: {
        en: "Mons, Belgium",
        de: "Mons, Belgium",
        pl: "Mons, Belgium"
      },
      lat: 50.4542,
      lng: 3.9567,
      scale: "€130M"
,
      awards: "Prix Versailles 2025"

    },
    {
      id: "p21-rmjm-napier-university-sighthill-ca",
      title: {
        en: "Napier University Sighthill Campus",
        de: "Napier University Sighthill Campus",
        pl: "Napier University Sighthill Campus"
      },
      year: "2008",
      type: "realisation",
      studio: "RMJM",
      studioUrl: "https://www.architectsjournal.co.uk/archive/rmjms-60-million-napier-uni-scheme-opens-doors",
      location: {
        en: "Edinburgh, United Kingdom",
        de: "Edinburgh, Grossbritannien",
        pl: "Edinburgh, Wielka Brytania"
      },
      lat: 55.9533,
      lng: -3.1883,
      scale: "24.428m2 / £48M"
,
      awards: "2011 RIBA Awards (Shortlisted)"

    },
    {
      id: "p22-rmjm-jewel-esk-valley-college",
      title: {
        en: "Jewel & Esk Valley College",
        de: "Jewel & Esk Valley College",
        pl: "Jewel & Esk Valley College"
      },
      year: "2007",
      type: "realisation",
      studio: "RMJM",
      studioUrl: "https://rmjm.com/portfolio/jewel-esk-college/",
      location: {
        en: "Edinburgh and Dalkeith, United Kingdom",
        de: "Edinburgh and Dalkeith, Grossbritannien",
        pl: "Edinburgh and Dalkeith, Wielka Brytania"
      },
      lat: 55.92,
      lng: -3.1,
      scale: "£52M"

    },
    {
      id: "p23-rmjm-doncaster-bloodstock-sales-are",
      title: {
        en: "Doncaster Bloodstock Sales Arena",
        de: "Doncaster Bloodstock Sales Arena",
        pl: "Doncaster Bloodstock Sales Arena"
      },
      year: "2006",
      type: "realisation",
      studio: "RMJM",
      studioUrl: "https://rmjm.com/portfolio/doncaster-bloodstock-complex/",
      location: {
        en: "Doncaster, United Kingdom",
        de: "Doncaster, Grossbritannien",
        pl: "Doncaster, Wielka Brytania"
      },
      lat: 53.5228,
      lng: -1.1288,
      scale: "1.790m2 / £5.5M"
,
      awards: "2010 Scottish Design Awards Commendation"

    },
    {
      id: "p24-rmjm-newcastle-college-rye-hill-hou",
      title: {
        en: "Newcastle College Rye Hill House",
        de: "Newcastle College Rye Hill House",
        pl: "Newcastle College Rye Hill House"
      },
      year: "2006",
      type: "realisation",
      studio: "RMJM",
      studioUrl: "https://rmjm.com/portfolio/rye-hill-house/",
      location: {
        en: "Newcastle, United Kingdom",
        de: "Newcastle, Grossbritannien",
        pl: "Newcastle, Wielka Brytania"
      },
      lat: 54.9783,
      lng: -1.6178,
      scale: "3.300m2 / £5.2M"
,
      awards: "2007 Commendations from the local Lord Mayor"

    },
    {
      id: "p25-rmjm-pyramids-business-park",
      title: {
        en: "Pyramids Business Park",
        de: "Pyramids Business Park",
        pl: "Pyramids Business Park"
      },
      year: "2005",
      type: "realisation",
      studio: "RMJM",
      studioUrl: "",
      location: {
        en: "Bathgate, United Kingdom",
        de: "Bathgate, Grossbritannien",
        pl: "Bathgate, Wielka Brytania"
      },
      lat: 55.9027,
      lng: -3.642,
      scale: "4.058m2 / £1.25M"

    },
    {
      id: "p26-rmjm-syetun-housing-estate",
      title: {
        en: "Syetun Housing Estate",
        de: "Syetun Housing Estate",
        pl: "Syetun Housing Estate"
      },
      year: "2005",
      type: "competition",
      studio: "RMJM",
      studioUrl: "",
      location: {
        en: "Moscow, Russia",
        de: "Moscow, Russia",
        pl: "Moscow, Russia"
      },
      lat: 55.7558,
      lng: 37.6173,
      scale: ""
,
      awards: "2006 1st prize in an international housing competition, \nARX AWARDS 2007 - best tall building in Russia"

    },
    {
      id: "p27-rmjm-national-oil-and-gas-authority",
      title: {
        en: "National Oil and Gas Authority HQ",
        de: "National Oil and Gas Authority HQ",
        pl: "National Oil and Gas Authority HQ"
      },
      year: "2011",
      type: "competition",
      studio: "RMJM",
      studioUrl: "https://www.tjeg.com/portfolio/noga-headquaters/",
      location: {
        en: "Bahrain",
        de: "Bahrain",
        pl: "Bahrain"
      },
      lat: 26.2285,
      lng: 50.586,
      scale: ""

    },
    {
      id: "p28-rmjm-bells-brae-6-office-refurbishm",
      title: {
        en: "Bells Brae 6 office refurbishment",
        de: "Bells Brae 6 office refurbishment",
        pl: "Bells Brae 6 office refurbishment"
      },
      year: "2011",
      type: "realisation",
      studio: "RMJM",
      studioUrl: "",
      location: {
        en: "Bells Brae 6, Edinburgh, United Kingdom",
        de: "Bells Brae 6, Edinburgh, Grossbritannien",
        pl: "Bells Brae 6, Edinburgh, Wielka Brytania"
      },
      lat: 55.9515,
      lng: -3.216,
      scale: ""

    },
    {
      id: "p29-rmjm-bells-brae-10-office-refurbish",
      title: {
        en: "Bells Brae 10 office refurbishment",
        de: "Bells Brae 10 office refurbishment",
        pl: "Bells Brae 10 office refurbishment"
      },
      year: "2010",
      type: "realisation",
      studio: "RMJM",
      studioUrl: "",
      location: {
        en: "Bells Brae 10, Edinburgh, United Kingdom",
        de: "Bells Brae 10, Edinburgh, Grossbritannien",
        pl: "Bells Brae 10, Edinburgh, Wielka Brytania"
      },
      lat: 55.9517,
      lng: -3.2165,
      scale: ""

    },
    {
      id: "p30-rmjm-avia-park-shopping-centre",
      title: {
        en: "Avia Park Shopping Centre",
        de: "Avia Park Shopping Centre",
        pl: "Avia Park Shopping Centre"
      },
      year: "2005",
      type: "competition",
      studio: "RMJM",
      studioUrl: "",
      location: {
        en: "Moscow, Russia",
        de: "Moscow, Russia",
        pl: "Moscow, Russia"
      },
      lat: 55.7558,
      lng: 37.6173,
      scale: ""

    },
    {
      id: "p31-rmjm-evolution-tower",
      title: {
        en: "Evolution Tower",
        de: "Evolution Tower",
        pl: "Evolution Tower"
      },
      year: "2005",
      type: "realisation",
      studio: "RMJM",
      studioUrl: "https://en.wikipedia.org/wiki/Evolution_Tower",
      location: {
        en: "Moscow, Russia",
        de: "Moscow, Russia",
        pl: "Moscow, Russia"
      },
      lat: 55.7558,
      lng: 37.6173,
      scale: "169.000m2 / 55 storey"
,
      awards: "Emporis Skyscraper Award 2015 (2nd place),\nGlass in Architecture 2015 (Grand Prix),\nNOPRIZ Awards Competition 2015 (First Prize),\nCRE Award Moscow 2016 (best class A office building),\nCity Authorities Award 2014 (Moscow's best multi-use building)"

    },
    {
      id: "p32-rmjm-king-s-stables-road-developmen",
      title: {
        en: "King's Stables Road Development",
        de: "King's Stables Road Development",
        pl: "King's Stables Road Development"
      },
      year: "2005",
      type: "competition",
      studio: "RMJM",
      studioUrl: "",
      location: {
        en: "King's Stables Road, Edinburgh, United Kingdom",
        de: "King's Stables Road, Edinburgh, Grossbritannien",
        pl: "King's Stables Road, Edinburgh, Wielka Brytania"
      },
      lat: 55.9472,
      lng: -3.201,
      scale: ""

    },
    {
      id: "p33-rmjm-royal-museum-refurbishment",
      title: {
        en: "Royal Museum refurbishment",
        de: "Royal Museum refurbishment",
        pl: "Royal Museum refurbishment"
      },
      year: "2005",
      type: "realisation",
      studio: "RMJM",
      studioUrl: "",
      location: {
        en: "Edinburgh, United Kingdom",
        de: "Edinburgh, Grossbritannien",
        pl: "Edinburgh, Wielka Brytania"
      },
      lat: 55.9533,
      lng: -3.1883,
      scale: ""

    },
    {
      id: "p34-rmjm-tron-kirk-conversion",
      title: {
        en: "Tron Kirk conversion",
        de: "Tron Kirk conversion",
        pl: "Tron Kirk conversion"
      },
      year: "2006",
      type: "competition",
      studio: "RMJM",
      studioUrl: "",
      location: {
        en: "Edinburgh, United Kingdom",
        de: "Edinburgh, Grossbritannien",
        pl: "Edinburgh, Wielka Brytania"
      },
      lat: 55.9533,
      lng: -3.1883,
      scale: ""

    },
    {
      id: "p35-cropka-augusta-raurica",
      title: {
        en: "Augusta Raurica",
        de: "Augusta Raurica",
        pl: "Augusta Raurica"
      },
      year: "2014",
      type: "competition",
      studio: "CROPKA",
      studioUrl: "",
      location: {
        en: "Basel Land, Switzerland",
        de: "Basel Land, Schweiz",
        pl: "Basel Land, Szwajcaria"
      },
      lat: 47.5333,
      lng: 7.7208,
      scale: "7'253 m2"
,
      hasInternalDetail: true,
      internalId: "augusta-raurica",
      internalCategory: "architecture"

    },
    {
      id: "p36-cropka-baileyfield-hotel-concept-st",
      title: {
        en: "Baileyfield Hotel concept study",
        de: "Baileyfield Hotel concept study",
        pl: "Baileyfield Hotel concept study"
      },
      year: "2011",
      type: "competition",
      studio: "CROPKA",
      studioUrl: "",
      location: {
        en: "Edinburgh, United Kingdom",
        de: "Edinburgh, Grossbritannien",
        pl: "Edinburgh, Wielka Brytania"
      },
      lat: 55.9533,
      lng: -3.1883,
      scale: "9'838 m2"

    },
    {
      id: "p37-cropka-bridge-over-vistula-river",
      title: {
        en: "Bridge over Vistula River",
        de: "Bridge over Vistula River",
        pl: "Bridge over Vistula River"
      },
      year: "2017",
      type: "competition",
      studio: "CROPKA",
      studioUrl: "",
      location: {
        en: "Warsaw, Poland",
        de: "Warsaw, Polen",
        pl: "Warszawa, Polska"
      },
      lat: 52.2297,
      lng: 21.0122,
      scale: "Span: 450m"
,
      hasInternalDetail: true,
      internalId: "vst-bridge-warsaw",
      internalCategory: "architecture"

    },
    {
      id: "p38-cropka-crematorium-thun",
      title: {
        en: "Crematorium Thun",
        de: "Crematorium Thun",
        pl: "Crematorium Thun"
      },
      year: "2015",
      type: "competition",
      studio: "CROPKA",
      studioUrl: "",
      location: {
        en: "Thun, Switzerland",
        de: "Thun, Schweiz",
        pl: "Thun, Szwajcaria"
      },
      lat: 46.758,
      lng: 7.628,
      scale: "2'485 m2"
,
      hasInternalDetail: true,
      internalId: "thun-crematorium",
      internalCategory: "architecture"

    },
    {
      id: "p39-cropka-drylaw-house",
      title: {
        en: "Drylaw House",
        de: "Drylaw House",
        pl: "Drylaw House"
      },
      year: "2017",
      type: "competition",
      studio: "CROPKA",
      studioUrl: "",
      location: {
        en: "Drylaw, Edinburgh, United Kingdom",
        de: "Drylaw, Edinburgh, Grossbritannien",
        pl: "Drylaw, Edinburgh, Wielka Brytania"
      },
      lat: 55.968,
      lng: -3.253,
      scale: "4'385 m2"

    },
    {
      id: "p40-cropka-gillian-single-family-house",
      title: {
        en: "Gillian single family house",
        de: "Gillian single family house",
        pl: "Gillian single family house"
      },
      year: "2010",
      type: "competition",
      studio: "CROPKA",
      studioUrl: "",
      location: {
        en: "Scotland",
        de: "Scotland",
        pl: "Scotland"
      },
      lat: 56.4907,
      lng: -4.2026,
      scale: "60 m2"
,
      hasInternalDetail: true,
      internalId: "gillian-kit-home",
      internalCategory: "architecture"

    },
    {
      id: "p41-cropka-kindergarten-wildenstein",
      title: {
        en: "Kindergarten Wildenstein",
        de: "Kindergarten Wildenstein",
        pl: "Kindergarten Wildenstein"
      },
      year: "2014",
      type: "competition",
      studio: "CROPKA",
      studioUrl: "",
      location: {
        en: "Rohrschacherberg, Switzerland",
        de: "Rohrschacherberg, Schweiz",
        pl: "Rohrschacherberg, Szwajcaria"
      },
      lat: 47.4883,
      lng: 9.5083,
      scale: "424 m2"
,
      hasInternalDetail: true,
      internalId: "kindergarten-wildenstein",
      internalCategory: "architecture"

    },
    {
      id: "p42-cropka-le-taguy",
      title: {
        en: "Le Taguy",
        de: "Le Taguy",
        pl: "Le Taguy"
      },
      year: "2021",
      type: "realisation",
      studio: "CROPKA",
      studioUrl: "",
      location: {
        en: "Saint-Gervais-les-Bains, France",
        de: "Saint-Gervais-les-Bains, Frankreich",
        pl: "Saint-Gervais-les-Bains, Francja"
      },
      lat: 45.892,
      lng: 6.713,
      scale: "24 m2"
,
      hasInternalDetail: true,
      internalId: "le-taguy-chamonix",
      internalCategory: "architecture"

    },
    {
      id: "p43-cropka-museum-of-the-lubomirski-pri",
      title: {
        en: "Museum of the Lubomirski Princes",
        de: "Museum of the Lubomirski Princes",
        pl: "Museum of the Lubomirski Princes"
      },
      year: "2018",
      type: "competition",
      studio: "CROPKA",
      studioUrl: "",
      location: {
        en: "Wroclaw, Poland",
        de: "Wroclaw, Polen",
        pl: "Wroclaw, Polska"
      },
      lat: 51.1079,
      lng: 17.0385,
      scale: "7'962 m2"
,
      hasInternalDetail: true,
      internalId: "ossolineum-museum",
      internalCategory: "architecture"

    },
    {
      id: "p44-cropka-national-maritime-museum",
      title: {
        en: "National Maritime Museum",
        de: "National Maritime Museum",
        pl: "National Maritime Museum"
      },
      year: "2015",
      type: "competition",
      studio: "CROPKA",
      studioUrl: "",
      location: {
        en: "Leba, Poland",
        de: "Leba, Polen",
        pl: "Leba, Polska"
      },
      lat: 54.76,
      lng: 17.55,
      scale: "4'510 m2"
,
      awards: "2015 - shortlisted in final"

    },
    {
      id: "p45-trevor-black-architects-multi-famil",
      title: {
        en: "Multi-family housing estate",
        de: "Multi-family housing estate",
        pl: "Multi-family housing estate"
      },
      year: "2004",
      type: "realisation",
      studio: "Trevor Black Architects",
      studioUrl: "http://www.trevorblackarchitects.co.uk",
      location: {
        en: "Conon Bridge, United Kingdom",
        de: "Conon Bridge, Grossbritannien",
        pl: "Conon Bridge, Wielka Brytania"
      },
      lat: 57.568,
      lng: -4.432,
      scale: ""

    },
    {
      id: "p46-trevor-black-architects-conversion-",
      title: {
        en: "Conversion of church into housing",
        de: "Conversion of church into housing",
        pl: "Conversion of church into housing"
      },
      year: "2004",
      type: "realisation",
      studio: "Trevor Black Architects",
      studioUrl: "http://www.trevorblackarchitects.co.uk",
      location: {
        en: "Helmsdale, United Kingdom",
        de: "Helmsdale, Grossbritannien",
        pl: "Helmsdale, Wielka Brytania"
      },
      lat: 58.118,
      lng: -3.652,
      scale: ""

    },
    {
      id: "p47-trevor-black-architects-single-fami",
      title: {
        en: "Single family house",
        de: "Single family house",
        pl: "Single family house"
      },
      year: "2004",
      type: "realisation",
      studio: "Trevor Black Architects",
      studioUrl: "http://www.trevorblackarchitects.co.uk",
      location: {
        en: "Invergordon, United Kingdom",
        de: "Invergordon, Grossbritannien",
        pl: "Invergordon, Wielka Brytania"
      },
      lat: 57.688,
      lng: -4.17,
      scale: ""

    },
    {
      id: "p48-studio-bara-ska-bernardi-single-fam",
      title: {
        en: "Single family house - interior design",
        de: "Single family house - interior design",
        pl: "Single family house - interior design"
      },
      year: "2003",
      type: "realisation",
      studio: "Studio Bara\u0144ska - Bernardi",
      studioUrl: "",
      location: {
        en: "Wrocław, Poland",
        de: "Wrocław, Polen",
        pl: "Wrocław, Polska"
      },
      lat: 51.1079,
      lng: 17.0385,
      scale: ""

    },
    {
      id: "p49-projx-luxury-private-apartment",
      title: {
        en: "Luxury private apartment",
        de: "Luxury private apartment",
        pl: "Luxury private apartment"
      },
      year: "2014",
      type: "realisation",
      studio: "ProjX",
      studioUrl: "https://www.houstonmorris.com/projects/apartment-switzerland/",
      location: {
        en: "Pontresina, Switzerland",
        de: "Pontresina, Schweiz",
        pl: "Pontresina, Szwajcaria"
      },
      lat: 46.49,
      lng: 9.9056,
      scale: ""

    },
    {
      id: "p50-cropka-national-polish-television-h",
      title: {
        en: "National Polish Television HQ",
        de: "National Polish Television HQ",
        pl: "National Polish Television HQ"
      },
      year: "2015",
      type: "competition",
      studio: "CROPKA",
      studioUrl: "",
      location: {
        en: "Warsaw, Poland",
        de: "Warsaw, Polen",
        pl: "Warszawa, Polska"
      },
      lat: 52.2297,
      lng: 21.0122,
      scale: "23'700 m2"
,
      awards: "2015 - Award winner (4th place)"
,
      hasInternalDetail: true,
      internalId: "tvp-headquarters",
      internalCategory: "architecture"

    },
    {
      id: "p51-cropka-private-house-in-omnica",
      title: {
        en: "Private house in Łomnica",
        de: "Private house in Łomnica",
        pl: "Private house in Łomnica"
      },
      year: "2021",
      type: "realisation",
      studio: "CROPKA",
      studioUrl: "",
      location: {
        en: "Łomnica (Karkonosze), Poland",
        de: "Łomnica (Karkonosze), Polen",
        pl: "Łomnica (Karkonosze), Polska"
      },
      lat: 50.876,
      lng: 15.808,
      scale: "295 m2"
,
      hasInternalDetail: true,
      internalId: "house-in-lomnica",
      internalCategory: "architecture"

    },
    {
      id: "p52-cropka-sports-club-h-ngg",
      title: {
        en: "Sports Club Höngg",
        de: "Sports Club Höngg",
        pl: "Sports Club Höngg"
      },
      year: "2017",
      type: "competition",
      studio: "CROPKA",
      studioUrl: "",
      location: {
        en: "Hoengg, Zurich, Switzerland",
        de: "Hoengg, Zurich, Schweiz",
        pl: "Hoengg, Zurich, Szwajcaria"
      },
      lat: 47.4042,
      lng: 8.4975,
      scale: "1'980 m2"

    },
    {
      id: "p53-cropka-spylaw-park",
      title: {
        en: "Spylaw Park",
        de: "Spylaw Park",
        pl: "Spylaw Park"
      },
      year: "2019",
      type: "competition",
      studio: "CROPKA",
      studioUrl: "",
      location: {
        en: "Spylaw Park, Edinburgh, United Kingdom",
        de: "Spylaw Park, Edinburgh, Grossbritannien",
        pl: "Spylaw Park, Edinburgh, Wielka Brytania"
      },
      lat: 55.908,
      lng: -3.265,
      scale: "173 m2"
,
      hasInternalDetail: true,
      internalId: "spylaw-park-house",
      internalCategory: "architecture"

    },
    {
      id: "p54-cropka-the-mart-masterplan",
      title: {
        en: "The Mart Masterplan",
        de: "The Mart Masterplan",
        pl: "The Mart Masterplan"
      },
      year: "2019",
      type: "competition",
      studio: "CROPKA",
      studioUrl: "",
      location: {
        en: "East Linton, Scotland",
        de: "East Linton, Scotland",
        pl: "East Linton, Scotland"
      },
      lat: 55.93,
      lng: -2.95,
      scale: "9'720 m2"

    },
    {
      id: "p55-cropka-uallas-single-family-house",
      title: {
        en: "Uallas single family house",
        de: "Uallas single family house",
        pl: "Uallas single family house"
      },
      year: "2010",
      type: "competition",
      studio: "CROPKA",
      studioUrl: "",
      location: {
        en: "Scotland",
        de: "Scotland",
        pl: "Scotland"
      },
      lat: 56.4907,
      lng: -4.2026,
      scale: "170 m2"
,
      hasInternalDetail: true,
      internalId: "uallas-kit-home",
      internalCategory: "architecture"

    },
    {
      id: "p56-cropka-upmo-performing-arts-hub",
      title: {
        en: "UpMo Performing Arts Hub",
        de: "UpMo Performing Arts Hub",
        pl: "UpMo Performing Arts Hub"
      },
      year: "2019",
      type: "competition",
      studio: "CROPKA",
      studioUrl: "",
      location: {
        en: "Leith, Edinburgh, Scotland",
        de: "Leith, Edinburgh, Scotland",
        pl: "Leith, Edinburgh, Scotland"
      },
      lat: 55.975,
      lng: -3.17,
      scale: ""

    },
    {
      id: "p57-cropka-viaduc-de-la-baye-de-clarens",
      title: {
        en: "Viaduc de la Baye de Clarens",
        de: "Viaduc de la Baye de Clarens",
        pl: "Viaduc de la Baye de Clarens"
      },
      year: "2016",
      type: "competition",
      studio: "CROPKA",
      studioUrl: "",
      location: {
        en: "Clarens, Switzerland",
        de: "Clarens, Schweiz",
        pl: "Clarens, Szwajcaria"
      },
      lat: 46.442,
      lng: 6.895,
      scale: "Span: 130m"

    },
    {
      id: "p58-cropka-villa-mw",
      title: {
        en: "Villa MW",
        de: "Villa MW",
        pl: "Villa MW"
      },
      year: "2019",
      type: "competition",
      studio: "CROPKA",
      studioUrl: "",
      location: {
        en: "Jelenia Gora, Poland",
        de: "Jelenia Gora, Polen",
        pl: "Jelenia Gora, Polska"
      },
      lat: 50.9044,
      lng: 15.7389,
      scale: "195 m2"

    },
    {
      id: "p59-cropka-visitor-shelters-wester-ross",
      title: {
        en: "Visitor Shelters Wester Ross",
        de: "Visitor Shelters Wester Ross",
        pl: "Visitor Shelters Wester Ross"
      },
      year: "2016",
      type: "competition",
      studio: "CROPKA",
      studioUrl: "",
      location: {
        en: "Wester Ross, United Kingdom",
        de: "Wester Ross, Grossbritannien",
        pl: "Wester Ross, Wielka Brytania"
      },
      lat: 57.733,
      lng: -5.333,
      scale: ""

    },
    {
      id: "p60-cropka-western-terrace",
      title: {
        en: "Western Terrace",
        de: "Western Terrace",
        pl: "Western Terrace"
      },
      year: "2019",
      type: "competition",
      studio: "CROPKA",
      studioUrl: "",
      location: {
        en: "Western Terrace, Edinburgh, United Kingdom",
        de: "Western Terrace, Edinburgh, Grossbritannien",
        pl: "Western Terrace, Edinburgh, Wielka Brytania"
      },
      lat: 55.945,
      lng: -3.235,
      scale: "172 m2"

    },
    {
      id: "p61-cropka-zollhaus-mixed-use-developme",
      title: {
        en: "Zollhaus Mixed Use Development",
        de: "Zollhaus Mixed Use Development",
        pl: "Zollhaus Mixed Use Development"
      },
      year: "2015",
      type: "competition",
      studio: "CROPKA",
      studioUrl: "",
      location: {
        en: "Zurich, Switzerland",
        de: "Zurich, Schweiz",
        pl: "Zurich, Szwajcaria"
      },
      lat: 47.3769,
      lng: 8.5417,
      scale: "14'300 m2"
,
      hasInternalDetail: true,
      internalId: "zollhaus-zurich",
      internalCategory: "architecture"

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
      en: "PhD, Architect & Engineer",
      de: "Dr. sc., Architekt & Ingenieur",
      pl: "dr inż. arch."
    },
    role: {
      en: "PhD, Architect & Engineer",
      de: "Dr. sc., Architekt & Ingenieur",
      pl: "dr inż. arch."
    },
    paragraphs: [
      {
        en: "Piotr Piotrowski is an architect, BIM manager and researcher with more than two decades of professional experience across architecture, design technology and the built environment. His work combines architectural design with digital methods, process development and research into more sustainable ways of designing, constructing and transforming buildings.",
        de: "Piotr Piotrowski ist Architekt, BIM-Manager und Forscher mit über zwei Jahrzehnten Berufserfahrung in Architektur, Planungstechnologie und der gebauten Umwelt. Seine Arbeit verbindet architektonischen Entwurf mit digitalen Methoden, Prozessentwicklung und Forschung zu nachhaltigeren Ansätzen des Entwerfens, Bauens und Transformierens von Gebäuden.",
        pl: "Piotr Piotrowski jest architektem, BIM managerem i naukowcem z ponad dwudziestoletnim doświadczeniem zawodowym w architekturze, technologii projektowania oraz środowisku budowlanym. Jego praca łączy projektowanie architektoniczne z metodami cyfrowymi, rozwojem procesów oraz badaniami nad bardziej zrównoważonymi sposobami projektowania, wznoszenia i transformacji budynków."
      },
      {
        en: "His architectural experience spans projects in Switzerland, the United Kingdom, Poland and internationally, ranging from design-led architecture to large and technically complex projects. Alongside architectural practice, he has developed particular expertise in Building Information Modelling (BIM), Virtual Design and Construction (VDC), information management and the development of digital workflows that improve coordination, quality and decision-making throughout the design process.",
        de: "Seine architektonische Erfahrung umfasst Projekte in der Schweiz, Grossbritannien, Polen und international – von designorientierter Architektur bis hin zu grossen und technisch komplexen Bauvorhaben. Neben der Architekturpraxis verfügt er über ausgewiesene Expertise in Building Information Modelling (BIM), Virtual Design and Construction (VDC), Informationsmanagement und der Entwicklung digitaler Workflows zur Optimierung von Koordination, Qualität und Entscheidungsfindung im gesamten Planungsprozess.",
        pl: "Jego doświadczenie architektoniczne obejmuje projekty w Szwajcarii, Wielkiej Brytanii, Polsce oraz na arenie międzynarodowej – od autorskiej architektury po wielkoskalowe i technicznie złożone przedsięwzięcia. Równolegle z praktyką projektową rozwinął szczególną wiedzę w zakresie Building Information Modelling (BIM), Virtual Design and Construction (VDC), zarządzania informacją oraz tworzenia cyfrowych procedur podnoszących jakość koordynacji i procesów decyzyjnych."
      },
      {
        en: "A central focus of his current work is circular construction and the reuse of building materials and components. His doctoral research at the University of Liechtenstein investigated how BIM-assisted Digital Material Banks can make information about existing buildings more accessible and support material reuse at scale. This research brings together architecture, digital technology and practical implementation, with a particular interest in low-threshold tools that can be integrated into everyday professional workflows.",
        de: "Ein zentraler Schwerpunkt seiner aktuellen Arbeit liegt auf dem zirkulären Bauen und der Wiederverwendung von Baumaterialien und Bauteilen. Seine Doktoratsforschung an der Universität Liechtenstein untersuchte, wie BIM-gestützte digitale Materialbanken Informationen über bestehende Gebäude zugänglicher machen und die Bauteilwiederverwendung im grossen Massstab unterstützen können. Diese Forschung verbindet Architektur, digitale Technologie und praktische Umsetzung mit besonderem Fokus auf niederschwellige Werkzeuge für den beruflichen Alltag.",
        pl: "Kluczowym obszarem jego obecnej działalności jest budownictwo cyrkularne oraz ponowne wykorzystanie materiałów i komponentów budowlanych. Jego badania doktorskie na Uniwersytecie w Liechtensteinie analizowały, jak cyfrowe banki materiałów wspierane przez BIM mogą ułatwić dostęp do informacji o istniejących budynkach i umożliwić ponowne wykorzystanie materiałów na dużą skalę. Badania te łączą architekturę, technologie cyfrowe i praktyczne wdrożenie, ze szczególnym uwzględnieniem przystępnych narzędzi integrowanych z codzienną praktyką zawodową."
      },
      {
        en: "Across practice and research, his interests centre on architectural quality, digitalisation, automation, circular design and the long-term value of buildings and materials.",
        de: "Über Praxis und Forschung hinweg konzentrieren sich seine Interessen auf architektonische Qualität, Digitalisierung, Automatisierung, zirkuläres Entwerfen und den langfristigen Wert von Gebäuden und Materialien.",
        pl: "Zarówno w praktyce, jak i w działalności naukowej, jego zainteresowania koncentrują się na jakości architektonicznej, cyfryzacji, automatyzacji, projektowaniu cyrkularnym oraz długoterminowej wartości budynków i materiałów."
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
      en: "Collaboration Enquiry",
      de: "Anfrage zur Zusammenarbeit",
      pl: "Zapytanie o współpracę"
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
      }
    }
  }
};
