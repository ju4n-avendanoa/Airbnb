import { useContext } from "react";
import { UserContext } from "../UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  async function logout() {
    await axios.post("/logout");
    setUser(null);
    return navigate("/");
  }
  return (
    <div className="flex flex-col items-center max-w-md mx-auto p-6">
      <p>
        Logged in as {user.name} ({user.email})
      </p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default ProfilePage;
