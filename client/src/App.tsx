import { useState } from "react";
import "./App.css";
import io from "socket.io-client";
import Chat from "./components/Chat";

const socket = io("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const Joinroom = () => {
    if (username !== "" && room !== "") {
      socket.emit("Join_room", room);
      setShowChat(true)
    }
  };

  return (
    <>
    <div className="App">
      {!showChat ? (
      <div className="joinChatContainer">
      <h3>Join a chat</h3>
      <input
        type="text"
        placeholder="Akshay"
        onChange={(e) => setUsername(e.target.value)}
      ></input>

      <input
        type="text"
        placeholder="123akshay"
        onChange={(e) => setRoom(e.target.value)}
      ></input>

      <button onClick={Joinroom}>Join A Room</button>

      </div>)
      :(
      <Chat socket={socket} username={username} room={room} />)}
      </div>
    </>
  );
}

export default App;
