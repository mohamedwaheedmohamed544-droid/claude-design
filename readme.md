# PureMinds Design System

**PureMinds** (العقول الصافية) is a modern Middle Eastern technology company with a bilingual (Arabic/English) brand identity. The brand emphasizes clarity, intelligence, and trustworthiness — "pure minds" — across digital financial and technology products.

## Products

| Product | Description |
|---|---|
| **PureMinds** | Core brand / platform |
| **PurePay** | Fintech / digital payments sub-brand |

## Sources

The following assets were provided to build this design system:

- `uploads/pureminds-logo.pdf` — Adobe Illustrator–exported logo sheet (3 pages, 1920×1080 each), created 2026-04-05. Contains: logo lockups on light/dark backgrounds, full color palette swatches, and typography specimen. **[Not publicly accessible — local project file only]**
- `uploads/29LTZaridSans.zip` — Custom type family: 29LT Zarid Sans, 6 weights (ExtraLight, Thin, Light, Regular, Medium, SemiBold, Black). **[Not publicly accessible — local project file only]**
- `uploads/pureminds-logo.ai` — Source Adobe Illustrator file. **[Not publicly accessible — local project file only]**

Fonts have been extracted to `assets/fonts/`. Logo thumbnail extracted to `assets/logo-thumb-0.jpg`.

---

## CONTENT FUNDAMENTALS

### Voice & Tone

- **Professional yet approachable.** PureMinds speaks with confidence but never condescension. The brand positions itself as a trusted intelligence partner, not a flashy tech startup.
- **Bilingual by default.** All key communications exist in both Arabic and English. Arabic is a first-class language, not an afterthought.
- **Clear and direct.** Sentences are short. No filler words. No buzzwords like "synergy" or "leverage." Say what you mean.
- **We, not I.** Brand copy uses "we" for the company. User-facing copy uses "you" (not "one" or impersonal forms).

### Casing

- **Brand name**: always lowercase `pureminds`, `purepay` in wordmark contexts; title case "PureMinds", "PurePay" in prose.
- **Headlines**: Sentence case only (not Title Case). Exception: product names.
- **CTAs**: Short, verb-first. "Get started", "Learn more", "Pay now."
- **No emoji** in formal brand communications. Emoji are not part of the visual vocabulary.

### Specific Examples

- ✅ "Send money in seconds."
- ✅ "Your finances, simplified."
- ✅ "We built PurePay for people who value their time."
- ❌ "Leverage cutting-edge fintech solutions to synergize your financial journey 🚀"
- ❌ "SEND MONEY NOW — IT'S FAST AND EASY!!!"

---

## VISUAL FOUNDATIONS

### Colors

