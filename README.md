# Piotr Piotrowski — Architectural Portfolio & Spatial Design Engine

Modern, monochrome architectural portfolio featuring:
- **Interactive Vector World Map Explorer**: Custom mathematical Robinson projection engine with smooth cinematic zooming, constant-radius project pins, and dynamic spatial filtering.
- **Editorial Typography & Manifesto**: Responsive multi-lingual typography across English (EN), German (DE), and Polish (PL).
- **Digitalisation Stage**: Live coding simulation engine with architectural syntax highlighting and smooth terminal animations.
- **Inquiry & Monograph Systems**: Responsive contact form and project monograph layouts.

---

## Folder Structure

```text
piotrowski-portfolio/
├── .gitignore                      # Excludes media/large binaries from Git
├── index.html                      # Core HTML layout and stage markup
├── README.md                       # Documentation & recreation guide
│
├── css/
│   └── styles.css                  # Minimalist design system & responsive styling
│
├── js/
│   ├── data.js                     # Project monographs, translations (EN/DE/PL), manifesto
│   ├── main.js                     # App router & digitalisation live coding engine
│   ├── world-map.js                # Vector Robinson projection map engine & interactive pins
│   └── world-map-data.js           # Seamless vector continental geometries
│
└── assets/                         # <-- Media folder (copied from Google Drive backup)
    ├── images/
    │   ├── 01_HKPB_CAM_AeroSouth_People_web.jpg
    │   ├── arch_loft.jpg
    │   ├── arch_museum.jpg
    │   ├── augusta_02_1200.jpg
    │   ├── CROPKA_Le_Taguy_Mont_Blanc_Living_Room_01_1200.jpg
    │   ├── CROPKA_MYS_front_1200_675.jpg
    │   ├── design_object.jpg
    │   ├── front_diagram.jpg
    │   ├── gillian_1403_800.jpg
    │   ├── KRE_exterior_01.jpg
    │   ├── Muzeum_Ossolineum_02_1200x675.jpg
    │   ├── mxv_01_valley_1200_675.jpg
    │   ├── research_circular.jpg
    │   ├── Spylaw_Edinburgh_CROPKA_1200_675.jpg
    │   ├── tvp_01_woronicza_1200_675.jpg
    │   ├── uallas.jpg
    │   ├── VST_1200_675_drone.jpg
    │   ├── zollhaus_flats_offices_restaurant.jpg
    │   │
    │   └── letaguy/
    │       ├── CROPKA_Le_Taguy_Mont_Blanc_Bathroom_01_1200.jpg
    │       ├── CROPKA_Le_Taguy_Mont_Blanc_Bathroom_02_1200.jpg
    │       ├── CROPKA_Le_Taguy_Mont_Blanc_Bedroom_01_1200.jpg
    │       ├── CROPKA_Le_Taguy_Mont_Blanc_Bedroom_02_1200.jpg
    │       ├── CROPKA_Le_Taguy_Mont_Blanc_Living_01_1200.jpg
    │       ├── CROPKA_Le_Taguy_Mont_Blanc_Living_02_1200.jpg
    │       └── CROPKA_Le_Taguy_Mont_Blanc_Living_03_1200.jpg
    │
    └── videos/
        └── PPwebVideo.mp4
```

---

## Recreating the Project on Another PC

### 1. Clone the Codebase
```bash
git clone https://github.com/VolgardTheScientist/piotr.owski.git
cd piotr.owski
```

### 2. Copy Media Assets from Google Drive
Download `piotrowski_media_for_GDrive.zip` from your Google Drive backup and extract its contents into the `assets/` directory at the project root so it matches the folder structure above.

### 3. Run Locally
Start a local static web server:
```bash
python -m http.server 3000
```
Open **`http://localhost:3000`** in any modern web browser.
