# Blue Brand — Style Reference

> Quiet white gallery wall with one vivid blue bookmark

**Theme:** light

The interface operates on a white-canvas, photograph-first vocabulary: nearly every screen is a quiet monochrome frame that lets full-bleed property imagery carry the experience, with a focused blue accent system as the primary chromatic punctuation for actions, navigation, trust signals, and interactive states.

The visual language remains minimal, spacious, flat, borderless, and rounded. Blue is used strategically rather than excessively: vivid blue communicates primary actions, deep blue communicates interaction and pressed states, muted slate-blue supports secondary visual details, and light blue provides subtle highlights and selected states.

Typography remains geometric and confident, with mostly small, readable sizes — 14px body, 16px UI, 22–28px section titles — combined with tight negative tracking and generous line-height.

The overall visual hierarchy should remain:

**White / Off-white → Black / Gray → Blue accent**

Blue should guide attention, not dominate the entire interface.

---

## Tokens — Colors

| Name                 | Value     | Token                    | Role                                                                           |
| -------------------- | --------- | ------------------------ | ------------------------------------------------------------------------------ |
| Primary Blue         | `#007CFF` | `--color-primary`        | Primary CTA, search submit, active actions, key interactive elements           |
| Primary Blue Dark    | `#0558B0` | `--color-primary-dark`   | Hover, pressed, active, focused, and dark interaction states                   |
| Secondary Slate Blue | `#4E7094` | `--color-secondary-blue` | Secondary icons, decorative details, supporting brand elements, subtle accents |
| Light Blue           | `#83BEFC` | `--color-light-blue`     | Highlights, selected surfaces, subtle backgrounds, visual emphasis             |
| Hof                  | `#222222` | `--color-hof`            | Primary text, headings, icon strokes, inverse surfaces                         |
| Foggy                | `#6a6a6a` | `--color-foggy`          | Secondary text, muted labels, helper copy, subdued metadata                    |
| Grey 500             | `#c1c1c1` | `--color-grey-500`       | Disabled text, placeholders, muted icon strokes                                |
| Bebe                 | `#ebebeb` | `--color-bebe`           | Hairline borders, dividers, separators                                         |
| Deco                 | `#dddddd` | `--color-deco`           | Skeleton placeholders and disabled surfaces                                    |
| Faint                | `#f7f7f7` | `--color-faint`          | Page canvas, footer surface, subtle hover backgrounds                          |
| White                | `#ffffff` | `--color-white`          | Cards, inputs, modals, elevated surfaces                                       |

### Color Hierarchy

The blue palette follows a strict functional hierarchy:

* `#007CFF` → primary action
* `#0558B0` → hover / active / pressed
* `#4E7094` → secondary and decorative blue
* `#83BEFC` → light highlight and selected surface

Do not use all four blues equally.

The interface should remain predominantly white, off-white, black, and gray. Blue exists to establish brand identity and direct user attention.

### Accessibility Guidance

* Never use `#83BEFC` as small body text on white.
* Prefer `#0558B0` or `#222222` for text requiring strong contrast.
* Use `#007CFF` for prominent actions and large interactive elements.
* Use white text over `#007CFF` or `#0558B0` when sufficient contrast is maintained.
* Avoid blue-on-blue combinations where the distinction between interactive states becomes unclear.

---

## Tokens — Typography

### Geometric Sans

Use a modern geometric sans such as Inter, DM Sans, Circular, or another clean geometric sans.

* **Weights:** 400, 500, 600, 700
* **Body:** 14px/400
* **UI:** 16px/500
* **Section headings:** 20–22px
* **Page titles:** 28px/700
* **Display tracking:** approximately -0.02em

Typography remains predominantly neutral. Do not introduce blue into large headings unless a specific branded emphasis is required.

---

## Type Scale

| Role       | Size | Line Height | Letter Spacing | Token               |
| ---------- | ---- | ----------- | -------------- | ------------------- |
| caption    | 11px | 1.18        | —              | `--text-caption`    |
| ui         | 16px | 1.25        | —              | `--text-ui`         |
| subheading | 20px | 1.2         | -0.18px        | `--text-subheading` |
| heading-sm | 22px | 1.18        | -0.44px        | `--text-heading-sm` |
| heading    | 28px | 1.43        | —              | `--text-heading`    |

---

## Components

### Search Bar

Full-width rounded capsule with a white surface and 9999px border radius.

The search container remains neutral and white.

Three segmented fields:

