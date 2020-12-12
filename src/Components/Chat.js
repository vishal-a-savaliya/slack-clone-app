import React, { useState, useEffect } from 'react'
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlineIcon from "@material-ui/icons/InfoOutlined";
import db from '../Firebase';
import Message from './Message';

function Chat() {

    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMassages, setRoomMassages] = useState([]);

    useEffect(() => {

        if (roomId) {
            db.collection('rooms')
                .doc(roomId)
                .onSnapshot((snapshot) => setRoomDetails(snapshot.data()))
        }

        db.collection('rooms')
            .doc(roomId)
            .collection('massages')
            .orderBy('timestamp', 'asc')
            .onSnapshot(snapshot =>
                setRoomMassages(snapshot.docs.map(doc => doc.data()))
            )
    }, [roomId]);

    // console.log(roomDetails);
    // console.log("MSSEGES >>>>",roomMassages);

    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong># {roomDetails?.name}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p><InfoOutlineIcon /> Details</p>
                </div>
            </div>

            <div className="chat__messages">
                {roomMassages.map(({message, timestamp, user, userimage}) => (
                    <Message 
                    message={message} 
                    timestamp ={ timestamp } 
                    user = {user} 
                    userImage={userimage} />
                ))}
            </div>

        </div>
    )
}

export default Chat; 
