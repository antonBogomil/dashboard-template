import Button from "./Button";
import React from "react";
import {useTranslation} from "react-i18next";


export const Pagination = ({pagesNum, active, onClick}) => {
    const [t] = useTranslation();
    return (
        <nav className='pagination'>
            <Button variant={active > 0 ? "primary" : "disabled"}
                    onClick={active > 0 ? ()=>{onClick(-1)} : null}>{t('BTN_PREV')}</Button>
            {createButtons(pagesNum, active, onClick)}
            <Button variant={active < pagesNum - 1 ? "primary" : "disabled"}
                    onClick={active < pagesNum - 1 ? ()=>{onClick()}: null}>{t('BTN_NEXT')}</Button>

        </nav>
    )
};
Pagination.defaultProps = {
    pagesNum: 1,
    active: 0,
    onClick: (i) => {
        console.log('go to page-' + i);
    }
};

const createButtons = function (n, active, onClick) {
    const array = [];
    for (let i = 0; i < n; i++) {
        array.push(
            <Button key={i} variant={i === active ? "primary" : "secondary"} onClick={() => {
                onClick(i)
            }}>{(i + 1)}</Button>
        )
    }
    return array;
};