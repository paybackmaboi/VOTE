
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { RegisterIcon, VoteIcon, ResultsIconDisplay } from '../components/icons';

const HomePage = () => {
    return (
        <>
            <Header />
            <main>
                <section id="home" className="hero-gradient text-white pt-32 pb-20" style={{background: `linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(124, 58, 237, 0.9) 100%), url('https://placehold.co/1920x1080/e0e0e0/ffffff?text=City+Hall') no-repeat center center/cover`}}>
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">A New Era of Digital Democracy</h1>
                        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-blue-100">Exercise your right to vote with our secure, transparent, and easy-to-use online platform. Your voice matters.</p>
                        <Link to="/login" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-100 transition duration-300 transform hover:scale-105">Cast Your Vote Now</Link>
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
                                <ResultsIconDisplay />
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

export default HomePage;