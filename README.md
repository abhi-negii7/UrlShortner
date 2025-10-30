# 🔗 URL Shortener

A simple and efficient **URL Shortener Web App** built using **Node.js**, **Express**, **EJS**, and **MongoDB**.  
It allows users to shorten long URLs, copy them with one click, view all created URLs in a table, and access the shortened links instantly.

---

---

## 🖼️ Demo Screenshot
<p float="left">
  <img src="Screenshots/home" width="75%" />
  <img src="Screenshots/delete" width="75%" />
</p>
---

## 🚀 Features

- ✂️ **Shorten Long URLs** easily.
- 📋 **Copy short links** with a single click (clipboard feature).
- 🔗 **Open links directly** from the table (redirects to original URL).
- 🗑️ **Delete URLs** from the list (optional feature).
- 🧾 **View all shortened URLs** in a clean table layout.
- 💾 **Data stored in MongoDB** for persistence.
- 🎨 **Simple UI** using EJS and CSS.

---

## 🧰 Tech Stack

| Technology | Description |
|-------------|-------------|
| **Node.js** | JavaScript runtime environment |
| **Express.js** | Backend framework for building web servers |
| **MongoDB** | NoSQL database to store URL mappings |
| **EJS** | Template engine for rendering dynamic views |
| **Mongoose** | ODM for MongoDB |
| **Font Awesome** | For icons (copy, delete, etc.) |

---
## 🧩 Folder Structure

```bash
│
├── 📁 controllers/
│ └── url.js # Contains main logic for creating, fetching, and deleting short URLs
│
├── 📁 models/
│ └── url.js # Mongoose schema defining URL structure in the database
│
├── 📁 public/
│ ├── script.js # Client-side JavaScript for copy and delete features
│ └── style.css # Styling for the frontend (table, buttons, form)
│
├── 📁 routes/
│ ├── staticRouter.js # Handles EJS view rendering routes
│ └── url.js # Defines backend routes for URL generation and analytics
│
├── 📁 views/
│ └── home.ejs # Frontend template displaying the form and table of URLs
│
├── 📄 connect.js # MongoDB connection file
├── 📄 index.js # Entry point — initializes Express, routes, and middleware
├── 📄 package.json # Project dependencies and scripts
├── 📄 package-lock.json # Auto-generated dependency lock file
├── 📄 .gitignore # Ignored files (node_modules, .env, etc.)
├── 📄 .gitattributes # GitHub file handling configuration
└── 📄 README.md # Project documentation
```
## 🧠 How It Works

1. User enters a long URL into the input field.  
2. The app generates a short unique ID and stores both in MongoDB.  
3. When the user visits the short URL, the app redirects to the original link and records the visit.  
4. The table displays analytics including total clicks for each short link.  
5. Users can copy or delete links directly from the interface.

---

## 🖥️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener
```

## 2️⃣ Install dependencies
```bash
npm install
```
## 3️⃣ Start MongoDB
Make sure your MongoDB server is running locally or use an online MongoDB Atlas connection.

## 4️⃣ Run the application
```bash
npm start
```
## 5️⃣ Open in browser
Visit http://localhost:8001


## 💡 Author<br>
Abhishek Negi<br>
💻 Passionate about full-stack web development and building real-world applications.<br>
📧 abhinegii789@gmail.com<br>



