function Sidebar({ users }) {

  return (
    <div className="sidebar">

      <h3>👥 Active Users</h3>

      {users.length === 0 ? (
        <p>No users connected</p>
      ) : (
        users.map((u, i) => (
          <p key={i}>
            🟢 {u.username}
          </p>
        ))
      )}

    </div>
  );
}

export default Sidebar;