# Demian Kuroiler App

Demian Kuroiler App is a simple mobile-friendly web application that allows customers to order fresh Kuroiler chicken directly through WhatsApp. It also provides an admin panel to track orders and total sales.

---

## Features

• Display Kuroiler products with images
• Categories:

* Feet, Wings & Neck — ₹300 per kg
* Liver — ₹500 per kg
* Kuroiler Meat — ₹500 per kg

• Customer order form
• Automatic WhatsApp order message
• Admin panel to view orders
• Total sales tracker
• Works on mobile and desktop
• Can be converted to Android APK

---

## How It Works

1. Customer opens the app
2. Selects product
3. Enters name, phone, and quantity
4. Clicks "Order via WhatsApp"
5. WhatsApp opens with order message
6. Order is saved in admin panel

---

## Project Structure

```
demian-kuroiler-app/
│
├── index.html
├── script.js
├── style.css (optional)
└── images/
    ├── meat.jpg
    ├── liver.jpg
    └── wings.jpg
```

---

## Installation

1. Download or clone the repository

2. Open index.html in browser

OR

Use Live Server in Visual Studio Code

---

## WhatsApp Integration

Orders are sent automatically to:

```
Phone Number: 918787557480
```

You can change this in script.js:

```javascript
const BUSINESS_PHONE = "918787557480";
```

---
