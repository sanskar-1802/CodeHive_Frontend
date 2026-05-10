import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Home() {
  const [roomId, setRoomId] = useState("");
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  const createRoom = async () => {
    try {
      const res = await API.post("/rooms/create", {
        username: localStorage.getItem("username"),
      });

      navigate(`/room/${res.data.roomId}/lobby`);
    } catch {
      alert("Error creating room");
    }
  };

  useEffect(() => {
    const username = localStorage.getItem("username");

    API.get(`/rooms/user?username=${username}`)
      .then((res) => setRooms(res.data))
      .catch(() => console.log("Error fetching rooms"));
  }, []);

  return (
    <div className="home-page">
      <Navbar />

      <div className="home-container">

        <h1 className="home-title">
          Code Together <br />
          In Real-Time
        </h1>

        <p className="home-subtitle">
          Collaborative coding platform with live sync,
          chat, and multi-language execution.
        </p>

        <button className="create-btn" onClick={createRoom}>
          🚀 Create New Room
        </button>

        <div className="join-section">
          <input
            type="text"
            placeholder="Enter Room ID..."
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />

          <button
            onClick={() => navigate(`/room/${roomId}/lobby`)}
          >
            Join Room
          </button>
        </div>

        <div className="rooms-list">

          <h3>Your Rooms</h3>

          {rooms.length === 0 ? (
            <p style={{ color: "#8b949e" }}>
              No rooms created yet.
            </p>
          ) : (
            rooms.map((room) => (
              <div key={room.roomId} className="room-card">

                <div>
                  <h4>{room.roomId}</h4>
                  <p>
                    Created by: {room.host}
                  </p>
                </div>

                <button
                  onClick={() =>
                    navigate(`/room/${room.roomId}/lobby`)
                  }
                >
                  Open
                </button>

              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;