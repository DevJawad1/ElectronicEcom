import React from "react";

const ChatList = ({ users, onSelectUser }) => {
  return (
    <div style={{ width: "30%", borderRight: "1px solid #ccc", padding: 10 }}>
      <h3>Chats</h3>
      {users.map((user) => (
        <div
          key={user}
          onClick={() => onSelectUser(user)}
          style={{ cursor: "pointer", padding: 8 }}
        >
          {user}
        </div>
      ))}
    </div>
  );
};

export default ChatList;
