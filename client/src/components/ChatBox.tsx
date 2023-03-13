import React, {Component, useRef, useState} from 'react';
import {Button, FormControl, InputGroup, Col, FormGroup} from 'react-bootstrap';
import {MessageList, Navbar as NavbarComponent, Avatar} from 'react-chat-elements';
import {userMessage} from '../mocks';
import {User} from '../model';

interface IChatBox {
  targetUser?: User;
}

const ChatBox = ({targetUser}: IChatBox) => {
  const [messageText, setMessageText] = useState('');
  const messageListRef = useRef();

  return targetUser ? (
    <div>
      <NavbarComponent
        left={
          <div>
            <Avatar src={targetUser?.avatar} alt={'logo'} size={'large'} type={'circle flexible'} />
            <p className={'navBarText'}>{targetUser?.name}</p>
          </div>
        }
      />
      <MessageList
        referance={messageListRef}
        className={'messages'}
        lockable={true}
        toBottomHeight={'100%'}
        dataSource={targetUser.messages}
      />
      <FormGroup>
        <InputGroup>
          <FormControl
            type={'text'}
            value={messageText}
            onChange={(e) => {
              setMessageText(e.target.value);
            }}
            placeholder={'Type a message here'}
            key={'messageTextBox'}
            className={'messageTextBox'}
            autoFocus
          />
          <Button disabled={!messageText} className={'sendButton'} onClick={() => {}}>
            {'Send'}
          </Button>
        </InputGroup>
      </FormGroup>
    </div>
  ) : (
    <></>
  );
};

export default ChatBox;
