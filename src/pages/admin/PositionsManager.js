import React, { useState } from 'react';
import PositionModal from './PositionModal';

const PositionsManager = ({ positions, setPositions }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingPosition, setEditingPosition] = useState(null);

    const handleAddNew = () => {
        setEditingPosition(null);
        setIsModalOpen(true);
    };

    const handleEdit = (position) => {
        setEditingPosition(position);
        setIsModalOpen(true);
    };

    const handleDelete = (positionId) => {
        setPositions(positions.filter(p => p.id !== positionId));
    };

    const handleSave = (positionData) => {
        if (positionData.id) {
            setPositions(positions.map(p => p.id === positionData.id ? positionData : p));
        } else {
            const newPosition = { ...positionData, id: Date.now() };
            setPositions([...positions, newPosition]);
        }
        setIsModalOpen(false);
    };

    return (
        <>
            {isModalOpen && <PositionModal position={editingPosition} onSave={handleSave} onClose={() => setIsModalOpen(false)} />}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Manage Positions</h1>
                <button onClick={handleAddNew} className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700">
                    + Add New Position
                </button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b">
                                <th className="p-4">Position Name</th>
                                <th className="p-4">Vote Limit</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {positions.map(pos => (
                                <tr key={pos.id} className="border-b hover:bg-gray-50">
                                    <td className="p-4 font-medium">{pos.name}</td>
                                    <td className="p-4">{pos.limit}</td>
                                    <td className="p-4 text-right">
                                        <button onClick={() => handleEdit(pos)} className="text-blue-600 hover:underline mr-4">Edit</button>
                                        <button onClick={() => handleDelete(pos.id)} className="text-red-600 hover:underline">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default PositionsManager;