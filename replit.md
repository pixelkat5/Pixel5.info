# Pixel5.info - Personal Website

## Overview
A personal portfolio and homepage website with a custom Persona 5-inspired design aesthetic. Features interactive navigation, custom cursors, sound effects, and a unique warning dialog system.

## Project Type
Static HTML/CSS/JavaScript website

## Recent Changes
- **October 24, 2025**: Initial setup in Replit environment
  - Configured Python HTTP server to serve static files
  - Set up workflow to run on port 5000
  - Project is now fully functional in Replit

## Project Structure
- `index.html` - Main homepage with navigation and content layout
- `styles.css` - Complete styling including custom fonts, animations, and responsive design
- `script.js` - Interactive features (keyboard navigation, audio, dialog system)
- `cursors/` - Custom cursor files for enhanced UX
- `fonts/` - Custom fonts (Lust Display, Korean KRSM, Optima Nova)
- `gallery/` - Image assets and old assets archive
- `sound/` - Audio files for UI interactions (Persona 5 sounds)
- `favicon/` - Website icons and manifest files

## Features
- Custom Persona 5-themed UI design
- Interactive keyboard navigation (Arrow keys + Enter)
- Sound effects for UI interactions
- Warning/agreement dialog with cookie functionality (planned)
- Custom cursor system
- Jelly animation effects on navigation elements
- Responsive layout

## Technology Stack
- Pure HTML5, CSS3, JavaScript (no frameworks)
- Custom font loading with @font-face
- Audio API for sound effects
- Keyboard event handling for navigation

## Running the Project
The website runs on a simple Python HTTP server:
- Server runs on port 5000
- Serves all static files from the root directory
- Workflow: `python -m http.server 5000 --bind 0.0.0.0`

## Deployment
This static website can be deployed using Replit's autoscale deployment option, which serves the files efficiently without maintaining server state.

## Known TODOs (from README)
- [ ] Custom Cursors (partially implemented)
- [ ] Main page content
- [ ] Visit counter implementation
- [ ] Welcome banner
- [ ] Cookie injection for warning dialog "No" option
