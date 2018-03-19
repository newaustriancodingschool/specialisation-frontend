import {T3Board} from './t3-board';

describe('08 - Tic Tac Toe. Analyse and return status information.', () => {
  it('should recognise "x" as winner', () => {
    const board = new T3Board([
      ['x', '', null],
      ['o', 'x', 'o'],
      ['o', null, 'x']
    ]);
    expect(board.getStatus()).toEqual({status: 'finished', winner: 'x'});
  });
  it('should recognise an ongoing game', () => {
    const board = new T3Board([
      ['x', '', null],
      ['o', 'x', 'o'],
      ['o', null, null]
    ]);
    expect(board.getStatus()).toEqual({status: 'ongoing'});
  });
  it('should recognise a draw', () => {
    const board = new T3Board([
      ['x', 'o', 'x'],
      ['o', 'x', 'o'],
      ['o', 'x', 'o']
    ]);
    expect(board.getStatus()).toEqual({status: 'draw'});
  });
});
