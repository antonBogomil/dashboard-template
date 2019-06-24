import React from 'react';
import Button from "./Button";
import {userActions} from "../../store/actions/user.actions";
import {withRouter} from "react-router-dom";

const Login = () => {
    return (
        <div>
            <h1>
                Login here
            </h1>
            <form>
                <Button onClick={()=>{userActions.login('admin','admin123')}}>Login</Button>
            </form>
        </div>
    );
};

export default withRouter(Login);