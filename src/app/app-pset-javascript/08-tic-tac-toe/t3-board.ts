
function calculateWinner(status: string, winner: string): object {
  const player1 = 'x';
  const player2 = 'o';
  const lines = [
    [[0][0], [0][1], [0][2]],
    [[1][3], [1][4], [1][5]],
    [[2][6], [2][7], [2][8]],
    [[0][0], [1][3], [2][6]],
    [[0][1], [1][4], [2][7]],
    [[0][2], [1][5], [2][8]],
    [[0][0], [1][4], [2][8]],
    [[0][2], [1][4], [2][6]],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

interface Composer {
  status: string;
  winner: string;
}
export class T3Board {

  constructor(data: Composer) {
  }

  getStatus() {
  }
}
