import React from "react";
import HomePage from "../components/pages/HomePage";
import UsersPage from "../components/pages/UsersPage";
import Error404Page from "../components/pages/Error404_Page";
import UserPage from "../components/pages/UserPage";
import UFormsPage from "../components/pages/UFormsPage";
import UButtonsPage from "../components/pages/UButtonsPage";

export default [
    {
        path: '/',
        exact: true,
        action: () => <HomePage/>
    },
    {
        path: '/users/list',
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
        path: '/ui/buttons',
        exact: true,
        action: () => <UButtonsPage/>
    },
    {
        path: '/ui/forms',
        exact: true,
        action: () => <UFormsPage/>
    },
    {
        path: '',
        exact: false,
        action: () => <Error404Page/>
    },
]