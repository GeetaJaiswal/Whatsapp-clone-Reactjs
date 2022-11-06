import React, { useState, useEffect } from 'react';
import SidebarChat from './SidebarChat';
import './Sidebar.css';
import { Avatar, IconButton } from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import db from './firebase';
import { useStateValue } from './StateProvider';

function Sidebar() {

  const [rooms, setRooms] = useState([]);
  const [{user},dispatch] = useStateValue();

  useEffect(() => {
    //rooms is a collection name
    //snapshot means it changes itself according to the updates
    //docs = list of elements
    const unsubscribe = db.collection('rooms').onSnapshot(snapshot => (
        setRooms(snapshot.docs.map(doc => (
            {
                id: doc.id,
                data: doc.data()
            }
        )
        ))
    ));

    return () => {
        unsubscribe();
    }
},[]); 


  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Avatar src={user?.photoURL}/>
        <div className="sidebar-header-rightHeader">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar-search">
        <div className="sidebar-searchContainer">
          <SearchOutlined />
          <input type="text" placeholder='Search or start new chat' />
        </div>
      </div>
      <div className="sidebar-chats">
        <SidebarChat addNewChat/>
        {rooms.map(room => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar