# Ashutosh Kumar — Portfolio

Polished, responsive portfolio website built with **React + Vite** and ready for **Streamlit Cloud deployment**.

Palette: **Obsidian & Champagne** (The Gold Standard)

---

## 🌐 Deploy to Streamlit Cloud (Access from any Phone, PC, Laptop)

Streamlit Cloud hosts your portfolio **free, 24/7**, accessible by anyone via a link like `https://ashutosh-kumar.streamlit.app`.

### Step 1: Create a GitHub Repository
1. Go to **[github.com/new](https://github.com/new)**.
2. Repository name: `portfolio`.
3. Set to **Public** and click **Create repository**.

### Step 2: Push your code to GitHub
Run in your PowerShell terminal:
```powershell
cd c:\Users\Ashut\OneDrive\Desktop\portfolio
git remote add origin https://github.com/Ashutoshumar17/portfolio.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy on Streamlit Cloud
1. Go to **[share.streamlit.io](https://share.streamlit.io)** and log in with your GitHub account (`Ashutoshumar17`).
2. Click **"Create app"** (or "New app").
3. Set:
   - **Repository**: `Ashutoshumar17/portfolio`
   - **Branch**: `main`
   - **Main file path**: `streamlit_app.py`
   - **Custom subdomain**: `ashutosh-kumar` (or your choice)
4. Click **Deploy!**

Within 1 minute, you will have a live public link:
👉 `https://ashutosh-kumar.streamlit.app`

---

## 💻 Local Commands

```bash
# Run via Streamlit locally:
python -m streamlit run streamlit_app.py

# Or run via Vite dev server:
npm run dev

# Rebuild single-file HTML bundle:
npm run build
```
