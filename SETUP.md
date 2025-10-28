# 🎃 Quick Setup Guide

## 🚀 Getting Started in 3 Steps

### Step 1️⃣: Start the Backend (C# API)

Open a terminal and run:

```bash
cd server
dotnet run
```

✅ **Expected output:**
```
Now listening on: http://localhost:5199
```

Keep this terminal open! The API needs to stay running.

---

### Step 2️⃣: Start the Frontend (React App)

Open a **NEW** terminal and run:

```bash
cd client
npm install
npm run dev
```

✅ **Expected output:**
```
  VITE v5.0.0  ready in XXX ms

  ➜  Local:   http://localhost:5173/
```

---

### Step 3️⃣: Open Your Browser

Navigate to: **http://localhost:5173**

🎃 **You should see:**
- A glowing "NEON REVERIE" title
- Halloween countdown timer
- "Summon Spirits" button
- Floating ghost animations

---

## 🧪 Testing the API Connection

1. Click the **"🔮 SUMMON SPIRITS 🔮"** button
2. You should see a glowing message appear with a spooky omen
3. Click **"👁️ SPIRITS ENCOUNTERED"** to view your collection

### ⚠️ Troubleshooting

**If you see an error message:**
- ✅ Make sure the backend is running on `http://localhost:5199`
- ✅ Check that both terminals are still open
- ✅ Try refreshing the page

---

## 🎨 What You'll See

### **Countdown Timer**
- Days, hours, minutes, seconds until Halloween
- Background changes color as Halloween approaches
- Theme indicator shows current phase

### **Spirit Summoning**
- Click button to fetch random omens from API
- Each omen appears with neon glow animation
- Omens are automatically saved to your collection

### **Floating Effects**
- Animated ghosts floating up the screen
- Particle effects in neon colors
- Scanline effect for retro terminal feel
- Glitch effect on title

---

## 🛠️ Development

### Backend (C# API)

**File to edit:** `server/Controllers/OmensController.cs`

Add more spooky omens to the array:

```csharp
private static readonly string[] Omens = new[]
{
    "💀 Your custom omen here...",
    // Add more!
};
```

Then restart the API: `Ctrl+C` and `dotnet run`

### Frontend (React)

**Main files:**
- `client/src/App.jsx` - Main layout
- `client/src/components/CountdownTimer.jsx` - Timer logic
- `client/src/components/SummonSpirits.jsx` - API integration
- `client/src/index.css` - Global styles

Changes are **hot-reloaded** automatically! ⚡

---

## 📦 Building for Production

### Backend
```bash
cd server
dotnet publish -c Release
```

### Frontend
```bash
cd client
npm run build
```

The production build will be in `client/dist/`

---

## 🎃 Have Fun!

Enjoy your haunted countdown dashboard! 👻✨

Questions? Check the main [README.md](README.md) for more details.

