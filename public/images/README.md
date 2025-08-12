# Images Directory Structure

This directory contains all images used in the portfolio, organized by category for easy management.

## Folder Structure

```
public/images/
├── blog/                    # Blog post images
│   ├── mcp/                # Model Context Protocol blog images
│   ├── transformer/        # Transformer architecture blog images
│   └── mlops/              # MLOps blog images
└── resume/                 # Resume, profile, and company logos
    ├── anojan_profile.JPG  # Profile photo
    ├── uwo.png            # Western University logo
    ├── sliit.png          # SLIIT logo
    ├── kaidu.png          # Kaidu.ai logo
    ├── hehealth.png       # HeHealth logo
    └── senzmate.png       # SenzMate logo
```

## Usage Guidelines

### Adding Blog Images
1. Create a new folder in `public/images/blog/` for your blog post (e.g., `public/images/blog/your-topic/`)
2. Add your images to that folder
3. Reference them in your markdown blog post using relative paths

### Adding Resume/Company Images
1. Add company logos and resume-related images to `public/images/resume/`
2. Update the `data.ts` file to reference the new image paths

### Adding Resume Images
1. Add profile photos and resume-related images to `images/resume/`
2. Update component files to reference the new image paths

## Image Formats
- **Profile Photos**: JPG, PNG
- **Logos**: PNG (preferred for transparency)
- **Blog Images**: JPG, PNG, WebP
- **Screenshots**: PNG, JPG

## Naming Convention
- Use lowercase with hyphens for file names
- Include descriptive names (e.g., `mcp-architecture-diagram.png`)
- Use consistent naming across related images
