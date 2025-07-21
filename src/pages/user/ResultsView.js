import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const ResultsView = ({ electionState, candidates, positions }) => {
    const chartRefs = useRef({});

    useEffect(() => {
        if (electionState.resultsPublished) {
            const voteCounts = {};
            candidates.forEach(c => {
                voteCounts[c.id] = 0;
            });
            electionState.votes.forEach(vote => {
                Object.values(vote.ballot).forEach(candidateId => {
                    if (voteCounts[candidateId] !== undefined) {
                        voteCounts[candidateId]++;
                    }
                });
            });

            positions.forEach(position => {
                const positionCandidates = candidates.filter(c => c.positionId === position.id);
                const chartData = {
                    labels: positionCandidates.map(c => `${c.firstName} ${c.lastName}`),
                    datasets: [{
                        label: '# of Votes',
                        data: positionCandidates.map(c => voteCounts[c.id] || 0),
                        backgroundColor: 'rgba(59, 130, 246, 0.8)',
                        borderColor: 'rgba(59, 130, 246, 1)',
                        borderWidth: 1,
                    }]
                };

                const canvas = chartRefs.current[position.id];
                if (canvas) {
                    if (canvas.chart) {
                        canvas.chart.destroy();
                    }
                    const ctx = canvas.getContext('2d');
                    canvas.chart = new Chart(ctx, {
                        type: 'bar',
                        data: chartData,
                        options: {
                            indexAxis: 'y',
                            scales: { x: { beginAtZero: true, ticks: { stepSize: 1 } } },
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: { legend: { display: false } }
                        }
                    });
                }
            });
        }
    }, [electionState, candidates, positions]);

    if (!electionState.resultsPublished) {
        return (
            <div className="text-center mt-10">
                <h2 className="text-2xl font-bold">Results Not Yet Published</h2>
                <p className="text-gray-600 mt-2">The election results will be available here once published by the administrator.</p>
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Official Election Results</h1>
            <div className="space-y-8">
                {positions.map(position => (
                    <div key={position.id} className="bg-white p-6 rounded-xl shadow-md">
                        <h2 className="text-2xl font-bold mb-4">{position.name}</h2>
                        <div className="relative h-64">
                            <canvas ref={el => chartRefs.current[position.id] = el}></canvas>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResultsView;