import {converter} from './roman-numbers';

describe('09 - Roman Numbers Converter', () => {

  it('should convert I', () => {
    expect(converter.toArabic('I')).toBe(1);
  });
  fit('should convert IV', () => {
    expect(converter.toArabic('IV')).toBe(4);
  });
  it('should convert XI', () => {
    expect(converter.toArabic('XI')).toBe(11);
  });
  it('should convert L', () => {
    expect(converter.toArabic('L')).toBe(50);
  });
  it('should convert MMXVIII', () => {
    expect(converter.toArabic('MMXVIII')).toBe(2018);
  });
  it('should convert CMXCIX', () => {
    expect(converter.toArabic('CMXCIX')).toBe(999);
  });

  it('should convert 1', () => {
    expect(converter.toRoman(1)).toEqual('I');
  });
  it('should convert 4', () => {
    expect(converter.toRoman(4)).toEqual('VI');
  });
  it('should convert 11', () => {
    expect(converter.toRoman(11)).toEqual('XI');
  });
  it('should convert 50', () => {
    expect(converter.toRoman(50)).toEqual('L');
  });
  it('should convert 2018', () => {
    expect(converter.toRoman(2018)).toEqual('MMXVIII');
  });
  it('should convert 999', () => {
    expect(converter.toRoman(999)).toEqual('CMXCIX');
  });
});
