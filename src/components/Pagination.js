import Button from "./Button";
import React from "react";
import {useTranslation} from "react-i18next";


export const Pagination = ({pagesNum, active, onClick}) => {
    const [t] = useTranslation();
    return (
        <nav className='pagination'>
            <span className='p-item'>
                <Button variant={active > 0 ? "primary" : "disabled"}
                          onClick={active > 0 ? ()=>{onClick(-1)} : null}>{t('BTN_PREV')}</Button>
            </span>
            {createButtons(pagesNum, active, onClick)}
            <span className='p-item'>
                <Button variant={active < pagesNum - 1 ? "primary" : "disabled"}
                        onClick={active < pagesNum - 1 ? ()=>{onClick()}: null}>{t('BTN_NEXT')}</Button>
            </span>
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
            <span key={i} className='p-item'>
                 <Button key={i} variant={i === active ? "primary" : "secondary"} onClick={() => {
                     onClick(i)
                 }}>{(i + 1)}</Button>
            </span>
        )
    }
    return array;
};