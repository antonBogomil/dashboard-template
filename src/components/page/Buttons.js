import React from 'react';
import Button from "../Button";
import WrappedPage from "../../hoc/WrappedPage";
import {useTranslation} from "react-i18next";

const Buttons = () => {
    const [t,i18n] = useTranslation();
    return (
        <div>
            <div>
                <Button onClick={()=>{i18n.changeLanguage('ru')}} >Change Lang</Button>
            </div>
        </div>
    );
};

export default WrappedPage(Buttons,'Buttons');