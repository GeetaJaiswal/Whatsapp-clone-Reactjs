import React, { useState, useEffect } from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import { useParams } from 'react-router-dom';
import db from './firebase';
import { useStateValue } from './StateProvider';
import firebase from 'firebase/compat/app';

function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);
    const [{user}, dispatch] = useStateValue();

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
                setRoomName(snapshot.data().name);
            });


            db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => (
                setMessages(snapshot.docs.map(doc => doc.data()))
            ))
        }
    }, [roomId]);


    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
        // console.log(user);
    }, [roomId]);

    const sendMessage = (e) => {
        e.preventDefault();
        // console.log("you type>>", input);

        db.collection('rooms').doc(roomId).collection('messages').add({
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
        })

        setInput("");
    }

    return (
        <>
            <div className="chat">
                <div className="chat-header">
                    <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                    <div className="chat-headerInfo">
                        <h3>{roomName}</h3>
                        <p>Last seen {" "}
                        {new Date(
                            messages[messages.length - 1]?.
                            timestamp?.toDate()
                        ).toUTCString()}</p>
                    </div>
                    <div className="chat-headerRight">
                        <IconButton>
                            <SearchOutlinedIcon />
                        </IconButton>
                        <IconButton>
                            <AttachFileOutlinedIcon />
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    </div>
                </div>
                <div className="chat-body">
                    {messages.map(message => (
                            <p className={`chat-message ${message.name === user.displayName && 'chat-receiver'}`}>
                                <span className="chat-name">{message.name}</span>
                                {message.message}
                                <span className="chat-timestamp">{new Date(message.timestamp?.toDate()).toUTCString()}</span>
                            </p>
                        ))}
                </div>
                <div className="chat-footer">
                    <IconButton>
                        <InsertEmoticonIcon />
                    </IconButton>
                    <form>
                        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message" />
                        <button onClick={sendMessage} type="submit">Send a message</button>
                    </form>
                    <IconButton>
                        <MicIcon />
                    </IconButton>
                </div>
            </div>
        </>
    )
}

export default Chat