# 🔗 URL Shortener

A simple and efficient **URL Shortener Web App** built using **Node.js**, **Express**, **EJS**, and **MongoDB**.  
It allows users to shorten long URLs, copy them with one click, view all created URLs in a table, and access the shortened links instantly.

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
📦 url-shortener/
│
├── 📁 models/
│   └── url.js                # Mongoose schema for storing URL info
│
├── 📁 routes/
│   ├── staticRouter.js       # Handles rendering of EJS views
│   └── url.js                # Handles URL shorten, redirect, delete logic
│
├── 📁 views/
│   ├── home.ejs              # Main front-end template (URL form + table)
│   └── error.ejs             # Error page (optional)
│
├── 📁 public/
│   └── style.css             # All static CSS files go here
│
├── 📄 app.js                 # Entry point for the application
├── 📄 package.json           # Project dependencies and scripts
├── 📄 .env                   # Environment variables (MongoDB URI, PORT, etc.)
├── 📄 .gitignore             # To ignore node_modules, .env, etc.
└── 📄 README.md              # Project documentation




