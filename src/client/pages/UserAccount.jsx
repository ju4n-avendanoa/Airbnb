import { useContext } from "react";
import { UserContext } from "../UserContext";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/UserAccount.css";
import ProfilePage from "./ProfilePage";
import PlacesPage from "./PlacesPage";
import UserNavbar from "../components/UserNavbar";

function UserAccount() {
  const { user, ready } = useContext(UserContext);
  const { subpage } = useParams();
  const navigate = useNavigate();

  if (!ready) return "Loading....";

  if (ready && !user) {
    return navigate("/login");
  }

  return (
    <div>
      <UserNavbar />
      {subpage === "profile" && <ProfilePage />}
      {subpage === "places" && <PlacesPage />}
    </div>
  );
}

export default UserAccount;
