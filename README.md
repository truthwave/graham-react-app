### [→English](https://github.com/truthwave/graham-react-app/tree/main/English)

# グレアム割安株価チェッカー

> **価格を見るな。価値を見ろ。**
> たった数秒で、差が見える。
> 投資は“何を見るか”ではない。“どう考えるか”だ。


<p align="center">
<img width="1536" height="1024" alt="グレアム (2)" src="https://github.com/user-attachments/assets/3ab4f87f-bad1-49cc-9e47-65816cecc1bf" />
</p>

---

## なぜ作ったか

多くの投資家は「価格」に引きずられる。
だが、**Value**（**本質価値**）はしばしば別の場所にある。

Graham Lens は、EPS / BPS / ROE と成長率 g を用い、
価格と価値の距離をシンプルに可視化するための一枚のレイヤーだ。

---

## 体験（3つのカードで終わる）

- **Graham（通称）**：√(22.5 × EPS × BPS)
- **ROEバリュエーション**：ROE × BPS × (8.5 + 2 × g)（g はスライダーで仮定）
- **MOS（安全域）**：上記指標に対する 30% 既定の余白
一本の比較バーで、**現在株価 / 各理論値 / MOS** を横並びで確認。
ノイズを閉じて、判断する。

---

## 使い方
1.国を選択（🇺🇸 / 🇯🇵）
2.ティッカーを入力（例：AAPL, 7203.T）
3.**[取得して計算]** を押す

必要なら **g（成長率）** と **MOS** スライダーで感度を確認する。

直近10件は「最近見た価値」としてピル表示。クリックで再取得。

---
## 透明性
- データ：yfinance（遅延／欠損の可能性）
- 通貨：ティッカー国に準拠（USD / JPY）。ADR は注意
- 前提：EPS ≤ 0 または BPS ≤ 0 の場合、Graham 値は非表示（理由ツールチップ）
- 計算：USD 銘柄の JPY 換算は明示トグル。取得時刻と為替レートを併記
- 免責：本アプリは**目安**であり、投資助言ではありません

---

##  デモ & スライド
![デモ動画](https://github.com/TomoProgrammingDayori/graham-react-app/blob/main/%E8%B3%87%E6%96%99/%E3%83%87%E3%83%A2%E5%8B%95%E7%94%BB.gif)
[スライド](https://github.com/truthwave/graham-react-app/blob/main/%E8%B3%87%E6%96%99/%E3%82%B0%E3%83%AC%E3%82%A2%E3%83%A0%E5%89%B2%E5%AE%89%E6%A0%AA%E4%BE%A1%E3%83%81%E3%82%A7%E3%83%83%E3%82%AB%E3%83%BC%20%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%89.pdf)

---

## 🔧 セットアップ

### 1. クローン

```bash
git clone https://github.com/truthwave/graham-react-app.git
cd graham-react-app
````

### 2. フロントエンド起動

```bash
cd frontend
npm install
npm start
```

### 3. バックエンド起動

```bash
cd backend
pip install -r requirements.txt
python app.py
```

### 4. アクセス

ブラウザで:
`http://localhost:5173`

---

## 技術
- Frontend：React / Axios / CSS（ダーク UI）
- Backend：Flask / yfinance / pandas（Flask-CORS）
- 状態管理：React Hooks（useState / useEffect）
- 永続化：localStorage（最近見た価値・お気に入り・最終入力復元）

---

## 📂 ディレクトリ構成

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

## 📜 ライセンス

MITライセンス

---

## 🧑‍💻 作者

**[Truth Wave ― 真理の波](https://github.com/truthwave)**  
ポートフォリオやAIツール開発に関する情報もぜひご覧ください！


## お気軽にご連絡ください
[📩 ご相談・お見積もりはこちら](mailto:realmadrid71214591@gmail.com)

---

## 🏁最後に
> **説明を減らせ。真実を残せ。**
> 投資とは、価値に“はい”と言う勇気である。
