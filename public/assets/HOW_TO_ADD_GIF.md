# 🎨 How to Add Your Avatar Background GIF

## Quick Steps:

1. **Save the pixel art GIF you attached** to this exact location:
   ```
   public/assets/avatar-glow.gif
   ```

2. **The GIF will automatically appear** behind your avatar with a hexagonal mask!

## What's Been Implemented:

### ✨ SVG Clip-Path Mask
Your avatar now uses an **SVG hexagon clip-path** that creates a unique geometric shape behind the circular profile photo. The GIF only displays within this hexagonal boundary, creating a striking layered effect.

### 🎯 Available Shapes (Easy to Change)

In `src/components/landing/Hero.tsx`, you can modify the `clipPath` to different shapes:

#### **Hexagon (Current)**
```tsx
<polygon points="0.5,0 0.95,0.25 0.95,0.75 0.5,1 0.05,0.75 0.05,0.25" />
```

#### **Star Shape**
```tsx
<polygon points="0.5,0 0.61,0.35 0.98,0.35 0.68,0.57 0.79,0.91 0.5,0.7 0.21,0.91 0.32,0.57 0.02,0.35 0.39,0.35" />
```

#### **Diamond**
```tsx
<polygon points="0.5,0 1,0.5 0.5,1 0,0.5" />
```

#### **Octagon**
```tsx
<polygon points="0.3,0 0.7,0 1,0.3 1,0.7 0.7,1 0.3,1 0,0.7 0,0.3" />
```

#### **Circle (Simple)**
```tsx
<circle cx="0.5" cy="0.5" r="0.5" />
```

### 🎨 Using the Alternative Ring Mask

The code also includes a **donut/ring mask** that creates a glow around the avatar. To use it instead, change:

```tsx
// FROM:
style={{ clipPath: 'url(#avatar-glow-shape)' }}

// TO:
style={{ mask: 'url(#avatar-glow-mask)' }}
```

This creates a ring effect where the GIF shows only in the outer ring, not in the center.

## 🔧 Customization Options:

### Adjust the Mask Size:
```tsx
// Make the hexagon bigger/smaller
<div className="absolute inset-0 -m-8 z-0"> {/* Was -m-6 */}
```

### Change Opacity & Effects:
```tsx
className="opacity-60 group-hover:opacity-80" {/* Adjust these values */}
```

### Add Blur Effect:
```tsx
className="opacity-60 blur-sm group-hover:blur-none"
```

### Change Animation Speed:
In `globals.css`, modify the `avatarGlow` animation:
```css
.animate-avatar-glow {
  animation: avatarGlow 10s ease-in-out infinite; /* Was 20s */}
```

## 📐 Creating Custom Shapes:

### Online SVG Path Generators:
- [SVG Path Editor](https://yqnn.github.io/svg-path-editor/)
- [Clippy - CSS clip-path maker](https://bennettfeely.com/clippy/)

### How to Use Custom Paths:
1. Create your shape in the tool
2. Copy the polygon points or path
3. Replace in the `<clipPath>` definition

## 🎯 Perfect Shapes for Avatar Backgrounds:

1. **Hexagon** ✅ (Current) - Geometric, modern
2. **Star** - Bold, standout
3. **Diamond** - Elegant, professional
4. **Octagon** - Balanced, unique
5. **Flower** - Creative, artistic
6. **Shield** - Strong, protective

---

**Your pixel art cityscape GIF will look amazing with the hexagonal mask! 🌆✨**
