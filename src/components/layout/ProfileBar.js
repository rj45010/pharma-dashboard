import React from "react";
import "./css/ProfileBar.css";

const ProfileBar = () => {
  return (
    <div className="notification-bar d-flex align-items-center justify-content-between p-2 bg-light rounded-pill">
      {/* Bell Icon */}
      <div className="icon-wrapper">
        <span className="notification-dot"></span>
        <i className="bi bi-bell icons"></i>
      </div>

      {/* Settings Icon */}
      <div className="icon-wrapper">
        <i className="bi bi-gear icons"></i>
      </div>

      {/* Profile Picture */}
      <div className="icon-wrapper">
        <img
          src=""
          alt="logo"
          className="rounded-circle profile-icon icons"
        />
      </div>
    </div>
  );
};

export default ProfileBar;
