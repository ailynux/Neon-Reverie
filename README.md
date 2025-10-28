# 🎃👻 NEON REVERIE - Haunted Countdown Dashboard 👻🎃

<div align="center">

![Halloween](https://img.shields.io/badge/Halloween-2025-orange?style=for-the-badge&logo=ghost)
![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react)
![C#](https://img.shields.io/badge/C%23-.NET%208-512BD4?style=for-the-badge&logo=dotnet)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite)

**A dark cyber-horror Halloween countdown experience with neon aesthetics** ✨

*Where retro haunted terminals meet modern web magic* 🔮

</div>

---

## 🌙 About

**Neon Reverie** is a spooky-cool Halloween countdown dashboard that combines:
- 🎃 **Real-time countdown** to October 31st with dynamic theming
- 👻 **Spirit summoning** system powered by a C# API
- 💜 **Neon cyber-horror aesthetic** with glowing effects and animations
- 🔮 **Spirit collection** tracker using localStorage
- ⚡ **Framer Motion animations** for smooth, haunting transitions

The vibe: **Dark. Glowing. Retro-futuristic. Spooky.**

---

## ✨ Features

### 🕐 **Haunted Countdown Timer**
- Live countdown showing **days, hours, minutes, and seconds** until Halloween
- **Dynamic background themes** that evolve as the date approaches:
  - 🍂 **Fall** (20+ days away)
  - 🌅 **Twilight** (10-20 days)
  - 🌆 **Dusk** (3-10 days)
  - 🌙 **Midnight** (< 3 days) - with pulsing effects!

### 🔮 **Summon Spirits**
- Click the **"Summon Spirits"** button to fetch random omens from the API
- Each omen appears with **glowing neon animations**
- Omens include messages like:
  - *"💀 The terminal whispers your name..."*
  - *"🎃 The pumpkin glows with hidden bugs."*
  - *"👻 Your console flickers — but you didn't press run."*

### 👁️ **Spirits Encountered Collection**
- All summoned spirits are **automatically saved** to localStorage
- View your collection of encountered omens
- Track how many spirits you've discovered
- Clear your collection to start fresh

### 🎨 **Neon Cyber-Horror Aesthetic**
- **Creepster** font for spooky headers
- **Space Mono** monospace font for that terminal feel
- Glowing text effects in **purple, orange, and cyan**
- Floating ghost SVG animations
- Scanline effects for retro CRT monitor vibes
- Particle effects floating across the screen
- Glitch effects on the title

---

## 🚀 Tech Stack

### **Frontend** (`/client`)
- ⚛️ **React 18.2** - Modern UI library
- ⚡ **Vite 5.0** - Lightning-fast build tool
- 🎬 **Framer Motion 10** - Smooth animations
- 🎨 **CSS3** - Custom neon styling with animations
- 💾 **localStorage** - Client-side spirit collection

### **Backend** (`/server`)
- 🔷 **C# .NET 8** - Web API
- 🌐 **ASP.NET Core** - RESTful API framework
- 🔄 **CORS enabled** - For React frontend communication

---

## 📦 Installation & Setup

### **Prerequisites**
- Node.js (v18 or higher)
- .NET 8 SDK
- npm or yarn

### **1️⃣ Clone the Repository**
```bash
git clone <your-repo-url>
cd Neon-Reverie
```

### **2️⃣ Backend Setup (C# API)**

```bash
# Navigate to server directory
cd server

# Restore dependencies
dotnet restore

# Run the API
dotnet run
```

The API will start on **http://localhost:5199**

**API Endpoints:**
- `GET /api/omens/random` - Returns a random spooky omen
- `GET /api/omens/all` - Returns all available omens

### **3️⃣ Frontend Setup (React App)**

```bash
# Navigate to client directory (from root)
cd client

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will start on **http://localhost:5173**

### **4️⃣ Open Your Browser**

Navigate to **http://localhost:5173** and experience the haunted dashboard! 👻

---

## 🎮 Usage

1. **Watch the Countdown** - See how much time remains until Halloween
2. **Summon Spirits** - Click the glowing button to fetch spooky omens
3. **Collect Spirits** - View all the omens you've encountered
4. **Enjoy the Vibes** - Watch the floating ghosts and neon effects

---

## 🎨 Color Palette

```css
/* Neon Colors */
--neon-purple: #b026ff   /* Primary glow */
--neon-orange: #ff6b35   /* Halloween accent */
--neon-cyan: #00ffff     /* Terminal highlight */
--neon-pink: #ff10f0     /* Ghost effects */

/* Dark Theme */
--bg-darkest: #0a0a0f    /* Deep space black */
--bg-dark: #13131a       /* Void dark */
--bg-medium: #1a1a2e     /* Midnight blue */
```

---

## 📁 Project Structure

```
Neon-Reverie/
├── client/                    # React Frontend
│   ├── public/               # Static assets
│   ├── src/
│   │   ├── components/
│   │   │   ├── CountdownTimer.jsx      # Halloween countdown
│   │   │   ├── CountdownTimer.css
│   │   │   ├── SummonSpirits.jsx       # Spirit summoning UI
│   │   │   ├── SummonSpirits.css
│   │   │   ├── FloatingGhost.jsx       # Animated ghosts
│   │   │   └── FloatingGhost.css
│   │   ├── App.jsx           # Main app component
│   │   ├── App.css           # App-level styling
│   │   ├── main.jsx          # React entry point
│   │   └── index.css         # Global styles
│   ├── index.html            # HTML template
│   ├── vite.config.js        # Vite configuration
│   └── package.json          # Dependencies
│
└── server/                   # C# .NET API
    ├── Controllers/
    │   └── OmensController.cs    # API endpoints
    ├── Properties/
    │   └── launchSettings.json   # Launch configuration
    ├── Program.cs            # API setup & CORS
    ├── server.csproj         # Project file
    └── appsettings.json      # Configuration
```

---

## 🎯 Optional Enhancements

Want to take it further? Try adding:

- 🎵 **Ambient Soundtrack** - Looping spooky music (toggleable)
- 🎭 **Console Mode** - Fake hacker terminal with ASCII art
- 🌐 **Deployment** - Host on Vercel (frontend) + Azure/Render (backend)
- 📱 **PWA Support** - Make it installable
- 🎨 **Theme Switcher** - Multiple color schemes
- 🔊 **Sound Effects** - Spooky sounds when summoning spirits
- 📊 **Spirit Statistics** - Track most common omens
- 🏆 **Achievements** - Unlock badges for collecting spirits

---

## 🐛 Troubleshooting

### **API Connection Failed**
- ✅ Make sure the C# API is running on `http://localhost:5199`
- ✅ Check CORS settings in `Program.cs`
- ✅ Verify the API URL in `SummonSpirits.jsx`

### **Animations Not Working**
- ✅ Ensure Framer Motion is installed: `npm install framer-motion`
- ✅ Check browser console for errors

### **Fonts Not Loading**
- ✅ Verify Google Fonts link in `index.html`
- ✅ Check internet connection

---

## 🎃 Contributing

Found a bug? Have a spooky feature idea? Contributions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/SpookyFeature`)
3. Commit your changes (`git commit -m 'Add some SpookyFeature'`)
4. Push to the branch (`git push origin feature/SpookyFeature`)
5. Open a Pull Request

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Credits

- **Fonts**: [Creepster](https://fonts.google.com/specimen/Creepster) & [Space Mono](https://fonts.google.com/specimen/Space+Mono) from Google Fonts
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Inspiration**: Retro terminals, cyberpunk aesthetics, and Halloween vibes 🎃

---

<div align="center">

### 👻 **Made with 💜 and Dark Magic** 👻

*Happy Halloween! May your code be bug-free and your spirits be high* 🔮

**⭐ Star this repo if you like spooky code! ⭐**

</div>

---

## 🔮 Screenshots

### Main Dashboard
![Dashboard Preview](https://via.placeholder.com/800x400/0a0a0f/b026ff?text=Neon+Reverie+Dashboard)

### Spirit Summoning
![Spirit Summon](https://via.placeholder.com/800x400/0a0a0f/ff6b35?text=Summon+Spirits)

### Collection View
![Collection](https://via.placeholder.com/800x400/0a0a0f/00ffff?text=Spirits+Encountered)

---

## 🚀 Quick Start Commands

```bash
# Backend (Terminal 1)
cd server
dotnet run

# Frontend (Terminal 2)
cd client
npm install
npm run dev
```

**Then open:** http://localhost:5173 🎃

---

*Built for Halloween 2025 with React, C#, and a touch of the supernatural* ✨👻✨
