class ShareSaleException extends Error {
    constructor(message) {
        super(message);
        this.name = "ShareSaleException";
    }
}

class StockPortfolio {
    constructor() {
        this.portfolio = {};
    }

    toString() {
        return `StockPortfolio(${JSON.stringify(this.portfolio)})`;
        
    }

    addStock(ticker, shares) {
        if (!this.portfolio[ticker]) {
            this.portfolio[ticker] = 0;
        }
        this.portfolio[ticker] += shares;
    }

    removeStock(ticker, shares) {
        if (this.portfolio[ticker]) {
            if (shares > this.portfolio[ticker]) {
                throw new ShareSaleException(`Cannot sell ${shares} shares of ${ticker}`);
            }
            this.portfolio[ticker] -= shares;
            if (this.portfolio[ticker] <= 0) {
                delete this.portfolio[ticker];
            }
        }
    }


    getSize() {
        if (Object.keys(this.portfolio).length == 0) {
            console.log("No Stocks are currently owned!")
        }
        return Object.keys(this.portfolio).length;
    }

    getPortfolio() {
        return this.portfolio;
    }

    getSharesForSymbol(symbol) {
        return this.portfolio[symbol] || 0;
    }

    
}

export { StockPortfolio, ShareSaleException };
