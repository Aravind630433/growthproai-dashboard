﻿# growthproai
# 🧠 GrowthProAI – Full Stack Intern Assignment

## 🚀 Project: Local Business SEO Dashboard

This is a full stack mini dashboard simulating how small businesses view their Google Business and SEO content – built as part of the GrowthProAI intern assignment.

---



## 🧩 Tech Stack

| Layer     | Tools Used                     |
|-----------|--------------------------------|
| Frontend  | React, Tailwind CSS            |
| Backend   | Node.js, Express               |
| Deployment| Vercel (Frontend), Render (Backend) |

---

## ✨ Features

- 🔘 Business input form: Name & Location
- ⭐ Simulated Google rating & review count
- 🧠 Dynamic SEO headline generation
- 🔁 Regenerate headline button
- 🔄 Loading spinner
- ❌ Custom form validation & error handling
- 🎨 Tailwind UI with icons and responsive layout

---

## 📂 Folder Structure

growthproai-dashboard/
├── frontend/ → React + Tailwind app
│ └── src/
│ ├── components/
│ │ └── BusinessForm.jsx
│ └── App.js
├── backend/ → Node.js + Express server
│ └── server.js


---

## ⚙️ How to Run Locally

### ▶️ Backend Setup

```bash
cd backend
npm install
node server.js

Runs at: http://localhost:5000
💻 Frontend Setup

cd frontend
npm install
npm start

Runs at: http://localhost:3000
🧪 API Endpoints
POST /business-data

Request:

{
  "name": "Cake & Co",
  "location": "Mumbai"
}

Response:

{
  "rating": 4.3,
  "reviews": 132,
  "headline": "Why Cake & Co is Mumbai's Top Pick in 2025"
}

GET /regenerate-headline?name=...&location=...

Returns a fresh, random SEO headline.
✅ Screenshots
Form & Output UI
## 🧪 Screenshots

### 📝 Form Input
![Form](./screenshots/form.png)

### 📋 Output Card
![Output]()
📦 Bonus Completed

✅ Tailwind CSS styling
✅ Dynamic data (no DB)
✅ Spinner + error messages
✅ Form validation
✅ State management via useState
📤 Submission

    GitHub Repo: https://github.com/Aravind630433/growthproai-dashboard

    Submitted via email per instructions

👨‍💻 Author

Name: Sunkenapally Aravind
Email: sunkanapalliaravind@gmail.com
GitHub: @https://github.com/Aravind630433