The palette is anchored by a deep navy (#051D36) as the primary brand color, paired with a sky blue and four accent hues.

**Primary**
- `--color-navy` (#051D36) — deep navy; primary brand, dark backgrounds, headlines on light
- `--color-blue` (#009ADE) — sky blue; CTAs, links, interactive elements

**Accent**
- `--color-teal` (#1DB5AF) — calm teal; success states, secondary actions
- `--color-amber` (#F6AA08) — warm amber; warnings, highlights, premium
- `--color-coral` (#F75226) — coral/orange; alerts, energy, PurePay accent

**Neutrals**
- `--color-gray-900` (#1A1A2E) — near-black text
- `--color-gray-700` (#333333) — body text
- `--color-gray-300` (#C4C4C4) — borders, dividers
- `--color-gray-100` (#E6E6E6) — light backgrounds, disabled states
- `--color-white` (#FFFFFF)

### Typography

- **Primary UI font**: 29LT Zarid Sans — a geometric sans-serif with Arabic support, 7 weights (Thin → Black). Used for all UI text, body copy, labels, buttons.
- **Logo / Display font**: Alexandria Light — used in the wordmark. Available on Google Fonts. A clean, modern geometric sans.

**Scale**: Display (48–72px+), Heading (24–40px), Body (14–18px), Caption (11–13px).

**Line height**: Generous — 1.5 for body, 1.2 for headings. Arabic text benefits from 1.6–1.7 line-height.

**RTL support**: All layouts must support `dir="rtl"` for Arabic. Font stack includes 29LT Zarid Sans for both scripts.

### Spacing

8px base grid. Common values: 4, 8, 12, 16, 24, 32, 48, 64, 96px.

### Backgrounds

- Light surfaces: white or `--color-gray-100`
- Dark surfaces: `--color-navy` (#051D36) — used for hero sections, nav bars, footers
- No gradients as primary brand motif — solid color fields, clean white space
- No textures, no illustrations (the brand is clean and minimal)

### Animation

- Subtle and purposeful. Transitions at 200–300ms using `ease-out`
- No bounces, springs, or decorative looping animations
- Hover: slight opacity reduction (0.85) or color shift
- Press: slight scale reduction (0.97) + color darken
- Page transitions: simple fade

### Hover & Press States

- **Buttons**: darken background by ~10% on hover; scale(0.97) + further darken on press
- **Links**: underline on hover; color shift to navy
- **Cards**: subtle box-shadow lift on hover (no color change)
- **Icons**: opacity 0.75 on hover

### Borders & Radius

- Border color: `--color-gray-300` (#C4C4C4) at 1px
- **Corner radii**: Small (4px) for inputs/chips, Medium (8px) for cards/dropdowns, Large (12–16px) for modals/panels, Full (9999px) for pills/badges
- No heavy outlines — the design relies on spacing and shadow for structure

### Cards

- Background: white
- Border: 1px solid `--color-gray-100` or shadow-only (no border)
- Shadow: `0 2px 8px rgba(5, 29, 54, 0.08)` (light, navy-tinted)
- Hover: `0 4px 16px rgba(5, 29, 54, 0.14)`
- Radius: 12px
- Padding: 20–24px

### Shadows

Three levels:
- **sm**: `0 1px 3px rgba(5,29,54,0.07)`
- **md**: `0 2px 8px rgba(5,29,54,0.10)`
- **lg**: `0 8px 24px rgba(5,29,54,0.14)`

### Iconography

See ICONOGRAPHY section below.

### Imagery

- **Color vibe**: clean, cool, professional. Not warm/lifestyle — more editorial and structured
- No grain, no heavy filters
- People shown are diverse, Middle Eastern context
- Charts and data visualizations use the brand color palette

### Layout

- Max content width: 1280px, centered
- Mobile-first responsive
- `direction: rtl` toggle for Arabic — all layouts must function bidirectionally
- Fixed header navigation on scroll

---

## ICONOGRAPHY

- Icon style: **Lucide Icons** (stroke-based, 1.5–2px weight, rounded caps) — loaded from CDN
- Usage: `<i data-lucide="name">` via Lucide JS, or inline SVG
- Size: 16px (small), 20px (default), 24px (large)
- Color: inherits from `currentColor` — never hardcoded
- No emoji as icons. No unicode symbol substitutes.
- CDN: `https://unpkg.com/lucide@latest/dist/umd/lucide.js`

---

## FILE INDEX

```
pureminds-design-system/
├── readme.md              ← This file
├── SKILL.md               ← Agent skill definition
├── styles.css             ← Root CSS entry point (@import only)
│
├── tokens/
│   ├── fonts.css          ← @font-face for 29LT Zarid Sans (7 weights)
│   ├── colors.css         ← 167 color custom properties (navy, blue, teal, amber, coral, grays)
│   ├── typography.css     ← Type scale, weights, families, line-heights
│   └── spacing.css        ← Spacing scale, radius, shadow, z-index, transitions
│
├── assets/
│   ├── fonts/             ← 29LT Zarid Sans OTF files (7 weights)
│   │   ├── 29LTZaridSans-Thin.otf
│   │   ├── 29LTZaridSans-ExtraLight.otf
│   │   ├── 29LTZaridSans-Light.otf
│   │   ├── 29LTZaridSans-Regular.otf
│   │   ├── 29LTZaridSans-Medium.otf
│   │   ├── 29LTZaridSans-SemiBold.otf
│   │   └── 29LTZaridSans-Black.otf
│   └── logo-thumb-0.jpg   ← Logo sheet thumbnail (extracted from PDF)
│
├── guidelines/            ← Design System tab specimen cards
│   ├── colors-navy.card.html      [Colors] Navy primary scale
│   ├── colors-blue.card.html      [Colors] Sky blue interactive scale
│   ├── colors-accent.card.html    [Colors] Teal · Amber · Coral
│   ├── colors-neutrals.card.html  [Colors] Gray scale
│   ├── colors-semantic.card.html  [Colors] Semantic aliases
│   ├── type-scale.card.html       [Type] Size scale xs→6xl
│   ├── type-weights.card.html     [Type] 29LT Zarid Sans weights
│   ├── type-display.card.html     [Type] Alexandria display font
│   ├── type-arabic.card.html      [Type] RTL Arabic specimens
│   ├── spacing.card.html          [Spacing] 8px-grid bar chart
│   ├── radii.card.html            [Spacing] Border radius tokens
│   ├── shadows.card.html          [Spacing] Navy-tinted shadow levels
│   ├── brand-wordmark.card.html   [Brand] pureminds lockup light/dark
│   └── brand-purepay.card.html    [Brand] PurePay sub-brand lockup
│
└── components/
    └── core/
        ├── core.card.html         [Components] All core component demo
        ├── Button.jsx/.d.ts/.prompt.md   — 5 variants, 3 sizes, icon, loading
        ├── Badge.jsx/.d.ts/.prompt.md    — 7 variants, dot status indicator
        ├── Input.jsx/.d.ts/.prompt.md    — label, hint, error, icons, sizes
        ├── Card.jsx/.d.ts/.prompt.md     — padding, shadow, radius, hoverable
        └── Avatar.jsx/.d.ts/.prompt.md   — initials fallback, color seeding, status
```

### Design System Namespace

```js
const { Button, Badge, Input, Card, Avatar } = window.PureMindsDesignSystem_f985d7;
```

### Fonts Note

The mono font `JetBrains Mono` is referenced in `--font-mono` but the OTF file has not been uploaded yet. Upload it or replace with `Courier New` fallback. All other fonts are available.

### Alexandria Note

The wordmark uses **Alexandria** (Google Fonts). It is loaded via CDN `@import` in `tokens/typography.css`. No file upload needed.
