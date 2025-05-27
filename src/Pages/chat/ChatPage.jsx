import React, { useEffect, useState } from 'react';
import ChatList from '../../Components/ChatList';
import ChatWindow from '../../Components/Chat';
import axios from 'axios';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { Navbar } from '../../Components/Navbar/Navbar';
import PgIndicator from '../../Components/pageIndicator/PgIndicator';
import { toast } from 'react-toastify';
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  orderBy,
} from 'firebase/firestore';
// import {
//   collection,
//   getDocs,
//   onSnapshot,
//   query,
//   orderBy,
// } from 'firebase/firestore';
import { db } from '../../firebase';
import './chat.css'
import FullPageLoader from '../../Components/Loader/FullLoader';

const ChatPage = ({ userId }) => {
  const [currentUser, setcurrentUser] = useState('');
  const [users, setusers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false)
  // Step 1: Get current user from backend
  useEffect(() => {
    const currentUserName = async () => {
      try {
        const res = await axios.post('https://electrobackend-dbup.onrender.com/user/name', { user: userId });
        const name = res.data.name;
        setcurrentUser(name);
        // console.log("✅ Current user:", name);
  
        // Fetch sellers from backend
        try {

          setLoading(true)
          const sellerRes = await axios.post('https://electrobackend-dbup.onrender.com/user/chatterList', { user: userId });
          console.log("🛍️ Sellers from backend:", sellerRes.data);

          setusers(sellerRes.data.sellers);
        } catch (sellerErr) {
          toast.error("Error getting sellers: " + sellerErr.message);
        }finally{
          setLoading(false)
        }
  
        // Now fetch chat users from Firebase after currentUser is set
        const fetchChats = async () => {
          // Step 1: Fetch all chat documents
          const chatsRef = collection(db, "chats");
          const chatsSnapshot = await getDocs(chatsRef);
          
          console.log(chatsSnapshot)
          // Step 2: Loop through each chat document  
          for (let chatDoc of chatsSnapshot.docs) {
            const chatId = chatDoc.id; // Get the ID of the chat document
        
            // Step 3: Fetch messages from the "messages" subcollection of each chat
            const messagesRef = collection(db, "chats", chatId, "messages");
            const messagesQuery = query(messagesRef, orderBy("timestamp", "asc"));
            const messagesSnapshot = await getDocs(messagesQuery);
            
            // Step 4: Process the messages for this chat
            const messages = messagesSnapshot.docs.map(doc => doc.data());
            console.log(`Messages for chat ${chatId}:`, messages);
          }
        };
        
  
        fetchChats();
      } catch (err) {
        toast.error("Error getting user name: " + err.message);
      }
    };
  
    currentUserName();
  }, [userId]);
  

  const [collapseNm, setcollapseNm] = useState('chatPG')


  const changeVisible=(element)=>{
    setcollapseNm(element)
  }
  return (
    <div>
      <Navbar />
      <PgIndicator pgName={'Chat'} />
      {loading && <FullPageLoader msg={'Getting Your Chat'}/>}
      {users.length > 0 ? (
        <div style={{ display: 'flex', height: '100vh' }} className='chat-page'>
          <div className={`chat-list col-md-4 col-12 border  ${collapseNm=="chatLT"?"collapse":null}`} onClick={()=>{
            changeVisible('chatLT')
          }}>
            <ChatList users={users} onSelectUser={setSelectedUser} userId={userId}/>
          </div>
          {selectedUser ? (
            <div className={`chat-window col-md-8 col-12 ${collapseNm=="chatPG"?"collapse":null}`}>
              <ChatWindow currentUser={userId} selectedUser={selectedUser} onSelectEM={setcollapseNm}/>
            </div>
          ) : (
            <div style={{ padding: 20 }}>Select a chat to start messaging</div>
          )}
        </div>
      ) : (
        <div>
          <div className="mx-auto p-4 shadow alert alert-success col-md-5 col-11 mt-5">
            <h6 className="text-center">
              You can't chat with any seller for now. Start adding product to your cart
            </h6>
            <div className="d-flex justify-content-center mt-3 p-2 bg-success mx-auto col-md-2 rounded text-white">
              <ArrowRight size={25} />
              <ShoppingCart size={25} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatPage;
