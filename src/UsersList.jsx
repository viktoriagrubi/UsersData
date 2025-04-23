import React from "react";
import { Link } from "react-router-dom";
import styles from "./UsersList.module.css";

function UsersList({ users, deleteUser }) {
  return (
    <div className={styles.usersContainer}>
      {users.map((user) => (
        <div key={user.id} className={styles.userCard}>
          <img src={user.image} className={styles.userImage} />
          <div className={styles.userInfo}>
            <Link to={`/user/${user.id}`}>
              <h2>
                {user.firstName} {user.lastName}
              </h2>
            </Link>
            <p>Birth Date: {user.birthDate}</p>
            <p>City: {user.address.city}</p>
          </div>
          <button
            className={styles.deleteButton}
            onClick={() => deleteUser(user.id)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default UsersList;
