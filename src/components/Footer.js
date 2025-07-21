import React from 'react';

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

export default Footer;