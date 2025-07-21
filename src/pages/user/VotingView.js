import React, { useState } from 'react';

const classNames = (...classes) => classes.filter(Boolean).join(' ');

const VotingView = ({ positions, candidates, onVoteCasted }) => {
    const [currentPositionIndex, setCurrentPositionIndex] = useState(0);
    const [votes, setVotes] = useState({});
    const [selectedCandidate, setSelectedCandidate] = useState(null);

    const currentPosition = positions[currentPositionIndex];
    const candidatesForPosition = candidates.filter(c => c.positionId === currentPosition.id);
    const progress = ((currentPositionIndex + 1) / positions.length) * 100;

    const handleSelectCandidate = (candidateId) => {
        setSelectedCandidate(candidateId);
    };

    const handleNext = () => {
        const newVotes = { ...votes, [currentPosition.id]: selectedCandidate };
        setVotes(newVotes);
        setSelectedCandidate(null);

        if (currentPositionIndex < positions.length - 1) {
            setCurrentPositionIndex(currentPositionIndex + 1);
        } else {
            onVoteCasted(newVotes);
        }
    };

    return (
        <div className="w-full max-w-5xl mx-auto mt-10">
            <div className="mb-8">
                <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-blue-700">Voting Progress</span>
                    <span className="text-sm font-medium text-blue-700">{Math.round(progress)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold">Vote for {currentPosition.name}</h2>
                    <p className="text-gray-500 mt-2">Please select one candidate.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {candidatesForPosition.map(c => (
                        <div
                            key={c.id}
                            onClick={() => handleSelectCandidate(c.id)}
                            className={classNames(
                                'relative p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 flex flex-col items-center text-center',
                                { 'border-blue-600 bg-blue-50 ring-2 ring-blue-500': selectedCandidate === c.id },
                                { 'border-gray-200 hover:border-blue-400': selectedCandidate !== c.id }
                            )}
                        >
                            {selectedCandidate === c.id && (
                                <div className="absolute top-2 right-2 bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center">
                                    ✓
                                </div>
                            )}
                            <img src={c.imageUrl} alt={`${c.firstName} ${c.lastName}`} className="w-32 h-32 object-cover rounded-full mb-4 shadow-md" />
                            <h3 className="text-xl font-bold">{`${c.firstName} ${c.lastName}`}</h3>
                            <p className="text-sm text-gray-600 mt-2 flex-grow">{c.platform}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-10">
                    <button
                        onClick={handleNext}
                        disabled={!selectedCandidate}
                        className="bg-green-600 text-white font-bold py-3 px-12 rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                    >
                        {currentPositionIndex < positions.length - 1 ? 'Next' : 'Cast Final Vote'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VotingView;
