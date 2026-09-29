# 🚀 CareerAI — Deployment Guide

This guide provides step-by-step instructions for deploying your **AI Career Guidance System** online for free.

---

## 🏆 Recommended: 1-Click All-in-One Deployment on Render (Free)

Because we configured Express in `server/server.js` to serve both the REST API (`/api/*`) and the built React frontend (`dist/`), you can deploy the **entire full stack application as a single service with ONE URL**.

### Step 1: Push Your Code to GitHub

1. Install **Git** if you don't already have it installed from [git-scm.com](https://git-scm.com/).
2. Open PowerShell or Terminal in your project directory:
   ```bash
   cd "C:\Users\hp\Desktop\AI Career guidance system"
   ```
3. Initialize the repository and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of CareerAI system"
   ```
4. Create a new repository on [GitHub.com](https://github.com/new) named `ai-career-guidance-system`.
5. Link and push your repository:
   ```bash
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/ai-career-guidance-system.git
   git branch -M main
   git push -u origin main
   ```

---

### Step 2: Deploy on Render.com (Free)

1. Go to [render.com](https://render.com/) and sign up / log in with your GitHub account.
2. In the Render Dashboard, click **New +** and select **Web Service**.
3. Choose **Connect a repository** and select your `ai-career-guidance-system` repository.
4. Fill in the deployment settings:
   * **Name:** `careerai-platform` *(or any unique name)*
   * **Region:** *Closest to you (e.g., Singapore, Frankfurt, Oregon)*
   * **Branch:** `main`
   * **Runtime:** `Node`
   * **Build Command:** 
     ```bash
     npm install && npm run build
     ```
   * **Start Command:** 
     ```bash
     npm start
     ```
   * **Instance Type:** `Free`
5. *(Optional)* Scroll down to **Environment Variables** and add:
   * `NODE_ENV`: `production`
   * `JWT_SECRET`: *(Enter any secure random string)*
   * `MONGO_URI`: *(Optional: paste your MongoDB Atlas URI if you want cloud MongoDB, or leave empty to use the built-in resilient in-memory fallback)*
   * `GEMINI_API_KEY`: *(Optional: your Google Gemini API key if using real LLM inferences)*
6. Click **Create Web Service**.
7. Render will install dependencies, build the React app, start the Express server, and give you a free live URL:  
   👉 `https://careerai-platform.onrender.com`

---

## 🥈 Alternative: Vercel (Frontend) + Render (Backend)

If you prefer deploying the frontend and backend on separate servers:

### A. Deploy Backend on Render
1. Follow the steps above on Render.
2. Set **Start Command** to: `node server/server.js`.
3. Copy your live backend URL (e.g. `https://careerai-backend.onrender.com`).

### B. Deploy Frontend on Vercel
1. Go to [vercel.com](https://vercel.com/) and sign in with GitHub.
2. Click **Add New Project** and import your repository.
3. In **Environment Variables**, add:
   * `VITE_API_URL`: `https://careerai-backend.onrender.com/api`
4. Click **Deploy**. Vercel will build and host your frontend on a global CDN.

---

## 🥉 Alternative: Railway.app

1. Go to [railway.app](https://railway.app/) and sign in with GitHub.
2. Click **New Project** → **Deploy from GitHub repo**.
3. Select `ai-career-guidance-system`.
4. Railway will automatically detect Node.js, run `npm run build`, and execute `npm start`.
5. Under service settings, click **Generate Domain** to get your public live URL.

---

## 🗄️ Setting Up Free MongoDB Atlas (Optional)

If you want persistent cloud MongoDB instead of the built-in in-memory fallback:

1. Sign up for free at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas).
2. Create a free **M0 Sandbox** cluster.
3. Under **Database Access**, create a database user and password.
4. Under **Network Access**, click **Add IP Address** and select **Allow Access from Anywhere (`0.0.0.0/0`)**.
5. Click **Connect** → **Drivers** → copy the connection string:
   ```
   mongodb+srv://<username>:<password>@cluster0.mongodb.net/careerai_db?retryWrites=true&w=majority
   ```
6. Add this as the `MONGO_URI` environment variable in your hosting provider (Render or Railway).

---

## 🔍 Pre-Deployment Verification Checklist

Before deploying, verify everything locally:
* [x] `npm run build` succeeds with 0 errors.
* [x] Express serves both API routes and `dist/index.html`.
* [x] Responsive layout tested for desktop, tablet, and mobile.
* [x] Demo Student and Demo Admin accounts pre-configured for evaluation.
* [x] PDF Career Report downloads properly with all assessment sections.
