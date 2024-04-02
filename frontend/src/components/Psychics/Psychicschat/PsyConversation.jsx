import React from 'react';
import { useSocketContext } from "../../../context/SocketContext";
import usepsyConversation from "../../../zustand/usePsyConversation";

const PsyConversation = ({ conversation, lastIdx, emoji }) => {
    const { selectedConversation, setSelectedConversation } = usepsyConversation();
    const { onlineUsers } = useSocketContext();

    const isSelected = selectedConversation?._id === conversation._id;

    // Check if both conversation ID and psychic ID are found in onlineUsers
    const isOnline = onlineUsers.includes(conversation._id) && onlineUsers.includes(selectedConversation._id);

    return (
        
                <a href="#" className={`list-group-item list-group-item-action border-0 ${isSelected ? "bg-orange" : ""}`}onClick={() => setSelectedConversation(conversation)}>
    <div className="badge bg-green float-right">5</div>


    <div className={`d-flex avatar ${isOnline ? "online" : ""}`}>
      <img src={conversation.profilePic} className="rounded-circle mr-1" alt="Vanessa Tucker" width={40} height={40} />
      <div className="flex-grow-1 ml-3">
      {conversation.username}
      
      {!lastIdx && <div className='divider my-0 py-0 h-1' />}
      </div>
    </div>

            {!lastIdx && <div className='divider my-0 py-0 h-1' />}
        </a>
    );
};
export default PsyConversation;
