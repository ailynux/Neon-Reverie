# 📁 Neon Reverie - Project Structure

## 🎯 Organization Philosophy

This project follows a **modular, scalable architecture** designed to make adding new features easy and maintainable.

---

## 📂 Folder Structure

```
src/
├── components/              # React components (JSX only)
│   ├── CountdownTimer.jsx
│   ├── SummonSpirits.jsx
│   ├── FloatingGhost.jsx
│   └── ... (all other components)
│
├── styles/                  # All CSS organized by purpose
│   ├── global/             # Global styles & variables
│   │   ├── variables.css   # CSS custom properties
│   │   ├── animations.css  # Reusable animations
│   │   └── reset.css       # Browser reset
│   ├── components/         # Component-specific styles
│   │   ├── CountdownTimer.css
│   │   └── ... (all component styles)
│   └── animations/         # Special animation files
│
├── hooks/                   # Custom React hooks
│   ├── useLocalStorage.js  # LocalStorage hook
│   ├── useCountdown.js     # Countdown logic hook
│   └── useSound.js         # Sound effects hook (future)
│
├── utils/                   # Utility/helper functions
│   ├── audioUtils.js       # Sound generation functions
│   ├── dateUtils.js        # Date calculations (future)
│   └── apiUtils.js         # API helpers (future)
│
├── constants/               # Configuration & constants
│   ├── config.js           # App configuration
│   ├── facts.js            # Spooky facts data (future)
│   └── omens.js            # Omens data (future)
│
├── assets/                  # Static assets
│   ├── images/             # Images & icons
│   ├── fonts/              # Custom fonts
│   └── sounds/             # Sound files (if any)
│
├── App.jsx                  # Main App component
├── App.css                  # App-level styles
├── main.jsx                 # React entry point
└── index.css               # Global imports & base styles
```

---

## 🔧 How to Use This Structure

### Adding a New Component

1. Create the JSX file in `/components`
2. Create the CSS file in `/styles/components`
3. Import the CSS at the top of the component
4. Use CSS variables from `/styles/global/variables.css`

**Example:**
```jsx
// components/MyNewComponent.jsx
import '../styles/components/MyNewComponent.css';

export const MyNewComponent = () => {
  return <div className="my-component">Hello!</div>;
};
```

```css
/* styles/components/MyNewComponent.css */
.my-component {
  background: var(--bg-dark);
  color: var(--text-primary);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
}
```

### Adding a New Custom Hook

Place in `/hooks` folder:

```jsx
// hooks/useMyHook.js
import { useState, useEffect } from 'react';

export const useMyHook = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  // ... your logic
  return [value, setValue];
};
```

### Adding Configuration

Update `/constants/config.js`:

```js
export const MY_FEATURE_CONFIG = {
  ENABLED: true,
  TIMEOUT: 3000,
  // ... other settings
};
```

### Adding Utility Functions

Place in `/utils` folder:

```js
// utils/myUtils.js
export const calculateSomething = (param) => {
  // ... logic
  return result;
};
```

---

## 🎨 CSS Organization

### Global Variables (`styles/global/variables.css`)
- Colors
- Fonts
- Spacing
- Shadows
- Z-index layers

### Global Animations (`styles/global/animations.css`)
- Reusable keyframe animations
- Utility animation classes
- Glow effect classes

### Component Styles (`styles/components/`)
- One CSS file per component
- Uses global variables
- Scoped to component class names

---

## 📦 Import Patterns

### Recommended Import Order:

```jsx
// 1. React & External Libraries
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// 2. Custom Hooks
import { useLocalStorage } from '../hooks/useLocalStorage';

// 3. Utils & Constants
import { API_CONFIG } from '../constants/config';
import { playSound } from '../utils/audioUtils';

// 4. Components (if needed)
import { Button } from './Button';

// 5. Styles (always last)
import '../styles/components/MyComponent.css';
```

---

## 🚀 Benefits of This Structure

### ✅ Scalability
- Easy to add new features
- Clear separation of concerns
- No file becomes too large

### ✅ Maintainability
- CSS in one place
- Logic separated from presentation
- Easy to find and modify code

### ✅ Reusability
- Shared utilities
- Common hooks
- Consistent variables

### ✅ Team Collaboration
- Clear file organization
- Predictable file locations
- Easy onboarding for new developers

---

## 🔄 Migration Status

### ✅ Completed:
- [x] Created folder structure
- [x] Added CSS variables
- [x] Added global animations
- [x] Created config constants
- [x] Added custom hooks
- [x] Added utility functions

### 🔜 To Do (Optional):
- [ ] Move all component CSS to `styles/components/`
- [ ] Update all imports
- [ ] Extract facts data to constants
- [ ] Create API service layer
- [ ] Add more custom hooks

---

## 📚 File Naming Conventions

### Components
- **PascalCase**: `MyComponent.jsx`
- **CSS**: `MyComponent.css` (matches component name)

### Hooks
- **camelCase with 'use' prefix**: `useMyHook.js`

### Utils
- **camelCase with descriptive suffix**: `audioUtils.js`, `dateUtils.js`

### Constants
- **camelCase**: `config.js`, `constants.js`

### CSS Files
- **camelCase or kebab-case**: `variables.css`, `animations.css`

---

## 🎯 Quick Reference

### Need to add...

| What | Where | Example |
|------|-------|---------|
| New component | `/components` | `NewFeature.jsx` |
| Component styles | `/styles/components` | `NewFeature.css` |
| Reusable hook | `/hooks` | `useNewHook.js` |
| Helper function | `/utils` | `newUtils.js` |
| Configuration | `/constants/config.js` | Export constant |
| Animation | `/styles/global/animations.css` | Add keyframes |
| Color/Variable | `/styles/global/variables.css` | Add to :root |
| Static asset | `/assets` | image.png |

---

**Last Updated:** October 2025
**Maintained by:** Ailyn (ailynux)

