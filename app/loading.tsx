import React from 'react';
// import './loading.css';

const Loading: React.FC = () => {
    return (
        <div>
            <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>
        </div>
    );
};

export default Loading;