import React from "react";
import HomePage from "../components/pages/HomePage";
import UsersPage from "../components/pages/UsersPage";
import WrappedErrorPage from "../components/WrappedErrorPage";
import Error404Page from "../components/pages/Error404_Page";
import UserPage from "../components/pages/UserPage";

export default [
    {
        path: '/',
        exact: true,
        action: () => <HomePage/>
    },
    {
        path: '/users',
        exact: true,
        action: () => <UsersPage/>
    },
    {
        path: '/users/:id',
        exact: true,
        action: () => <UserPage/>
    },
    {
        path: '/users/add',
        exact: true,
        action: () => <UserPage/>
    },
    {
        path: '',
        exact: false,
        action: () => <Error404Page/>
    },
]