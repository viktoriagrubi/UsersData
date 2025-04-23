import UserDetails from "./UserDetails";
import { Routes, Route } from "react-router-dom";
import UsersPage from "./Page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UsersPage />} />
      <Route path="/user/:id" element={<UserDetails />} />
    </Routes>
  );
}

export default App;
