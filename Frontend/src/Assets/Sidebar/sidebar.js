import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
import { FaSignOutAlt, FaChartLine, FaUser, FaListAlt, FaUserPlus } from 'react-icons/fa';
import { BiSolidDashboard } from 'react-icons/bi';

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="menu">
        <div className="menuItem">
          <BiSolidDashboard className="icon" />
          <span className='dashboard'>𝐃𝐚𝐬𝐡𝐛𝐨𝐚𝐫𝐝</span>
        </div>
        <div className="menuItem">
          <FaChartLine className="icon" />
          <Link to="/analytics" className="link">
            <span>Analytics</span>
          </Link>
        </div>
        <div className="menuItem">
          <FaUser className="icon" />
          <Link to="/createuser" className="link"> 
            <span>𝐀𝐝𝐝-𝐮𝐬𝐞𝐫</span>
          </Link>
        </div>
        <div className="menuItem">
          <FaListAlt className="icon" />
          <Link to="/list" className="link"> 
            <span>Check User</span>
          </Link>
        </div>
        {/* Add Admin Link */}
        <div className="menuItem">
          <FaUserPlus className="icon" />
          <Link to="/createadmin" className="link"> 
            <span>Add Admin</span>
          </Link>
        </div>
        <div className="menuItem">
          <FaSignOutAlt className="nav-icon" />
          <Link to="/signin" className="link">
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
