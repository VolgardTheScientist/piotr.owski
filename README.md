# Piotr Piotrowski — Architecture, Circularity & BIM Portfolio

A minimalist, high-performance architectural monograph, vector world map explorer, and digitalisation platform built with vanilla JavaScript, modern CSS, and edge-native Cloudflare infrastructure.

---

## 🏛️ Architecture & Infrastructure Overview

```
                          ┌────────────────────────┐
                          │   Visitor / Browser    │
                          └───────────┬────────────┘
                                      │
               ┌──────────────────────┴──────────────────────┐
               │                                             │
               ▼                                             ▼
  https://piotr.owski.ch/                       https://assets.piotr.owski.ch/
┌──────────────────────────────┐              ┌──────────────────────────────┐
│       Cloudflare Pages       │              │        Cloudflare R2         │
│  (Static Site & Edge Logic)  │              │   (Media & Video Storage)    │
│  - index.html, CSS, JS       │              │  - High-res photography      │
│  - sitemap.xml, favicons     │              │  - 720p/4K intro reels       │
│  - functions/api/enquire.js  │              │  - Global Edge Caching       │
└──────────────┬───────────────┘              └──────────────────────────────┘
               │
               ▼ (POST /api/enquire)
┌──────────────────────────────┐
│          Resend API          │
└──────────────┬───────────────┘
               │
       ┌───────┴─────────────────────────────┐
       ▼                                     ▼
┌──────────────────────────────┐   ┌──────────────────────────────┐
│  Studio Notification (Piotr) │   │  Client Confirmation Copy    │
│  piotr@owski.ch              │   │  Inquirer Email (EN/DE/PL)   │
│  (Infomaniak Mailbox)        │   │  From: enquiry@piotr.owski.ch│
└──────────────────────────────┘   └──────────────────────────────┘
```

---

## 📁 Project File Structure

```text
piotrowski-portfolio/
├── .env                              # Private R2 credentials & API keys (STRICTLY LOCAL — NEVER IN GIT)
├── .gitignore                        # Git exclusion rules (ignores heavy assets/ and secrets)
├── README.md                         # Project documentation & operational manual
├── index.html                        # Semantic HTML5 stage, Open Graph, & JSON-LD structured data
├── robots.txt                        # Web crawler permissions & sitemap link
├── sitemap.xml                       # XML Sitemap for search engines (EN / DE / PL hreflang)
├── site.webmanifest                  # Progressive Web App manifest
├── sync_media.py                     # Python script to sync local assets/ to Cloudflare R2
│
├── favicons/                         # Browser & mobile app icon suite
│   ├── favicon.ico                   # Standard fallback icon
│   ├── favicon-16x16.png             # Small tab icon
│   ├── favicon-32x32.png             # Retina tab icon
│   ├── apple-touch-icon.png          # iOS Home Screen icon (180x180)
│   ├── android-chrome-192x192.png    # Android / PWA standard icon
│   └── android-chrome-512x512.png    # High-resolution PWA splash icon
│
├── functions/                        # Cloudflare Pages Edge Functions
│   └── api/
│       └── enquire.js                # Serverless endpoint: Handles inquiry form & Resend dispatch
│
├── css/
│   └── styles.css                    # Design system: typography, responsive stages, dark/light themes
│
├── js/
│   ├── data.js                       # Monograph projects, multilingual copy (EN/DE/PL), manifesto
│   ├── main.js                       # App lifecycle, routing, dynamic stage loader, digitalisation
│   ├── world-map.js                  # Mathematical Robinson vector projection engine & interactive pins
│   └── world-map-data.js             # Vector continental boundary geometries
│
└── assets/                           # Media folder (Local copies & R2 source)
    ├── images/
    │   ├── arch_loft.jpg
    │   ├── arch_museum.jpg
    │   ├── ...
    │   └── letaguy/                  # Residence Le Taguy editorial photo series
    │       ├── CROPKA_Le_Taguy_Mont_Blanc_Bathroom_01_1200_834.jpg
    │       ├── CROPKA_Le_Taguy_Mont_Blanc_Living_Room_01_1200_834.jpg
    │       └── ...
    └── videos/
        ├── PPwebVideoIntro.mp4       # Active intro video (2.49 MB, H.264, +faststart)
        └── PPwebVideo.mp4            # Preserved original reference video
```

---

## 🗄️ 1. Media Organization & Cloudflare R2

### Why Cloudflare R2?
- **Zero Egress Bandwidth Fees**: High-resolution architectural photography and video streams are served without bandwidth costs.
- **Ultra-Lightweight Repository**: Git keeps only clean source code (<1 MB). All media binaries live in R2.
- **Global CDN Performance**: Media is cached globally across 300+ Cloudflare edge locations with immutable caching (`max-age=31536000`).

