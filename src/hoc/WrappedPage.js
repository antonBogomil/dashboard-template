import React from 'react';
import {NavLink, withRouter} from "react-router-dom";
import Button from "../components/Button";
import { useTranslation } from 'react-i18next';

const WrappedPage = (Page, title) => {
    let PageWithHistory = (props) => {
        const [t] = useTranslation();
        return (
            <>
                <div>
                    <Button variant={"secondary"} onClick={() => {
                        if (props.history) {
                            props.history.goBack();
                        } else {
                            props.history.push('/');
                        }
                    }}>
                        {t('BTN_BACK')}
                    </Button>
                </div>
                <div className='page-title'>
                    <h3>{title}</h3>
                </div>
                <div className='page-content'>
                    <Page/>
                </div>
            </>
        )
    };
    PageWithHistory = withRouter(PageWithHistory);
    return PageWithHistory
};

export default WrappedPage;