import {currencyFormatter} from './currency-formatter';

describe('04 - Currency Formatter', () => {
  it('should format in € in German/Austrian style', () => {
    expect(currencyFormatter(1000, 'EUR', 'at')).toEqual('€ 1.000,00');
  });
  it('should format in € in UK style', () => {
    expect(currencyFormatter(1000, 'EUR', 'uk')).toEqual('€ 1,000.00');
  });
  it('should round properly in Dollar/Austrian', () => {
    expect(currencyFormatter(5.123, 'USD', 'at')).toEqual('$ 5,12');
  });
  it('should round properly in Sterling/UK', () => {
    expect(currencyFormatter(1238.999, 'GBP', 'at')).toEqual('£ 1,239.00');
  });
  it('should display zero correctly', () => {
    expect(currencyFormatter(0, 'USD', 'at')).toEqual(('$ 0,00'));
  });
  it('should have defaults for € and Austrian', () => {
    expect(currencyFormatter(1)).toEqual('€ 1,00');
  });
  it('should fail on string input', () => {
    expect(() => currencyFormatter('1', 'EUR', 'at')).toThrow();
  });
  it('should not fail on wrong letter case', () => {
    expect(currencyFormatter(1, 'eur', 'AT')).toEqual('€ 1,00');
  });
});
