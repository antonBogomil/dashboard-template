import React from 'react';
import './styles/app.scss';
import Input from "./components/Input";
import Menu from "./components/Menu";
import menu from "./data/menu";
import {ICONS} from "./constants";
import getIcons from "./utils/getIcons";
import PageElements from "./components/page/PageElements";
const App = props => {
    return (
        <div className='app'>
            <header className='header'>
                <div className='header-block header-block-search'>
                    <form className='form form-search' id='search'>
                        <Input value={''} onChange={()=>{}} name={'search'} placeholder={'Search'} icon={getIcons(ICONS.SEARCH)} />
                    </form>
                </div>
                <div className='header-block header-block-user'>

                </div>
            </header>
            <aside className='sidebar'>
                <div className='sidebar-header'>
                   <div className='brand'>
                       <span>Company name</span>
                   </div>
                </div>
                <nav className='sidebar-nav'>
                    <Menu data={menu}/>
                </nav>
            </aside>
            <main className='main'>
                <PageElements/>
            </main>
        </div>
    );
};


export default App;