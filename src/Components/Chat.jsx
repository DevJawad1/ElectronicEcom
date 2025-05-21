import React, { useEffect, useState } from "react";
import { collection, addDoc, onSnapshot, serverTimestamp, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import axios from 'axios'
import { toast } from "react-toastify";
const getChatId = (a, b) => [a, b].sort().join("__");

const ChatWindow = ({ selectedUser, currentUser }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [activeChatId, setActiveChatId] = useState(null);

  const primaryChatId = getChatId(currentUser, selectedUser);
  const fallbackChatId = getChatId(selectedUser, currentUser);
  useEffect(() => {
    if (!selectedUser || !currentUser) return;
  
  
    const q1 = query(
      collection(db, "chats", primaryChatId, "messages"),
      orderBy("timestamp", "asc")
    );
  
    let unsub1, unsub2;
  
    unsub1 = onSnapshot(q1, (snapshot) => {
      if (snapshot.empty) {
        // Try fallback chat ID
        const q2 = query(
          collection(db, "chats", fallbackChatId, "messages"),
          orderBy("timestamp", "asc")
        );
  
        unsub2 = onSnapshot(q2, (fallbackSnapshot) => {
          if (fallbackSnapshot.empty) {
            setMessages([]); // No chat exists in either direction
            setActiveChatId(null);
          } else {
            setMessages(fallbackSnapshot.docs.map((doc) => doc.data()));
            setActiveChatId(fallbackChatId);
            console.log('unsub2')
          }
        });
      } else {
        setMessages(snapshot.docs.map((doc) => doc.data()));
        setActiveChatId(primaryChatId);
        console.log('unsub1')
      }
    });
  
    return () => {
      if (unsub1) unsub1();
      if (unsub2) unsub2();
    };
  }, [currentUser, selectedUser]);
  
  

  const [businessNames, setBusinessNames] = useState();

  // Fetch all business names when `users` change
  useEffect(() => {
    const fetchBusinessNames = async () => {
      const names = {};
        try {
          const res = await axios.post("http://localhost:2500/user/storeAddress", { 
            owner: selectedUser,
          });
          setBusinessNames(res.data.vendor.businessName!=="empty"?res.data.vendor.businessName.toLowerCase():res.data.vendor?.fullName.toLowerCase())
        } catch (error) {
          console.log("Error fetching business name for",  error);
          setBusinessNames("Loading")
        }
    };

    fetchBusinessNames()

  }, [selectedUser]);

  const sendMessage = async (e) => {
    const chattersSaver = await axios.post('http://localhost:2500/user/chatter', {chatter1:currentUser, chatter2:selectedUser})
    try {
      if(chattersSaver.data.save){

        e.preventDefault();
        if (!input.trim()) return;  // Prevent empty messages
    
        const chatId = getChatId(currentUser, selectedUser);
        await addDoc(collection(db, "chats", activeChatId?activeChatId:primaryChatId, "messages"), {
          text: input,
          sender: currentUser,  // Use a username or userId here
          receiver: selectedUser,
          timestamp: serverTimestamp(),
        });
        setInput("");
        toast.success("Message sent")
      }else{
        toast.error('Error saving chat. Send message again')
      }
    } catch (error) {
      console.log(error)
    }

  };


  const senderstyle={
  }
  const recieverStyle={
    
  }
  const senderClass='rounded mt-2 p-2 text-white d-flex justify-content-end'
  const recieverClass='rounded mt-2 d-flex'

  return (
    <div style={{ width: "70%", padding: 10 }}>
      <h4>Chat with  <span style={{textTransform:"capitalize"}}>{businessNames}</span></h4>
      <div style={{ height: "550px", overflowY: "auto", border: "1px solid #ddd", padding: 10 }}>
        <div>
          
        </div>
        {messages.length>0?
          messages.map((msg, idx) => (
            <div key={idx} style={msg.sender === currentUser ? senderstyle: recieverStyle} className={msg.sender=== currentUser?senderClass:recieverClass}>
              <div style={{backgroundColor: msg.sender=== currentUser?"#0DC029":"#F8F9FA"}} className={`p-2 rounded ${msg.sender!==currentUser?"border":null}`}>
                {msg.text}
                {/* <span>{message.timestamp.toDate().toLocaleString()}</span> */}
              </div>
            </div>
          ))
          :
          <div>
            <h6>Start chatting </h6>
          </div>
      
      }
      </div>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
