export function datediff(first, second) {
  // Get 1 day in milliseconds

  const one_day = 1000 * 60 * 60 * 24;

  // Convert both dates to milliseconds

  const first_ms = first.getTime();

  const second_ms = second.getTime();

  // Calculate the difference in milliseconds

  let difference_ms = second_ms - first_ms;

  // take out milliseconds

  difference_ms = difference_ms / 1000;

  const seconds = Math.floor(difference_ms % 60);

  difference_ms = difference_ms / 60;

  const minutes = Math.floor(difference_ms % 60);

  difference_ms = difference_ms / 60;

  const hours = Math.floor(difference_ms % 24);

  let days = Math.floor(difference_ms / 24);

  if (days === 0) {
    if (first.getDay() !== second.getDay()) {
      days++;
    }
  }
  return Math.abs(days);
}
