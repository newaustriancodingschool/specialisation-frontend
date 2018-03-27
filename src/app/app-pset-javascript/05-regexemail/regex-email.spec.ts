import {isValidEMail} from './regex-email';

describe('05 - Regex EMail', () => {
  it('should validate a normal email', () => {
    expect(isValidEMail('somebody@somewhere.com')).toBeTruthy();
  });
  it('should not allow spaces', () => {
    expect(isValidEMail('heinz peter@somewhere.com')).toBe(false);
  });
  it('should not allow +', () => {
    expect(isValidEMail('heinz+peter@somewhere.com')).toBeTruthy();
  });
  it('should not allow missing TLD', () => {
    expect(isValidEMail('somebody@somewhere')).toBe(false);
  });
  it('should allow escaped spaces', () => {
    expect(isValidEMail('peter\ heinz@somewhere')).toBeTruthy();
  });
  it('should not allow urls', () => {
    expect(isValidEMail('www.somebody.com')).toBe(false);
  });
  it('should not pure names', () => {
    expect(isValidEMail('heinz.peter.huber')).toBe(false);
  });
  it('should require an @', () => {
    expect(isValidEMail('heinz.peter.at.somewhere.com')).toBe(false);
  });
});
