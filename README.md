# 🚀 Codeforces Friends Enhancer

Enhance your Codeforces experience! This userscript replaces the default `/friends` page with a **beautiful, sortable table** showing:

- ✅ Username  
- 📈 Current Rating  
- 🏆 Number of Contests  
- 💼 Includes your own stats too!

> 🔧 Built with love by [Bankim Chandra Das](https://github.com/Bankim2410)

---

## ✨ Preview

![Codeforces Friends Enhancer Screenshot](images/screenshot.png)

---

## 📦 Features

- Replaces default friends list with a sortable, clean table
- Shows **current rating** and **contest count**
- Includes **your Codeforces handle** too!
- Fully runs in the browser using Tampermonkey

---

## ⚙️ Installation Steps

> You'll need [Tampermonkey](https://www.tampermonkey.net/) installed in your browser.

### 💻 Step 1: Install Tampermonkey

- **Chrome**: [Chrome Web Store Link](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- **Firefox**: [Firefox Add-ons Link](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)

> Restart the browser after installation if needed.

---

### 🧠 Step 2: Add the Script

1. Open Tampermonkey dashboard.
2. Click on `➕ Create a new script`.
3. Remove everything inside and **paste the contents** of [`script.user.js`](script.user.js) from this repo.
4. Save the script (`Ctrl+S` or File > Save).
5. Done!

---

### 🌐 Step 3: Visit Codeforces

- Head to [https://codeforces.com/friends](https://codeforces.com/friends)
- The original friend list will be replaced by a **dynamic, sorted table** with updated info.
- No backend, no reloads — everything works via Codeforces API.

---

## 🖼️ Screenshot Upload Guide

### ✅ How to show the screenshot in README

1. Take a screenshot of your enhanced `/friends` page.
2. Save it as `screenshot.png`.
3. Create a folder in your GitHub repo called `images`.
4. Upload the image inside the `images/` folder.
5. The image is automatically shown using this syntax:

```md
![screenshot](images/screenshot.png)
