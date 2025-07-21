import React from 'react';

const classNames = (...classes) => classes.filter(Boolean).join(' ');

const Icon = ({ symbol, className }) => <span className={classNames("inline-block", className)}>{symbol}</span>;

export const HomeIcon = () => <Icon symbol="🏠" className="mr-3" />;
export const VotersIcon = () => <Icon symbol="👥" className="mr-3" />;
export const ElectionsIcon = () => <Icon symbol="🗳️" className="mr-3" />;
export const PositionsIcon = () => <Icon symbol="⚙️" className="mr-3" />;
export const CandidatesIcon = () => <Icon symbol="🧑‍💼" className="mr-3" />;
export const ResultsIcon = () => <Icon symbol="📊" className="mr-3" />;
export const LogoutIcon = () => <Icon symbol="🚪" className="mr-3" />;
export const MyVoteIcon = () => <Icon symbol="✅" className="mr-3" />;
export const HelpIcon = () => <Icon symbol="❓" className="mr-3" />;
export const RegisterIcon = () => <div className="bg-blue-100 text-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">👤</div>;
export const VoteIcon = () => <div className="bg-green-100 text-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">✔️</div>;
export const ResultsIconDisplay = () => <div className="bg-purple-100 text-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">📊</div>;

