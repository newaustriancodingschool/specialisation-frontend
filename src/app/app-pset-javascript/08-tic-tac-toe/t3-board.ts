type T3BoardData = Array<Array<string | null>>;

export class T3Board {
  // board: any;
  // counter: number;
  // result: any;

  private data: T3BoardData;

  constructor(data: T3BoardData) {
    this.data = data;
    // this.counter = 0;
  }

  getStatus(): any {
    let result: any;
    let counter = 0;
    let success = 0;
    let check_input_equal_null = 0;

    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 3; x++) {
        // console.log(y + "," + x + " : " +this.board[y][x]);
        if (this.data[y][x] == null || this.data[y][x] == "") {
          check_input_equal_null += 1;
        }
        if (counter != 3) {
          if (x == y && this.data[y][x] == "x") {
            counter += 1;
            // console.log(counter);
            if (counter == 3) {
              success = 1;
              result = { status: "finished", winner: "x" };
              return result;
              // console.log(result);
              // console.log("finished");
            }
          }
        }
      }

      if (y == 2 && success == 0 && check_input_equal_null > 0) {
        result = { status: "ongoing" };
        return result;
        // console.log(result);
        // console.log("ongoing");
      } else if (y == 2 && success == 0 && check_input_equal_null == 0) {
        result = { status: "draw" };
        return result;
        // console.log(result);
        // console.log("draw");
      }
    }
  }
}
