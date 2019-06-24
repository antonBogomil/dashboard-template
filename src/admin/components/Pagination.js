import Button from "./Button";
import React, {useEffect} from "react";
import {useTranslation} from "react-i18next";
import getIcons from "../../utils/getIcons";
import {ICONS} from "../constants/const";

const PAGINATION_STEP = 2;

export const Pagination = ({pages, activePage, onClick}) => {
    const [t] = useTranslation();
    return (
        <nav className='pagination'>
            <ItemButton n={0} onClick={onClick} disabled={activePage === 0}>{getIcons(ICONS.FIRST_PAGE)}</ItemButton>
            <ItemButton disabled={activePage === 0} n={activePage - 1} onClick={onClick} isActive={false}>
                {getIcons(ICONS.LEFT_PAGE)}
            </ItemButton>


            <ItemButton disabled={false} isActive={true} onClick={()=>{}}>
                {activePage+1} / {pages}
            </ItemButton>



            <ItemButton onClick={onClick} disabled={activePage === pages - 1} n={activePage + 1} isActive={false}>
                {getIcons(ICONS.RIGHT_PAGE)}
            </ItemButton>
            <ItemButton n={pages - 1} onClick={onClick} isActive={false} disabled={activePage === pages - 1}>
                {getIcons(ICONS.LAST_PAGE)}
            </ItemButton>
        </nav>
    )
};
Pagination.defaultProps = {
    pagesNum: 1,
    activePage: 0,
};

const ItemButton = ({n, onClick, isActive, disabled, children}) => {
    return (
        <div className={'p-item'}>
            <Button variant={disabled ? "disabled" : isActive ? "primary" : "secondary"}
                    onClick={() => disabled ? null : onClick && onClick(n)}>{children}</Button>
        </div>
    )
};

const middleButtons = function (activePage, pages, onClick) {
    const range = getRange(activePage, pages, PAGINATION_STEP);
    return (
        <>
            {range.map((pageNumber, i) => {
                return (
                    <ItemButton isActive={pageNumber === activePage} key={i} onClick={onClick} n={pageNumber}>
                        {pageNumber + 1}
                    </ItemButton>
                )
            })}
        </>
    )
};

function getRange(x, max, step) {
    const range = [];


    if (x===0){

    }

    for (let i = 0; i < max; i++) {
        if (i>step){
            break;
        }
        range.push(i);

    }
    return range;
}