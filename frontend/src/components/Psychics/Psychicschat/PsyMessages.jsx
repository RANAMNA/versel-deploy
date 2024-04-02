import { useEffect, useRef } from "react";
import usePsyGetMessages from "../../../hooks/usePsyGetMessages";
import MessageSkeleton from "../../../skeletons/MessageSkeleton"
import PsyMessage from "./PsyMessage";
import useListenMessages from "../../../hooks/useListenMessages";

const PsyMessages = () => {
	const { messages, loading } = usePsyGetMessages();
	useListenMessages();
	const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

	return (
		<div className="position-relative">

		<div className="chat-message-left pb-4">
			{!loading &&
					messages.length > 0 &&
					messages.map((message) => (
						<div key={message._id} ref={lastMessageRef}>
							<PsyMessage message={message} />
							
						
						</div>
					))}
		
		{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
				{!loading && messages.length === 0 && (
					<p className='text-center text-white'>Send a message to start the conversation</p>
				)}
	  </div>
	  </div>
	);
};
export default PsyMessages;
