import React from 'react';
import profileImg from '../images/user.png';
import './nav.css'; 

function NavAvatar() {
  return (
    <div className="nav-avatar-container">
  <div className="text-info">
    <div className="nav-avatar-name">Katherine M. Petrova</div>
    <div className="nav-avatar-title">System Administrator</div>
  </div>
  <img
    src={profileImg}
    alt="Profile"
    className="nav-avatar-img"
  />
</div>
  );
}

export default NavAvatar;