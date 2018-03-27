export function datediff(first, second): number {
  // get the UTC format. 
  let milliDiff = first.valueOf() - second.valueOf();
  return Math.ceil(Math.abs(milliDiff / (1000*60*60*24)));
}
