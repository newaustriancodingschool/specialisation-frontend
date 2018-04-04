export function isValidEMail(email): boolean {

//email.replace(/\\\s/g, ''); 
var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (email.includes("\\ "))
   return true; 

return regex.test(String(email).toLowerCase());
}
