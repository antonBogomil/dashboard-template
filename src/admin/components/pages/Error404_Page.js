import React from 'react';
import WrappedErrorPage from "../WrappedErrorPage";
const info = {
    code: 404,
    message: 'MESSAGE_404'
};
const Error404Page = (props) => {
    return (
        <div>
        </div>
    );
};

export default WrappedErrorPage(Error404Page,info);