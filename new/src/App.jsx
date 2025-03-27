import { useState, useEffect } from "react";
import "./App.css";
import UsersList from "./UsersList";

function App() {
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

  return (
    <div>
      <h1>Users List</h1>
      <input
        type="text"
        placeholder="Search users..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <UsersList users={filteredUsers} />
    </div>
  );
}

export default App;
