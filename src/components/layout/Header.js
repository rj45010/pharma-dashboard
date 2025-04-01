import "./css/Header.css";
import Logo from './images/logo.jpg';
import ProfileBar from "./ProfileBar.js";

const Header = () => {
  return (
    <header className="header d-flex justify-content-around align-items-center border-0">
      <div className="logo">
        <img src={Logo} alt="Jee1logo" height="40"/>
      </div>

      <div className="search-bar">
        <input
          type="text"
          className="form-control rounded-pill border-0"
        />
      </div>

      <div>
        <ProfileBar />
      </div>
    </header>
  );
};

export default Header;