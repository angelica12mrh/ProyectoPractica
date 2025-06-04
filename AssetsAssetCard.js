import React from 'react';

const AssetsAssetCard = ({ asset, users, onAssign, onMaintenance }) => {
  const assignedUser = users.find(u => u.id === asset.assignedTo);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{asset.name}</h3>
          <span className={`px-2 py-1 text-xs rounded-full ${
            asset.status === 'active' ? 'bg-green-100 text-green-800' :
            asset.status === 'available' ? 'bg-blue-100 text-blue-800' :
            'bg-yellow-100 text-yellow-800'
          }`}>
            {asset.status === 'active' ? 'Asignado' : 
             asset.status === 'available' ? 'Disponible' : 'En Mantenimiento'}
          </span>
        </div>
        
        {assignedUser && (
          <p className="text-sm text-gray-600 mb-2">
            Asignado a: <span className="font-medium">{assignedUser.name}</span>
          </p>
        )}
        
        <div className="grid grid-cols-2 gap-2 text-sm mb-3">
          <div>
            <p className="text-gray-500">Último mantenimiento:</p>
            <p>{asset.lastMaintenance}</p>
          </div>
          <div>
            <p className="text-gray-500">Próximo mantenimiento:</p>
            <p>{asset.nextMaintenance}</p>
          </div>
        </div>
        
        <div className="flex space-x-2 mt-4">
          <button
            onClick={() => onAssign(asset)}
            className="flex-1 bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700 text-sm transition-colors"
          >
            {asset.assignedTo ? 'Reasignar' : 'Asignar'}
          </button>
          <button
            onClick={() => onMaintenance(asset)}
            className="flex-1 bg-white border border-red-600 text-red-600 py-1 px-3 rounded hover:bg-red-50 text-sm transition-colors"
          >
            Mantenimiento
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssetsAssetCard;