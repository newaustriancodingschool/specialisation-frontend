export function isValidEMail(email): boolean {
 
var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//if (email.includes("\ "))
  //  return true;  
return regex.test(String(email).toLowerCase());


}
