import React from 'react';
import WrappedPage from "../../hoc/WrappedPage";
import {withRouter} from "react-router-dom";

const List = (props) => {
    return (
        <div>
          List
        </div>
    );
};

export default withRouter(WrappedPage(List,'List Page'));