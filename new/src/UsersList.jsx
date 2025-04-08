import React from "react";
import "./UsersList.css";

function UsersList({ users, deleteUser }) {
  return (
    <div className="users-container">
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <img src={user.image} className="user-image" />
          <div className="user-info">
            <h2>
              {user.firstName} {user.lastName}
            </h2>
            <p>Birth Date: {user.birthDate}</p>
            <p>City: {user.address.city}</p>
          </div>
          <button className="delete-button" onClick={() => deleteUser(user.id)}>
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default UsersList;
