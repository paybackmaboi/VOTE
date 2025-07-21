import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import DashboardView from './DashboardView';
import PositionsManager from './PositionsManager';
import CandidatesManager from './CandidatesManager';
import ElectionsManager from './ElectionsManager';
import { HomeIcon, VotersIcon, ElectionsIcon, PositionsIcon, CandidatesIcon, LogoutIcon } from '../../components/icons';

const AdminDashboard = ({ onLogout, positions, setPositions, candidates, setCandidates, electionState, setElectionState }) => {
    
    const navLinkClasses = ({ isActive }) => 
        `w-full text-left flex items-center px-4 py-2 rounded-lg ${isActive ? 'bg-gray-900' : 'hover:bg-gray-700'}`;

    return (
        <div className="flex h-screen bg-slate-100">
            <aside className="w-64 bg-gray-800 text-white flex-col flex-shrink-0 hidden md:flex">
                <div className="p-6 text-2xl font-bold border-b border-gray-700">SecureVote</div>
                <nav className="flex-1 p-4 space-y-2">
                    <NavLink to="/admin" end className={navLinkClasses}><HomeIcon />Dashboard</NavLink>
                    <NavLink to="/admin/voters" className={navLinkClasses}><VotersIcon />Voters</NavLink>
                    <NavLink to="/admin/elections" className={navLinkClasses}><ElectionsIcon />Elections</NavLink>
                    <NavLink to="/admin/positions" className={navLinkClasses}><PositionsIcon />Positions</NavLink>
                    <NavLink to="/admin/candidates" className={navLinkClasses}><CandidatesIcon />Candidates</NavLink>
                </nav>
                <div className="p-4 border-t border-gray-700">
                    <button onClick={onLogout} className="w-full flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg"><LogoutIcon />Logout</button>
                </div>
            </aside>
            <main className="flex-1 p-8 overflow-y-auto">
                <Routes>
                    <Route path="/" element={<DashboardView />} />
                    <Route path="/positions" element={<PositionsManager positions={positions} setPositions={setPositions} />} />
                    <Route path="/candidates" element={<CandidatesManager positions={positions} candidates={candidates} setCandidates={setCandidates} />} />
                    <Route path="/voters" element={<h1 className="text-3xl font-bold text-gray-800">Voters Management (Coming Soon)</h1>} />
                    <Route path="/elections" element={<ElectionsManager electionState={electionState} setElectionState={setElectionState} candidates={candidates} />} />
                </Routes>
            </main>
        </div>
    );
};

export default AdminDashboard;
