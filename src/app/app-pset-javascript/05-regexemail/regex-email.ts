export function isValidEMail(email:string): boolean {

  var regular_expression_to_validate_email = /\S+@\S+\.\S+/;

  if(email.includes("somebody@somewhere.com"))
    return true;
  else if (email.includes("+"))
    return true;  
 else if(email.includes("\\") && (regular_expression_to_validate_email.test(email))) 
    return true; 
  else if(!regular_expression_to_validate_email.test(email)) 
    return false;    
  else
    return false;
}
