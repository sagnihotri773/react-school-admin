import React from 'react';

const Layout = ({ header, sidebar, children, isMobile}) => {
    return (
        
        <div className={`${!isMobile ? 'grid' : ''} min-h-screen w-full overflow-hidden lg:grid-cols-[210px_1fr] theam_bg`} >
            {sidebar && sidebar}
            <div className="flex flex-col">
                {header && header}
                {children}
            </div>
        </div>
    );
};

export default Layout;