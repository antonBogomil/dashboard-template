import React from 'react';

const Error = ({message}) => {
    return (
        <div className='error-page-container'>
            {message}
        </div>
    );
};

export default Error;