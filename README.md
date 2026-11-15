# CSS Border Corner Animation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/css-border-corner-animation/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

Responsive HTML/CSS/JavaScript recreation of the uploaded screen recording.

## 5 effects in the video
1. Growing Corner Border — hover effect
2. Rotating Gradient Border — infinite
3. Pulsing Corner Lines — infinite
4. Diagonal Corner Accent — infinite
5. Neon Corner Glow — infinite

## Source snippets visible in the recording

### Growing Corner Border
```css
.box::before,
.box::after {
  content: "";
  position: absolute;
  width: 28px;
  height: 28px;
  border: 3px solid #38bdf8;
  transition: .45s ease;
}
.box::before {
  top: 14px;
  left: 14px;
  border-right: none;
  border-bottom: none;
}
.box::after {
  bottom: 14px;
  right: 14px;
  border-left: none;
  border-top: none;
}
.box:hover::before,
.box:hover::after {
  width: 188px;
  height: 108px;
}
```

### Rotating Gradient Border
```css
.box::before {
  content: "";
  position: absolute;
  inset: -3px;
  background: conic-gradient(#22d3ee, #8b5cf6, #22d3ee);
  animation: spin 3s linear infinite;
}
.box::after {
  content: "";
  position: absolute;
  inset: 4px;
  background: #111827;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
```

### Pulsing Corner Lines
```css
.box::before,
.box::after {
  content: "";
  position: absolute;
  width: 36px;
  height: 36px;
  border: 3px solid #f59e0b;
  animation: pulse 1.8s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.35); opacity: .4; }
}
```

### Diagonal Corner Accent
```css
.box::before,
.box::after {
  content: "";
  position: absolute;
  width: 70px;
  height: 3px;
  background: #22c55e;
  animation: diag 2s ease-in-out infinite;
}
.box::before {
  top: 20px;
  left: -18px;
  transform: rotate(45deg);
}
.box::after {
  bottom: 20px;
  right: -18px;
  transform: rotate(45deg);
}
```

### Neon Corner Glow
```css
.box::before,
.box::after {
  content: "";
  position: absolute;
  width: 44px;
  height: 44px;
  border: 3px solid #ec4899;
  filter: drop-shadow(0 0 10px #ec4899)
          drop-shadow(0 0 18px #ec4899);
  animation: neon 1.6s linear infinite alternate;
}
```

The code snippets above preserve the readable values and declarations from the video. Where the recording does not show the complete selector placement or keyframe body (for example the `diag` and `neon` keyframes), the runnable implementation fills in a matching animation.

## Run locally
1. Extract the ZIP.
2. Open `index.html` in a browser, or use VS Code Live Server.
3. No npm install, framework, or external assets required.

Use the Pause animations button to pause/resume infinite animations. Hover over Growing Corner Border to expand its corner lines.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
