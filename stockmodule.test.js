import exp from 'constants';
import { StockPortfolio, ShareSaleException } from './stockmodule.js'

test('TestEmpty', () => { 
    const portfolio = new StockPortfolio();
    const expected = 0
    const result = portfolio.getSize()
    expect(result).toBe(expected);
})

test('TestUniqueSymbols', () => {
    const portfolio = new StockPortfolio();
    portfolio.addStock("GME", 3)
    portfolio.addStock("GME", 1)
    portfolio.addStock("RBX", 2)
    const expected = 2
    const result = portfolio.getSize()
    expect(result).toBe(expected);
    
})

test('Buy', () => {
    const portfolio = new StockPortfolio();
    let expected = 0
    let result = portfolio.getSize()
    expect(result).toBe(expected)
    portfolio.addStock("GME", 3)
    const expected1 = portfolio.getPortfolio()
    const result1 = {'GME': 3}
    expect(result1).toStrictEqual(expected1);
})

test('Buy', () => {
    const portfolio = new StockPortfolio();
    let expected = 0
    let result = portfolio.getSize()
    expect(result).toBe(expected)
    portfolio.addStock("GME", 3)
    const expected1 = portfolio.getPortfolio()
    const result1 = {'GME': 3}
    expect(result1).toStrictEqual(expected1);
})

test('Sale', () => { 
    const portfolio = new StockPortfolio();
    portfolio.addStock("GME", 3)
    portfolio.removeStock('GME', 1)
    const expected = {'GME': 2}
    const result = portfolio.getPortfolio()
    expect(result).toStrictEqual(expected);

})

test('amntGivenShares', () => {
    const portfolio = new StockPortfolio();
    portfolio.addStock("GME", 3)
    const expected = 3
    const result = portfolio.getSharesForSymbol('GME')
    expect(result).toBe(expected);
})

test('delifZero', () => {
    const portfolio = new StockPortfolio();
    portfolio.addStock("GME", 1)
    portfolio.removeStock('GME', 1)
    const expected = 0
    const result = portfolio.getSize()
    expect(result).toBe(expected);

})

test("don'tDeleteNotOwned", () => {
    const portfolio = new StockPortfolio();
    portfolio.addStock('GME', 1);
    const removeShares = () => {
        portfolio.removeStock('GME', 2);
    };


    expect(removeShares).toThrow(ShareSaleException);

})