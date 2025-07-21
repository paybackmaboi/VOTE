
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Chart from 'chart.js/auto';
import ElectionStartModal from './ElectionStartModal';
import CountdownTimer from './CountdownTimer';

const ElectionsManager = ({ electionState, setElectionState, candidates }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const chartContainer = useRef(null);
    const chartInstance = useRef(null);

    const handleStartElection = (durationInSeconds) => {
        const startTime = new Date();
        const endTime = new Date(startTime.getTime() + durationInSeconds * 1000);
        setElectionState({
            ...electionState,
            status: 'running',
            startTime: startTime.toISOString(),
            endTime: endTime.toISOString(),
        });
        setIsModalOpen(false);
    };

    const handleEndElection = useCallback(() => {
        setElectionState(prev => ({ ...prev, status: 'ended' }));
    }, [setElectionState]);
    
    const handlePauseElection = () => {
        setElectionState({ ...electionState, status: 'paused' });
    };

    const handleResumeElection = () => {
        setElectionState({ ...electionState, status: 'running' });
    };

    const handlePublishResults = () => {
        setElectionState({ ...electionState, resultsPublished: true });
    };

    useEffect(() => {
        if (electionState.status === 'running' && electionState.endTime) {
            const interval = setInterval(() => {
                const now = new Date().getTime();
                if (now >= new Date(electionState.endTime).getTime()) {
                    handleEndElection();
                }
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [electionState.status, electionState.endTime, handleEndElection]);
    
    useEffect(() => {
        if (electionState.resultsPublished && chartContainer.current) {
            const voteCounts = {};
            candidates.forEach(c => {
                voteCounts[c.id] = {
                    name: `${c.firstName} ${c.lastName}`,
                    votes: 0
                };
            });

            electionState.votes.forEach(vote => {
                Object.values(vote.ballot).forEach(candidateId => {
                    if (voteCounts[candidateId]) {
                        voteCounts[candidateId].votes += 1;
                    }
                });
            });

            const chartData = Object.values(voteCounts);

            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
            const ctx = chartContainer.current.getContext('2d');
            chartInstance.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: chartData.map(c => c.name),
                    datasets: [{
                        label: '# of Votes',
                        data: chartData.map(c => c.votes),
                        backgroundColor: 'rgba(59, 130, 246, 0.8)',
                        borderColor: 'rgba(59, 130, 246, 1)',
                        borderWidth: 1,
                    }]
                },
                 options: {
                    scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } },
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } }
                }
            });
        }
    }, [electionState.resultsPublished, electionState.votes, candidates]);

    return (
        <>
            {isModalOpen && <ElectionStartModal onStart={handleStartElection} onClose={() => setIsModalOpen(false)} />}
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Election Management</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-xl font-bold mb-4">Election Controls</h2>
                    <div className="space-y-4">
                        <button onClick={() => setIsModalOpen(true)} disabled={electionState.status === 'running' || electionState.status === 'paused'} className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 disabled:bg-gray-400">Start Election</button>
                        {electionState.status === 'running' && <button onClick={handlePauseElection} className="w-full bg-yellow-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-yellow-600">Pause Voting</button>}
                        {electionState.status === 'paused' && <button onClick={handleResumeElection} className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-600">Resume Voting</button>}
                        <button onClick={handleEndElection} disabled={electionState.status !== 'running' && electionState.status !== 'paused'} className="w-full bg-red-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-600 disabled:bg-gray-400">End Election</button>
                        <button onClick={handlePublishResults} disabled={electionState.status !== 'ended' || electionState.resultsPublished} className="w-full bg-gray-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-600 disabled:bg-gray-400">Publish Results</button>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <h2 className="text-xl font-bold mb-4">Election Status</h2>
                    <p className="text-2xl font-semibold capitalize p-3 rounded-lg bg-gray-100">{electionState.status}</p>
                    {electionState.status === 'running' && electionState.endTime && (
                        <div className="mt-4">
                            <h3 className="text-lg font-bold mb-2">Time Remaining</h3>
                            <CountdownTimer endTime={electionState.endTime} onEnd={handleEndElection} />
                        </div>
                    )}
                    {electionState.resultsPublished && <p className="mt-4 text-green-600 font-bold">Results are now public!</p>}
                </div>
            </div>

            {electionState.resultsPublished && (
                <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Final Results</h2>
                    <div className="relative h-96">
                        <canvas ref={chartContainer}></canvas>
                    </div>
                </div>
            )}
        </>
    );
};

export default ElectionsManager;