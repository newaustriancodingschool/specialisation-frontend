import {datediff} from './datediff';

describe('03 - Date Difference in Days', () => {
  it('should calculate the difference in days of a year', () => {
    const first = new Date(2018, 0, 1);
    const second = new Date(2017, 0, 1);

    expect(datediff(first, second)).toBe(365);
  });
  it('should calculate the difference in days of a year in both directions', () => {
    const first = new Date(2017, 0, 1);
    const second = new Date(2018, 0, 1);

    expect(datediff(first, second)).toBe(365);
  });
  it('should calc only full days', () => {
    const first = new Date(2017, 0, 5, 0);
    const second = new Date(2017, 0, 6, 15);

    expect(datediff(first, second)).toBe(1);
  });
  it('should calc zero on same day', () => {
    const first = new Date(2017, 0, 5, 0, 0);
    const second = new Date(2017, 0, 5, 23, 59);

    expect(datediff(first, second)).toBe(0);
  });
  it('calculation should not be based on hours only', () => {
    const first = new Date(2017, 0, 5, 23, 59);
    const second = new Date(2017, 0, 6);

    expect(datediff(first, second)).toBe(1);
  });
});
