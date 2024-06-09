import { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

export default function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room,
        username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };


      await socket.emit("send_message", messageData);
      console.log("Before", messageList)
      setMessageList((list) => [...list, messageData]);
      console.log("After", messageList)
      setCurrentMessage("");
    }
  };

  // useEffect(() => {
  //   socket.on("receive_message", (data) => {
  //     console.log("useEffect -> Before", messageList)
  //     console.log("data -> ", data)
  //     setMessageList((list) => [...list, data]);
  //     console.log("useEffect -> After", messageList)
  //   });
  // }, [socket]);

  useEffect(() => {
    const handleMessageReceive = (data) => {
      console.log("data -> ", data);
      setMessageList((prevList) => [...prevList, data]);
    };

    socket.on("receive_message", handleMessageReceive);

    // Clean up the event listener on component unmount or dependency change
    return () => {
      socket.off("receive_message", handleMessageReceive);
    };
  }, []);
  
  return (
    <>
      <div className="chat-window">
        <div className="chat-header">
          <p>Live Chat</p>
        </div>
        <div className="chat-body">
          <ScrollToBottom className="message-container">
            {messageList.map((messageContent) => {
              console.log("Message_List", messageList);
              //console.log(messageContent)
              return (
                <div
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
              );
            })}
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
          ></input>

          <button onClick={sendMessage}>&#9658;</button>
        </div>
      </div>
    </>
  );
}
