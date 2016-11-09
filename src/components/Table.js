import React, { Component } from 'react';

export default class NewMessageForm extends Component {
  constructor () {
    super();
    this.state = {
      newMessage: ''
    };
  }

  _resetGame () {
    let { resetGame } = this.props;
    resetGame();
  }

  _play (turn, key) {
    let { playBox, markBox } = this.props;
    playBox(turn);
    let mark = turn ? 'X' : 'O';
    markBox(mark, key);
  }

  render () {
    const { table, playerTurn } = this.props;
    console.log('table in Table: ', table);
    console.log('playerTurn in Table: ', playerTurn);
    return (
      <div className='text-center'>
        <button onClick={this._resetGame.bind(this)}>Reset</button>
        <h2>{playerTurn ? 'Player 1\'s Turn' : 'Player 2\'s Turn'}</h2>
        <div className='container'>
          {
            Object.keys(table).map((key, i) => {
              return (
                <div className='col-xs-4 box' key={i} onClick={
                  playerTurn ? this._play.bind(this, 0, key) : this._play.bind(this, 1, key)
                }>{table[key]}</div>
              );
            })
          }
        </div>
      </div>
    );
  }
}
