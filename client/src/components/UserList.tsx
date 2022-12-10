import {ChatList} from 'react-chat-elements';
import {User} from '../model';

const UserList = ({showSignInList, users, searchInput, onChatClicked, onUserClicked}: any) => {
  return (
    <div>
      {users?.length > 0 ? (
        <ChatList
          id={1}
          lazyLoadingImage={''}
          className="chats"
          dataSource={users.map((user: User, i: string) => {
            let date = null;
            let subtitle = '';
            if (!showSignInList && user.messages && user.messages.length) {
              let lastMessage = user.messages[user.messages.length - 1];
              date = new Date(lastMessage.timeStamp);
              subtitle = (lastMessage.position === 'right' ? 'You: ' : user.name + ': ') + lastMessage.text;
            }

            return {
              id: i,
              avatar: user.avatar,
              alt: user.alt,
              title: user.title,
              subtitle: user.subtitle,
              date: date,
              unread: user.unread,
              user: user
            };
          })}
          onClick={!showSignInList ? onChatClicked : onUserClicked}
        />
      ) : (
        <div className="text-center no-users">No users to show.</div>
      )}
    </div>
  );
};

export default UserList;
