import { useAuthContext } from "../../context/AuthContext"
import { extractTime } from "../../utils/extractTime"
import useConversation from "../../zustand/useConversation"
const Message = ({message}) => {
  const {authUser}=useAuthContext()
  const { selectedConversation } = useConversation();
 const fromMe=message.senderId===authUser._id   
 const chartClassName=fromMe?'chat-end' :'chat-start'
 const profilePic=fromMe? authUser.profilePic:selectedConversation?.profilePic
 const bubbleBgColor=fromMe? 'bg-blue-500':""
const formattedTime=extractTime(message.createdAt)

 return(
      <div className={`chat ${chartClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt='Tailwind CSS chat bubble component'  src={profilePic} />
        </div>
      </div>
      <div className="chat-content">
        <div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>{message.message}</div>
        <div className="chat-footer opacity-50 text-xs text-purple-300 flex justify-end">
          <span>{formattedTime}</span>
        </div>
      </div>
    </div>
    
    )
  }
  
  export default Message