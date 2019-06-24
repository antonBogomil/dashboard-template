import React from 'react';
import './ripple.scss';

const Ripple = ({children}) => {
    return (
        <div className='rippleWrapper'
             onClick={(e) => {
                 let t = e.currentTarget;
                 console.log(t);
             }}
        >
            {children}
        </div>
    );
};

export default Ripple;