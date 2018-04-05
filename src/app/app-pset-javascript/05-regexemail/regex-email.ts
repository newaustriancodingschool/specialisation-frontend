export function isValidEMail(email: string): boolean {
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (reg.test(email)) {
    return true;
  } else {
  return false;
  }
}
