import React from 'react';
import './styles/app.scss';
import Input from "./components/form/Input";
import Menu from "./components/Menu";
import menu from "./settings/menu";
import {ICONS} from "./constants";
import getIcons from "./utils/getIcons";
import Routing from "./components/Routing";
import logo from './assets/logo_200x200.png';
import Select from "./components/form/Select";
import langs from "./settings/langs";
import {changeLang} from "./i18n";
import {useTranslation} from "react-i18next";

const App = props => {
    const {t,i18n} = useTranslation();
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
                    <div className='lang-panel'>
                        <Select options={langs} onChange={(id)=>{changeLang(id,i18n)}} defaultValue={{id:1}}/>
                    </div>
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
                <div className='container'>
                    <Routing/>
                </div>
            </main>
        </>
    );
};


export default App;