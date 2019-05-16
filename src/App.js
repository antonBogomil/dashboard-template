import React from 'react';
import PropTypes from 'prop-types';
import './styles/app.scss';
const App = props => {
    return (
        <div className='app'>
            <header className='header'>
                <div className='header-block header-block-search'>
                    <form className='form form-search' id='search'>

                    </form>
                </div>
                <div className='header-block header-block-user'>

                </div>
            </header>
            <aside className='sidebar'>

            </aside>
        </div>
    );
};


export default App;