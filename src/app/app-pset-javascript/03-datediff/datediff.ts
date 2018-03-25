import { DYNAMIC_TYPE } from "@angular/compiler/src/output/output_ast";

export function datediff(first, second): number {
  var timeFirst = first.getTime(),
      timeSecond = second.getTime(),
      timeDifference = Math.abs(timeFirst - timeSecond);

  if (timeDifference >= 31536000000) {
    return Math.trunc(timeDifference / 86400000);
  }
  else if (timeDifference >= 86400000) {
    return Math.trunc(timeDifference / 86400000);
  }
  else {
    return 0;
  }
}
