import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { socket } from "../services/socket";
import API from "../services/api";

import EditorComponent from "../components/Editor";
import Chat from "../components/Chat";

function Room() {

  const { roomId } = useParams();

  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [language, setLanguage] = useState("71");

  const username = localStorage.getItem("username");

  useEffect(() => {

    socket.emit("join-room", { roomId, username });

    socket.on("user-joined", setUsers);

    socket.on("code-update", (newCode) => {
      setCode(newCode);
    });

    socket.on("chat-update", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("user-joined");
      socket.off("code-update");
      socket.off("chat-update");
    };

  }, [roomId]);

  const runCode = async () => {

    try {

      const res = await API.post("/code/execute", {
        code,
        language,
      });

      const result =
        res.data.stdout ||
        res.data.stderr ||
        res.data.compile_output ||
        "No output";

      setOutput(result);

    } catch {
      setOutput("Error running code");
    }
  };

  return (
    <div className="room-container">

      {/* SIDEBAR */}

      <div className="sidebar">

        <h3>Active Users</h3>

        {users.map((u, i) => (
          <p key={i}>🟢 {u.username}</p>
        ))}

      </div>

      {/* EDITOR */}

      <div className="editor-section">

        <div className="editor-header">

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="71">Python</option>
            <option value="54">C++</option>
            <option value="50">C</option>
            <option value="62">Java</option>
          </select>

          <button onClick={runCode}>
            ▶ Run Code
          </button>

        </div>

        <EditorComponent
          code={code}
          setCode={setCode}
          roomId={roomId}
        />

        <div className="output-box">

          <p>Terminal Output</p>

          <pre>{output}</pre>

        </div>

      </div>

      {/* CHAT */}

      <Chat
        messages={messages}
        roomId={roomId}
        username={username}
      />

    </div>
  );
}

export default Room;