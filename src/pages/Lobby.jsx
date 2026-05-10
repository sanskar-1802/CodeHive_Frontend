import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { socket } from "../services/socket";

function Lobby() {

  const { roomId } = useParams();
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  const username = localStorage.getItem("username");

  useEffect(() => {

    socket.emit("join-room", { roomId, username });

    socket.on("user-joined", (usersList) => {
      setUsers(usersList);
    });

    return () => {
      socket.off("user-joined");
    };

  }, [roomId]);

  const copyRoomId = () => {
    navigator.clipboard.writeText(roomId);
    alert("Room ID copied!");
  };

  return (
    <div className="lobby-container">

      <h1>Room Lobby</h1>

      <div className="room-info">

        <p>Room ID</p>

        <div className="room-id-box">
          <span>{roomId}</span>

          <button onClick={copyRoomId}>
            Copy
          </button>
        </div>
      </div>

      <div className="users-list">

        <h3>Participants</h3>

        {users.map((u, i) => (
          <p key={i}>🟢 {u.username}</p>
        ))}

      </div>

      <button
        className="join-room-btn"
        onClick={() => navigate(`/room/${roomId}`)}
      >
        Enter Coding Room
      </button>

    </div>
  );
}

export default Lobby;