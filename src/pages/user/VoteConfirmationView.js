import React from 'react';
import { useNavigate } from 'react-router-dom';

const VoteConfirmationView = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full max-w-md mx-auto mt-10 text-center">
            <div className="bg-white p-12 rounded-xl shadow-md">
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="text-3xl font-bold mb-4">Vote Cast Successfully!</h2>
                <p className="text-gray-600 mb-8">Thank you for participating in the election. Your voice matters.</p>
                <button onClick={() => navigate('/dashboard')} className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700">
                    Back to Dashboard
                </button>
            </div>
        </div>
    );
};

export default VoteConfirmationView;