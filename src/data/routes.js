import Home from "../components/page/Home";
import React from "react";
import Buttons from "../components/page/Buttons";
import List from "../components/page/List";
console.log(List);
console.log(Home);
export default [
    {
        path: '/',
        exact: true,
        action: () => <Home/>
    },
    {
        path: '/list',
        exact: true,
        action: () => <List/>
    },
    {
        path: '/buttons',
        action: ()=><Buttons/>
    }

]