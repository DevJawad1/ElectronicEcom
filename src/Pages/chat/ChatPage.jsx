import React from 'react'
import ChatList from '../../Components/ChatList'
import ChatWindow from '../../Components/Chat'

const ChatPage = () => {

    const currentUser = localStorage.getItem("chatUsername") || "jawad123";
    const [selectedUser, setSelectedUser] = useState(null);
  
    const users = ["maryam007", "daniel_dev", "kingsley100"]; // Mock list – pull from DB if needed
  
    return (
      <div style={{ display: "flex", height: "100vh" }}>
        <ChatList users={users.filter((u) => u !== currentUser)} onSelectUser={setSelectedUser} />
        {selectedUser ? (
          <ChatWindow currentUser={currentUser} selectedUser={selectedUser} />
        ) : (
          <div style={{ padding: 20 }}>Select a chat to start messaging</div>
        )}
      </div>
    );
  
}

export default ChatPage