# 🎬 MovieFlix (Netflix Clone)

A modern Netflix-inspired movie streaming web application built using **React + Vite**.
This project allows users to browse movies, view details, and watch trailers with a smooth and responsive UI.

---

## 🚀 Features

* 🎥 Browse movies using OMDB API
* 🎞️ Watch trailers using TMDB API
* 🔐 User authentication with Firebase
* 📱 Fully responsive design
* ⚡ Fast performance using Vite
* 🎯 Dynamic routing with React Router

---

## 🛠️ Tech Stack

* React.js
* Vite
* CSS3
* Firebase Authentication
* Firestore Database
* OMDB API
* TMDB API
* React Router

---

## 📂 Project Structure

```
movieclone-123/
│
├── public/
├── src/
│   ├── assets/
│   ├── Components/
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   └── Titlecard/
│   ├── pages/
│   │   ├── home/
│   │   ├── Login.jsx/
│   │   └── Player/
│   ├── App.jsx
│   ├── main.jsx
│   └── auth.js
│
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/7112003sp/movieclone-123.git
cd movieclone-123
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Run locally

```bash
npm run dev
```

---

### 4️⃣ Build project

```bash
npm run build
```

---

## 🌐 Deployment

You can deploy this project using:

* Vercel (Recommended)
* Netlify

---

### ⚠️ Important (Fix for React Router)

#### For Vercel → create `vercel.json`

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

#### For Netlify → create `public/_redirects`

```
/* /index.html 200
```

---

## 🔐 Firebase Setup

1. Go to Firebase Console
2. Create a new project
3. Enable **Authentication (Email/Password)**
4. Enable **Firestore Database**
5. Copy your config and paste into `auth.js`

---

## 📸 Screenshots

(Add screenshots of your project here)

---

## 🙌 Author

**Surya Prakash**

---

## ⭐ Future Improvements

* 🔍 Add search functionality
* ❤️ Add favorites/watchlist
* 🎨 Improve UI animations
* 🎯 Add filters (genre, rating, year)

---

## 📌 Note

This project is built for **learning and portfolio purposes only**
and is not affiliated with Netflix.
