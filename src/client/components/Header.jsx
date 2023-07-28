import Navbar from "./Navbar";
import Logo from "./Logo";
import UserThumbnail from "./UserThumbnail";

function Header() {
  return (
    <header className="flex items-center justify-around">
      <Logo />
      <Navbar />
      <UserThumbnail />
    </header>
  );
}

export default Header;
