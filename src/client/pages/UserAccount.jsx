import { useContext } from "react";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";
import "../styles/UserAccount.css";
import ProfilePage from "./ProfilePage";
import UserNavbar from "../components/UserNavbar";

function UserAccount() {
  const { user, ready } = useContext(UserContext);

  const navigate = useNavigate();

  if (!ready) return "Loading....";

  if (ready && !user) {
    return navigate("/login");
  }

  return (
    <div>
      <UserNavbar />
      <ProfilePage />
    </div>
  );
}

export default UserAccount;
