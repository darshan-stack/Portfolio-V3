# Scroll Background Animation Guide

This guide explains how to use the scroll-based background animations in your portfolio.

## Components Available

### 1. ParallaxSection
Wraps entire sections with parallax scroll effects and optional background images.

### 2. ScrollBackground
A more flexible component for adding animated backgrounds to any element.

## Usage Examples

### Basic ParallaxSection (No Background)
```tsx
<ParallaxSection className="py-16">
  <YourComponent />
</ParallaxSection>
```

### ParallaxSection with Background Image
```tsx
<ParallaxSection 
  backgroundImage="/images/your-background.jpg"
  backgroundAlt="Description of background"
  position="center" // or "left" or "right"
  className="py-16"
>
  <YourComponent />
</ParallaxSection>
```

### ScrollBackground Component
```tsx
<ScrollBackground
  src="/images/your-background.jpg"
  alt="Background description"
  position="left" // or "right" or "center"
  className="min-h-screen py-16"
>
  <YourContent />
</ScrollBackground>
```

## Animation Effects

The scroll animations include:

1. **Parallax Movement** - Background moves slower than scroll (20% range)
2. **Fade In/Out** - Opacity changes as section enters/exits viewport
3. **Scale Effect** - Subtle zoom in/out (0.8 to 1.0 scale)
4. **Blur Effect** - Blurs when far from viewport, sharp when in view
5. **Horizontal Movement** - Left/right positioning based on scroll

## Position Options

- `center` - Background stays centered, moves vertically
- `left` - Background starts from left, moves right as you scroll
- `right` - Background starts from right, moves left as you scroll

## Adding Background Images to Sections

To add a background image to a specific section in `src/app/page.tsx`:

```tsx
// Before
<ParallaxSection className="py-16">
  <Experience />
</ParallaxSection>

// After (with background)
<ParallaxSection 
  backgroundImage="/images/experience-bg.jpg"
  backgroundAlt="Experience Background"
  position="left"
  className="py-16"
>
  <Experience />
</ParallaxSection>
```

## Tips

1. **Image Size**: Use high-quality images (1920x1080 or larger)
2. **Gradient Overlay**: Automatically applied for text readability
3. **Performance**: Images are lazy-loaded and unoptimized for GIFs/animations
4. **Dark Mode**: Overlay adjusts opacity for dark mode automatically

## Current Implementation

The following sections already have ParallaxSection wrappers:
- ✅ Hero
- ✅ Skills (CategorizedSkills)
- ✅ Experience
- ✅ Projects (Work)
- ✅ About
- ✅ Github

You can add `backgroundImage` prop to any of these to enable background animations!
