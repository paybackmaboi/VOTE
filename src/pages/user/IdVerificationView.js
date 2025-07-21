import React, { useState } from 'react';

const IdVerificationView = ({ onVerify }) => {
    const [studentId, setStudentId] = useState('');
    const [error, setError] = useState('');
    const validIds = ['2024-1001', '2024-1002', '2024-1003']; // Mock MIS database

    const handleVerification = (e) => {
        e.preventDefault();
        if (validIds.includes(studentId)) {
            onVerify(true);
        } else {
            setError('Student ID not found. Please try again.');
        }
    };

    return (
        <div className="w-full max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold text-center mb-6">Voter Verification</h2>
            <div className="bg-white p-8 rounded-xl shadow-md">
                <form onSubmit={handleVerification}>
                    <label htmlFor="studentId" className="block text-gray-700 text-sm font-bold mb-2">Enter Your School ID</label>
                    <input
                        type="text"
                        id="studentId"
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                        placeholder="e.g., 2024-1001"
                        className="w-full px-4 py-3 rounded-lg bg-gray-100 border focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    <button type="submit" className="w-full mt-6 bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700">Verify ID</button>
                </form>
            </div>
        </div>
    );
};

export default IdVerificationView;