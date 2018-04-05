type T3BoardData = Array<Array<string | null>>;

export class T3Board {
  board: Array<Array<string>> = [
  ['', '', null],
  ['', '', ''],
  ['', null, '']];

  constructor(data) {
    this.board[0] = data[0];
    this.board[1] = data[1];
    this.board[2] = data[2];
  }

  getStatus(): any {
    // 0 means null, 1 ongoing, 2 draw, 3 x wins, 4 o wins
    let status: number = 0;
    // check if winner
    status = this.checkWinner();

    switch(status) {
      case 0:
        throw "didn't work.."
      case 1:
        return {status: 'ongoing'};
      case 2:
        return {status: 'draw'}
      case 3:
        return {status: 'finished', winner: 'x'}
      case 4:
        return {status: 'finished', winner: 'o'}
      default:
        throw 'status mistake';
  }
    // print status
    // return according to status. 
  }
  checkWinner() {
    // checks the board if there's a winner
    var horizontalThree = [];
    var verticalThree = [];
    var ongoing = false;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        horizontalThree.push(this.board[i][j])
        verticalThree.push(this.board[i][j])
        if (this.board[i][j] == '' || this.board[i][j] == null ) {
          ongoing = true;
        }
      }
      if (this.checkThree(horizontalThree) == 'x' ) {
        return 3;
      }
      if (this.checkThree(horizontalThree) == 'o' ) {
        return 4;
      }
      if (this.checkThree(verticalThree) == 'x' ) {
        return 3;
      }
      if (this.checkThree(verticalThree) == 'o' ) {
        return 4;
      }
      horizontalThree = [];
      verticalThree = [];
    }
    // check diagonals
    let leftToRight = [];
    let rightToLeft = [];
    for (let i = 0; i < 3; i++) {
      leftToRight.push(this.board[i][i])
      rightToLeft.push(this.board[i][2-i])
    }
    if (this.checkThree(leftToRight) == 'x' ) {
      return 3;
    }
    if (this.checkThree(leftToRight) == 'o' ) {
      return 4;
    }
    if (this.checkThree(rightToLeft) == 'x' ) {
      return 3;
    }
    if (this.checkThree(rightToLeft) == 'o' ) {
      return 4;
    }

    // no winner, check if ongoing or draw. 
    if (ongoing == true) {
      return 1; // ongoing
    }
    else return 2; // draw
  }

  checkThree(three): any {
    // checks three elements and returns the winnertype, if any
    if (three[0] == three[1] && three[1] == three[2]) {
      return three[0];
    }
    else return '';
  }
}
