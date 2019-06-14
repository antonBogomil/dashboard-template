import React from 'react';

const CardBlock = ({children}) => {
    return (
        <div className='card-block'>
            {children}
        </div>
    );
};


CardBlock.Title = ({children}) => {
    return <div className='card-block-title'>{children}</div>
};
CardBlock.Body = ({children}) => {
    return <section className='card-block-body'>{children}</section>
};
export default CardBlock;