import { useState, useEffect } from "react";
import "./App.css";
import UsersList from "./UsersList";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

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

  return (
    <div>
      <h1>Users List</h1>
      <UsersList users={data} />
    </div>
  );
}

export default App;
