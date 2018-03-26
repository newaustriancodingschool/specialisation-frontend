var getDaysInMonth = function (year, month) {
  return new Date(year, month + 1, 0).getDate();
};

export function datediff(first, second): number {
  var first_year = first.getFullYear();
  var second_year = second.getFullYear();
  var month_of_first = first.getMonth();
  var month_of_second = second.getMonth();
  var first_date = first.getDate();
  var second_date = second.getDate();
  var sum_of_days = 0;
  var year_calculater = 0;
  var days = 0;
  if (first_year > second_year) {
    year_calculater = (first_year - second_year) * 365;
    if (month_of_first > month_of_second) {
      var month_calculater = month_of_first - month_of_second;
      var days_of_month;
      for (days_of_month = month_of_second; days_of_month < month_of_first; days_of_month++) {
        var days_of_month_calculater = getDaysInMonth(first_year, days_of_month);
        for (var i = 0; i < month_calculater; i++) {
          sum_of_days = sum_of_days + days_of_month_calculater;
          days_of_month_calculater = 0;
        }
      }
      days = first_date - second_date;
    }
    else if (month_of_first < month_of_second) {
      month_calculater = month_of_second - month_of_first;
      sum_of_days = 0;
      for (days_of_month = month_of_first; days_of_month < month_of_second; days_of_month++) {
        days_of_month_calculater = getDaysInMonth(first_year, days_of_month);
        for (var i = 0; i < month_calculater; i++) {
          sum_of_days = sum_of_days - days_of_month_calculater;
          days_of_month_calculater = 0;
        }
      }
    days = first_date - second_date;
    }
    else {
      sum_of_days = 0;
      days = first_date - second_date;
    }
  }
  else if (first_year < second_year) {
    year_calculater = (second_year - first_year) * 365;
    if (month_of_first > month_of_second) {
      month_calculater = month_of_first - month_of_second;
      sum_of_days = 0;
      for (days_of_month = month_of_second; days_of_month < month_of_first; days_of_month++) {
        days_of_month_calculater = getDaysInMonth(first_year, days_of_month);
        for (var i = 0; i < month_calculater; i++) {
          sum_of_days = sum_of_days - days_of_month_calculater;
          days_of_month_calculater = 0;
        }
      }
      days = second_date - first_date;
    }
    else if (month_of_first < month_of_second) {
      month_calculater = month_of_second - month_of_first;
      sum_of_days = 0;
      for (days_of_month = month_of_first; days_of_month < month_of_second; days_of_month++) {
        days_of_month_calculater = getDaysInMonth(first_year, days_of_month);
        for (var i = 0; i < month_calculater; i++) {
          sum_of_days = sum_of_days + days_of_month_calculater;
          days_of_month_calculater = 0;
        }
      }
      days = second_date - first_date;
    }
    else {
      sum_of_days = 0;
      days = second_date - first_date;
    }
  }
  else {
    if (month_of_first > month_of_second) {
      month_calculater = month_of_first - month_of_second;
      sum_of_days = 0;
      for (days_of_month = month_of_second; days_of_month < month_of_first; days_of_month++) {
        days_of_month_calculater = getDaysInMonth(first_year, days_of_month);
        for (var i = 0; i < month_calculater; i++) {
          sum_of_days = sum_of_days - days_of_month_calculater;
          days_of_month_calculater = 0;
        }
      }
      days = second_date - first_date;
    }
    else if (month_of_first < month_of_second) {
      month_calculater = month_of_second - month_of_first;
      sum_of_days = 0;
      for (days_of_month = month_of_first; days_of_month < month_of_second; days_of_month++) {
        days_of_month_calculater = getDaysInMonth(first_year, days_of_month);
        for (var i = 0; i < month_calculater; i++) {
          sum_of_days = sum_of_days + days_of_month_calculater;
          days_of_month_calculater = 0;
        }
      }
      days = second_date - first_date;
    }
    else {
      days = second_date - first_date;
    }
  }
  return year_calculater + sum_of_days + days;
}
