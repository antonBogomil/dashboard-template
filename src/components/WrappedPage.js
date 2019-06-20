import React from 'react';
import {withRouter} from "react-router-dom";
import {useTranslation} from "react-i18next";
import Button from "./Button";
import getIcons from "../utils/getIcons";
import {ICONS} from "../constants";

const WrappedPage = (Page, settings) => {
    const {title, titleDesc, back} = settings;
    let PageWithHistory = (props) => {
        const [t] = useTranslation();
        return (
            <>
                {back &&
                <div className='page-top-panel'>
                    <Button variant={"secondary"} onClick={() => {
                        if (props.history) {
                            props.history.goBack();
                        } else {
                            props.history.push('/');
                        }
                    }}>
                        {getIcons(ICONS.LEFT_PAGE)}
                        {t('BTN_BACK')}

                    </Button>
                </div>
                }

                <div className='page-title'>
                    <h3>{t(title)}</h3>
                    {titleDesc && <p className='title-description'>{t(titleDesc)}</p>}
                </div>
                <div className='page-content'>
                    <Page {...props}/>
                </div>
            </>
        )
    };
    PageWithHistory = withRouter(PageWithHistory);
    return PageWithHistory
};

export default WrappedPage;