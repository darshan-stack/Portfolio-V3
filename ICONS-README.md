# Technology Icons Setup

## Overview
This portfolio uses official SVG logos from Simple Icons CDN and Wikimedia Commons for all technology skills.

## Quick Start

### Option 1: Auto-Download (Recommended)
Run the automated script to download all icons:

```bash
bun run fetch-icons
```

This will download 26 official SVG logos to `/public/skills/`:
- **AI/ML**: PyTorch, TensorFlow, Hugging Face, OpenCV, scikit-learn
- **Languages**: Python, JavaScript, TypeScript
- **Libraries**: NumPy, Pandas, Jupyter
- **Web**: React, Next.js, Node.js, FastAPI
- **DevOps**: Docker, Kubernetes, AWS, Google Cloud
- **Databases**: PostgreSQL, MongoDB
- **Tools**: Git, Kaggle, Prisma, Bun

### Option 2: Manual Download
If you prefer manual control:

1. Visit [Simple Icons](https://simpleicons.org/)
2. Search for each technology
3. Download SVG files
4. Place in `/public/skills/` with these names:
   - `pytorch.svg`, `tensorflow.svg`, `huggingface.svg`, etc.

### Option 3: Use Your Own Icons
Replace any SVG in `/public/skills/` with your custom versions. Just maintain the filename structure.

## Icon Sources

### Simple Icons CDN
Most icons use: `https://cdn.simpleicons.org/{name}`
- Official brand colors
- Always up-to-date
- Optimized SVGs

### Wikimedia Commons
Fallback source for some icons:
- PyTorch: https://commons.wikimedia.org/wiki/File:PyTorch_logo_icon.svg
- TensorFlow: https://commons.wikimedia.org/wiki/File:Tensorflow_logo.svg
- NumPy: https://commons.wikimedia.org/wiki/File:NumPy_logo_2020.svg

## Usage in Code

All sections automatically use these SVGs via Next.js Image component:

```tsx
<Image 
  src="/skills/pytorch.svg" 
  alt="PyTorch" 
  width={20} 
  height={20} 
/>
```

### Sections Using Icons:
1. **Technical Skills** ([CategorizedSkills.tsx](src/components/landing/CategorizedSkills.tsx))
2. **Open Source Work** ([OpenSource.tsx](src/components/landing/OpenSource.tsx))
3. **About Me** ([About.tsx](src/config/About.tsx))
4. **Floating Halo** (Around profile photo)

## Optimization

To further optimize SVGs:

```bash
# Install SVGO
bun add -D svgo

# Optimize all icons
bunx svgo -f public/skills
```

## Troubleshooting

### Icons not displaying?
1. Check `/public/skills/` folder exists
2. Verify SVG files are present
3. Run `bun run fetch-icons` to re-download
4. Check browser console for 404 errors

### Want different icons?
Simply replace the SVG files in `/public/skills/` - no code changes needed!

## Color Rendering

All icons render in **original brand colors** (not monochrome). This is achieved by:
1. Using official colored SVGs
2. No CSS filters applied
3. Native SVG color preservation

## License

All icons are from official sources and retain their respective licenses:
- Simple Icons: CC0 1.0 Universal
- Wikimedia Commons: Various (check individual files)
- Always verify license for commercial use
