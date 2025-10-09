# Graham Undervalued Stock Checker

> **Don't look at price. Look at value.**
> See the difference in just seconds.
> Investing isn't about “what you see.” It's about “how you think.”

<p align="center">
<img width="1536" height="1024" alt="段落テキスト" src="https://github.com/user-attachments/assets/4826d2c6-1375-4511-b0a7-e30d656457ec" />

</p>

---

## Why We Created It

Many investors get swayed by “price.”
But **Value** (**intrinsic value**) often lies elsewhere.

The Graham Lens is a single layer that uses EPS / BPS / ROE and growth rate g
to simply visualize the gap between price and value.

---

## Experience (Ends with 3 Cards)

- **Graham (Common Name)**: √(22.5 × EPS × BPS)
- **ROE Valuation**: ROE × BPS × (8.5 + 2 × g) (g is assumed via slider)
- **MOS (Margin of Safety)**: 30% default buffer relative to the above metrics
A single comparison bar displays **Current Stock Price / Theoretical Values / MOS** side-by-side.
Close out noise and make your judgment.

---

## How to Use
1. Select country (🇺🇸 / 🇯🇵)
2. Enter ticker (e.g., AAPL, 7203.T)
3. Press **[Get & Calculate]**

If needed, check sensitivity using the **g (growth rate)** and **MOS** sliders.

The last 10 entries are displayed as “Recently Viewed Values” in pill format. Click to re-fetch.

---
## Transparency
- Data: yfinance (delays/gaps possible)
- Currency: Follows ticker country (USD / JPY). Caution for ADRs
- Assumption: Graham value hidden if EPS ≤ 0 or BPS ≤ 0 (reason in tooltip)
- Calculation: JPY conversion for USD stocks via explicit toggle. Includes retrieval time and exchange rate
- Disclaimer: This app is for **reference only** and is not investment advice

--- 

## Demo & Slides
![Demo Video](https://github.com/TomoProgrammingDayori/graham-react-app/blob/main/%E8%B3%87%E6%96%99/%E3%83%87%E3%83%A2%E5%8B%95%E7%94%BB.gif)

---

## 🔧 Setup

### 1. Clone

```bash
git clone https://github.com/truthwave/graham-react-app.git
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

## Technologies
- Frontend: React / Axios / CSS (Dark UI)
- Backend: Flask / yfinance / pandas (Flask-CORS)
- State Management: React Hooks (useState / useEffect)
- Persistence: localStorage (Recently Viewed Values / Favorites / Last Input Restore)

---

📂 Directory Structure

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


## 📜 License

MIT License

---

## 🧑‍💻 Author

**[Truth Wave ― 真理の波](https://github.com/truthwave)**  
Check out our portfolio and AI tool development resources too!


## Feel Free to Contact Us
[📩 Inquiries & Quotes](mailto:realmadrid71214591@gmail.com)

---

## 🏁 In Closing
> **Cut the explanation. Keep the truth.**
> Investing is the courage to say “yes” to value.
