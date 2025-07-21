import React from 'react';

const HelpView = () => {
    return (
        <div className="w-full max-w-4xl mx-auto mt-10">
            <h1 className="text-3xl font-bold text-center mb-8">Help Center & FAQ</h1>
            <div className="bg-white p-8 rounded-xl shadow-md space-y-8">
                
                <div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-4">The Voting Process</h4>
                    <div className="space-y-4">
                        <div>
                            <p className="font-semibold">Q: How do I cast my vote?</p>
                            <p className="text-gray-600 mt-1">A: It's a simple, step-by-step process:
                                <ol className="list-decimal list-inside mt-2 pl-4">
                                    <li>Navigate to the <strong>Vote Now</strong> menu.</li>
                                    <li>Enter your official School ID number for verification.</li>
                                    <li>Once verified, you will be presented with the ballot for the first position (e.g., President).</li>
                                    <li>Review the candidates and their platforms, then click on the candidate you wish to vote for.</li>
                                    <li>Click the "Next" button to proceed to the next position.</li>
                                    <li>After voting for the final position, click the "Cast Final Vote" button. Your vote is now securely submitted.</li>
                                </ol>
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold">Q: Can I change my vote after I've submitted it?</p>
                            <p className="text-gray-600 mt-1">A: No. To ensure the integrity and security of the election, all ballots are final once they are cast. Please review your selections carefully before submitting.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-4">Troubleshooting</h4>
                    <div className="space-y-4">
                        <div>
                            <p className="font-semibold">Q: My School ID is not being recognized. What should I do?</p>
                            <p className="text-gray-600 mt-1">A: Please take the following steps:
                                <ol className="list-decimal list-inside mt-2 pl-4">
                                    <li>Double-check that you have entered your ID number correctly, including any dashes (e.g., `2024-1001`).</li>
                                    <li>Ensure you are an officially enrolled student for the current academic term.</li>
                                    <li>If you are an enrolled student and your ID is still not working, please contact ROY ESTORCO for assistance.</li>
                                </ol>
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold">Q: What happens if the election ends while I'm still voting?</p>
                            <p className="text-gray-600 mt-1">A: The system will not allow you to submit your vote after the official election time has ended. It's important to complete your ballot before the deadline shown on the admin-controlled timer.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-4">Security & Privacy</h4>
                    <div className="space-y-4">
                        <div>
                            <p className="font-semibold">Q: Is my vote anonymous?</p>
                            <p className="text-gray-600 mt-1">A: Yes. Your vote is completely anonymous. The system uses your School ID only to verify that you are eligible to vote and to ensure you only vote once. Your identity is separated from your ballot, and no one, including administrators, can see who you voted for.</p>
                        </div>
                        <div>
                            <p className="font-semibold">Q: How do I know the results are accurate?</p>
                            <p className="text-gray-600 mt-1">A: The system logs every vote anonymously and tabulates the results automatically, which minimizes human error. The final results will be published by the election administrator only after the voting period has officially ended.</p>
                        </div>
                    </div>
                </div>
                
                <div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h4>
                    <div className="space-y-4">
                        <div>
                            <p className="font-semibold">Q: I have a problem that isn't listed here. Who can I contact?</p>
                            <p className="text-gray-600 mt-1">A: For any issues regarding voter eligibility, candidate concerns, or official election rules, please reach out directly to the Student Commission on Elections at <strong>roy.estorco123@gmail.com</strong>.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HelpView;