* **Where:** 16px/500 `#222222`
* Placeholder: 14px/400 `#6a6a6a`
* **When:** 16px/500 `#222222`
* Placeholder: 14px/400 `#6a6a6a`
* **Who:** 16px/500 `#222222`
* Placeholder: 14px/400 `#6a6a6a`

Right-aligned circular submit button:

* 48px diameter
* `#007CFF` background
* white search icon
* hover: `#0558B0`
* active/pressed: `#0558B0`

Do not make the entire search bar blue. Only the action button should carry the primary blue.

---

### Property Listing Card

Rounded container at 12–14px radius.

* No border
* No heavy shadow
* White or transparent surface
* Full-bleed property photography
* 1:1 image aspect ratio
* 12px image radius

Title:

* 14px/500
* `#222222`

Metadata:

* 14px/400
* `#6a6a6a`

Price:

* 14px/400 `#222222`
* price amount 14px/600 `#222222`

Blue should not be used for standard listing text.

---

### Guest Favorite Badge

Small white pill over the property image.

* background: `#ffffff`
* text: `#222222`
* 12px/600
* border-radius: 9999px
* subtle shadow

If a stronger branded variant is required, use:

* background: `#83BEFC`
* text: `#0558B0`

Do not use `#007CFF` for the default badge background.

---

### Wishlist Heart Button

Circular transparent button positioned in the top-right of listing imagery.

Inactive:

* white heart stroke

Active:

* `#007CFF` heart fill or stroke

Hover:

* `#83BEFC` visual highlight

The active wishlist state should use the primary blue rather than red.

---

### Top Navigation Bar

Fixed 80px white navigation bar.

Left:

* Brand logo / mark
* primary brand blue: `#007CFF`

Center:

* category navigation
* active navigation: `#222222`
* inactive navigation: `#6a6a6a`
* active indicator: `#007CFF` or `#222222`

Right:

* host link: `#222222`
* language selector
* circular menu button
* neutral `#f7f7f7` backgrounds

Do not make the entire navigation blue.

---

### Circular Nav Button

40px circular button.

Default:

* background: `#f7f7f7`
* icon: `#222222`

Hover:

* background: `#ebebeb`

Active or selected:

* background: `#83BEFC`
* icon: `#0558B0`

---

### Pill Navigation Tab

Pill-shaped tab with icon + label.

Inactive:

* text/icon: `#6a6a6a`

Active:

* text/icon: `#222222`
* 2px indicator: `#007CFF`

No permanent blue background should be applied to navigation tabs.

---

### Section Title with Arrow

Title:

* 22px/500
* `#222222`
* tight tracking

Arrow:

* `#0558B0` or `#222222`

Carousel controls:

* white background
* subtle shadow
* `#222222` chevron

Use blue only when the control is interactive or needs additional emphasis.

---

### Carousel Arrow Button

Circular 32px button.

Default:

* background: `#ffffff`
* chevron: `#222222`

Hover:

* background: `#83BEFC`
* chevron: `#0558B0`

Disabled:

* chevron: `#c1c1c1`
* reduced opacity

---

### Ghost Outline Button

Transparent background.

* border: `1px solid #222222`
* text: `#222222`
* border-radius: 8px

Hover:

* background: `#f7f7f7`

For a branded secondary action:

* border: `1px solid #007CFF`
* text: `#0558B0`

Do not use both black and blue borders simultaneously.

---

### Filled Primary Button

Primary action button.

* background: `#007CFF`
* text: `#ffffff`
* border-radius: 8px
* padding: 0 16px
* font: 14px/500

Hover:

* background: `#0558B0`

Pressed:

* background: `#0558B0`

Focus:

* visible focus ring using `#83BEFC`

This is now the principal branded CTA.

---

### Category Icon Button

Transparent category button.

Icon:

* `#222222`

Label:

* `#6a6a6a`

Hover:

* icon: `#0558B0`
* label: `#222222`

Selected:

* icon: `#007CFF`
* label: `#0558B0`

---

### Footer Column Link

Default:

* 14px/400
* `#6a6a6a`

Hover:

* `#222222`

Column headers:

* 14px/600
* `#222222`

Do not make every footer link blue.

---

### Social Icon Link

32px circular icon-only button.

Default:

* icon: `#222222`

Hover:

* icon: `#0558B0`
* optional background: `#83BEFC`

Keep the footer predominantly monochrome.

---

### Language / Currency Selector

Default:

* text: `#222222`
* icon: `#222222`

Hover:

* text/icon: `#0558B0`

No permanent background or border.

---

## Do's

