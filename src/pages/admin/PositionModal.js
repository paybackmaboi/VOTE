import React, { useState, useEffect } from 'react';

const PositionModal = ({ position, onSave, onClose }) => {
    const [name, setName] = useState('');
    const [limit, setLimit] = useState(1);

    useEffect(() => {
        if (position) {
            setName(position.name);
            setLimit(position.limit);
        } else {
            setName('');
            setLimit(1);
        }
    }, [position]);

    const handleSave = () => {
        onSave({ ...position, name, limit: parseInt(limit, 10) || 1 });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6">{position ? 'Edit Position' : 'Add New Position'}</h2>
                <div className="mb-4">
                    <label htmlFor="position-name" className="block text-gray-700 text-sm font-bold mb-2">Position Name</label>
                    <input
                        type="text"
                        id="position-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g., President"
                        className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="vote-limit" className="block text-gray-700 text-sm font-bold mb-2">Vote Limit</label>
                    <input
                        type="number"
                        id="vote-limit"
                        value={limit}
                        onChange={(e) => setLimit(e.target.value)}
                        min="1"
                        className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex justify-end gap-4">
                    <button onClick={onClose} className="bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-lg hover:bg-gray-400">Cancel</button>
                    <button onClick={handleSave} className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700">Save</button>
                </div>
            </div>
        </div>
    );
};

export default PositionModal;