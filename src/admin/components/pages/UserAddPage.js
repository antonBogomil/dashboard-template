import React from 'react';
import WrappedPage from "../WrappedPage";
import {FormWithHook} from "../form/Form";
import {FORM_FIELD_TYPES} from "../../constants/const";
import {userAdd} from '../../settings/forms';
const settings = {
    title: "Add User",
};




const UserAddPage = () => {




    return (
        <>
            <FormWithHook settings={userAdd}/>
        </>
    );
};

export default WrappedPage(UserAddPage, settings);