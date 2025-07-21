import React, { useState } from 'react';

const ElectionStartModal = ({ onStart, onClose }) => {
    const [duration, setDuration] = useState(10);
    const [unit, setUnit] = useState('minutes');

    const handleStart = () => {
        let durationInSeconds = 0;
        if (unit === 'minutes') {
            durationInSeconds = duration * 60;
        } else if (unit === 'hours') {
            durationInSeconds = duration * 60 * 60;
        }
        onStart(durationInSeconds);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6">Start Election</h2>
                <p className="text-gray-600 mb-4">Set the duration for the voting period.</p>
                <div className="flex items-center gap-4">
                    <input
                        type="number"
                        value={duration}
                        onChange={(e) => setDuration(parseInt(e.target.value, 10))}
                        min="1"
                        className="w-full px-4 py-3 rounded-lg bg-gray-100 border focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <select
                        value={unit}
                        onChange={(e) => setUnit(e.target.value)}
                        className="px-4 py-3 rounded-lg bg-gray-100 border focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="minutes">Minutes</option>
                        <option value="hours">Hours</option>
                    </select>
                </div>
                <div className="flex justify-end gap-4 mt-8">
                    <button onClick={onClose} className="bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-lg hover:bg-gray-400">Cancel</button>
                    <button onClick={handleStart} className="bg-green-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-700">Start Now</button>
                </div>
            </div>
        </div>
    );
};

export default ElectionStartModal;