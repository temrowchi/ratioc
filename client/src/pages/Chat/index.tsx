import React, {useState} from 'react';
import {ChatBox, NavBar, UserList} from '../../components';
import {Container, Row, Col} from 'react-bootstrap';
import {userList} from '../../mocks';

const Chat = () => {
  const [users, setUsers] = useState(userList);
  const [showList, setShowList] = useState(true);
  const [showChatBox, setShowChatBox] = useState(true);
  const [userChatData, setUserChatData] = useState([]);

  const onChatClicked = () => {};

  return (
    <div>
      <NavBar signedInUser={'this.state.user'} />
      <Container fluid>
        <Row className="show-grid" style={{marginTop: '20px'}}>
          <Col md={4}>
            <UserList users={[...userList, ...userList, ...userList]} onChatClicked={onChatClicked} />
          </Col>
          <Col md={8}>
            <ChatBox
              signedInUser={'this.state.user'}
              onSendClicked={'this.createMessage.bind(this)'}
              onBackPressed={'this.toggleViews.bind(this)'}
              targetUser={'this.state.userChatData[this.state.selectedUserIndex]'}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Chat;
