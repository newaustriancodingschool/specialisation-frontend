import { DYNAMIC_TYPE } from "@angular/compiler/src/output/output_ast";

export function datediff(first, second): number {
  var timeFirst = first.getTime(),
      timeSecond = second.getTime(),
      daysDifference = Math.abs(timeFirst - timeSecond),
      day = 86400000; // milliseconds per day

  if (daysDifference >= day) {
    return Math.trunc(daysDifference / day);
  }
  else {
    return 0;
  }
}
