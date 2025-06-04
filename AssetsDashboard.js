import React, { useState } from 'react';
import { assets } from '../mock/assets';
import { users } from '../mock/users';
import AssetsAssetList from './AssetsAssetList';
import AssetsAssignModal from './AssetsAssignModal';
import AssetsMaintenanceModal from './AssetsMaintenanceModal';
import AssetsReportsButton from './AssetsReportsButton';

const AssetsDashboard = ({ user }) => {
  const [currentAssets, setCurrentAssets] = useState(assets);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [showMaintenanceModal, setShowMaintenanceModal] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [showReports, setShowReports] = useState(false);

  const handleAssign = (asset) => {
    setSelectedAsset(asset);
    setShowAssignModal(true);
  };

  const handleMaintenance = (asset) => {
    setSelectedAsset(asset);
    setShowMaintenanceModal(true);
  };

  const confirmAssign = (assetId, userId) => {
    const updatedAssets = currentAssets.map(asset => {
      if (asset.id === assetId) {
        return {
          ...asset,
          assignedTo: userId ? parseInt(userId) : null,
          status: userId ? 'active' : 'available'
        };
      }
      return asset;
    });
    setCurrentAssets(updatedAssets);
  };

  const confirmMaintenance = (assetId, type, date) => {
    const updatedAssets = currentAssets.map(asset => {
      if (asset.id === assetId) {
        return {
          ...asset,
          lastMaintenance: new Date().toISOString().split('T')[0],
          nextMaintenance: date,
          status: 'maintenance'
        };
      }
      return asset;
    });
    setCurrentAssets(updatedAssets);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Gestión de Activos</h2>
        <AssetsReportsButton onClick={() => setShowReports(!showReports)} />
      </div>
      
      <AssetsAssetList
        assets={currentAssets}
        users={users}
        onAssign={handleAssign}
        onMaintenance={handleMaintenance}
      />
      
      {showAssignModal && (
        <AssetsAssignModal
          asset={selectedAsset}
          users={users}
          onClose={() => setShowAssignModal(false)}
          onConfirm={confirmAssign}
        />
      )}
      
      {showMaintenanceModal && (
        <AssetsMaintenanceModal
          asset={selectedAsset}
          onClose={() => setShowMaintenanceModal(false)}
          onConfirm={confirmMaintenance}
        />
      )}
      
      {showReports && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Reportes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-medium text-red-600">Activos asignados</h4>
              <p className="text-2xl font-bold">{currentAssets.filter(a => a.status === 'active').length}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-600">Activos disponibles</h4>
              <p className="text-2xl font-bold">{currentAssets.filter(a => a.status === 'available').length}</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-medium text-yellow-600">En mantenimiento</h4>
              <p className="text-2xl font-bold">{currentAssets.filter(a => a.status === 'maintenance').length}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssetsDashboard;

// DONE