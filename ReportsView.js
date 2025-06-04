import React from 'react';
import { assets } from '../mock/assets';
import { users } from '../mock/users';

const ReportsView = () => {
  const generatePDFReport = () => {
    // En una implementación real, esto generaría un PDF descargable
    alert('Reporte generado con éxito! En una implementación real, se descargaría un PDF con todos los datos.');
  };

  const assignedAssets = assets.filter(a => a.status === 'active');
  const availableAssets = assets.filter(a => a.status === 'available');
  const maintenanceAssets = assets.filter(a => a.status === 'maintenance');

  return (
    <div className="ml-64 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Reportes de Activos</h2>
          <button
            onClick={generatePDFReport}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 flex items-center space-x-2 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Exportar a PDF</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-red-50 p-4 rounded-lg border border-red-100">
            <h3 className="font-semibold text-red-600 mb-2">Activos Asignados</h3>
            <p className="text-3xl font-bold">{assignedAssets.length}</p>
            <ul className="mt-3 space-y-1">
              {assignedAssets.slice(0, 3).map(asset => (
                <li key={asset.id} className="text-sm">
                  {asset.name} - {users.find(u => u.id === asset.assignedTo)?.name || 'Sin asignar'}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h3 className="font-semibold text-blue-600 mb-2">Activos Disponibles</h3>
            <p className="text-3xl font-bold">{availableAssets.length}</p>
            <ul className="mt-3 space-y-1">
              {availableAssets.slice(0, 3).map(asset => (
                <li key={asset.id} className="text-sm">
                  {asset.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
            <h3 className="font-semibold text-yellow-600 mb-2">En Mantenimiento</h3>
            <p className="text-3xl font-bold">{maintenanceAssets.length}</p>
            <ul className="mt-3 space-y-1">
              {maintenanceAssets.slice(0, 3).map(asset => (
                <li key={asset.id} className="text-sm">
                  {asset.name} - Próximo: {asset.nextMaintenance}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white border rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asignado a</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Próximo Mant.</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {assets.map(asset => (
                <tr key={asset.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{asset.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{asset.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      asset.status === 'active' ? 'bg-green-100 text-green-800' :
                      asset.status === 'available' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {asset.status === 'active' ? 'Asignado' : 
                       asset.status === 'available' ? 'Disponible' : 'En Mantenimiento'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {users.find(u => u.id === asset.assignedTo)?.name || 'No asignado'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{asset.nextMaintenance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReportsView;