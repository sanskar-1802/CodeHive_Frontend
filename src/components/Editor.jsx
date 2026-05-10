import Editor from "@monaco-editor/react";
import { socket } from "../services/socket";

function EditorComponent({ code, setCode, roomId }) {

  const handleChange = (value = "") => {

    setCode(value);

    socket.emit("code-change", {
      roomId,
      code: value,
    });
  };

  return (
    <div
      style={{
        borderRadius: "18px",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <Editor
        height="65vh"
        theme="vs-dark"
        language="javascript"
        value={code}
        onChange={handleChange}

        options={{
          fontSize: 15,
          minimap: { enabled: false },
          smoothScrolling: true,
          padding: {
            top: 18,
          },
          fontFamily: "Fira Code",
          cursorSmoothCaretAnimation: "on",
        }}
      />
    </div>
  );
}

export default EditorComponent;