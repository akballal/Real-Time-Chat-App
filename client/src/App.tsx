import { useState } from "react";
import "./App.css";
import io from "socket.io-client";
import Chat from "./components/Chat";

const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';
// Establish the socket connection
const socket = io(backendUrl);

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  // Handle room joining
  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("Join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h2>Welcome to Chat Room</h2>
          <p>Join a room to start chatting with friends!</p>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter room ID"
            onChange={(e) => setRoom(e.target.value)}
          />
          <button onClick={joinRoom}>Join Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;
