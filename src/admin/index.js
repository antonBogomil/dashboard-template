import React from 'react';
import Input from "./components/inputs/Input";
import getIcons from "../utils/getIcons";
import {ICONS} from "./constants";
import logo from "./assets/logo_200x200.png";
import menu from "./settings/menu";
import AdminRouting from "./components/Routing";
import Menu from "./components/Menu";
import {useTranslation} from "react-i18next";
import {userActions} from "../store/actions";
import Icon from "./components/Icon";
import './styles/app.scss'
import LanguagePanel from "./components/LanguagePanel";
const Admin = () => {
    const {t,i18n} = useTranslation();
    return (
        <>
            <header className='header'>
                <div className='header-block header-block-search'>
                    <form className='form form-search' id='search'>
                        <Input value={''} onChange={() => {
                        }} name={'search'} placeholder={'Search'} icon={() => {
                            return getIcons(ICONS.SEARCH)
                        }}/>
                    </form>
                </div>
                <div className='header-block header-block-user'>
                    <div className='lang-panel'>
                        <LanguagePanel i18n={i18n}/>
                    </div>
                </div>
            </header>
            <aside className='sidebar'>
               <div className='sidebar-wrapper'>
                   <div className='sidebar-header'>
                       <div className='brand'>
                           <img alt={'logo'} src={logo} className='logo'/>
                       </div>
                   </div>
                   <nav className='sidebar-nav'>
                       <Menu data={menu} parentUrl='/admin'/>
                   </nav>
                   <div className='sidebar-footer'>
                       <div className='menu'>
                           <div className='menu-item'>
                               <a onClick={()=>{userActions.logout()}}>
                                   <Icon name={ICONS.EXIT}/>
                                   {t('LOGOUT')}
                               </a>
                           </div>
                       </div>
                   </div>
               </div>
            </aside>
            <main className='main'>
                <div className='container'>
                    <AdminRouting/>
                </div>
            </main>
        </>
    );
};

export default Admin;