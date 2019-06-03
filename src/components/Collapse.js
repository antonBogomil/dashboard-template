import React from 'react';

const Collapse = ({children}) => {
    return (
        <div className='collapse-panel'>
            {children}
        </div>
    );
};
export const CollapseItem = ({children})=>{
    return (
        <div className='collapse-item'>
            {children}
        </div>
    )
};
 export const CollapseContent = ({children})=>{
    return (
        <div className='collapse-content'>
            {children}
        </div>
    )
};
export default Collapse;