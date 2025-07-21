import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import UserDashboard from './pages/user/UserDashboard';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
    const [userRole, setUserRole] = useState(null); 
    const navigate = useNavigate();
    
    const [positions, setPositions] = useState([
        { id: 1, name: 'President', limit: 1 },
        { id: 2, name: 'Vice President', limit: 1 },
        { id: 3, name: 'Senator', limit: 12 },
        { id: 4, name: 'City Councilor', limit: 8 },
    ]);
    const [candidates, setCandidates] = useState([
        { id: 1, firstName: 'Jane', lastName: 'Doe', positionId: 1, platform: 'A commitment to a brighter future.', imageUrl: 'https://placehold.co/400x400/3b82f6/ffffff?text=J.D.' },
        { id: 2, firstName: 'John', lastName: 'Smith', positionId: 1, platform: 'Focusing on sustainable growth.', imageUrl: 'https://placehold.co/400x400/10b981/ffffff?text=J.S.' },
        { id: 3, firstName: 'Emily', lastName: 'White', positionId: 4, platform: 'Enhancing public services for all.', imageUrl: 'https://placehold.co/400x400/8b5cf6/ffffff?text=E.W.' },
        { id: 4, firstName: 'Michael', lastName: 'Brown', positionId: 2, platform: 'Integrity and transparency.', imageUrl: 'https://placehold.co/400x400/f59e0b/ffffff?text=M.B.' },
        { id: 5, firstName: 'Sarah', lastName: 'Davis', positionId: 2, platform: 'Community-first policies.', imageUrl: 'https://placehold.co/400x400/ef4444/ffffff?text=S.D.' },
        { id: 6, firstName: 'David', lastName: 'Wilson', positionId: 3, platform: 'A senator for the people.', imageUrl: 'https://placehold.co/400x400/84cc16/ffffff?text=D.W.' },
    ]);

    const [electionState, setElectionState] = useState({
      // pending, running, paused, ended
        status: 'pending',
        startTime: null,
        endTime: null,
        votes: [],
        resultsPublished: false,
    });

    const handleLogin = (role) => {
        setUserRole(role);
        if (role === 'admin') {
            navigate('/admin');
        } else if (role === 'user') {
            navigate('/dashboard');
        }
    };

    const handleLogout = () => {
        setUserRole(null);
        navigate('/login');
    };

    return (
        <div className="font-sans bg-slate-50">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
                
                <Route 
                    path="/admin/*" 
                    element={
                        <ProtectedRoute userRole={userRole} allowedRoles={['admin']}>
                            <AdminDashboard 
                                onLogout={handleLogout} 
                                positions={positions} 
                                setPositions={setPositions} 
                                candidates={candidates} 
                                setCandidates={setCandidates}
                                electionState={electionState}
                                setElectionState={setElectionState}
                            />
                        </ProtectedRoute>
                    } 
                />

                <Route 
                    path="/dashboard/*" 
                    element={
                        <ProtectedRoute userRole={userRole} allowedRoles={['user']}>
                            <UserDashboard 
                                onLogout={handleLogout} 
                                positions={positions} 
                                candidates={candidates}
                                electionState={electionState}
                                setElectionState={setElectionState}
                            />
                        </ProtectedRoute>
                    } 
                />
            </Routes>
        </div>
    );
}
