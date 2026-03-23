

## Fix: Typewriter animation causing layout shifts

**Root cause**: The `h2` containing the typewriter text has no fixed width. As the text grows/shrinks, it changes the element's width, which shifts the entire flex layout and causes the scrollbar to fluctuate.

### Changes

**`src/components/Hero.tsx`** — Reserve space for the longest role text so the layout never shifts:
- Add a hidden `span` that renders the longest role ("Robotics Engineer") with `visibility: hidden` and `h-0 overflow-hidden block` to reserve the width
- Or simpler: set a `min-w` / fixed `min-height` on the `h2` element
- Best approach: render an invisible copy of the longest string to hold the width, with the visible typewriter text positioned over it using `absolute` positioning

Specifically:
```tsx
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-bold mt-2 relative">
  {/* Invisible spacer for the longest role */}
  <span className="invisible">Robotics Engineer</span>
  {/* Visible typewriter text overlaid */}
  <span className="absolute left-0 top-0 md:left-0 text-center md:text-left w-full">
    <span className="gradient-text">{displayText}</span>
    <span className="inline-block w-[3px] h-[1em] bg-primary ml-1 animate-pulse align-middle" />
  </span>
</h2>
```

This reserves the exact space needed for the widest role, preventing any layout shift.

