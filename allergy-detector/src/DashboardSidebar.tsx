import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const DashboardSidebar: React.FC = () => {
  const location = useLocation();
  return (
    <aside className="dashboard-sidebar">
      <nav>
        <ul>
          <li><Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/dashboard/log-reaction" className={location.pathname === '/dashboard/log-reaction' ? 'active' : ''}>Log Condition</Link></li>
          <li><Link to="/dashboard/analysis" className={location.pathname === '/dashboard/analysis' ? 'active' : ''}>Analysis</Link></li>
          <li><Link to="/dashboard/history" className={location.pathname === '/dashboard/history' ? 'active' : ''}>History</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default DashboardSidebar; 