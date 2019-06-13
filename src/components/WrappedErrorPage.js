import React from 'react';
import Button from "./Button";
import {useTranslation} from "react-i18next";
import getIcons from "../utils/getIcons";
import {ICONS} from "../constants";
const WrappedErrorPage = (Page, info) => {
    const WrappedPage = (props) => {
        const [t] = useTranslation();
        const {code, message} = info;
        return (
            <div className='error-page-container'>
                <h1 className='error-code'>{code}</h1>
                <h2 className='error-title'>{t(message)}</h2>
                <Page/>
                <div className=''>
                    <Button variant={'primary'} to={'/'}>
                        {getIcons(ICONS.LEFT)}
                        {t('BTN_BACK_TO')}
                    </Button>
                </div>
            </div>
        );
    };
    return WrappedPage;
};

export default WrappedErrorPage;