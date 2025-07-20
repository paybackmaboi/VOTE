import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

// Helper to manage class names
const classNames = (...classes) => classes.filter(Boolean).join(' ');

// Reusable Icon Components (using Unicode/HTML)
const Icon = ({ symbol, className }) => <span className={classNames("inline-block", className)}>{symbol}</span>;

const HomeIcon = () => <Icon symbol="🏠" className="mr-3" />;
const VotersIcon = () => <Icon symbol="👥" className="mr-3" />;
const ElectionsIcon = () => <Icon symbol="🗳️" className="mr-3" />;
const LogoutIcon = () => <Icon symbol="🚪" className="mr-3" />;
const MyVoteIcon = () => <Icon symbol="✅" className="mr-3" />;
const HelpIcon = () => <Icon symbol="❓" className="mr-3" />;
const RegisterIcon = () => <div className="bg-blue-100 text-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">👤</div>;
const VoteIcon = () => <div className="bg-green-100 text-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">✔️</div>;
const ResultsIcon = () => <div className="bg-purple-100 text-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">📊</div>;

// Header Component
const Header = ({ navigate }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNavigate = (page) => {
        navigate(page);
        setMobileMenuOpen(false);
    };
    
    const scrollTo = (id) => {
        navigate('home');
        setTimeout(() => {
             const element = document.getElementById(id);
             if (element) {
                 element.scrollIntoView({ behavior: 'smooth' });
             }
        }, 100);
        setMobileMenuOpen(false);
    };

    return (
        <header className="bg-white shadow-md fixed w-full z-50 top-0 transition-all duration-300">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <button onClick={() => handleNavigate('home')} className="text-2xl font-bold text-blue-600 cursor-pointer">SecureVote</button>
                <div className="hidden md:flex space-x-8">
                    <button onClick={() => scrollTo('home')} className="nav-link text-gray-600 hover:text-blue-600 transition duration-300 cursor-pointer">Home</button>
                    <button onClick={() => scrollTo('about')} className="nav-link text-gray-600 hover:text-blue-600 transition duration-300 cursor-pointer">About</button>
                    <button onClick={() => scrollTo('candidates')} className="nav-link text-gray-600 hover:text-blue-600 transition duration-300 cursor-pointer">Candidates</button>
                    <button onClick={() => scrollTo('contact')} className="nav-link text-gray-600 hover:text-blue-600 transition duration-300 cursor-pointer">Contact</button>
                </div>
                <button onClick={() => handleNavigate('login')} className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 font-semibold">Login to Vote</button>
                <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-gray-700 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </nav>
            <div className={classNames("md:hidden", { 'hidden': !isMobileMenuOpen })}>
                <button onClick={() => scrollTo('home')} className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-100 cursor-pointer">Home</button>
                <button onClick={() => scrollTo('about')} className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-100 cursor-pointer">About</button>
                <button onClick={() => scrollTo('candidates')} className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-100 cursor-pointer">Candidates</button>
                <button onClick={() => scrollTo('contact')} className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-100 cursor-pointer">Contact</button>
                <button onClick={() => handleNavigate('login')} className="w-full block py-3 px-4 text-sm bg-blue-500 text-white text-center font-bold">Login to Vote</button>
            </div>
        </header>
    );
};

// Footer Component
const Footer = () => (
    <footer id="contact" className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-12">
            <div className="grid md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-xl font-bold mb-4">SecureVote</h3>
                    <p className="text-gray-400">Making democracy accessible and secure for the digital age.</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                    <ul>
                        <li className="mb-2"><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
                        <li className="mb-2"><a href="#candidates" className="text-gray-400 hover:text-white">Candidates</a></li>
                        <li className="mb-2"><a href="#privacy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                        <li className="mb-2"><a href="#terms" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                    <p className="text-gray-400 mb-2">123 Election Ave, Mandaue City</p>
                    <p className="text-gray-400 mb-2">Email: contact@securevote.com</p>
                    <p className="text-gray-400">Phone: (123) 456-7890</p>
                </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500">
                <p>&copy; 2025 SecureVote. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
);


