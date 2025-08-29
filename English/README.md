<p align="center">
<img width="1536" height="1024" alt="段落テキスト" src="https://github.com/user-attachments/assets/4826d2c6-1375-4511-b0a7-e30d656457ec" />

</p>

# Graham Undervalued Stock Checker

This app is a React + Flask web application that fetches stock price information for US and Japanese stocks, calculates and displays Graham's theoretical stock price, ROE-based valuation, undervaluation levels, and more.

---

## 🚀 Key Features

| Feature                     | Description |
|---------------- ----------|------|
| 🇯🇵/🇺🇸 Switch Japanese/US Stocks | Automatically handles tickers with `.T` or standard tickers |
| 🔍 Stock Data Retrieval         | Retrieves current stock price, EPS, BPS, etc. using `yfinance` |
| 📊 Graham Theory Stock Price Calculation | Calculates valuation metrics based on `√(22.5 × EPS × BPS)` |
| 📈 Extended Graham Theory Stock Price | Displays an extended model using EPS and growth rate |
| 💡 ROE Variation Stock Price | Calculates `ROE × BPS × (8.5 + 2 × Growth Rate)` |
| 🛡 Margin of Safety (MOS 30%)     | Displays 70% of ROE-based theoretical stock price |
| 🧮 PER/PBR Calculation          | Calculates metrics by comparing to current stock price |
| 💾 Input History Save          | Saves latest 10 search histories to local storage |
| ❌ Individual History Deletion    | Delete one entry at a time via button click |
| ⭐️ Favorite Saving        | One-touch ticker list registration/unregistration feature |
| 🔁 Auto-Restore Last Input Values   | Restores input values and markets upon page reload |
| 🌑 Dark Theme UI        | Unified with simple, eye-friendly dark colors |

---

## 📷 Screenshots

---
![Screenshots](http://github.com/TomoAIDayori/graham-react-app/blob/main/%E8%B3%87%E6%96%99/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88.png)


## 🛠 Technical Setup

- Frontend: **React + Axios + CSS**
- Backend: **Flask + yfinance + pandas**
- State Management: **React Hooks (useState, useEffect)**
- Persistence: **localStorage**
- CORS Support: **Flask-CORS**

---

## 🔧 Setup Instructions

### 1. Clone

```bash
git clone https://github.com/yourname/graham-react-app.git
cd graham-react-app
````

### 2. Start Frontend

```bash
cd frontend
npm install
npm start
```

### 3. Start Backend

```bash
cd backend
pip install -r requirements.txt
python app.py
```

### 4. Access

In your browser:
`http://localhost:5173`

---

## 📂 Directory Structure

```
graham-react-app/
├── backend/
│   └── app.py
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── components/
│   │       └── GrahamCalculator.jsx
```

---

## 🧑‍💻 Creator

[Tomo AI Dayori](https://github.com/TomoAIDayori)

Check out my portfolio and AI tool development updates too!


## Feel free to reach out
[📩 Inquiries & Quotes](mailto:realmadrid71214591@gmail.com)
