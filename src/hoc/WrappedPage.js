import React from 'react';
import {NavLink, withRouter} from "react-router-dom";



const WrappedPage = (Page, title) => {
    return (props)=> {
        console.log(props);
        return (
            <>
                <div className='page-title'>
                    <h3>{title}</h3>
                    <a onClick={()=>{props.history.goBack()}}>Back</a>
                </div>
                <div className='page-content'>
                    <Page/>
                </div>
            </>
        )
    };
};

export default WrappedPage;