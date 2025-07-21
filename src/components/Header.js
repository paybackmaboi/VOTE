import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const classNames = (...classes) => classes.filter(Boolean).join(' ');

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    
    const scrollTo = (id) => {
        navigate('/');
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
                <Link to="/" className="text-2xl font-bold text-blue-600">SecureVote</Link>
                <div className="hidden md:flex space-x-8">
                    <button onClick={() => scrollTo('home')} className="nav-link text-gray-600 hover:text-blue-600 transition duration-300">Home</button>
                    <button onClick={() => scrollTo('about')} className="nav-link text-gray-600 hover:text-blue-600 transition duration-300">About</button>
                    <button onClick={() => scrollTo('candidates')} className="nav-link text-gray-600 hover:text-blue-600 transition duration-300">Candidates</button>
                    <button onClick={() => scrollTo('contact')} className="nav-link text-gray-600 hover:text-blue-600 transition duration-300">Contact</button>
                </div>
                <Link to="/login" className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 font-semibold">Login to Vote</Link>
                <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-gray-700 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </nav>
            <div className={classNames("md:hidden", { 'hidden': !isMobileMenuOpen })}>
                <button onClick={() => scrollTo('home')} className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-100">Home</button>
                <button onClick={() => scrollTo('about')} className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-100">About</button>
                <button onClick={() => scrollTo('candidates')} className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-100">Candidates</button>
                <button onClick={() => scrollTo('contact')} className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-100">Contact</button>
                <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="w-full block py-3 px-4 text-sm bg-blue-500 text-white text-center font-bold">Login to Vote</Link>
            </div>
        </header>
    );
};

export default Header;