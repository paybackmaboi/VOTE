import React, { useState } from 'react';
import CandidateModal from './CandidateModal';

const CandidatesManager = ({ positions, candidates, setCandidates }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingCandidate, setEditingCandidate] = useState(null);

    const handleAddNew = () => {
        setEditingCandidate(null);
        setIsModalOpen(true);
    };

    const handleEdit = (candidate) => {
        setEditingCandidate(candidate);
        setIsModalOpen(true);
    };

    const handleDelete = (candidateId) => {
        setCandidates(candidates.filter(c => c.id !== candidateId));
    };

    const handleSave = (candidateData) => {
        if (candidateData.id) {
            setCandidates(candidates.map(c => c.id === candidateData.id ? candidateData : c));
        } else {
            const newCandidate = { ...candidateData, id: Date.now() };
            setCandidates([...candidates, newCandidate]);
        }
        setIsModalOpen(false);
    };

    const getPositionName = (positionId) => {
        const position = positions.find(p => p.id === parseInt(positionId));
        return position ? position.name : 'N/A';
    };

    return (
        <>
            {isModalOpen && <CandidateModal candidate={editingCandidate} positions={positions} onSave={handleSave} onClose={() => setIsModalOpen(false)} />}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Manage Candidates</h1>
                <button onClick={handleAddNew} className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700">
                    + Add New Candidate
                </button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b">
                                <th className="p-4">Profile</th>
                                <th className="p-4">Name</th>
                                <th className="p-4">Position</th>
                                <th className="p-4">Platform</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {candidates.map(c => (
                                <tr key={c.id} className="border-b hover:bg-gray-50">
                                    <td className="p-4">
                                        <img src={c.imageUrl || 'https://placehold.co/100x100/cccccc/ffffff?text=No+Image'} alt={`${c.firstName} ${c.lastName}`} className="w-12 h-12 rounded-full object-cover" />
                                    </td>
                                    <td className="p-4 font-medium">{`${c.firstName} ${c.lastName}`}</td>
                                    <td className="p-4">{getPositionName(c.positionId)}</td>
                                    <td className="p-4 text-sm text-gray-600 max-w-xs truncate">{c.platform}</td>
                                    <td className="p-4 text-right">
                                        <button onClick={() => handleEdit(c)} className="text-blue-600 hover:underline mr-4">Edit</button>
                                        <button onClick={() => handleDelete(c.id)} className="text-red-600 hover:underline">Delete</button>
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

export default CandidatesManager;