import React from 'react';

const LayoutHeader = ({ user, onLogout }) => {
  return (
    <header className="bg-red-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-red-600 font-bold">AB</span>
          </div>
          <h1 className="text-xl font-bold">AdeccoBoX</h1>
        </div>
        
        {user && (
          <div className="flex items-center space-x-4">
            <span className="hidden md:inline">Bienvenido, {user.name}</span>
            <button
              onClick={onLogout}
              className="bg-white text-red-600 px-3 py-1 rounded hover:bg-red-50 transition-colors"
            >
              Salir
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default LayoutHeader;