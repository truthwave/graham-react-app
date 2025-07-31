// src/components/GrahamCalculator.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";

function GrahamCalculator() {
  const [symbol, setSymbol] = useState("");
  const [market, setMarket] = useState("US");
  const [stockData, setStockData] = useState(null);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // 初回マウント時：履歴・お気に入り・前回の入力値を取得
  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("stock_history")) || [];
    const savedFavorites = JSON.parse(localStorage.getItem("stock_favorites")) || [];
    const lastSymbol = localStorage.getItem("last_symbol");
    const lastMarket = localStorage.getItem("last_market");

    setHistory(savedHistory);
    setFavorites(savedFavorites);

    if (lastSymbol) setSymbol(lastSymbol);
    if (lastMarket) setMarket(lastMarket);
  }, []);

  // 履歴・お気に入りの保存
  useEffect(() => {
    localStorage.setItem("stock_history", JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    localStorage.setItem("stock_favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!symbol) return;

    // 最後の入力を保存
    localStorage.setItem("last_symbol", symbol);
    localStorage.setItem("last_market", market);

    try {
      const query = market === "JP" ? `${symbol}.T` : symbol;
      const res = await axios.get(`http://localhost:5000/api/stockinfo?symbol=${query}`);
      setStockData(res.data);
      setError(null);

      const newEntry = { symbol: symbol.toUpperCase(), market };
      setHistory((prev) => {
        const filtered = prev.filter((item) => item.symbol !== newEntry.symbol || item.market !== newEntry.market);
        return [newEntry, ...filtered].slice(0, 10);
      });
    } catch {
      setError("データ取得に失敗しました");
      setStockData(null);
    }
  };

  const handleFavorite = () => {
    const key = `${symbol}_${market}`;
    if (favorites.find((f) => `${f.symbol}_${f.market}` === key)) {
      setFavorites(favorites.filter((f) => `${f.symbol}_${f.market}` !== key));
    } else {
      setFavorites([{ symbol, market }, ...favorites]);
    }
  };

  const isFavorited = () => {
    const key = `${symbol}_${market}`;
    return favorites.some((f) => `${f.symbol}_${f.market}` === key);
  };

  const loadFromHistory = (entry) => {
    setSymbol(entry.symbol);
    setMarket(entry.market);
    setStockData(null);

    // すぐに再検索
    setTimeout(() => {
      document.querySelector("form").dispatchEvent(new Event("submit", { bubbles: true }));
    }, 100);
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("stock_history");
  };

  const deleteHistoryItem = (index) => {
    const updated = [...history];
    updated.splice(index, 1);
    setHistory(updated);
  };

  const calculate = () => {
    if (!stockData) return null;
    const { eps, bps, currentPrice, avg_eps, avg_bps, growth_rate, roe } = stockData;
    const currency = market === "JP" ? "円" : "USD";
    const base_eps = avg_eps || eps;
    const base_bps = avg_bps || bps;
    if (!base_eps || !base_bps || !currentPrice) return null;

    const graham_price = Math.sqrt(22.5 * base_eps * base_bps);
    const extended_price = base_eps * (8.5 + 2 * (growth_rate || 0));
    const roe_price = roe && bps ? (roe / 100) * bps * (8.5 + 2 * (growth_rate || 0)) : null;
    const under_valuation = ((graham_price - currentPrice) / currentPrice) * 100;
    const margin_of_safety = roe_price ? roe_price * 0.7 : null;

    return {
      graham_price: graham_price.toFixed(2),
      extended_price: extended_price.toFixed(2),
      roe_price: roe_price ? roe_price.toFixed(2) : "N/A",
      per: (currentPrice / base_eps).toFixed(2),
      pbr: (currentPrice / base_bps).toFixed(2),
      under_valuation: under_valuation.toFixed(1),
      margin_of_safety: margin_of_safety ? margin_of_safety.toFixed(2) : "N/A",
      currency,
    };
  };

  const result = calculate();

  return (
    <div className="container">
      <h2>グレアム割安株価チェッカー</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>証券コード / ティッカー：</label>
          <input
            type="text"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value.toUpperCase())}
            required
          />
        </div>

        <div className="market-selector">
          <span className="market-label">市場：</span>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                value="US"
                checked={market === "US"}
                onChange={() => setMarket("US")}
              />
              米国株
            </label>
            <label className="radio-option">
              <input
                type="radio"
                value="JP"
                checked={market === "JP"}
                onChange={() => setMarket("JP")}
              />
              日本株
            </label>
          </div>
        </div>

        <div className="button-row">
          <button type="submit">取得して計算</button>
          {symbol && (
            <button type="button" onClick={handleFavorite}>
              {isFavorited() ? "お気に入り解除" : "お気に入り追加"}
            </button>
          )}
        </div>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {stockData && result && (
        <div style={{ marginTop: "2rem" }}>
          <h3>分析結果（{symbol}）</h3>
          <ul>
            <li>現在株価: {stockData.currentPrice} {result.currency}</li>
            <li>EPS: {stockData.eps}</li>
            <li>BPS: {stockData.bps}</li>
            <li>平均EPS: {stockData.avg_eps || "N/A"}</li>
            <li>平均BPS: {stockData.avg_bps || "N/A"}</li>
            <li>成長率: {stockData.growth_rate !== null ? `${stockData.growth_rate}%` : "N/A"}</li>
            <li>ROE: {stockData.roe !== null ? `${stockData.roe.toFixed(2)}%` : "N/A"}</li>
          </ul>
          <hr />
          <ul>
            <li>グレアム理論株価: {result.graham_price} {result.currency}</li>
            <li>拡張グレアム理論株価: {result.extended_price} {result.currency}</li>
            <li>ROEバリエーション株価: {result.roe_price} {result.currency}</li>
            <li>PER: {result.per}</li>
            <li>PBR: {result.pbr}</li>
            <li>割安度: {result.under_valuation}%</li>
            <li>安全域（MOS 30%）: {result.margin_of_safety} {result.currency}</li>
          </ul>
        </div>
      )}

      {history.length > 0 && (
        <>
          <h3>検索履歴</h3>
          <ul>
            {history.map((entry, idx) => (
              <li key={idx} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <button onClick={() => loadFromHistory(entry)}>
                  {entry.symbol}（{entry.market === "US" ? "米国" : "日本"}）
                </button>
                <button onClick={() => deleteHistoryItem(idx)} style={{ color: "red" }}>
                  ❌
                </button>
              </li>
            ))}
          </ul>
          <button onClick={clearHistory}>履歴をすべて削除</button>
        </>
      )}

      {favorites.length > 0 && (
        <>
          <h3>お気に入り</h3>
          <ul>
            {favorites.map((entry, idx) => (
              <li key={idx}>
                <button onClick={() => loadFromHistory(entry)}>
                  {entry.symbol}（{entry.market === "US" ? "米国" : "日本"}）
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default GrahamCalculator;
