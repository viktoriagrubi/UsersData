import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./UserDetails.module.css";

function UserDetails({ users }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = users.find((u) => u.id.toString() === id);

  if (!user) return <p>User not found.</p>;

  return (
    <div className={styles.userDetails}>
      <button className={styles.backButton} onClick={() => navigate("/")}>
        ← Back to list
      </button>

      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <img src={user.image} alt="User" className={styles.userImageLarge} />
      <ul>
        <li>Email: {user.email}</li>
        <li>Phone: {user.phone}</li>
        <li>Age: {user.age}</li>
        <li>Gender: {user.gender}</li>
        <li>Birth Date: {user.birthDate}</li>
        <li>Blood Group: {user.bloodGroup}</li>
        <li>Height: {user.height} cm</li>
        <li>Weight: {user.weight} kg</li>
        <li>Eye Color: {user.eyeColor}</li>
        <li>
          Hair: {user.hair.type}, {user.hair.color}
        </li>
        <li>City: {user.address.city}</li>
        <li>University: {user.university}</li>
        <li>Company: {user.company.name}</li>
        <li>Department: {user.company.department}</li>
        <li>Job Title: {user.company.title}</li>
      </ul>
    </div>
  );
}

export default UserDetails;
