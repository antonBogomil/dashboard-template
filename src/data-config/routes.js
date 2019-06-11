import Home from "../components/page/Home";
import React from "react";
import Buttons from "../components/page/Buttons";
import List from "../components/page/List";
import {configUsers} from "./listConfig"
export default [
    {
        path: '/',
        exact: true,
        action: () => <Home/>
    },
    {
        path: '/list',
        exact: true,
        action: () => <List config={configUsers}/>
    },
    {
        path: '/buttons',
        action: ()=><Buttons/>
    }

]