* Keep the interface predominantly white, off-white, black, and gray.
* Use `#007CFF` for primary CTAs and important interactive actions.
* Use `#0558B0` for hover, active, pressed, and focused states.
* Use `#4E7094` for secondary blue details and supporting brand elements.
* Use `#83BEFC` for light highlights and selected surfaces.
* Keep property photography full-bleed.
* Keep listing cards flat and borderless.
* Use 12px–14px radii for cards.
* Use 9999px for pills and circular controls.
* Preserve generous whitespace.
* Use blue strategically to establish hierarchy rather than decorating every component.

---

## Don'ts

* Don't use `#007CFF` everywhere.
* Don't make entire sections blue without a strong functional reason.
* Don't use `#83BEFC` for small text on white.
* Don't use blue for ordinary listing metadata.
* Don't mix blue with the previous coral/red accent.
* Don't leave `#ff385c` or `#e00b41` anywhere in the final implementation.
* Don't rename the new blue tokens back to Rausch.
* Don't introduce additional saturated colors unless required for a functional state.
* Don't use heavy gradients merely to make the design feel more colorful.
* Don't add shadows to every card.
* Don't turn the white/off-white canvas into a blue interface.

---

## Surfaces

| Level  | Name          | Value     | Purpose                                |
| ------ | ------------- | --------- | -------------------------------------- |
| 0      | Canvas        | `#f7f7f7` | Page background                        |
| 1      | Card          | `#ffffff` | Cards and primary interactive surfaces |
| 2      | Muted Surface | `#dddddd` | Skeletons and disabled surfaces        |
| 3      | Inverse       | `#222222` | Dark surfaces and inverse components   |
| Accent | Light Blue    | `#83BEFC` | Selected and highlighted surfaces      |

---

## Elevation

### Search Bar

`0px 0px 0px 1px rgba(0,0,0,0.02), 0px 2px 6px rgba(0,0,0,0.04), 0px 4px 8px rgba(0,0,0,0.10)`

### Elevated Overlay

`0 8px 28px rgba(0,0,0,0.28)`

### Dropdown / Menu

`0 6px 20px rgba(0,0,0,0.20)`

### Tooltip

`0 2px 4px rgba(0,0,0,0.18)`

Do not add blue shadows. Blue belongs to the interface elements themselves, not the elevation system.

---

## Imagery

Photography remains the dominant visual system.

Use natural, warm, realistic property photography with minimal processing.

Images should remain full-bleed, tightly cropped, and free of decorative borders.

Icons should remain primarily monochrome.

Blue is reserved for:

* branding
* primary actions
* active states
* selected states
* subtle interactive highlights

Avoid blue filters, blue duotones, and blue overlays over photography unless required for a specific UI interaction.

---

## Layout

Maintain the spacious, photography-first layout.

The page should use:

* white and off-white surfaces
* generous horizontal padding
* horizontal-scroll listing sections
* 48px section gaps
* rounded photography
* restrained shadows
* minimal chrome

The primary search bar remains the principal hero element.

The primary CTA inside the search interface uses `#007CFF`.

---

## Agent Prompt Guide

### Quick Color Reference

**Primary text:** `#222222`

**Background:** `#ffffff` / `#f7f7f7`

**Border:** `#ebebeb`

**Muted text:** `#6a6a6a`

**Primary blue:** `#007CFF`

**Primary blue dark:** `#0558B0`

**Secondary blue:** `#4E7094`

**Light blue:** `#83BEFC`

### Color Usage Rule

The interface must remain predominantly neutral.

Use blue as an accent system rather than as a general background color.

Recommended hierarchy:

`#007CFF` → CTA / primary action
`#0558B0` → hover / pressed / active
`#4E7094` → secondary brand details
`#83BEFC` → light highlight / selected surface

Never replace every occurrence of neutral black or gray with blue.

---

## Example Component Prompts

### 1. Search Bar Capsule

Create a full-width white search capsule with border-radius 9999px, centered on a `#f7f7f7` canvas.

Three fields:

* `Where`: 16px/500 `#222222`
* placeholder: 14px/400 `#6a6a6a`
* `When`: 16px/500 `#222222`
* placeholder: 14px/400 `#6a6a6a`
* `Who`: 16px/500 `#222222`
* placeholder: 14px/400 `#6a6a6a`

Right end:

* 48px circular submit button
* background `#007CFF`
* white search icon
* hover `#0558B0`
* pressed `#0558B0`

Do not make the search capsule itself blue.

---

### 2. Property Listing Card

Create a flat white property card with no border and no heavy shadow.

Use full-bleed photography with 1:1 aspect ratio and 12px border radius.

Guest Favorite badge:

* white background
* `#222222` text

Wishlist button:

* transparent circular button
* white inactive heart
* `#007CFF` active heart

Property name:

* 14px/500 `#222222`

Metadata:

* 14px/400 `#6a6a6a`

Price:

* `#222222`

Do not use blue for normal property metadata.

---

### 3. Top Navigation Bar

Create a fixed white 80px header.

Left:

* brand logo in `#007CFF`

Center:

* navigation categories
* active state `#222222`
* active indicator `#007CFF`
* inactive state `#6a6a6a`

Right:

* host link `#222222`
* neutral globe button
* neutral hamburger button

Avoid a blue navigation background.

---

### 4. Section Title with Carousel Arrows

Section title:

* 22px/500
* `#222222`
* -0.0200em tracking

Arrow:

* `#0558B0`

Carousel buttons:

* white background
* subtle shadow
* `#222222` chevrons

On hover:

* `#83BEFC` background
* `#0558B0` chevron

---

### 5. Footer Link Column

Three-column grid on `#f7f7f7`.

Headers:

* 14px/600
* `#222222`

Links:

* 14px/400
* `#6a6a6a`

Hover:

* `#222222`

Keep the footer neutral and avoid excessive blue.

---

## CSS Custom Properties

```css
:root {
  /* Brand Colors */
  --color-primary: #007CFF;
  --color-primary-dark: #0558B0;
  --color-secondary-blue: #4E7094;
  --color-light-blue: #83BEFC;

  /* Neutral Colors */
  --color-hof: #222222;
  --color-foggy: #6a6a6a;
  --color-grey-500: #c1c1c1;
  --color-bebe: #ebebeb;
  --color-deco: #dddddd;
  --color-faint: #f7f7f7;
  --color-white: #ffffff;

  /* Typography */
  --font-brand: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  --text-caption: 11px;
  --leading-caption: 1.18;

  --text-ui: 16px;
  --leading-ui: 1.25;

  --text-subheading: 20px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.18px;

  --text-heading-sm: 22px;
  --leading-heading-sm: 1.18;
  --tracking-heading-sm: -0.44px;

  --text-heading: 28px;
  --leading-heading: 1.43;

  /* Font Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;

  /* Layout */
  --page-max-width: 1440px;
  --section-gap: 48px;
  --card-padding: 12px;
  --element-gap: 12px;

  /* Border Radius */
  --radius-sm: 1.5px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 14px;
  --radius-2xl: 20px;
  --radius-3xl: 32px;
  --radius-full: 50px;
  --radius-full-2: 100px;
  --radius-full-3: 9999px;

  /* Named Radii */
  --radius-cards: 12px;
  --radius-badges: 9999px;
  --radius-inputs: 8px;
  --radius-avatars: 9999px;
  --radius-buttons: 9999px;
  --radius-search-bar: 9999px;

  /* Shadows */
  --shadow-subtle:
    rgba(0, 0, 0, 0.02) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.04) 0px 2px 6px 0px,
    rgba(0, 0, 0, 0.1) 0px 4px 8px 0px;

  /* Surfaces */
  --surface-canvas: #f7f7f7;
  --surface-card: #ffffff;
  --surface-muted: #dddddd;
  --surface-inverse: #222222;

  /* Interactive */
  --interactive-primary: #007CFF;
  --interactive-primary-hover: #0558B0;
  --interactive-highlight: #83BEFC;
}
```

---

## Tailwind v4

```css
@theme {
  /* Brand Colors */
  --color-primary: #007CFF;
  --color-primary-dark: #0558B0;
  --color-secondary-blue: #4E7094;
  --color-light-blue: #83BEFC;

  /* Neutral Colors */
  --color-hof: #222222;
  --color-foggy: #6a6a6a;
  --color-grey-500: #c1c1c1;
  --color-bebe: #ebebeb;
  --color-deco: #dddddd;
  --color-faint: #f7f7f7;
  --color-white: #ffffff;

  /* Typography */
  --font-brand:
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;

  --text-caption: 11px;
  --text-ui: 16px;
  --text-subheading: 20px;
  --text-heading-sm: 22px;
  --text-heading: 28px;

  --leading-caption: 1.18;
  --leading-ui: 1.25;
  --leading-subheading: 1.2;
  --leading-heading-sm: 1.18;
  --leading-heading: 1.43;

  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;

  --radius-sm: 1.5px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 14px;
  --radius-2xl: 20px;
  --radius-3xl: 32px;
  --radius-full: 9999px;

  --shadow-subtle:
    rgba(0, 0, 0, 0.02) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.04) 0px 2px 6px 0px,
    rgba(0, 0, 0, 0.1) 0px 4px 8px 0px;
}
```
