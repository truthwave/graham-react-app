<p align="center">
<img width="800" alt="段落テキスト" src="https://github.com/user-attachments/assets/e4d74697-b153-4838-9b6b-36f6fbf090f4" />
</p>

# グレアム割安株価チェッカー

このアプリは、米国株および日本株の株価情報を取得し、グレアムの理論株価やROEを使った評価、割安度などを計算・表示するReact + Flask製Webアプリです。

## プロジェクト概要
[スライド資料はこちら](https://github.com/truthwave/graham-react-app/tree/main/%E8%B3%87%E6%96%99/%E3%82%B0%E3%83%AC%E3%82%A2%E3%83%A0%E5%89%B2%E5%AE%89%E6%A0%AA%E4%BE%A1%E3%83%81%E3%82%A7%E3%83%83%E3%82%AB%E3%83%BC%20%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%89)


## 📷 スクリーンショット
<img width="898" height="542" alt="スクリーンショット" src="https://github.com/user-attachments/assets/7940d524-e6d0-46d0-8280-8eb8ec9da963" />

## 📷 デモ動画
![デモ動画](https://github.com/TomoProgrammingDayori/graham-react-app/blob/main/%E8%B3%87%E6%96%99/%E3%83%87%E3%83%A2%E5%8B%95%E7%94%BB.gif)

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

## 🧑‍💻 作者

**[Truth Wave ― 真理の波](https://github.com/truthwave)**  
ポートフォリオやAIツール開発に関する情報もぜひご覧ください！


## お気軽にご連絡ください
[📩 ご相談・お見積もりはこちら](mailto:realmadrid71214591@gmail.com)
