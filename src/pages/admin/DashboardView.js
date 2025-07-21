import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const DashboardView = () => {
    const chartContainer = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartContainer.current) {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
            const ctx = chartContainer.current.getContext('2d');
            chartInstance.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Jane Doe', 'John Smith', 'Emily White'],
                    datasets: [{
                        label: '# of Votes',
                        data: [4521, 3129, 2226],
                        backgroundColor: ['rgba(59, 130, 246, 0.8)', 'rgba(16, 185, 129, 0.8)', 'rgba(139, 92, 246, 0.8)'],
                        borderColor: ['rgba(59, 130, 246, 1)', 'rgba(16, 185, 129, 1)', 'rgba(139, 92, 246, 1)'],
                        borderWidth: 1,
                        borderRadius: 8,
                    }]
                },
                options: {
                    scales: { y: { beginAtZero: true } },
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } }
                }
            });
        }
        return () => {
             if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        }
    }, []);
    
    return (
        <>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="text-sm text-gray-500">Total Voters</div><div className="text-2xl font-bold">15,320</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="text-sm text-gray-500">Votes Cast</div><div className="text-2xl font-bold">9,876</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="text-sm text-gray-500">Voter Turnout</div><div className="text-2xl font-bold">64.5%</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="text-sm text-gray-500">Time Remaining</div><div className="text-2xl font-bold">2h 15m</div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-xl font-bold mb-4">Live Vote Count</h2>
                    <div className="relative h-96">
                        <canvas ref={chartContainer}></canvas>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-xl font-bold mb-4">Election Controls</h2>
                    <div className="space-y-4">
                        <button className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600">Start Election</button>
                        <button className="w-full bg-red-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-600">End Election</button>
                        <button className="w-full bg-yellow-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-yellow-600">Pause Voting</button>
                        <button className="w-full bg-gray-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-600">Publish Results</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardView;