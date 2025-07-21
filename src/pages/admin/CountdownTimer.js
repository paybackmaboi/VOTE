import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ endTime, onEnd }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(endTime) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            const newTimeLeft = calculateTimeLeft();
            setTimeLeft(newTimeLeft);
            if (!Object.keys(newTimeLeft).length) {
                onEnd();
            }
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div className="text-4xl font-bold text-center text-blue-600">
            {timeLeft.hours !== undefined ? (
                <span>
                    {String(timeLeft.hours).padStart(2, '0')}:
                    {String(timeLeft.minutes).padStart(2, '0')}:
                    {String(timeLeft.seconds).padStart(2, '0')}
                </span>
            ) : (
                <span>Time's up!</span>
            )}
        </div>
    );
};

export default CountdownTimer;
