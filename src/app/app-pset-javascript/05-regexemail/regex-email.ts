export function isValidEMail(email): boolean {
  return null;
}






var email = "john.doe@email.com";
var name   = email.substring(0, email.lastIndexOf("@"));
var domain = email.substring(email.lastIndexOf("@") +1);

console.log( name );   // john.doe
console.log( domain ); // email.com