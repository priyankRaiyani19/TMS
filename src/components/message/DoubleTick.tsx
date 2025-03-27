import React from 'react';

interface DoubleTickProps {
    isRead: boolean;
}

const DoubleTick: React.FC<DoubleTickProps> = () => (
    <div className="flex items-center">
        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.7676 1.49807L4.23424 8.03147L1.5 5.29723" 
                  stroke={"#04A4F4"}
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
            <path d="M14.5 1.49807L7.96661 8.03147L6.7002 6.76506" 
                  stroke={"#04A4F4"}
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
        </svg>
    </div>
);

export default DoubleTick; 