// HomePage Component
const HomePage = ({ navigate }) => {
    return (
        <>
            <Header navigate={navigate} />
            <main>
                <section id="home" className="hero-gradient text-white pt-32 pb-20" style={{background: `linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(124, 58, 237, 0.9) 100%), url('https://placehold.co/1920x1080/e0e0e0/ffffff?text=City+Hall') no-repeat center center/cover`}}>
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">A New Era of Digital Democracy</h1>
                        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-blue-100">Exercise your right to vote with our secure, transparent, and easy-to-use online platform. Your voice matters.</p>
                        <button onClick={() => navigate('login')} className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-100 transition duration-300 transform hover:scale-105">Cast Your Vote Now</button>
                    </div>
                </section>

                <section id="about" className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold section-title inline-block">How It Works</h2>
                            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Our platform ensures a fair and secure election process in three simple steps.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-10 text-center">
                            <div className="p-6">
                                <RegisterIcon />
                                <h3 className="text-xl font-semibold mb-2">Register & Verify</h3>
                                <p className="text-gray-500">Create your account and complete a quick, secure identity verification process to get started.</p>
                            </div>
                            <div className="p-6">
                                <VoteIcon />
                                <h3 className="text-xl font-semibold mb-2">Review & Vote</h3>
                                <p className="text-gray-500">Browse candidate profiles, learn about their platforms, and cast your anonymous vote with confidence.</p>
                            </div>
                            <div className="p-6">
                                <ResultsIcon />
                                <h3 className="text-xl font-semibold mb-2">See Real-time Results</h3>
                                <p className="text-gray-500">Once the voting period ends, view the transparent, publicly auditable results instantly.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="candidates" className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold section-title inline-block">Meet the Candidates</h2>
                            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Learn more about the individuals running for office.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden candidate-card transition duration-300">
                                <img src="https://placehold.co/400x400/3b82f6/ffffff?text=J.D." alt="Candidate Jane Doe" className="w-full h-56 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-blue-600">Jane Doe</h3>
                                    <p className="text-gray-500 mb-4">For Mayor</p>
                                    <p className="text-gray-700 mb-4">"I am committed to building a brighter, more prosperous future for our city through innovation and community collaboration."</p>
                                    <button className="text-blue-500 hover:underline font-semibold">Learn More &rarr;</button>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden candidate-card transition duration-300">
                                <img src="https://placehold.co/400x400/10b981/ffffff?text=J.S." alt="Candidate John Smith" className="w-full h-56 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-green-600">John Smith</h3>
                                    <p className="text-gray-500 mb-4">For Mayor</p>
                                    <p className="text-gray-700 mb-4">"With a focus on sustainable growth and transparent governance, I aim to create a city that works for everyone."</p>
                                    <button className="text-green-500 hover:underline font-semibold">Learn More &rarr;</button>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden candidate-card transition duration-300">
                                <img src="https://placehold.co/400x400/8b5cf6/ffffff?text=E.W." alt="Candidate Emily White" className="w-full h-56 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-purple-600">Emily White</h3>
                                    <p className="text-gray-500 mb-4">For City Council</p>
                                    <p className="text-gray-700 mb-4">"My goal is to enhance public services, support local businesses, and ensure every voice in our community is heard."</p>
                                    <button className="text-purple-500 hover:underline font-semibold">Learn More &rarr;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

// LoginPage Component
const LoginPage = ({ navigate, onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'admin123') {
            onLogin('admin');
            navigate('admin_dashboard');
        } else if (username === 'user' && password === 'user123') {
            onLogin('user');
            navigate('user_dashboard');
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
                    <button onClick={() => navigate('home')} className="text-sm text-blue-500 hover:underline">← Back to Home</button>
                </div>
            </div>
        </div>
    );
};

// AdminDashboard Component
const AdminDashboard = ({ onLogout }) => {
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
        <div className="flex h-screen bg-slate-100">
            <aside className="w-64 bg-gray-800 text-white flex flex-col">
                <div className="p-6 text-2xl font-bold border-b border-gray-700">SecureVote</div>
                <nav className="flex-1 p-4 space-y-2">
                    <button className="w-full text-left flex items-center px-4 py-2 bg-gray-900 rounded-lg"><HomeIcon />Dashboard</button>
                    <button className="w-full text-left flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg"><VotersIcon />Voters</button>
                    <button className="w-full text-left flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg"><ElectionsIcon />Elections</button>
                </nav>
                <div className="p-4 border-t border-gray-700">
                    <button onClick={onLogout} className="w-full flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg"><LogoutIcon />Logout</button>
                </div>
            </aside>
            <main className="flex-1 p-8 overflow-y-auto">
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
            </main>
        </div>
    );
};

// UserDashboard Component
const UserDashboard = ({ onLogout }) => {
    const [status, setStatus] = useState('You have not voted yet.');
    const [voted, setVoted] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCandidate, setSelectedCandidate] = useState('');

    const handleVoteClick = (candidate) => {
        if (voted) return;
        setSelectedCandidate(candidate);
        setModalOpen(true);
    };

    const confirmVote = () => {
        setVoted(true);
        setStatus(`You have voted for ${selectedCandidate}.`);
        setModalOpen(false);
    };

    const candidates = [
        { name: 'Jane Doe', quote: "I am committed to building a brighter, more prosperous future for our city through innovation and community collaboration.", color: 'blue', img: 'https://placehold.co/400x400/3b82f6/ffffff?text=J.D.' },
        { name: 'John Smith', quote: "With a focus on sustainable growth and transparent governance, I aim to create a city that works for everyone.", color: 'green', img: 'https://placehold.co/400x400/10b981/ffffff?text=J.S.' },
        { name: 'Emily White', quote: "My goal is to enhance public services, support local businesses, and ensure every voice in our community is heard.", color: 'purple', img: 'https://placehold.co/400x400/8b5cf6/ffffff?text=E.W.' },
    ];

    return (
        <>
            <div className="flex h-screen bg-slate-100">
                <aside className="w-64 bg-gray-800 text-white flex-col hidden sm:flex">
                    <div className="p-6 text-2xl font-bold border-b border-gray-700">SecureVote</div>
                    <nav className="flex-1 p-4 space-y-2">
                        <button className="w-full text-left flex items-center px-4 py-2 bg-gray-900 rounded-lg"><HomeIcon />Dashboard</button>
                        <button className="w-full text-left flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg"><MyVoteIcon />My Vote</button>
                        <button className="w-full text-left flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg"><HelpIcon />Help</button>
                    </nav>
                    <div className="p-4 border-t border-gray-700">
                        <button onClick={onLogout} className="w-full flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg"><LogoutIcon />Logout</button>
                    </div>
                </aside>
                <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Welcome, Voter!</h1>
                        <div className={classNames('text-sm font-bold px-4 py-2 rounded-full', {
                            'bg-yellow-100 text-yellow-800': !voted,
                            'bg-green-100 text-green-800': voted,
                        })}>{status}</div>
                    </div>
                    <div className="bg-blue-500 text-white p-8 rounded-2xl shadow-lg mb-8">
                        <h2 className="text-3xl font-bold mb-2">Election is Live!</h2>
                        <p className="text-blue-100 mb-6">Review the candidates below and cast your vote. Your voice makes a difference.</p>
                        <button disabled={voted} className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-100 transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
                            {voted ? 'Thank You For Voting' : 'Cast Your Vote Now'}
                        </button>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Candidates for Mayor</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {candidates.map(c => (
                            <div key={c.name} className="bg-white rounded-lg shadow-lg overflow-hidden candidate-card transition duration-300">
                                <img src={c.img} alt={`Candidate ${c.name}`} className="w-full h-56 object-cover" />
                                <div className="p-6">
                                    <h3 className={`text-2xl font-bold text-${c.color}-600`}>{c.name}</h3>
                                    <p className="text-gray-700 my-4">{c.quote}</p>
                                    <button onClick={() => handleVoteClick(c.name)} disabled={voted} className={`w-full bg-${c.color}-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-${c.color}-600 disabled:opacity-50 disabled:cursor-not-allowed`}>
                                        {voted ? 'Voted' : `Vote for ${c.name.split(' ')[0]}`}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
            {modalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-2xl text-center max-w-sm mx-4">
                        <h2 className="text-2xl font-bold mb-4">Confirm Your Vote</h2>
                        <p className="text-gray-600 mb-6">{`Are you sure you want to vote for ${selectedCandidate}? This action cannot be undone.`}</p>
                        <div className="flex justify-center gap-4">
                            <button onClick={() => setModalOpen(false)} className="bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-lg hover:bg-gray-400">Cancel</button>
                            <button onClick={confirmVote} className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700">Confirm</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};


// Main App Component
export default function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [userRole, setUserRole] = useState(null);

    const navigate = (page) => {
        window.scrollTo(0, 0);
        setCurrentPage(page);
    };

    const handleLogin = (role) => {
        setUserRole(role);
    };

    const handleLogout = () => {
        setUserRole(null);
        navigate('login');
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'login':
                return <LoginPage navigate={navigate} onLogin={handleLogin} />;
            case 'admin_dashboard':
                return userRole === 'admin' ? <AdminDashboard onLogout={handleLogout} /> : <LoginPage navigate={navigate} onLogin={handleLogin} />;
            case 'user_dashboard':
                return userRole === 'user' ? <UserDashboard onLogout={handleLogout} /> : <LoginPage navigate={navigate} onLogin={handleLogin} />;
            case 'home':
            default:
                return <HomePage navigate={navigate} />;
        }
    };

    return <div className="font-sans bg-slate-50">{renderPage()}</div>;
}
