import React from 'react';
import Sidebar from '../components/common/Sidebar';

interface PageLayoutProps {
    children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar />
            
            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                <div className="flex-1 p-6">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default PageLayout; 