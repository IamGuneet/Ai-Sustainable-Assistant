import { useState } from 'react'
import './ai.css'
import { BardAPI } from 'bard-api-node';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const API_KEY = "fAg5fLNjcz2GfwzBywmo6DdvepuRQnQMQWeA-jzwr3Nb9yuzD8RRj3tqfXiv1JOuiJwwDA.";

function Ai() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm हरितदीपः ! Ask me anything related to Sustainability!",
      sentTime: "just now",
      sender: "हरितदीपः"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];
    
    setMessages(newMessages);

    
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) { // messages is an array of messages
    
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message}
    });

}

async function testAssistant() {
  try {
    const assistant = new BardAPI();

    await assistant.setSession('__Secure-1PSID', API_KEY); // or '__Secure-3PSID'
    // ...
    const response = await assistant.getBardResponse('Hello, how are you?');
    console.log('Bard:', response);
  } catch (error) {
    console.error('Error:', error);
  }
}
testAssistant()

    return (
    <div className="App">
     <h2 className="mt-4 mb-4">Smart Assistant</h2>
    <div className='chatBox'>

      <div style={{ position:"relative", height: "550px", width: "700px"  }}>
        <MainContainer>
          <ChatContainer>       
            <MessageList 
              scrollBehavior="smooth" 
              typingIndicator={isTyping ? <TypingIndicator content="हरितदीपः is typing" /> : null}
            >
              {messages.map((message, i) => {
                {/* {testAssistant} */}
                return <Message key={i} model={message} />
              })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />        
          </ChatContainer>
        </MainContainer>
    </div>
      </div>
      <button className="btn btn-primary b" >
           <a href='/logged/success'>
            DashBoard
           </a>
          </button>
    </div>
  )
}


export default Ai