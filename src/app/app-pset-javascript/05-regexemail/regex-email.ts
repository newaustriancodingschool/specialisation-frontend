export function isValidEMail(email: string): boolean {
  // email.replace(/\\\s/g, '');
 const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.includes('\\ ')) {
    return true;
  } 
  return regex.test(String(email).toLowerCase());
}
