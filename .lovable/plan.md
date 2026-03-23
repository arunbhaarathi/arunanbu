

## Visual Color Palette Picker — 10 Options

Create a temporary swatch test page displaying 10 tech-minimal color palettes visually so you can compare and choose.

### The 10 Palettes

1. **Midnight Blue & White** — #0F172A bg, #F8FAFC text, #3B82F6 accent
2. **Charcoal & Emerald** — #1A1A2E bg, #E5E5E5 text, #10B981 accent
3. **Dark Slate & Amber** — #0F1419 bg, #F5F0E8 text, #F59E0B accent
4. **Neutral Gray & Cyan** — #111111 bg, #D4D4D4 text, #06B6D4 accent
5. **Obsidian & Rose** — #0D0D0D bg, #FAFAFA text, #F43F5E accent
6. **Deep Indigo & Lime** — #1E1B4B bg, #E2E8F0 text, #84CC16 accent
7. **Gunmetal & Teal** — #1C2526 bg, #F0F4F8 text, #14B8A6 accent
8. **Onyx & Violet** — #121218 bg, #E8E8ED text, #8B5CF6 accent
9. **Carbon & Orange** — #171717 bg, #EDEDED text, #F97316 accent
10. **Steel Blue & Gold** — #0C1222 bg, #E1E7EF text, #EAB308 accent

### Implementation

**File: `src/pages/ColorTest.tsx`** — New temporary page with all 10 palettes displayed as cards. Each card shows:
- Background swatch, text swatch, accent swatch (colored circles/squares)
- A mini UI preview (heading, paragraph, button) rendered in those colors
- Palette name and hex codes

**File: `src/App.tsx`** — Add route `/colors` pointing to the test page.

After you pick a palette, I'll apply it across the site and remove this test page.

