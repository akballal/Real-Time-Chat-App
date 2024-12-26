import { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

// Define the type for message objects
type Message = {
  room: string;
  username: string;
  message: string;
  time: string;
};

type ChatProps = {
  socket: any; // Use proper typing for the socket if you have it, e.g., `Socket` from "socket.io-client"
  username: string;
  room: string;
};

export default function Chat({ socket, username, room }: ChatProps) {
  const [currentMessage, setCurrentMessage] = useState<string>(""); // Define the type as string
  const [messageList, setMessageList] = useState<Message[]>([]); // Define the type as an array of `Message`

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData: Message = {
        room,
        username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      console.log("Before", messageList);
      setMessageList((list) => [...list, messageData]); // Append the new message to the list
      console.log("After", messageList);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    const handleMessageReceive = (data: Message) => {
      console.log("data -> ", data);
      setMessageList((prevList) => [...prevList, data]); // Append the received message to the list
    };

    socket.on("receive_message", handleMessageReceive);

    // Clean up the event listener on component unmount
    return () => {
      socket.off("receive_message", handleMessageReceive);
    };
  }, [socket]); // Include socket as a dependency

  return (
    <>
      <div className="chat-window">
        <div className="chat-header">
          <p>Live Chat</p>
        </div>
        <div className="chat-body">
          <ScrollToBottom className="message-container">
            {messageList.map((messageContent, index) => (
              <div
                key={index} // Use a unique key for list items
                className="message"
                id={username === messageContent.username ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.username}</p>
                  </div>
                </div>
              </div>
            ))}
          </ScrollToBottom>
        </div>
        <div className="chat-footer">
          <input
            type="text"
            value={currentMessage}
            placeholder="hey.."
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyPress={(event) => {
              event.key === "Enter" && sendMessage();
            }}
          />
          <button onClick={sendMessage}>&#9658;</button>
        </div>
      </div>
    </>
  );
}
