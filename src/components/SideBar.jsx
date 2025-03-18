import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './sideBar.css';
import { 
  RiBarChartFill, 
  RiFileListLine, 
  RiDashboardLine, 
  RiTeamLine, 
  RiSettings4Line, 
  RiLogoutCircleLine 
} from 'react-icons/ri';

// ✅ Custom Modal Component
const Modal = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p className="modal-message">Are you sure you want to log out?</p>
        <div className="modal-actions">
          <button className="modal-cancel" onClick={onClose}>No</button>
          <button className="modal-submit" onClick={onConfirm}>Yes</button>
        </div>
      </div>
    </div>
  );
};

function SideBar() {
  const navigate = useNavigate();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);
  };

  const handleConfirmLogout = () => {
    // Perform logout logic here (e.g., clear tokens, session data)
    navigate('/login'); // Replace '/login' with your actual login route
    setShowLogoutConfirm(false);
  };

  const handleCancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  return (
    <aside id="sidebar" className="sidebar">
      <div className="divider bottom"></div>
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link to="/reports" className="nav-link">
            <RiBarChartFill className="me-2" />
            <span>Reports</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/transactionlog" className="nav-link">
            <RiFileListLine className="me-2" />
            <span>Transaction Log</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/systemhealth" className="nav-link">
            <RiDashboardLine className="me-2" />
            <span>System Health</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/executives" className="nav-link">
            <RiTeamLine className="me-2" />
            <span>Executives</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/settings" className="nav-link">
            <RiSettings4Line className="me-2" />
            <span>Settings</span>
          </Link>
        </li>
        <li className="nav-item">
          <button onClick={handleLogoutClick} className="nav-link logout-button">
            <RiLogoutCircleLine className="me-2" />
            <span>Logout</span>
          </button>
        </li>
      </ul>

      {/* Using the Modal */}
      <Modal 
        show={showLogoutConfirm} 
        onClose={handleCancelLogout} 
        onConfirm={handleConfirmLogout} 
      />
    </aside>
  );
}

export default SideBar;
