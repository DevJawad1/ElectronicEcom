import axios from "axios";
import React, { useEffect, useState } from "react";

const ChatList = ({ users, onSelectUser, userId }) => {
  const [businessNames, setBusinessNames] = useState({});
  const [purp, setpurp] = useState({})
  
  // Fetch all business names when `users` change

  useEffect(()=>{
    const autoChatter = localStorage.getItem("autoChatter")
    if(autoChatter){
      onSelectUser(autoChatter)
    }
  },[])
  useEffect(() => {
    const fetchBusinessNames = async () => {
      const names = {};
      for (const user of users) {
        try {
          const res = await axios.post("https://electrobackend-dbup.onrender.com/user/storeAddress", { 
            owner: user.sellerId,
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

        const getPurpose=async()=>{
          const purpose={}
          for(const user of users){
            try {
              const res= await axios.post("https://electrobackend-dbup.onrender.com/user/purpose", {
                user:userId,
                purpose:user.purpose
              })
              const prp = res.data.message
              purpose[user]=prp
            } catch (error) {
              console.log("Error fetching purpose")
              purpose[user]= "Error fetching purpose"
            }
          }
          setpurp(purpose)
        }


    if (users && users.length > 0) {
      fetchBusinessNames();
      getPurpose()
    }

    
  }, [users]);


  return (
    <div style={{ borderRight: "1px solid #ccc", padding: 10 }}>
      <h3>Chats</h3>
      {users.map((user) => (
        <div
          key={user}
          onClick={() => onSelectUser(user.sellerId)}
          style={{ cursor: "pointer", padding: 8 }}
          className='d-flex bg-light shadow-sm rounded p-1 px-2'
        >
          <div className="p-1">
            <div className="chatter-profile d-flex align-items-center justify-content-center text-white">
              <h6 style={{textTransform:"capitalize"}} className="fs-4 pt-1">{businessNames[user] && businessNames[user].slice(0,1)}</h6>
            </div>
          </div>
          <div className="px-2 
          ">
            <h6 style={{textTransform:"capitalize", fontSize:"15px"}} className="">{businessNames[user] || "Loading..."}</h6>
            {purp[user]?
            <span className="text-secondary fw-semibold" style={{fontSize:"13px"}}>{purp[user]}</span>:
            <span className="text-secondary fw-semibold" style={{fontSize:"13px"}}>
              Unknow Purpose
            </span>
            }
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
