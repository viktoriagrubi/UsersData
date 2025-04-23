import { useState, useEffect } from "react";
import styles from "./App.module.css";
import UsersList from "./UsersList";
import AddUser from "./AddUser";
import UserDetails from "./UserDetails";
import { Routes, Route } from "react-router-dom";

function UsersPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchUsersData = async () => {
      const response = await fetch("https://dummyjson.com/users");
      const result = await response.json();
      setData(result.users);
      setLoading(false);
    };

    fetchUsersData();
  }, []);

  if (loading) return <div>Loading...</div>;

  const filteredUsers = data.filter(
    (user) =>
      user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addUser = (newUser) => {
    const newUserWithId = {
      ...newUser,
      id: Date.now(),
      address: { city: newUser.city },
    };
    setData([...data, newUserWithId]);
  };

  const deleteUser = (id) => {
    setData(data.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h1 className={styles.title}>Users List</h1>

      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search users..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <AddUser addUser={addUser} />
      <UsersList users={filteredUsers} deleteUser={deleteUser} />
    </div>
  );
}

export default UsersPage;
