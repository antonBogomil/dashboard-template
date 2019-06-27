import React from 'react';
import Icon from "./Icon";
import {ICONS} from "../constants";
import {transformForSelect} from "../../utils/transformForSelect";
import langs from "../settings/langs";
import Select from "./inputs/Select";
import {useDispatch, useSelector} from "react-redux";
import {changeLang} from "../../store/actions";
import {useTranslation} from "react-i18next";
import Button from "./Button";

const LanguagePanel = (props) => {
    const lang = useSelector((state) => state.lang);
    const [t,i18n]  = useTranslation();
    const dispatch = useDispatch();
    function handleChange(lang) {
        dispatch(changeLang(lang.code));
        i18n.changeLanguage(lang.code);
    }

    return (
        <div className='lang-panel'>
            <Select options={transformForSelect(langs, 'id', 'title')} value={lang} selectedValue={{value: lang.id,label: lang.title}} onChange={handleChange}>
                <Icon name={ICONS.LANG}/>
            </Select>
        </div>
    );
};

export default LanguagePanel;