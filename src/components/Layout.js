import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageList from './MessageList';
import NewMessageForm from './NewMessageForm';
import Table from './Table';

import { resetGame, playBox, markBox } from '../actions/FirebaseActions';

@connect((state) => ({
  table: state.table,
  playerTurn: state.playerTurn
}), (dispatch) => ({
  playBox(turn) {
    dispatch(playBox(turn));
  },
  resetGame() {
    dispatch(resetGame());
  },
  markBox(mark, key) {
    dispatch(markBox(mark, key));
  }
}))
export default class Layout extends Component {
  render() {
    const { table, resetGame, playBox, playerTurn, markBox } = this.props;
    return (
      <div className='container'>
        <h1 className='text-center'>Redux Express</h1>
        {/* <NewMessageForm submitNewMessage={submitNewMessage} />
        <MessageList messages={messages} /> */}
        <Table table={table} markBox={markBox} resetGame={resetGame} playBox={playBox} playerTurn={playerTurn}/>
      </div>
    );
  }
}
