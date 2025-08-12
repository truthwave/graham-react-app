# **Graham Value Stock Checker**

This web application, built with **React** and **Flask**, retrieves stock information for both US and Japanese equities. It calculates and displays Graham's intrinsic value, ROE-based valuations, and undervaluation metrics.

---

## 📷 **Screenshots**

<img width="898" height="542" alt="image" src="https://github.com/user-attachments/assets/dfa15014-44d4-4b33-887b-b2dc838aaf8a" />

---

## 🚀 **Key Features**

| Feature                      | Description                                                                               |
| ---------------------------- | ----------------------------------------------------------------------------------------- |
| 🇯🇵/🇺🇸 JP/US Stock Switch | Automatically supports `.T` tickers for Japanese stocks or standard tickers for US stocks |
| 🔍 Stock Data Retrieval      | Uses `yfinance` to fetch current price, EPS, BPS, etc.                                    |
| 📊 Graham Intrinsic Value    | Calculates value based on `√(22.5 × EPS × BPS)`                                           |
| 📈 Extended Graham Model     | Incorporates EPS and growth rate for an advanced valuation                                |
| 💡 ROE-Based Valuation       | Calculates using `ROE × BPS × (8.5 + 2 × Growth Rate)`                                    |
| 🛡 Margin of Safety (30%)    | Displays 70% of ROE-based intrinsic value                                                 |
| 🧮 PER & PBR Calculation     | Compares current price against key ratios                                                 |
| 💾 Search History            | Stores the latest 10 searches in local storage                                            |
| ❌ Delete History Items       | Remove individual history entries with one click                                          |
| ⭐ Favorite Tickers           | One-click add/remove for frequently checked tickers                                       |
| 🔁 Restore Last Input        | Recalls last entered ticker and market on reload                                          |
| 🌑 Dark Theme UI             | Simple, eye-friendly dark color scheme                                                    |

---

## 🛠 **Tech Stack**

* **Frontend**: React + Axios + CSS
* **Backend**: Flask + yfinance + pandas
* **State Management**: React Hooks (useState, useEffect)
* **Persistence**: localStorage
* **CORS**: Flask-CORS

---

## 🔧 **Setup**

### 1. Clone the repository

```bash
git clone https://github.com/yourname/graham-react-app.git
cd graham-react-app
```

### 2. Start the frontend

```bash
cd frontend
npm install
npm start
```

### 3. Start the backend

```bash
cd backend
pip install -r requirements.txt
python app.py
```

### 4. Access the app

In your browser:

```
http://localhost:5173
```

---

## 📂 **Project Structure**

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

## 📜 **License**

MIT License

---

## 🧑‍💻 **Author**

[Tomoprogramming Dayori](https://github.com/TomoProgrammingDayori)
Check out my portfolio and AI tool development projects!
