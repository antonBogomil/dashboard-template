import React from 'react';
import Icon from "./Icon";
import {ICONS} from "../constants";
import {transformForSelect} from "../../utils/transformForSelect";
import langs from "../settings/langs";
import Select from "./inputs/Select";
import {useDispatch, useSelector} from "react-redux";
import {changeLang} from "../../store/actions";
import {useTranslation} from "react-i18next";

const LanguagePanel = (props) => {
    const lang = useSelector((state) => state.lang);
    const [t,i18n]  = useTranslation();
    const dispatch = useDispatch();
    function handleChange(lang) {
        dispatch(changeLang(lang.code));
        i18n.changeLanguage(lang.code);
    }

    return (
        <div>
            <Icon name={ICONS.LANG}/>
            <Select options={transformForSelect(langs, 'id', 'title')} value={lang} onChange={handleChange}/>
        </div>
    );
};

export default LanguagePanel;