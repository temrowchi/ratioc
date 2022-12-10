import React, {Component, useRef, useState} from 'react';
import {Button, FormControl, InputGroup, Col, FormGroup} from 'react-bootstrap';
import {MessageList, Navbar as NavbarComponent, Avatar} from 'react-chat-elements';
import {userMessage} from '../mocks';

const ChatBox = ({targetUser, onBackPressed, signedInUser}: any) => {
  const [messageText, setMessageText] = useState('');
  const messageListRef = useRef();
  return (
    <div>
      <NavbarComponent
        left={
          <div>
            <Avatar
              src={'https://avatars.githubusercontent.com/u/80540635?v=4'}
              alt={'logo'}
              size="large"
              type="circle flexible"
            />
            <p className="navBarText">{'targetUser?.name'}</p>
          </div>
        }
      />
      <MessageList
        referance={messageListRef}
        className="messages"
        lockable={true}
        toBottomHeight={'100%'}
        dataSource={userMessage}
        // dataSource={targetUser.messages}
      />
      <FormGroup>
        <InputGroup>
          <FormControl
            type="text"
            value={messageText}
            onChange={(e) => {
              setMessageText(e.target.value);
            }}
            placeholder="Type a message here"
            key="messageTextBox"
            className="messageTextBox"
            autoFocus
          />
          <Button disabled={!messageText} className="sendButton" onClick={() => {}}>
            Send
          </Button>
        </InputGroup>
      </FormGroup>
    </div>
  );
};

export default ChatBox;
