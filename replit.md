# Pixel5.info - Personal Website

## Overview
This is a personal website with a custom design featuring:
- Interactive warning dialog with keyboard navigation (arrow keys + Enter)
- Custom cursors and fonts
- Audio feedback for user interactions
- Retro/persona-inspired aesthetic with bold colors and skewed elements

## Project Structure
- **index.html** - Main HTML page
- **styles.css** - All styling including custom fonts and cursors
- **script.js** - Interactive dialog logic with keyboard controls and audio
- **server.py** - Python HTTP server with cache control headers
- **cursors/** - Custom cursor files (.cur)
- **fonts/** - Custom fonts (Lust Display and Korean fonts)
- **gallery/** - Image assets including old assets and placeholder images
- **sound/** - Audio files for UI interactions (Persona 5 Royal sounds)
- **favicon/** - Favicon and app icons

## Recent Changes (Oct 23, 2025)
- Initial import from GitHub repository
- Added Python HTTP server with no-cache headers for development
- Configured Replit workflow to serve on port 5000
- Set up deployment configuration
- Added .gitignore for Python and Replit files

## Development Setup
The site runs on a simple Python HTTP server that:
- Serves static files on 0.0.0.0:5000
- Includes Cache-Control headers to prevent caching during development
- Allows the Replit webview proxy to display the site

## User Preferences
None documented yet.

## To-Do List (from README)
- [ ] Custom Cursors
- [ ] Main page
- [ ] Counter
- [ ] Welcome banner

## Site Features
- Warning overlay with user agreement about site content
- Keyboard navigation (Left/Right arrows to select, Enter to confirm)
- Audio feedback using Persona 5 Royal sound effects
- Custom cursor support
- Responsive dialog box design
- Lorem ipsum placeholder content in main area

## Technical Notes
- This is a static site with no backend
- Audio files are loaded from https://pixel5.info/sound/ externally
- Font files use @font-face for custom typography
- Site uses traditional HTML/CSS/JS without frameworks
