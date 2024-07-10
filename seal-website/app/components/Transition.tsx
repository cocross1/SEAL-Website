'use client'
import React from 'react';

interface TransitionProps {
    color1: string;
    color2: string;
}

const Transition: React.FC<TransitionProps> = ({ color1, color2 }) => {
    const gradientStyle = {
        background: `linear-gradient(to bottom, ${color1}, ${color2})`,
        width: '100%',
        height: '100px'
    };

    return (
        <div style={gradientStyle}>
        </div>
    );
};

export default Transition;
