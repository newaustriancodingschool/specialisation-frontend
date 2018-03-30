export function datediff(first, second): number {

    first.setHours(0);
    second.setHours(0);

    let day = 1000 * 60 * 60 * 24;
    let result = 0;

    if (first < second)
    {
        result=Math.round((second.getTime() - first.getTime())/day);
    }
    else
    {
        result=Math.round((first.getTime() - second.getTime())/day);  
    }

   return result;
}
