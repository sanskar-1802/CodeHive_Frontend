# ⚡ CodeHive Frontend

> A futuristic real-time collaborative code editor frontend inspired by VS Code and Replit.

CodeHive allows multiple developers to collaborate on code in real-time with live synchronization, room-based sessions, integrated chat, and code execution support.

---

# 🚀 Features

## 🔐 Authentication System

- User Signup
- OTP Verification via Email
- Secure Login using JWT
- Persistent Authentication using localStorage

---

## 🏠 Home Dashboard

- Create coding rooms
- Join existing rooms
- View previously created rooms
- Responsive futuristic UI
- Room management system

---

## 👨‍💻 Real-Time Code Collaboration

- Monaco Editor integration
- Live code synchronization using Socket.io
- Multi-user editing support
- Real-time updates across devices

---

## 💬 Live Chat System

- Real-time room chat
- Instant messaging updates
- Modern chat UI

---

## ⚡ Code Execution

Supports multiple languages:

- Python
- C++
- C
- Java

Code execution is powered by Judge0 API through backend integration.

---

## 👥 Room Lobby

- Real-time participant updates
- Live user presence
- Copy Room ID feature
- Join room workflow

---

# 🛠️ Tech Stack

## Frontend Technologies

- React.js
- React Router DOM
- Axios
- Socket.io-client
- Monaco Editor
- CSS3
- Vite

---

# 📁 Folder Structure

```bash
client/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── Chat.jsx
│   │   ├── Editor.jsx
│   │   ├── Navbar.jsx
│   │   └── Sidebar.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Lobby.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Verify.jsx
│   │   └── Room.jsx
│   │
│   ├── services/
│   │   ├── api.js
│   │   └── socket.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

# ⚙️ Installation Guide

## 1️⃣ Clone Repository

```bash
git clone <frontend-repo-url>
```

---

## 2️⃣ Navigate to Frontend Directory

```bash
cd client
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

# ▶️ Run Frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 🔗 Backend Connection

Frontend connects to backend running on:

```bash
http://localhost:5000
```

---

# 🔌 Socket Events Used

## Room Events

```bash
join-room
user-joined
user-left
```

---

## Code Events

```bash
code-change
code-update
```

---

## Chat Events

```bash
chat-message
chat-update
```

---

# 🌐 API Endpoints Used

## Authentication APIs

```bash
POST /api/auth/signup
POST /api/auth/verify
POST /api/auth/login
```

---

## Room APIs

```bash
POST /api/rooms/create
POST /api/rooms/join
GET  /api/rooms/:roomId
GET  /api/rooms/user
```

---

## Code APIs

```bash
POST /api/code/execute
```

---

# 🎨 UI Design

The frontend uses a premium futuristic glassmorphism UI inspired by:

- VS Code
- Replit

UI Features:

- Dark modern theme
- Responsive layout
- Glassmorphism cards
- Smooth animations
- Developer-focused interface
- Terminal-style output console

---

# 🧠 Application Workflow

## Authentication Flow

```text
Signup → OTP Verification → Login → Access Dashboard
```

---

## Collaboration Workflow

```text
Create Room → Join Lobby → Enter Room → Collaborate in Real-Time
```

---

# 🔥 Future Improvements

- Voice Chat
- Video Collaboration
- AI Coding Assistant
- File Explorer
- Cursor Visualization
- Theme Switching
- Docker-based Execution
- Code Saving History

---

# 👨‍💻 Developer

### Sanskar Mishra

---

# 📜 License

This project is created for educational, portfolio, and learning purposes.
