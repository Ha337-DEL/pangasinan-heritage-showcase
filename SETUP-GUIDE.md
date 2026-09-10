# Setting Up Pangasinan Heritage — A Beginner's Guide

This guide walks you through installing everything you need, opening the
project in VS Code, and running it in your browser — even if you've never
used React before.

---

## 1. Install Node.js

React + Vite projects run on **Node.js** (a JavaScript runtime) and **npm**
(its package manager, installed automatically with Node).

1. Go to [nodejs.org](https://nodejs.org).
2. Download the **LTS** version (the button labeled "LTS" — avoid "Current," which is less stable).
3. Run the installer and click through with the default options.
4. Confirm it worked by opening a terminal (see below) and typing:
   ```bash
   node -v
   npm -v
   ```
   You should see version numbers (e.g. `v20.14.0` and `10.7.0`). If you see
   "command not found," restart your computer and try again — Node needs a
   fresh terminal session to register on your system PATH.

**Opening a terminal:**
- **Windows:** Search for "Command Prompt" or "PowerShell" in the Start menu.
- **Mac:** Open "Terminal" from Applications → Utilities, or search with Spotlight (⌘ + Space).

---

## 2. Install VS Code

1. Download it from [code.visualstudio.com](https://code.visualstudio.com).
2. Install it with the default options.
3. Optional but recommended extensions (install from the Extensions panel,
   the icon that looks like four squares in the left sidebar):
   - **ES7+ React/Redux/React-Native snippets** — shortcuts for React code.
   - **Prettier – Code formatter** — keeps your code tidy automatically.

---

## 3. Get the project onto your computer

If you received the project as a `.zip` file:
1. Unzip it anywhere convenient (e.g. your Desktop or Documents folder).
2. Open VS Code.
3. Go to **File → Open Folder…** and select the unzipped `pangasinan-heritage` folder.

---

## 4. Install the project's dependencies

Every React + Vite project lists the packages it needs in `package.json`.
You install them once with a single command.

1. In VS Code, open the built-in terminal: **Terminal → New Terminal** (or
   press `` Ctrl+` ``).
2. Make sure you're inside the project folder — the terminal prompt should
   already show `pangasinan-heritage` since VS Code opens it there.
3. Run:
   ```bash
   npm install
   ```
   This downloads React, Vite, and everything else into a new `node_modules`
   folder. It can take anywhere from a few seconds to a couple of minutes
   depending on your internet connection. **This is normal — let it finish.**

---

## 5. Run the project

```bash
npm run dev
```

You'll see output like:

```
  VITE v5.4.21  ready in 320 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Hold `Ctrl` (or `Cmd` on Mac) and click the `http://localhost:5173/` link, or
copy it into your browser. The Pangasinan Heritage site will load.

**Leave this terminal running** while you work — it's your local server. Any
time you save a file, the browser updates automatically (this is called
"hot reload"). To stop the server, click into the terminal and press `Ctrl+C`.

---

## 6. Understanding the important folders

```
pangasinan-heritage/
├── index.html              ← the single HTML page that loads everything
├── package.json             ← lists dependencies and commands (scripts)
├── vite.config.js           ← Vite's configuration
└── src/
    ├── main.jsx              ← the entry point; mounts <App /> into the page
    ├── App.jsx               ← assembles all the page sections in order
    ├── index.css             ← global design tokens (colors, fonts, spacing)
    ├── data/
    │   └── content.js         ← ALL the website's text and image paths live here
    ├── assets/                ← put your photos here (see its README.md)
    └── components/
        ├── atoms/              ← smallest building blocks (Button, Heading, Image…)
        ├── molecules/          ← small combinations of atoms (HeritageCard…)
        └── organisms/          ← full page sections (Navbar, HeroSection…)
```

**The most useful folder for day-to-day edits is `src/data/content.js`.**
Want to fix a typo, change a description, or update a heritage site's name?
Edit it there — you don't need to touch any component file.

---

## 7. Useful commands

| Command           | What it does                                              |
|--------------------|-------------------------------------------------------------|
| `npm install`       | Installs all dependencies (run this once, or after pulling new changes) |
| `npm run dev`       | Starts the local development server with hot reload        |
| `npm run build`     | Builds an optimized, production-ready version into `dist/` |
| `npm run preview`   | Serves the built `dist/` folder locally, so you can check the production build |

---

## 8. Basic troubleshooting

**"npm: command not found" or "node: command not found"**
Node.js isn't installed, or your terminal was open before you installed it.
Close and reopen the terminal (or restart your computer), then re-check with
`node -v`.

**`npm install` fails with permission errors**
Avoid using `sudo npm install` — instead, reinstall Node.js using the
official installer (not a system package manager), which avoids permission
issues on most systems.

**Port 5173 is already in use**
Another project is already running. Either stop that server (`Ctrl+C` in its
terminal), or let Vite pick a new port automatically — it will suggest one
like `5174` and tell you in the terminal output.

**Blank white page in the browser**
Open your browser's developer console (`F12` or right-click → Inspect →
Console tab) and look for a red error message. It usually names the exact
file and line causing the problem. Common causes: a typo in an import path,
or a missing closing tag in JSX.

**Photos not showing up**
This is expected until you add your own images. The site shows a labeled
placeholder frame (e.g. "Pangasinan Provincial Capitol") instead of a broken
image icon. Add your photos to `src/assets/` using the filenames listed in
`src/assets/README.md`, then check that `src/data/content.js` points to the
matching filename.

**Changes aren't showing up in the browser**
Make sure the terminal running `npm run dev` is still active and hasn't
shown an error. If in doubt, stop it (`Ctrl+C`) and run `npm run dev` again.

**Still stuck?**
Copy the exact error message from your terminal or browser console and
search for it — Vite and React error messages are usually specific enough
to find a direct answer.

---

You're now ready to develop, customize, and preview the Pangasinan Heritage
website locally. When you're ready to publish it, `npm run build` produces
a `dist/` folder that can be deployed to any static hosting service (e.g.
Netlify, Vercel, GitHub Pages).
