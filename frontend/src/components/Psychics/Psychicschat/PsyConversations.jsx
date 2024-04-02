import useGetPsyConversations from "../../../hooks/useGetPsyConversations";
import { getRandomEmoji } from "../../../utils/emojis";
import PsyConversation from "./PsyConversation";

const PsyConversations = () => {
	const { loading, conversations } = useGetPsyConversations();
	return (
		
		<div className='py-2 flex flex-col overflow-auto'>
			{conversations.map((conversation, idx) => (
				<PsyConversation
					key={conversation._id}
					conversation={conversation}

					emoji={getRandomEmoji()}
					lastIdx={idx === conversations.length - 1}
					 
				/>
				
			
				
			))}

			{loading ? <span className='loading loading-spinner mx-auto'></span> : null}
			
		</div>
	);
};

export default PsyConversations;
