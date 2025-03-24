import React from "react";
import "./UsersList.css";

function UsersList({ users }) {
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
        </div>
      ))}
    </div>
  );
}

export default UsersList;
