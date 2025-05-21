import axios from "axios";
import React, { useEffect, useState } from "react";

const ChatList = ({ users, onSelectUser }) => {
  const [businessNames, setBusinessNames] = useState({});

  // Fetch all business names when `users` change
  useEffect(() => {
    const fetchBusinessNames = async () => {
      const names = {};
      for (const user of users) {
        try {
          const res = await axios.post("http://localhost:2500/user/storeAddress", { 
            owner: user,
          });
          const vendor = res.data.vendor
          const nameToUse =
          vendor?.businessName && vendor.businessName.toLowerCase() !== "empty"
            ? vendor.businessName.toLowerCase()
            : vendor?.fullName?.toLowerCase() || "unknown";

          names[user] = nameToUse
        } catch (error) {
          console.log("Error fetching business name for", user, error);
          names[user] = "Error";
        }
      }
      setBusinessNames(names);
    };

    if (users && users.length > 0) {
      fetchBusinessNames();
    }
  }, [users]);

  return (
    <div style={{ width: "30%", borderRight: "1px solid #ccc", padding: 10 }}>
      <h3>Chats</h3>
      {users.map((user) => (
        <div
          key={user}
          onClick={() => onSelectUser(user)}
          style={{ cursor: "pointer", padding: 8 }}
          className='d-flex gap-3 bg-light shadow-sm rounded p-3 align-items-center'
        >
          <div className="chatter-profile d-flex align-items-center justify-content-center text-white">
            <h6 style={{textTransform:"capitalize"}} className="fs-3 pt-1">{businessNames[user] && businessNames[user].slice(0,1)}</h6>
          </div>
          <h6 style={{textTransform:"capitalize"}} className="fs-5 pt-2">{businessNames[user] || "Loading..."}</h6>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
