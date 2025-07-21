import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'admin123') {
            onLogin('admin');
        } else if (username === 'user' && password === 'user123') {
            onLogin('user');
        } else {
            setError('Invalid username or password. Please try again.');
        }
    };

    return (
        <div className="login-gradient flex items-center justify-center min-h-screen bg-gray-100" style={{background: 'linear-gradient(135deg, #60a5fa, #a78bfa)'}}>
            <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">SecureVote Login</h1>
                    <p className="text-gray-500 mt-2">Enter your credentials to access your dashboard.</p>
                </div>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username / ID</label>
                        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="e.g., admin or user" className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="e.g., admin123 or user123" className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" required />
                    </div>
                    {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
                    <div>
                        <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">Login</button>
                    </div>
                </form>
                <div className="text-center mt-6">
                    <Link to="/" className="text-sm text-blue-500 hover:underline">← Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;