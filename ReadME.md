# 🌍 Trip Navigator App

*A Progressive Web App (PWA) with AI-powered travel assistance for your Europe trip.*

## 📖 Overview

This app is a **React + TailwindCSS web app** designed to help travelers navigate a multi-country Europe itinerary with ease. It provides:

* A **Today view** with live information about your current day's itinerary
* A **Timeline view** of the full trip
* An **AI Chat assistant** powered by DeepSeek AI for personalized travel advice
* Quick access to **tickets, reservations, and booking links**
* Offline-friendly caching (via PWA)

The app eliminates the need to juggle multiple PDFs, emails, and booking confirmations by consolidating everything into one mobile-friendly interface with intelligent AI assistance.

---

## ✨ Features

### 🕒 Today View

* Displays **city, date, and route**
* **Hotel information** with address, contact details, and reservation links
* **Transport details** including departure times, platforms, and ticket links
* **Today's attractions** and planned activities
* **Important notes** and reminders for the day
* Direct **links to Google Maps** for navigation

### 📅 Timeline View

* Scrollable **day-by-day trip overview**
* Expandable cards for each city/day
* Key highlights: hotel, transport legs, activities
* Complete 15-day itinerary from Zurich to Munich

### 🤖 AI Chat Assistant

* **DeepSeek AI-powered** travel assistant
* Personalized advice based on your **current itinerary**
* Ask questions about:
  * Local recommendations and attractions
  * Transportation and directions
  * Weather and what to pack
  * Local customs and culture
  * Restaurant and dining suggestions
  * Budget and expense planning
  * Emergency information
* **Context-aware** responses using your trip data
* **Suggested questions** to get you started

---

## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/your-username/trip-navigator.git
cd trip-navigator
npm install
```

### 2. Set Up DeepSeek API

1. Get your API key from [DeepSeek Platform](https://platform.deepseek.com/api_keys)
2. Copy `.env.example` to `.env`
3. Replace `your_deepseek_api_key_here` with your actual API key:

```bash
cp .env.example .env
# Edit .env and add your API key
VITE_DEEPSEEK_API_KEY=your_actual_api_key_here
```

### 3. Run Locally

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### 4. Deploy

* Push to GitHub
* Connect repo to Vercel/Netlify
* Add your `VITE_DEEPSEEK_API_KEY` to your deployment environment variables
* App will be deployed as a public PWA

---

## 🛠️ Tech Stack

* **Frontend:** React + TailwindCSS + Vite
* **AI:** DeepSeek API (OpenAI-compatible)
* **Icons:** Lucide React
* **Hosting:** Vercel / Netlify (PWA-ready)
* **Data:** Static JSON (easy to edit & expand)
* **PWA:** Offline caching, installable on iOS/Android

---

## 📂 Project Structure

```
src/
├── components/
│   ├── TodayView.jsx      # Current day's itinerary
│   ├── TimelineView.jsx   # Full trip timeline
│   └── ChatView.jsx       # AI chat assistant
├── data/
│   └── tripData.js        # Trip itinerary data
├── App.jsx                # Main app component
└── main.jsx              # App entry point
```

---

## 🧳 Trip Overview (Oct 4–18, 2025)

**Route:** Zurich → Interlaken → Milan → Florence → Rome → Venice → Salzburg → Munich

**Days 1-3:** Swiss Alps (Interlaken, Lauterbrunnen, Grindelwald, Jungfraujoch)  
**Days 4-7:** Italy (Milan, Florence, Rome day trip, Venice)  
**Days 8-11:** Austria & Germany (Salzburg, Munich)  
**Days 12-15:** Munich area exploration and departure

All hotels, transport tickets, and key attractions are pre-documented in the app data.

---

## 🔒 Security & Privacy

* **API Key Security:** Your DeepSeek API key is stored in environment variables and not committed to version control
* **Privacy:** Chat conversations are not stored permanently - only kept in memory during your session
* **Offline Support:** Core trip data works without internet connection

---

## 📌 Roadmap

* [x] Today screen with trip details
* [x] Timeline screen with trip overview  
* [x] AI chat assistant with DeepSeek AI
* [ ] Push notifications (*"Train leaves in 30 minutes!"*)
* [ ] Offline chat capabilities
* [ ] Multi-language support
* [ ] Weather integration
* [ ] Expense tracking

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

## ⚠️ Important Notes

* Always verify train/bus times close to travel using official apps (SBB, Trenitalia, Italo, ÖBB, etc.)
* Keep your API key secure and never commit it to version control
* The AI assistant provides general advice - always verify important information

---

## 📄 License

This project is for personal use. Feel free to adapt it for your own travels!

## 👥 Authors

**Timmy** — Travel planner & developer