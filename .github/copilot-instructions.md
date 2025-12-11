# Copilot Instructions for IC Project

## Overview
This project is a web-based platform for visualizing two core experiments:
1. **PN Junction I-V Curve Scanning (IV Module)**
2. **RC Circuit Waveform Analysis (RC Module)**

The project is structured into two main modules, each with its own HTML, CSS, and JavaScript files. The website is designed to be interactive and responsive, leveraging libraries like Chart.js and Plotly.js for data visualization.

## Project Structure
- **Root Directory**:
  - `index.html`: Main entry point of the website.
  - `last_words.html`: Summary and acknowledgments.
  - `README.md`: Project documentation.
- **IV Module (`IV/`)**:
  - `index_iv.html`: Module homepage.
  - `intro_iv.html`: Experiment introduction.
  - `tcadProcess_iv.html`: TCAD modeling process.
  - `ivCurve_iv.html`: I-V curve visualization.
  - `network_iv.html`: Website architecture explanation.
  - `script_iv.js`: JavaScript logic for IV module.
  - `style_iv.css`: Styling for IV module.
- **RC Module (`RC/`)**:
  - `index_rc.html`: Module homepage.
  - `intro_rc.html`: Experiment introduction.
  - `rc_waveform.html`: Interactive waveform visualization.
  - `network_rc.html`: Website architecture explanation.
  - `script_rc.js`: JavaScript logic for RC module.
  - `style_rc.css`: Styling for RC module.

## Key Conventions
1. **Modular Design**:
   - Each module (IV and RC) is self-contained with its own scripts, styles, and images.
   - Shared resources (if any) should be placed in the root directory or a common folder.

2. **Visualization Libraries**:
   - **Chart.js**: Used in the IV module for plotting I-V curves.
   - **Plotly.js**: Used in the RC module for waveform visualization.

3. **Responsive Design**:
   - Ensure all pages are accessible on both desktop and mobile devices.
   - Use relative units (%, em, rem) for layout and styling.

4. **Navigation**:
   - Breadcrumb navigation is implemented on all pages for easy user navigation.

## Developer Workflows
### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/maverickxone/Homework-IC-Network.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Homework-IC-Network
   ```
3. Open `index.html` using Live Server or any local HTTP server.

### Testing Interactive Features
- **IV Module**:
  - Open `IV/ivCurve_iv.html`.
  - Verify the I-V curve updates correctly based on provided data.
- **RC Module**:
  - Open `RC/rc_waveform.html`.
  - Adjust the sliders for frequency, resistance, and capacitance.
  - Ensure the waveform updates dynamically.

## Integration Points
- **GitHub Pages**:
  - The project is deployed at: [https://maverickxone.github.io/Homework-IC-Network/](https://maverickxone.github.io/Homework-IC-Network/).
- **External Libraries**:
  - Chart.js and Plotly.js are included via CDN links in the respective HTML files.

## Examples
### Adding a New Visualization
1. Create a new HTML file in the appropriate module folder.
2. Add a `<script>` tag to include the required library (e.g., Chart.js or Plotly.js).
3. Follow the existing patterns in `ivCurve_iv.html` or `rc_waveform.html` for integrating the visualization.

### Debugging Tips
- Use browser developer tools to inspect and debug JavaScript and CSS.
- Check the console for errors related to library imports or data processing.

## Notes
- Ensure all new features are responsive and tested on multiple devices.
- Follow the modular structure to keep the codebase maintainable.