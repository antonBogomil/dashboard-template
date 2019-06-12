import React from 'react';
import {withRouter} from "react-router-dom";
import {useTranslation} from "react-i18next";

const WrappedPage = (Page, settings) => {
    const {title,titleDesc} = settings;
    let PageWithHistory = (props) => {
        const [t] = useTranslation();
        return (
            <>
                {/*<div>*/}
                {/*<Button variant={"secondary"} onClick={() => {*/}
                {/*if (props.history) {*/}
                {/*props.history.goBack();*/}
                {/*} else {*/}
                {/*props.history.push('/');*/}
                {/*}*/}
                {/*}}>*/}
                {/*{t('BTN_BACK')}*/}
                {/*</Button>*/}
                {/*</div>*/}
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