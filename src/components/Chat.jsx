import { useState } from "react";
import { socket } from "../services/socket";

function Chat({ messages, roomId, username }) {

  const [input, setInput] = useState("");

  const sendMessage = () => {

    if (!input.trim()) return;

    socket.emit("chat-message", {
      roomId,
      message: input,
      sender: username,
    });

    setInput("");
  };

  return (
    <div className="chat-container">

      <h3>Room Chat</h3>

      <div className="chat-messages">

        {messages.map((m, i) => (

          <p key={i}>
            <b>{m.sender}</b>
            <br />
            {m.message}
          </p>

        ))}

      </div>

      <div className="chat-input">

        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={sendMessage}>
          Send
        </button>

      </div>

    </div>
  );
}

export default Chat;