import React from 'react';
import Page from "../WrappedPage";
const settings = {
    title: "PAGE_TITLE_HOME",
};

const HomePage = ({settings,children}) => {
    return (
            <div>
                home page content
            </div>
    );
};

export default Page(HomePage,settings);