import React from 'react';
import Input from "./components/form/Input";
import getIcons from "../utils/getIcons";
import {ICONS} from "./constants";
import langs from "./settings/langs";
import logo from "./assets/logo_200x200.png";
import menu from "./settings/menu";
import AdminRouting from "./components/Routing";
import Select from "./components/form/Select";
import Menu from "./components/Menu";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {changeLang, userActions} from "../store/actions";
import Icon from "./components/Icon";
import './styles/app.scss'
const Admin = () => {
    const lang = useSelector((state) => state.lang);
    const dispatch = useDispatch();
    const {t, i18n} = useTranslation();

    function changeLanguage(id) {
        dispatch(changeLang(id));
        const langCode = langs.find((l) => {
            return l.id === id
        }).code;
        i18n.changeLanguage(langCode);
    }

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
                        <Icon name={ICONS.LANG}/>
                        <Select options={langs} onChange={changeLanguage} selectedId={lang.id}/>
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