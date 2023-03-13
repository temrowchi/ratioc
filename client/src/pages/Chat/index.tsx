import React, {useState} from 'react';
import {ChatBox, NavBar, UserList} from '../../components';
import {Container, Row, Col} from 'react-bootstrap';
import {userList} from '../../mocks';
import {User} from '../../model';
// https://github.com/ShankyTiwari/Real-time-private-chatting-app-using-React-Nodejs-mongodb-and-Socket.io

const Chat = () => {
  const [users, setUsers] = useState(userList);
  const [showList, setShowList] = useState(true);
  const [showChatBox, setShowChatBox] = useState(true);
  const [userChatData, setUserChatData] = useState<User | undefined>();

  const onChatClicked = (user: User) => {
    for (let index = 0; index < users.length; index++) {
      if (users[index].userId === user.userId) {
        users[index].unread = 0;
        setUserChatData(users[index]);
      }
    }
  };

  return (
    <>
      <NavBar signedInUser={'this.state.user'} />
      <Container fluid>
        <Row className="show-grid" style={{marginTop: '20px'}}>
          <Col md={4}>
            <UserList users={users} onChatClicked={onChatClicked} />
          </Col>
          <Col md={8}>
            <ChatBox targetUser={userChatData} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Chat;
