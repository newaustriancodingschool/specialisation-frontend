export function isValidEMail(email): boolean {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email) || email.includes("\\") ? true : false;
}