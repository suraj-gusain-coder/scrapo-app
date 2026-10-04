<div align="center">

# 🌿 SCRAPO — The Smarter Way to Scrap
### *A Digital Marketplace & Logistics Platform for Doorstep Scrap Collection, Calibrated Digital Weighing & Instant UPI Payouts*

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![Tech Stack](https://img.shields.io/badge/Frontend-TailwindCSS%20%7C%20JavaScript%20%7C%20HTML5-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-10B981?style=for-the-badge&logo=checkmarx&logoColor=white)](#)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](#license)

<br/>

[**Live Demo**](http://localhost:3000) • [**Features**](#-key-features) • [**Multi-Role Portals**](#-multi-role-portals) • [**Business Model**](#-business-model--financial-snapshot) • [**Vercel Deployment**](#-one-click-vercel-deployment)

</div>

---

## 📖 Executive Summary & Vision

In most urban housing societies and localities across India, scrap and waste disposal remains highly unorganized. Residents have no reliable, transparent way to sell recyclable scrap (paper, plastic, metal, e-waste). Local kabadiwalas often underpay with tampered manual scales, pickups are inconsistent, and there is no record of weight or price — leading to lost income for households and recyclable materials ending up in landfills.

**SCRAPO** solves this by connecting households, housing societies (RWAs), and corporate offices with verified scrap collectors and recycling plants through a tech-driven logistics network. A verified agent arrives at the customer's doorstep, weighs items on a certified digital scale, and triggers an instant UPI transfer directly to the customer's bank account with zero haggling and a digital receipt.

---

## 🎨 Brand & Visual Identity

- **Logo Symbolism**: A circular emblem that blends a continuous recycling arrow with a growing leaf, intertwined to form the letter **"S"** (standing for **SCRAPO** and **Smart Scrap**).
- **Color Palette**:
  - 🔵 **Deep Tech Navy** (`#0A192F` / `#0F2744`): Represents trust, reliability, and technology.
  - 🟢 **Eco Emerald & Mint** (`#10B981` / `#34D399`): Represents sustainability, environmental consciousness, and clean energy.
- **Tagline**: *"The Smarter Way to Scrap"*
- **Brand Promise**: *"Your scrap. Your money. Instantly."*

---

## 🚀 Key Features

### 1. 📊 Live Scrap Rate Card & Interactive Earnings Calculator
- Real-time market rates categorized by material:
  - **Paper & Cardboard**: Newspaper (*Raddi*), Corrugated Cartons, Office Paper, Textbooks.
  - **Plastics**: PET Bottles, Hard Plastics (Buckets/Chairs), Mixed Polyethylene.
  - **Metals**: Heavy Steel/Iron (*Loha*), Pure Copper Wire (*Taamba*), Brass (*Peetal*), Aluminium Cans.
  - **E-Waste & Electronics**: Old Laptops, Smartphones, Circuit Boards (PCBs), Peripherals.
  - **Large Appliances**: Split/Window ACs (1.5 Ton), Refrigerators, Washing Machines.
- Dynamic quantity/weight inputs with instant ₹ subtotal, total earnings estimation, and CO2 emissions saved counter.

### 2. 📅 4-Step Doorstep Pickup Booking Engine
1. **Step 1 (Items & Weight)**: Select scrap categories and approximate weight range.
2. **Step 2 (Address & Schedule)**: Enter doorstep address, pincode, city, date, and preferred time slot.
3. **Step 3 (Payout Channel)**: Enter UPI ID (Google Pay, PhonePe, Paytm, BHIM) or choose Cash on Doorstep.
4. **Step 4 (Instant Confirmation)**: Automated verified agent assignment, live GPS tracking link, and digital work order reference.

### 3. ⚖️ Digital Scale Accuracy vs Traditional Kabadiwala

| Feature | 🌿 SCRAPO (The Smart Way) | ❌ Traditional Kabadiwala |
| :--- | :--- | :--- |
| **Weighing Accuracy** | **Calibrated Digital Scale (0% Error)** | Tampered manual/spring scales (15–30% weight loss) |
| **Price Transparency** | **Fixed live market rates published on app** | Arbitrary daily rates & aggressive bargaining |
| **Payment Mode** | **Instant UPI / GPay / PhonePe / Bank Transfer** | Cash change disputes & zero transaction records |
| **Safety & Verification** | **ID-badged, background-checked agents with GPS** | Unverified strangers entering residential societies |
| **Environmental Fate** | **100% delivered to authorized green recyclers** | Low-grade waste dumped in open drains/landfills |

### 4. 🌍 Real-Time Eco-Impact Visualizer
- **48,500+ KG** Scrap diverted from municipal landfills.
- **67,900+ KG** CO2 greenhouse emissions avoided.
- **1,240+** Trees saved through paper & cardboard recycling.
- **3,15,000+** Liters of clean water conserved in industrial processing.

### 5. 🏢 RWA Housing Societies & Corporate B2B Drives
- **Society Cleanliness Drives**: Bulk weekend collection drives with revenue-sharing mechanisms for RWA maintenance funds.
- **Corporate E-Waste Compliance**: Authorized certificates of destruction and green recycling compliance for IT assets and server scrap.

---

## 🔐 Multi-Role Portals & Authorization

SCRAPO features a unified **Auth Gateway (`/login`)** that divides and caters to three distinct operational user roles:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        SCRAPO AUTHENTICATION                           │
│  [ 🏠 Household Resident ]  [ 🚚 Scrap Collector ]  [ 🛡️ Fleet Admin ] │
└────────────────────────────────────────────────────────────────────────┘
```

### 1. 🏠 Customer / Household Resident Portal
- **Login Methods**: Mobile number with 4-digit OTP simulation / Email & Password / One-Click Demo User.
- **Capabilities**:
  - **Live GPS Agent Tracking**: Track assigned collection agent on a real-time radar map with live sector updates and direct phone call trigger.
  - **Itemized Digital Receipts**: View and print official receipts showing verified digital scale weights, UPI payout details, and carbon offset certificate.
  - **Personal Sustainability Score**: Cumulative track of total kilograms recycled and personal CO2 emissions prevented.

### 2. 🚚 Scrap Collector / Partner Kabadiwala Portal
- **Login Methods**: Registered Agent Mobile / Collector ID + 4-Digit Security PIN / One-Click Demo Agent.
- **Capabilities**:
  - **Duty Status**: Toggle duty between `🟢 Online & Accepting Pickups` and `⚪ Offline`.
  - **Assigned Queue**: View customer address, navigation route, scrap items, and direct call trigger.
  - **On-Spot Digital Scale Tool**: Select scrap material $\rightarrow$ enter measured kg $\rightarrow$ system auto-calculates total ₹ payout $\rightarrow$ click "Weigh & Pay" to transfer funds instantly.
  - **Daily Performance**: Track daily commission earnings (₹120 avg/pickup) and total weight collected for drop-off at regional recycling hubs.

### 3. 🛡️ Operations & Fleet Admin Portal
- **Login Methods**: Master operations email + 2FA security key / One-Click Demo Admin.
- **Capabilities**:
  - **Unit Economics Tracker**: Real-time progress toward monthly 1,500 pickup volume target, GMV, and net profit margins.
  - **Live Scrap Rate Master**: Edit per-kg prices for any category on the fly, immediately propagating live rates across all user calculators and collector scales.
  - **Fleet Logistics Stream**: Real-time overview of active drivers, in-progress pickups, and completed transactions.

---

## 💼 Business Model & Financial Snapshot

| Metric | Target / Benchmark |
| :--- | :--- |
| **Total Initial Investment** | ₹3,35,000 |
| **Monthly Fixed Costs** | ₹98,000 – ₹1,15,000 |
| **Variable Cost per Pickup** | ~₹15 (fuel / logistics) |
| **Average Revenue (Commission) per Pickup** | **₹120** |
| **Expected Monthly Volume** | **1,500 pickups** |
| **Estimated Monthly Revenue** | **₹1,80,000** |
| **Estimated Monthly Net Profit** | **~₹60,000 – ₹65,000** |
| **Break-Even Volume** | ~930–950 pickups/month (~5 months) |

---

## 📁 Repository Structure

```
scrapo-app/
├── index.html        # Main SPA: Landing page, Multi-role portals & Interactive modals
├── app.js            # Core state engine: Rates DB, Booking wizard, Auth & Scale logic
├── styles.css        # Brand themes, Glassmorphism, LED scale effect & Print styles
├── vercel.json       # Vercel zero-config serverless routing & security headers
├── package.json      # Project metadata & npm serve scripts
└── README.md         # Comprehensive project documentation
```

---

## ⚡ One-Click Vercel Deployment (100% Free)

This repository is pre-configured with `vercel.json` for zero-configuration deployment on Vercel's Free Tier.

### Method 1: Deploy via GitHub (Recommended)
1. Fork or push this repository to your GitHub account:
   ```bash
   git add .
   git commit -m "Deploy SCRAPO"
   git push -u origin main
   ```
2. Log in to [vercel.com](https://vercel.com).
3. Click **"Add New..."** $\rightarrow$ **"Project"**.
4. Select `scrapo-app` and click **"Deploy"**.
5. Your web application is live in **~15 seconds** with a free SSL certificate!

### Method 2: Deploy via Vercel CLI
```bash
npx vercel
# Follow the terminal prompts, then deploy to production:
npx vercel --prod
```

---

## 💻 Local Development Setup

To run the project locally on your machine:

```bash
# 1. Clone the repository
git clone https://github.com/suraj-gusain-coder/scrapo-app.git
cd scrapo-app

# 2. Start a local server (Python 3)
python -m http.server 3000

# 3. Open in your browser
# Navigate to http://localhost:3000
```

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

<div align="center">

**Built with 💚 for a cleaner, greener, and circular India.**

</div>
