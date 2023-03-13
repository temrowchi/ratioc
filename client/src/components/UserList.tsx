import {useEffect, useState} from 'react';
import {FormGroup, FormControl} from 'react-bootstrap';
import {ChatList} from 'react-chat-elements';
import {User} from '../model';

const UserList = ({showSignInList, users, onChatClicked}: any) => {
  const [userList, setUserList] = useState(users);
  const [searchQuery, setSearchQuery] = useState('');

  const _onChatClicked = (e: any) => {
    if (onChatClicked) onChatClicked(e.user);
  };

  const searchInput = (e: any) => setSearchQuery(e.target.value);

  useEffect(() => {
    const filterUser = searchQuery
      ? users.filter((user: User) => user.name?.toLowerCase().includes(searchQuery.toLowerCase()))
      : users;
    setUserList(filterUser);
  }, [searchQuery]);

  return (
    <div>
      <FormGroup>
        <FormControl type="text" placeholder="Search for a user here..." onInput={searchInput} />
      </FormGroup>
      {userList?.length > 0 ? (
        <ChatList
          id={1}
          lazyLoadingImage={''}
          className={'chats'}
          dataSource={userList.map((user: User, i: string) => {
            let date = null;
            let subtitle = '';
            if (user.messages?.length > 0) {
              let lastMessage = user.messages[user.messages.length - 1];
              date = new Date(lastMessage.date);
              subtitle = (lastMessage.position === 'right' ? 'You: ' : user.name + ': ') + lastMessage.text;
            }

            return {
              id: i,
              avatar: user.avatar ?? 'https://avatars.githubusercontent.com/u/80540635',
              alt: user.alt,
              title: user.name,
              subtitle: subtitle,
              date: date,
              unread: user.unread,
              user: user
            };
          })}
          onClick={_onChatClicked}
        />
      ) : (
        <div className="text-center no-users">No users to show.</div>
      )}
    </div>
  );
};

export default UserList;
