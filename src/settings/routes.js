import React from "react";
import HomePage from "../components/pages/HomePage";
import UsersPage from "../components/pages/UsersPage";

export default [
    {
        path: '/',
        exact: true,
        action: () => <HomePage/>
    },
    {
        path: '/list',
        exact: true,
        action: () => <UsersPage/>
    },


]