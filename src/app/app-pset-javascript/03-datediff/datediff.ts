export function datediff(first, second): number {
  // get the UTC format. 
  let milliDiff = first.valueOf() - second.valueOf();
  return Math.trunc(Math.abs(milliDiff / (1000*60*60*24)));
  // then start subtracting hours in a loop
  // then return the number of days
}
