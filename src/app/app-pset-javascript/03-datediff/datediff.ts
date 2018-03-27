var getDaysInMonth = function (year, month) {
  return new Date(year, month + 1, 0).getDate();
};

export function datediff(first, second): number {
  first.setHours(0);first.setMinutes(0);
  second.setHours(0);second.setMinutes(0);

const one_day = 1000 * 60 * 60 * 24;
if (first < second) {
    var difference_ms = second.getTime() - first.getTime();
}else {
    difference_ms = first.getTime() - second.getTime();
}
return(Math.round(difference_ms / one_day));
}
