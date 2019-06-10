import React from 'react';
import './styles/app.scss';
import Input from "./components/Input";
import Menu from "./components/Menu";
import menu from "./data/menu";
import {ICONS} from "./constants";
import getIcons from "./utils/getIcons";
import Buttons from "./components/page/Buttons";
import Routing from "./components/Routing";
import logo from './assets/logo_200x200.png';

const App = props => {
    return (
        <>

            <header className='header'>
                <div className='header-block header-block-search'>
                    <form className='form form-search' id='search'>
                        <Input value={''} onChange={() => {
                        }} name={'search'} placeholder={'Search'} icon={getIcons(ICONS.SEARCH)}/>
                    </form>
                </div>
                <div className='header-block header-block-user'>

                </div>
            </header>
            <aside className='sidebar'>
                <div className='sidebar-header'>
                    <div className='brand'>
                        <img src={logo} className='logo'/>
                        {/*<span>Company name</span>*/}
                    </div>
                </div>
                <nav className='sidebar-nav'>
                    <Menu data={menu}/>
                </nav>
            </aside>
            <main className='main'>
                <div className='content'>
                    <Routing/>
                </div>
            </main>
        </>
    );
};


export default App;