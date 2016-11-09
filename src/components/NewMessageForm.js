import React, { Component } from 'react';

export default class NewMessageForm extends Component {
  constructor () {
    super();
    this.state = {
      newMessage: ''
    };

    this._submit = this._submit.bind(this);
    this._changeInput = this._changeInput.bind(this);
  }

  _submit (e) {
    e.preventDefault();
    let { submitNewMessage } = this.props;
    const { newMessage } = this.state;

    submitNewMessage(newMessage);
  }

  _changeInput (e) {
    this.setState({
      newMessage: e.target.value
    });
  }

  render () {
    const { newMessage } = this.state;
    return (
      <form onSubmit={this._submit}>
        <input type='text' required value={newMessage} onChange={this._changeInput} />
        <button>Add Message</button>
      </form>
    );
  }
}
