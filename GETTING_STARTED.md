# 🎃 Getting Started with Neon Reverie

Welcome to your **Haunted Countdown Dashboard**! This guide will help you get everything running smoothly.

---

## 📋 Prerequisites Check

Before starting, make sure you have:

- ✅ **Node.js** (v18+) - Check with: `node --version`
- ✅ **.NET 8 SDK** - Check with: `dotnet --version`
- ✅ **npm** - Check with: `npm --version`

If any are missing, install them first!

---

## 🚀 Quick Start (2 Terminals)

### Terminal 1: Backend API

```bash
cd server
dotnet run
```

**Wait for:** `Now listening on: http://localhost:5199`

### Terminal 2: Frontend App

```bash
cd client
npm install
npm run dev
```

**Wait for:** `Local: http://localhost:5173/`

### Open Browser

Go to: **http://localhost:5173** 🎃

---

## 🎯 What to Expect

### On First Load:
1. **Neon Reverie** title with glitch effect
2. **Countdown timer** showing time until Halloween
3. **Summon Spirits** button (glowing orange)
4. **Floating ghosts** in the background
5. **Particle effects** and scanlines

### Test the Features:

#### 1. Countdown Timer ⏰
- Shows days, hours, minutes, seconds
- Background changes based on proximity to Halloween:
  - 🍂 Fall (20+ days)
  - 🌅 Twilight (10-20 days)
  - 🌆 Dusk (3-10 days)
  - 🌙 Midnight (< 3 days)

#### 2. Summon Spirits 🔮
- Click the **"🔮 SUMMON SPIRITS 🔮"** button
- A random spooky omen appears with glow animation
- Examples:
  - "💀 The terminal whispers your name..."
  - "🎃 The pumpkin glows with hidden bugs."
  - "👻 Your console flickers — but you didn't press run."

#### 3. Spirit Collection 👁️
- Click **"👁️ SPIRITS ENCOUNTERED"** to expand
- See all omens you've summoned
- Collection is saved in localStorage (persists on refresh!)
- Click **"🗑️ Release All Spirits"** to clear

---

## 🎨 Customization Ideas

### Add More Omens

Edit: `server/Controllers/OmensController.cs`

```csharp
private static readonly string[] Omens = new[]
{
    "💀 Your custom omen here...",
    "🕷️ Another spooky message...",
    // Add as many as you want!
};
```

Restart the API after changes.

### Change Colors

Edit: `client/src/index.css`

```css
:root {
  --neon-purple: #b026ff;  /* Change this! */
  --neon-orange: #ff6b35;  /* And this! */
  --neon-cyan: #00ffff;    /* And this! */
}
```

Changes apply instantly (hot reload).

### Adjust Countdown Target

Edit: `client/src/components/CountdownTimer.jsx`

```javascript
// Line 15: Change the date
const halloween = new Date(new Date().getFullYear(), 9, 31, 23, 59, 59);
// Month is 0-indexed: 9 = October
```

---

## 🐛 Common Issues

### Issue: "npm: command not found"
**Solution:** Install Node.js from https://nodejs.org/

### Issue: "dotnet: command not found"
**Solution:** Install .NET 8 SDK from https://dotnet.microsoft.com/

### Issue: API connection error in browser
**Solution:** 
1. Check Terminal 1 - is the API running?
2. Look for: `Now listening on: http://localhost:5199`
3. If not, restart: `Ctrl+C` then `dotnet run`

### Issue: Port already in use
**Solution:**
- Backend: Change port in `server/Properties/launchSettings.json`
- Frontend: Change port in `client/vite.config.js`

### Issue: Blank page
**Solution:**
1. Open browser console (F12)
2. Check for errors
3. Make sure both terminals are running
4. Try hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

---

## 📦 Project Structure

```
Neon-Reverie/
├── client/              # React Frontend
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── App.jsx      # Main app
│   │   └── index.css    # Global styles
│   └── package.json     # Dependencies
│
├── server/              # C# API
│   ├── Controllers/     # API endpoints
│   │   └── OmensController.cs
│   └── Program.cs       # API setup
│
├── README.md            # Full documentation
├── SETUP.md             # Quick setup guide
└── LICENSE              # MIT License
```

---

## 🎓 Learning Resources

Want to understand the code better?

### React + Vite
- [React Docs](https://react.dev/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Framer Motion](https://www.framer.com/motion/)

### C# + .NET
- [ASP.NET Core Tutorial](https://learn.microsoft.com/en-us/aspnet/core/)
- [Web API Guide](https://learn.microsoft.com/en-us/aspnet/core/web-api/)

---

## 🚀 Next Steps

1. ✅ Get both servers running
2. ✅ Test all features in the browser
3. ✅ Customize the omens
4. ✅ Change the colors to your liking
5. ✅ Share with friends!

---

## 🎃 Have Fun!

You now have a fully functional **Haunted Countdown Dashboard** with:
- ⏰ Real-time Halloween countdown
- 🔮 Spirit summoning API
- 💜 Neon cyber-horror aesthetics
- 👻 Animated ghosts and effects
- 💾 Persistent spirit collection

**Enjoy the spooky vibes!** 👻✨

---

*Need more help? Check the [README.md](README.md) or [SETUP.md](SETUP.md)*

