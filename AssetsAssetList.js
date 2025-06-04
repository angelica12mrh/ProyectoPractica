import React from 'react';
import AssetsAssetCard from './AssetsAssetCard';

const AssetsAssetList = ({ assets, users, onAssign, onMaintenance }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {assets.map(asset => (
        <AssetsAssetCard
          key={asset.id}
          asset={asset}
          users={users}
          onAssign={onAssign}
          onMaintenance={onMaintenance}
        />
      ))}
    </div>
  );
};

export default AssetsAssetList;