# グレアム割安株価チェッカー

このアプリは、米国株および日本株の株価情報を取得し、グレアムの理論株価やROEを使った評価、割安度などを計算・表示するReact + Flask製Webアプリです。

## 📷 スクリーンショット

![screenshot](./screenshot.png) <!-- ※必要に応じてパス変更 -->

---

## 🚀 主な機能

| 機能                     | 説明 |
|--------------------------|------|
| 🇯🇵/🇺🇸 日本株・米国株 切替 | `.T`付きティッカー or 通常ティッカーに自動対応 |
| 🔍 株価データ取得         | `yfinance`を使用して現在株価、EPS、BPSなど取得 |
| 📊 グレアム理論株価計算   | `√(22.5 × EPS × BPS)` に基づく評価指標を算出 |
| 📈 拡張グレアム理論株価   | EPSと成長率を利用した拡張モデルを表示 |
| 💡 ROEバリエーション株価 | `ROE × BPS × (8.5 + 2 × 成長率)` の計算 |
| 🛡 安全域（MOS 30%）     | ROEベース理論株価の70%を表示 |
| 🧮 PER・PBR計算          | 現在株価との比較による指標算出 |
| 💾 入力履歴保存          | 最新10件の検索履歴をローカルストレージ保存 |
| ❌ 履歴の個別削除         | ボタンクリックで1件ずつ削除可能 |
| ⭐️ お気に入り保存        | ワンタッチで登録・解除できるティッカーリスト機能 |
| 🔁 最終入力値の自動復元   | ページ再読み込み時に入力内容と市場を復元 |
| 🌑 ダークテーマUI        | シンプルで目に優しいダークカラーで統一 |

---

## 🛠 技術構成

- フロントエンド: **React + Axios + CSS**
- バックエンド: **Flask + yfinance + pandas**
- 状態管理: **React Hooks (useState, useEffect)**
- 永続保存: **localStorage**
- CORS対応: **Flask-CORS**

---

## 🔧 セットアップ方法

### 1. クローン

```bash
git clone https://github.com/yourname/graham-react-app.git
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
