import React, { useEffect, useState } from "react";
import { collection, addDoc, onSnapshot, serverTimestamp, query, orderBy } from "firebase/firestore";
import { db } from "./firebase";

const getChatId = (a, b) => [a, b].sort().join("__");

const ChatWindow = ({ currentUser, selectedUser }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (!selectedUser) return;
    const chatId = getChatId(currentUser, selectedUser);
    const q = query(
      collection(db, "chats", chatId, "messages"),
      orderBy("timestamp", "asc")
    );

    const unsub = onSnapshot(q, (snapshot) =>
      setMessages(snapshot.docs.map((doc) => doc.data()))
    );

    return () => unsub();
  }, [currentUser, selectedUser]);

  const sendMessage = async (e) => {
    e.preventDefault();
    const chatId = getChatId(currentUser, selectedUser);
    await addDoc(collection(db, "chats", chatId, "messages"), {
      text: input,
      sender: currentUser,
      timestamp: serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div style={{ width: "70%", padding: 10 }}>
      <h4>Chat with {selectedUser}</h4>
      <div style={{ height: "300px", overflowY: "auto", border: "1px solid #ddd", padding: 10 }}>
        {messages.map((msg, idx) => (
          <p key={idx} style={{ color: msg.sender === currentUser ? "green" : "black" }}>
            <strong>{msg.sender}:</strong> {msg.text}
          </p>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatWindow;
