import React from 'react';

export default (props) => {
  const { messages } = props;

  const Messages = Object.keys(messages).map((key) => {
    let message = messages[key];
    return (
      <li key={key}>{message}</li>
    );
  });
  return (
    <ul>
      {Messages}
    </ul>
  );
};
