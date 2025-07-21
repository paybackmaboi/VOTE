import React from 'react';

const MyVoteView = ({ votes, positions, candidates }) => {
    if (!votes) {
        return (
            <div className="w-full max-w-md mx-auto mt-10 text-center">
                <div className="bg-white p-12 rounded-xl shadow-md">
                    <h2 className="text-2xl font-bold mb-4">No Vote History</h2>
                    <p className="text-gray-600">You have not cast your vote yet. Please go to the "Vote Now" section to participate.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-2xl mx-auto mt-10">
            <h2 className="text-3xl font-bold text-center mb-6">Your Ballot Summary</h2>
            <div className="bg-white p-8 rounded-xl shadow-md space-y-6">
                {positions.map(position => {
                    const votedCandidateId = votes[position.id];
                    const candidate = candidates.find(c => c.id === votedCandidateId);
                    return (
                        <div key={position.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                            <h3 className="text-xl font-bold text-gray-800">{position.name}</h3>
                            {candidate ? (
                                <div className="flex items-center mt-4">
                                    <img src={candidate.imageUrl} alt={`${candidate.firstName} ${candidate.lastName}`} className="w-16 h-16 rounded-full object-cover mr-4" />
                                    <div>
                                        <p className="font-semibold text-lg">{`${candidate.firstName} ${candidate.lastName}`}</p>
                                        <p className="text-sm text-gray-500">{candidate.platform}</p>
                                    </div>
                                </div>
                            ) : (
                                <p className="text-gray-500 mt-2">No selection made for this position.</p>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MyVoteView;