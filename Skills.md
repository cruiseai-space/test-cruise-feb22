# Cruise.ai Design System & Philosophy

## 1. Core Philosophy: "The Command Center"
The aesthetic of Cruise.ai is not just "Dark Mode"—it is **"Deep Space Utility."**
We are not selling a product; we are presenting an architecture. The user interface should feel like a high-fidelity HUD (Heads-Up Display) inside a spacecraft or a server control room.

*   **Keywords:** Precision, Heavy, Industrial, Cosmic, Engineered.
*   **The Vibe:** "We don't just vibe with AI. We engineer it."
*   **Anti-Patterns:** No playful bouncing animations, no "corporate membrane" rounded blobs, no bright white backgrounds.

---

## 2. Visual Language

### A. Color Palette (Tailwind Config)
The application relies on "Void" blacks and "Neon" accents.

| Color | Hex | Tailwind Class | Usage |
| :--- | :--- | :--- | :--- |
| **Space 950** | `#050505` | `bg-space-950` | The void. Main background. |
| **Space 900** | `#0a0a0a` | `bg-space-900` | Surface layer (Cards, Terminal). |
| **Space 800** | `#121212` | `bg-space-800` | Secondary surface / Borders. |
| **Neon Purple** | `#7c3aed` | `text-neon-purple` | **Intelligence**. Used for AI, Brain, Core logic. |
| **Neon Cyan** | `#06b6d4` | `text-neon-cyan` | **Data Flow**. Used for hover states, streams, links. |
| **Neon Blue** | `#00f0ff` | `text-neon-blue` | **Structure**. Used for architecture, Docker, AWS. |
| **Slate 500** | `#64748b` | `text-slate-500` | **Inactive/Meta**. Used for labels, timestamps, grid lines. |

### B. Typography
We mix legibility with technical aesthetics.

*   **Primary (Headers/Data):** `JetBrains Mono`
    *   Used for: Headlines (`h1`, `h2`), Buttons, Badges, Stats, Code snippets.
    *   *Style:* Uppercase, `tracking-tighter` for headers, `tracking-widest` for captions.
*   **Secondary (Body):** `Inter`
    *   Used for: Long-form text, biographies, case study descriptions.
    *   *Style:* Clean, high legibility, `text-slate-400` (never pure white).

---

## 3. UI Patterns & Effects

### The "Blueprint" Grid
Backgrounds are rarely solid. They use a subtle grid to imply engineering precision.
```css
backgroundImage: {
  'grid-pattern': "linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)",
}
/* Opacity should always be low (e.g., opacity-10) */
```

### Dark Glassmorphism
Unlike standard frosted glass (white/blur), we use "Void Glass".
*   **Background:** `bg-space-950/80` or `bg-slate-900/50`
*   **Backdrop:** `backdrop-blur-md`
*   **Border:** Thin, distinct borders are critical. `border border-slate-800`.

### The "Active" Glow
Interactive elements do not just change color; they emit light.
*   **State:** Hover
*   **Effect:** Border color shifts to Neon, and a `box-shadow` or internal gradient appears.
*   **Example:** `hover:border-neon-purple/50 hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]`

### Holographic Accents
Used for special items (ID Badges, rare stats).
```css
backgroundImage: {
  'holographic': "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(0,240,255,0.2) 30%, rgba(124,58,237,0.2) 35%, rgba(255,255,255,0.0) 40%)",
}
```

---

## 4. Motion Principles (Framer Motion)

Animations should feel **Physics-based** and **Deliberate**.

1.  **Zero Gravity (Float):**
    *   Elements like the Hero Logo or ID Badge should float continuously.
    *   `animate-float`: Y-axis movement (approx -10px to 10px) over 6 seconds.
2.  **Initialize Sequence:**
    *   Content shouldn't just "appear". It should "load".
    *   Use `staggerChildren` for lists.
    *   `initial={{ opacity: 0, y: 20 }}` -> `animate={{ opacity: 1, y: 0 }}`.
3.  **The Marquee (Data Stream):**
    *   Constant, linear horizontal movement represents data ingestion.
    *   Used in: Tech Stack, ID Badge holographic strip.

---

## 5. Component DNA

### The Terminal (`<Terminal />`)
*   **Visuals:** Top bar with traffic lights (Red/Yellow/Green window controls).
*   **Content:** Text should appear as if it is being typed (`typewriter` effect).
*   **Cursor:** Blinking block cursor.
*   **Narrative:** The "About Me" isn't a paragraph; it's a `JSON` object or a system log.

### The ID Badge
*   **Concept:** Bringing a physical object into a digital void.
*   **Details:** Needs a "plastic" glare overlay, a "metal" clip, and a "fabric" lanyard.
*   **Interaction:** 3D Tilt on hover (Perspective 1000px).

### The Wireframe Logo
*   **Concept:** "Ordered Chaos".
*   **Implementation:** SVG Paths with `stroke-dasharray` animations to draw the lines.
*   **Behavior:** Rotates slowly (Planetary motion).

---

## 6. Extension Rules
If adding new pages or components:
1.  **Always** add a "Back to Terminal" or "Return to Base" link.
2.  **Never** use shadows to create depth (drop shadows); use **light** (borders/gradients) to create depth.
3.  **Data over decoration:** If you can visualize it as a graph, a code block, or a statistic, do that instead of using an icon.
