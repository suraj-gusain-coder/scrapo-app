# 🌱 SCRAPO — The Smarter Way to Scrap

> A modern digital marketplace and logistics platform for scrap collection, doorstep pickup, calibrated digital weighing, and instant UPI payouts.

---

## 🚀 Key Features

1. **Brand & Identity**:
   - Signature intertwined circular recycling loop & eco-leaf "S" logo.
   - Deep Tech Navy (`#0A192F`) & Emerald/Mint eco gradient palette.

2. **Scrap Valuation Engine & Live Rate Card**:
   - Real-time rates for Paper & Cardboard, Plastics, Metals (Iron/Copper/Brass), E-Waste, and Appliances.
   - Interactive weight sliders & instant ₹ calculation with estimated CO2 emissions prevented.

3. **4-Step Doorstep Pickup Booking Flow**:
   - Category & weight selector $\rightarrow$ Address & time slot picker $\rightarrow$ Instant UPI channel $\rightarrow$ Automated Agent Assignment & Live Tracking.

4. **Multi-Role Authentication & Dedicated Portals (`/login`)**:
   - 🏠 **Customer / Household Resident**: Schedule pickups, track live verified agent with GPS ETA, view personal eco-impact meter, and access itemized digital receipts.
   - 🚚 **Scrap Collector / Partner Kabadiwala**: Duty status toggle (Online/Offline), assigned pickup queue with navigation, interactive on-spot digital scale calculator, and instant customer payout trigger.
   - 🛡️ **Fleet & Operations Admin**: Monthly unit economics & volume tracker (1,500 target), real-time scrap rate master manager (updates rates across the app), and fleet logistics stream.

5. **Transparency & Trust**:
   - SCRAPO vs Traditional Kabadiwala side-by-side comparison table.
   - Real-time Eco-Impact metrics (48,500+ KG recycled, 67,900+ KG CO2 prevented).
   - Housing Society (RWA) and Corporate B2B drive booking.

---

## ⚡ How to Deploy on Vercel (100% Free)

This project is fully configured for **Vercel Free Tier** zero-configuration static and edge deployment with `vercel.json`.

### Method 1: Deploy via GitHub (Easiest & Recommended)

1. Create a free account on [Vercel](https://vercel.com).
2. Push this `scrapo-app` folder to a new GitHub repository:
   ```bash
   cd scrapo-app
   git init
   git add .
   git commit -m "Initial SCRAPO release"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/scrapo-app.git
   git push -u origin main
   ```
3. Go to your [Vercel Dashboard](https://vercel.com/new).
4. Click **"Add New..." $\rightarrow$ "Project"**.
5. Select your `scrapo-app` repository and click **"Deploy"**.
6. Vercel will deploy it in ~15 seconds and give you a live production URL (e.g. `https://scrapo.vercel.app`) with free SSL!

---

### Method 2: Deploy via Vercel CLI (From Terminal)

1. Open your terminal in this directory:
   ```bash
   cd C:\Users\Suraj\.gemini\antigravity\scratch\scrapo-app
   ```
2. Run:
   ```bash
   npx vercel
   ```
3. Follow the 3 short prompts (accept defaults). Vercel will upload the files and output your live preview URL immediately!
4. For production domain, run:
   ```bash
   npx vercel --prod
   ```

---

### Method 3: Deploy via Vercel Web Dashboard (Drag-and-Drop)

1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **"Add New..." $\rightarrow$ "Project"**.
3. Drag and drop the `scrapo-app` folder into the browser window.
4. Click **"Deploy"**!

---

## 💻 Local Testing & Preview

To preview the website locally on your computer:

```bash
cd C:\Users\Suraj\.gemini\antigravity\scratch\scrapo-app
python -m http.server 3000
```
Then open your browser at `http://localhost:3000`.

---

## 📂 Project Structure

```
scrapo-app/
├── index.html        # Main SPA with Public Landing, Multi-Role Portals & Modals
├── app.js            # Core Store, Live Rate Engine, Auth, Booking & Scale Logic
├── styles.css        # Custom Brand Themes, LCD Scale Display & Print Styling
├── vercel.json       # Vercel Serverless Routing & Security Headers
├── package.json      # Project Metadata
└── README.md         # Deployment & Documentation Guide
```
