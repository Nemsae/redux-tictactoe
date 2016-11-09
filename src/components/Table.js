import React, { Component } from 'react';

export default class NewMessageForm extends Component {
  constructor () {
    super();
    this.state = {
      newMessage: ''
    };

    // this._submit = this._submit.bind(this);
    // this._changeInput = this._changeInput.bind(this);
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
    // const { newMessage } = this.state;
    const { table, playerTurn } = this.props;
    console.log('table in Table: ', table);
    console.log('playerTurn in Table: ', playerTurn);
    return (
      <div>
        <button onClick={this._resetGame.bind(this)}>Reset</button>
        <div className='container'>
          {
            Object.keys(table).map((key, i) => {
            // table.map((box, i) => {
              return (
                <div className='col-xs-4 box' key={i} onClick={
                  playerTurn ? this._play.bind(this, 0, key) : this._play.bind(this, 1, key)
                }>{key}</div>
              );
            })
          }
        </div>
      </div>
    );
  }
}