### Dual-Key Architecture
To guarantee 100% path compatibility across direct links and legacy references, all media files are uploaded to R2 under **two simultaneous keys**:
1. **Prefixed Key**: `assets/images/arch_loft.jpg` (mirrors local repo structure)
2. **Root Key**: `images/arch_loft.jpg` (shorthand URL compatibility)

### Automatic Environment Switching
The app automatically detects where it is running via `getAssetUrl()` in `js/main.js`:
- **Localhost (`localhost:3000`)**: Reads directly from your local `./assets/` directory (works completely offline).
- **Production (`piotr.owski.ch`)**: Automatically streams from `https://assets.piotr.owski.ch/`.

---

## ✉️ 2. Inquiry Form & Email Setup

### Backend Architecture (`functions/api/enquire.js`)
When an inquiry is submitted on the website:
1. **Validation & Anti-Spam**: Sanitizes fields and verifies honeypot/timestamp spam guards.
2. **Notification Email (to Studio)**:
   - Sent to: `piotr@owski.ch` (Infomaniak mailbox).
   - `Reply-To`: Set directly to the inquirer's email address (simply click "Reply" in your email client).
   - Includes timestamp formatted in **Swiss Local Time (`Europe/Zurich`)**.
3. **Confirmation Copy (to Client)**:
   - Sent to the inquirer's address with an automated acknowledgment in their selected language (EN, DE, or PL).
   - Sender: `Piotr Piotrowski Studio <enquiry@piotr.owski.ch>` *(with automatic fallback to `enquiry@owski.ch`)*.

### Cloudflare Environment Variable
- `RESEND_API_KEY`: Stored in **Cloudflare Pages** → **Settings** → **Environment variables** (Production).

---

## 🌐 3. Domain & DNS Configuration

All DNS records are managed in the **Cloudflare Dashboard** under zone `owski.ch`:

| Type | Name | Content / Target | Proxy Status | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **CNAME** | `@` (`owski.ch`) | `piotr-owski.pages.dev` | 🟧 **Proxied** | Apex root domain (Cloudflare CNAME Flattening) |
| **CNAME** | `www` | `owski.ch` | 🟧 **Proxied** | `www` subdomain alias |
| **CNAME** | `piotr` | `piotr-owski.pages.dev` | 🟧 **Proxied** | Main portfolio website production URL |
| **CNAME** | `assets` | `public.r2.dev` / R2 Bucket | 🟧 **Proxied** | High-performance custom domain for media files |
| **MX** | `@` | `mta-gw.infomaniak.ch` (Priority 5) | ☁️ *DNS only* | Infomaniak studio email routing (`piotr@owski.ch`) |
| **TXT** | `@` | `v=spf1 include:infomaniak.ch ~all` | ☁️ *DNS only* | SPF email authentication for Infomaniak |
| **TXT** | `resend._domainkey` | `k=rsa; p=...` (from Resend) | ☁️ *DNS only* | DKIM email authentication for Resend API |

### Apex Redirect Rule
- In **Cloudflare Rules** → **Redirect Rules**:
  - **Rule Name**: `Apex Redirect to piotr.owski.ch`
  - **Expression**: `(http.host in {"owski.ch" "www.owski.ch"})`
  - **Target**: `https://piotr.owski.ch/` (301 Permanent Redirect)

---

## 💻 4. Developer Workflow

### Step 1: Local Development
To run the website locally on your computer:

```bash
# Using Python (built-in, no install required):
python -m http.server 3000

# Or using Node.js:
npx serve -l 3000
```
Open **`http://localhost:3000`** in your browser. All code and local media load instantly.

---

### Step 2: Syncing Media to Cloudflare R2
Whenever you add or update photos in `assets/images/` or videos in `assets/videos/`, run the sync script:

```bash
python sync_media.py
```
> **Note**: Requires `.env` in the root folder with:
> ```ini
> R2_ACCESS_KEY_ID=your_access_key
> R2_SECRET_ACCESS_KEY=your_secret_key
> R2_ENDPOINT=https://<account_id>.r2.cloudflarestorage.com
> R2_BUCKET_NAME=piotr-owski-media
> ```

---

### Step 3: Pushing Code to GitHub
All code pushed to GitHub automatically deploys to Cloudflare Pages in ~15 seconds:

```bash
git add .
git commit -m "feat: Add new project monograph"
git push origin main
```

---

### 🚀 Pro-Tip: The One-Command Dual Sync
To update both media (Cloudflare R2) and code (GitHub / Cloudflare Pages) in a single command:

#### In Windows PowerShell:
```powershell
python sync_media.py; git add .; git commit -m "Update site and media"; git push origin main
```

#### In macOS / Linux / Bash:
```bash
python3 sync_media.py && git add . && git commit -m "Update site and media" && git push origin main
```
