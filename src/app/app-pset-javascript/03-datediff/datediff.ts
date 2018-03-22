export function datediff(first, second): number {

  var hours = first.getHours() - second.getHours();
  var dayCount = first.getDate() - second.getDate();
  
  if (hours == 0)
  {
      if (dayCount == 0 )
      {
          if (first.getFullYear() > second.getFullYear() )
          {
              dayCount = dayCount + ((first.getFullYear() - second.getFullYear()) * 365);
              
          }
          else
          {
              dayCount = (dayCount + ((second.getFullYear() - first.getFullYear()) * 365)) * 1;
          }
      }
  }
  else
  {
      dayCount = dayCount * -1;
  }

  return dayCount;
}
