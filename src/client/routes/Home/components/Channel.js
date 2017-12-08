import React from 'react';
import history from '../../../history';

export default ({
  messages, sendMessage,
  message, setMessage
}) => (
  <div className="channel">
    <div className="topBar">
      <span>Channel</span>
      <button onClick={() => history.push('/login')}>Exit</button>
    </div>
    <ul>
      {messages.map(({ _id, author, content }) => (
        <li className="message" key={_id}>
          <img src={author.photo}/>
          <div>
            <p className="message-author">{author.username}</p>
            <p className="message-content">{content}</p>
          </div>
        </li>
      ))}
    </ul>
    <div className="input-group">
      <input
        value={message}
        onChange={e => setMessage(e.target.value)}
        onKeyDown={sendMessage}
        placeholder="Message"
      />
    </div>
  </div>
);