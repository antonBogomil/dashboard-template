import React from 'react';
import {withRouter} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useFetch} from "../api/api";
import Preloader from "./Preloader";

const WrappedPage = (Page, settings) => {
    const {title,titleDesc,dataUrl} = settings;
    let PageWithHistory = (props) => {
        const [data,loading,error] = useFetch(dataUrl,{});
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
                    {loading && <Preloader/>}
                    {error && <p className='text-danger'>Error..</p>}
                    {data && <Page {...props} data={data} />}
                </div>
            </>
        )
    };
    PageWithHistory = withRouter(PageWithHistory);
    return PageWithHistory
};

export default WrappedPage;