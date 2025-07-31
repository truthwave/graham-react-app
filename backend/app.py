from flask import Flask, request, jsonify
from flask_cors import CORS
import yfinance as yf
import pandas as pd

app = Flask(__name__)
CORS(app)

@app.route("/api/stockinfo")
def get_stock_info():
    symbol = request.args.get("symbol")
    if not symbol:
        return jsonify({"error": "symbol is required"}), 400

    try:
        ticker = yf.Ticker(symbol)
        info = ticker.info

        current_price = info.get("currentPrice", None)
        eps = info.get("trailingEps", None)
        bps = info.get("bookValue", None)
        shares_out = info.get("sharesOutstanding", None)

        avg_eps = None
        try:
            fin = ticker.financials
            if "Net Income" in fin.index and shares_out and shares_out > 0:
                eps_list = [v / shares_out for v in fin.loc["Net Income"] if pd.notnull(v) and v != 0]
                if eps_list:
                    avg_eps = sum(eps_list) / len(eps_list)
        except Exception as e:
            print("avg_eps ERROR:", e)

        avg_bps = None
        try:
            bal = ticker.balance_sheet
            if shares_out and shares_out > 0:
                for equity_key in [
                    "Common Stock Equity",
                    "Stockholders Equity",
                    "Total Stockholder Equity"
                ]:
                    if equity_key in bal.index:
                        bps_list = [v / shares_out for v in bal.loc[equity_key] if pd.notnull(v) and v != 0]
                        if bps_list:
                            avg_bps = sum(bps_list) / len(bps_list)
                            break
        except Exception as e:
            print("avg_bps ERROR:", e)

        growth_rate = None
        try:
            fin = ticker.financials
            if "Net Income" in fin.index and shares_out and shares_out > 0:
                series = fin.loc["Net Income"].dropna()
                if len(series) >= 2:
                    old_eps = series.iloc[-1] / shares_out
                    new_eps = series.iloc[0] / shares_out
                    years = len(series) - 1
                    if old_eps > 0 and new_eps > 0:
                        growth_rate = ((new_eps / old_eps) ** (1 / years) - 1) * 100
        except Exception as e:
            print("growth_rate ERROR:", e)

        roe = None
        try:
            fin = ticker.financials
            bal = ticker.balance_sheet

            fin_clean = fin.dropna(axis=1, how="all")
            bal_clean = bal.dropna(axis=1, how="all")

            net_income = None
            for ni_key in [
                "Net Income",
                "Net Income Applicable To Common Shares",
                "Net Income Common Stockholders",
                "Net Income Including Noncontrolling Interests"
            ]:
                if ni_key in fin_clean.index:
                    ni_series = fin_clean.loc[ni_key]
                    if not ni_series.empty and pd.notnull(ni_series.iloc[0]):
                        net_income = ni_series.iloc[0]
                        break

            equity = None
            for eq_key in [
                "Common Stock Equity",
                "Stockholders Equity",
                "Total Stockholder Equity"
            ]:
                if eq_key in bal_clean.index:
                    eq_series = bal_clean.loc[eq_key]
                    if not eq_series.empty and pd.notnull(eq_series.iloc[0]):
                        equity = eq_series.iloc[0]
                        break

            if net_income is not None and equity is not None and equity != 0:
                roe = (net_income / equity) * 100
        except Exception as e:
            print("ROE ERROR:", e)

        return jsonify({
            "symbol": symbol,
            "eps": round(eps, 3) if eps else None,
            "bps": round(bps, 3) if bps else None,
            "currentPrice": round(current_price, 2) if current_price else None,
            "avg_eps": round(avg_eps, 2) if avg_eps else None,
            "avg_bps": round(avg_bps, 2) if avg_bps else None,
            "growth_rate": round(growth_rate, 2) if growth_rate else None,
            "roe": round(roe, 2) if roe else None
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
