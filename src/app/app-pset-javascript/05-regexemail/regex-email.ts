<<<<<<< HEAD
export function isValidEMail(email): boolean {
  // from https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // var re = /\S+@\S+\.\S+/;
  return re.test(email);
=======
export function isValidEMail(email: string): boolean {
  return true;
>>>>>>> 6ad8d7869cc5422683e966b393962156e4d5b336
}
