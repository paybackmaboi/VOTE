import React, { useState } from 'react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import IdVerificationView from './IdVerificationView';
import VotingView from './VotingView';
import VoteConfirmationView from './VoteConfirmationView';
import MyVoteView from './MyVoteView';
import ResultsView from './ResultsView';
import { HomeIcon, MyVoteIcon, HelpIcon, LogoutIcon, ResultsIcon } from '../../components/icons';
import HelpView from './HelpView';

const classNames = (...classes) => classes.filter(Boolean).join(' ');

const UserDashboard = ({ onLogout, positions, candidates, electionState, setElectionState }) => {
    const [isVerified, setIsVerified] = useState(false);
    const [hasVoted, setHasVoted] = useState(false);
    const [finalVotes, setFinalVotes] = useState(null);
    const navigate = useNavigate();

    const handleVoteCasted = (votes) => {
        setFinalVotes(votes);
        setHasVoted(true);
        // Add the new vote to the global election state
        setElectionState(prev => ({
            ...prev,
            votes: [...prev.votes, { voterId: 'current_user', ballot: votes }]
        }));
        navigate('/dashboard/confirmation');
    };

    const handleVerification = (status) => {
        setIsVerified(status);
        if(status) {
            navigate('/dashboard/vote');
        }
    };

    const DashboardHome = () => {
        let statusMessage;
        switch (electionState.status) {
            case 'running':
                statusMessage = 'Election is Live! Click "Vote Now" to cast your ballot.';
                break;
            case 'paused':
                statusMessage = 'Voting is currently paused. Please check back later.';
                break;
            case 'ended':
                statusMessage = 'The voting period has ended.';
                break;
            default:
                statusMessage = 'The election has not started yet.';
        }

        return (
            <>
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Welcome, Voter!</h1>
                    <div className={classNames('text-sm font-bold px-4 py-2 rounded-full', {
                        'bg-yellow-100 text-yellow-800': !hasVoted,
                        'bg-green-100 text-green-800': hasVoted,
                    })}>{hasVoted ? 'You have voted' : 'You have not voted'}</div>
                </div>
                <div className="bg-blue-500 text-white p-8 rounded-2xl shadow-lg">
                    <h2 className="text-3xl font-bold mb-2">Election Status</h2>
                    <p className="text-blue-100">{statusMessage}</p>
                </div>
                {electionState.status === 'ended' && !electionState.resultsPublished && (
                     <div className="mt-8 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-lg">
                        <p className="font-bold">Results Pending</p>
                        <p>The results are being tabulated and will be published soon.</p>
                    </div>
                )}
            </>
        );
    };

    return (
        <div className="flex h-screen bg-slate-100">
            <aside className="w-64 bg-gray-800 text-white flex-col hidden sm:flex">
                <div className="p-6 text-2xl font-bold border-b border-gray-700">SecureVote</div>
                <nav className="flex-1 p-4 space-y-2">
                    <NavLink to="/dashboard" end className={({isActive}) => classNames("w-full text-left flex items-center px-4 py-2 rounded-lg", {'bg-gray-900': isActive})}><HomeIcon />Dashboard</NavLink>
                    <button 
                        onClick={() => navigate('/dashboard/verify')} 
                        disabled={hasVoted || electionState.status !== 'running'} 
                        className="w-full text-left flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <MyVoteIcon />Vote Now
                    </button>
                    <NavLink to="/dashboard/my-vote" className={({isActive}) => classNames("w-full text-left flex items-center px-4 py-2 rounded-lg", {'bg-gray-900': isActive})}><MyVoteIcon />My Vote</NavLink>
                    {electionState.resultsPublished && <NavLink to="/dashboard/results" className={({isActive}) => classNames("w-full text-left flex items-center px-4 py-2 rounded-lg", {'bg-gray-900': isActive})}><ResultsIcon />Results</NavLink>}
                    <NavLink to="/dashboard/help" className={({isActive}) => classNames("w-full text-left flex items-center px-4 py-2 rounded-lg", {'bg-gray-900': isActive})}><HelpIcon />Help</NavLink>
                </nav>
                <div className="p-4 border-t border-gray-700">
                    <button onClick={onLogout} className="w-full flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg"><LogoutIcon />Logout</button>
                </div>
            </aside>
            <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
                <Routes>
                    <Route path="/" element={<DashboardHome />} />
                    <Route path="/verify" element={<IdVerificationView onVerify={handleVerification} />} />
                    <Route path="/vote" element={isVerified ? <VotingView positions={positions} candidates={candidates} onVoteCasted={handleVoteCasted} /> : <IdVerificationView onVerify={handleVerification} />} />
                    <Route path="/confirmation" element={<VoteConfirmationView />} />
                    <Route path="/my-vote" element={<MyVoteView votes={finalVotes} positions={positions} candidates={candidates} />} />
                    <Route path="/results" element={<ResultsView electionState={electionState} candidates={candidates} positions={positions} />} />
                    <Route path="/help" element={<HelpView/>} />
                </Routes>
            </main>
        </div>
    );
};

export default UserDashboard;