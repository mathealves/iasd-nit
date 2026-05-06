```markdown
# Design System Document

## 1. Overview & Creative North Star: "The Sacred Gallery"

This design system is built upon the **Sacred Gallery** North Star. Rather than a standard institutional portal, the experience is treated as a curated, high-end editorial journey. It rejects the "boxy" nature of traditional web design in favor of expansive white space, intentional asymmetry, and a sense of "quiet authority."

The goal is to evoke a feeling of **Solace and Sophistication**. By utilizing large-scale serif typography against deep, midnight tones and golden accents, we create a digital sanctuary. We break the template look by layering content—letting high-resolution imagery of modern sacred architecture bleed behind floating containers, and using the spacing scale to create a rhythmic, melodic flow of information.

---

## 2. Colors & Surface Philosophy

The palette is rooted in the "Deep Navy" of the primary tokens, accented by the "Divine Gold" of the secondary scale.

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders to define sections. Layout boundaries must be established exclusively through:
*   **Background Shifts:** Moving from `surface` (#f9f9f9) to `surface-container-low` (#f3f3f3).
*   **Tonal Transitions:** Using `primary-container` (#003366) as a full-bleed block to anchor a page.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine stationery and frosted glass.
*   **Base Layer:** `surface` (#f9f9f9).
*   **Feature Layer:** `surface-container-low` (#f3f3f3) for subtle content grouping.
*   **Floating Layer:** `surface-container-lowest` (#ffffff) for high-priority cards or modals, creating a natural "lift."

### The Glass & Signature Texture
*   **Glassmorphism:** For navigation bars or floating action cards, use `surface` at 80% opacity with a `20px` backdrop blur. This allows the vibrant imagery of nature to peak through, softening the interface.
*   **Luminous Gradients:** Main CTAs should never be flat. Use a subtle linear gradient (45 degrees) from `primary` (#001e40) to `primary-container` (#003366) to give buttons a "lithographic" depth.

---

## 3. Typography: The Editorial Voice

The typography pair creates a dialogue between tradition (`notoSerif`) and modernity (`manrope`).

*   **Display (notoSerif):** Used for "The Statement." These should be set with generous leading and occasional italicization for emphasis. `display-lg` (3.5rem) is the anchor for hero sections.
*   **Headline (notoSerif):** Provides the "Sermon Note." Clean, authoritative, and centered or dramatically left-aligned with a `24` (8.5rem) left margin.
*   **Body (manrope):** Used for the "Message." This sans-serif is chosen for its high legibility and "open" feel. Keep line lengths between 60-75 characters to maintain the editorial feel.
*   **Labels (manrope):** All-caps with a `0.05em` letter spacing for small metadata or eyebrows, providing a "premium tag" look.

---

## 4. Elevation & Depth: Tonal Layering

We avoid the "shadow-heavy" look of early Material Design. Depth here is atmospheric.

*   **The Layering Principle:** To highlight a specific ministry or event, place a `surface-container-lowest` card on top of a `surface-container-high` section. The contrast in light defines the edge, not a line.
*   **Ambient Shadows:** If a shadow is required (e.g., for a floating "Donate" button), use a 32px blur at 6% opacity, tinted with `primary` (#001e40) rather than grey. This makes the shadow feel like a natural lighting effect from the environment.
*   **Ghost Borders:** For form inputs where containment is mandatory for accessibility, use `outline-variant` at 15% opacity. It should be "felt" rather than "seen."

---

## 5. Component Guidelines

### Buttons (The "Seal")
*   **Primary:** Gradient of `primary` to `primary-container`. Corner radius: `md` (0.375rem). No border.
*   **Secondary:** `on-secondary-fixed-variant` text (#5d4201) with no background. Use an underline of `secondary` (#775a19) at 2px height, spaced `0.5` (0.175rem) from the text.
*   **States:** On hover, the primary button should "glow" by increasing the gradient brightness, rather than changing color entirely.

### Cards & Collections
*   **Anti-Divider Rule:** Never use horizontal lines to separate list items. Use spacing scale `8` (2.75rem) to create vertical rhythm.
*   **Architecture:** Cards use `surface-container-lowest` with an `xl` (0.75rem) corner radius. Imagery within cards should have a subtle "ken burns" zoom effect on hover to feel "alive."

### Inputs & Forms
*   Background: `surface-container-low`.
*   Active State: Transition the "Ghost Border" to `secondary` (#775a19) and add a `2px` bottom-only weighted line. This mimics a signature line on a document.

### Specialized Component: The "Reflection Block"
A full-width section using `tertiary-container` (#1d3644) with `notoSerif` text. This is a dedicated space for scripture or quotes, utilizing a `20` (7rem) padding-top/bottom to demand a pause in the user's scroll.

---

## 6. Do’s and Don’ts

### Do:
*   **Embrace Asymmetry:** Offset a headline to the left and an image to the right with a `16` (5.5rem) gap.
*   **Use High-Contrast Scaling:** Place a `label-md` immediately above a `display-lg` to create a dramatic, high-end hierarchy.
*   **Prioritize Breathing Room:** When in doubt, increase the spacing scale. This system thrives on "the luxury of space."

### Don’t:
*   **No 1px Lines:** Do not use lines to separate header from body or section from section.
*   **No Pure Black:** Never use #000000. Use `on-primary-fixed` (#001b3c) for deep contrast.
*   **No Crowding:** Do not place text directly over complex parts of an image. Use a `surface-variant` scrim with 40% opacity or move the text to a dedicated "Sacred Gallery" container.
*   **No Default Corners:** Avoid the `full` (9999px) roundedness for buttons unless it's a small icon-only button; keep the "Solene" feel with `md` or `lg` corners.