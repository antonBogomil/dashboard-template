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
import {useSelector} from "react-redux";
import {useDispatch} from 'react-redux'
import {changeLang} from "./store/actions";
import {useTranslation} from "react-i18next";
import transformLang from "./utils/transformLang";

const App = props => {
    const locale = useSelector((state) => state.locale);
    const dispatch = useDispatch();
    const {t, i18n} = useTranslation();

    function changeLanguage(id) {
        dispatch(changeLang(id));
        const langCode = langs.find((l) => {
            return l.id == id
        }).code;
        console.log(changeLang(id));
        i18n.changeLanguage(langCode);
    }

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
                        <Select options={langs} onChange={changeLanguage} selectedId={locale.id}/>
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