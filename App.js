import React, { useState } from 'react';
import LayoutHeader from './components/LayoutHeader';
import LayoutSidebar from './components/LayoutSidebar';
import AuthLoginForm from './components/AuthLoginForm';
import AssetsDashboard from './components/AssetsDashboard';
import ReportsView from './components/ReportsView';
import UsersView from './components/UsersView';
import MaintenanceView from './components/MaintenanceView';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [activeView, setActiveView] = useState('dashboard');

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  const renderView = () => {
    switch(activeView) {
      case 'dashboard':
        return <AssetsDashboard user={currentUser} />;
      case 'users':
        return <UsersView />;
      case 'assets':
        return <AssetsDashboard user={currentUser} />;
      case 'maintenance':
        return <MaintenanceView />;
      case 'reports':
        return <ReportsView />;
      default:
        return <AssetsDashboard user={currentUser} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <LayoutHeader user={currentUser} onLogout={handleLogout} />
      
      {currentUser && (
        <>
          <LayoutSidebar activeView={activeView} setActiveView={setActiveView} />
          <main className="ml-64 p-6">
            {renderView()}
          </main>
        </>
      )}

      {!currentUser && (
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
          <AuthLoginForm onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
};

export default App;

// DONE