import React, { useState, useEffect } from 'react';

const CandidateModal = ({ candidate, positions, onSave, onClose }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        positionId: '',
        platform: '',
        imageUrl: '',
    });

    useEffect(() => {
        if (candidate) {
            setFormData({
                firstName: candidate.firstName,
                lastName: candidate.lastName,
                positionId: candidate.positionId,
                platform: candidate.platform,
                imageUrl: candidate.imageUrl,
            });
        } else {
            setFormData({
                firstName: '',
                lastName: '',
                positionId: positions[0]?.id || '',
                platform: '',
                imageUrl: '',
            });
        }
    }, [candidate, positions]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        onSave({ ...candidate, ...formData });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-6">{candidate ? 'Edit Candidate' : 'Add New Candidate'}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                        <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-100 border focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                        <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-100 border focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                </div>
                 <div className="mt-6">
                    <label htmlFor="positionId" className="block text-gray-700 text-sm font-bold mb-2">Position</label>
                    <select name="positionId" id="positionId" value={formData.positionId} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-100 border focus:outline-none focus:ring-2 focus:ring-blue-500">
                        {positions.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                    </select>
                </div>
                <div className="mt-6">
                    <label htmlFor="imageUrl" className="block text-gray-700 text-sm font-bold mb-2">Image URL</label>
                    <input type="text" name="imageUrl" id="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="https://example.com/image.png" className="w-full px-4 py-3 rounded-lg bg-gray-100 border focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="mt-6">
                    <label htmlFor="platform" className="block text-gray-700 text-sm font-bold mb-2">Platform</label>
                    <textarea name="platform" id="platform" value={formData.platform} onChange={handleChange} rows="4" className="w-full px-4 py-3 rounded-lg bg-gray-100 border focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <div className="flex justify-end gap-4 mt-8">
                    <button onClick={onClose} className="bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-lg hover:bg-gray-400">Cancel</button>
                    <button onClick={handleSave} className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700">Save</button>
                </div>
            </div>
        </div>
    );
};

export default CandidateModal;