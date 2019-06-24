import React from 'react';
import PropTypes from 'prop-types';
import '../styles/preloader.scss';

const Preloader = ({size = 'normal'}) => {
    return (
        <div className='preloader-container'>
            <div className={`preloader preloader-${size}`}>
                <div className="lds-css ng-scope">
                    <div  className="lds-dual-ring">
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Preloader.propTypes = {
    size: PropTypes.oneOf(['small','normal','large'])
};

export default Preloader;