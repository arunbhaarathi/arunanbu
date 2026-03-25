

## Analysis

The current Hero uses a three-column flex layout (`text | photo | social`) constrained to `max-w-5xl` (64rem). On your 883px viewport, this creates visible gutters on both sides. The social column also pushes the photo away from the text, fragmenting the visual weight.

## Proposed Changes

**File: `src/components/Hero.tsx`**

1. Widen the container from `max-w-5xl` to `max-w-6xl` to better fill the viewport
2. Increase horizontal padding slightly and adjust the gap between columns
3. Give the text column more flex weight (`flex-1`) so it naturally fills available space
4. Keep the social icons column compact but closer to the photo

This is a lightweight spacing adjustment — no structural or content changes.

