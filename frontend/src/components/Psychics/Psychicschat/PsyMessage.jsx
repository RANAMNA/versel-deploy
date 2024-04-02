import { PsyuseAuthContext } from "../../../context/PsyAuthContext";
import { extractTime } from "../../../utils/extractTime";
import usePsyConversation from "../../../zustand/usePsyConversation";

const PsyMessage = ({ message }) => {
	const { authPsychics } = PsyuseAuthContext();
	const { selectedConversation } = usePsyConversation();
	const fromMe = message.senderId === authPsychics._id;
	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authPsychics.profilePic : selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";

	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img  src={profilePic} />
				</div>
			</div>
			{/* <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div> */}

			<div className={`flex-shrink-1 bg-light rounded py-2 px-3 ml-3 ${bubbleBgColor} ${shakeClass}`}>
                  
                  {message.message}
                </div>

			
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
		</div>  
	);
};
export default PsyMessage;
