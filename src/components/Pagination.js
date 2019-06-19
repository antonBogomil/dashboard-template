import Button from "./Button";
import React, {useEffect} from "react";
import {useTranslation} from "react-i18next";

const PAGINATION_STEP = 2;

export const Pagination = ({pagesNum, activePage, onClick}) => {
    const [t] = useTranslation();
    return (
        <nav className='pagination'>
            <ItemButton disabled={activePage === 0} n={activePage - 1} onClick={onClick} isActive={false}>
                {t('BTN_PREV')}
            </ItemButton>
            <>
                <ItemButton n={0} onClick={onClick} isActive={activePage === 0}>1</ItemButton>
                {activePage + 1 > PAGINATION_STEP * 2 &&
                <ItemButton onClick={onClick} n={activePage - PAGINATION_STEP} isActive={false}>...</ItemButton>}
            </>
            {pagesNum > PAGINATION_STEP && middleButtons(activePage, pagesNum, onClick)}
            <>
                {activePage < pagesNum - PAGINATION_STEP * 2 &&
                <ItemButton onClick={onClick} n={activePage + PAGINATION_STEP * 2} isActive={false}>...</ItemButton>}
                <ItemButton n={pagesNum - 1} onClick={onClick} isActive={activePage === pagesNum - 1}>
                    {pagesNum}
                </ItemButton>
            </>
            <ItemButton onClick={onClick} disabled={activePage === pagesNum - 1} n={activePage + 1} isActive={false}>
                {t('BTN_NEXT')}
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
                    onClick={() => disabled ? null : onClick(n)}>{children}</Button>
        </div>
    )
};

const middleButtons = function (activePage, pagesAmount, onClick) {
    const range = getRange(activePage, pagesAmount - 1, PAGINATION_STEP);
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

function getRange(n, max, step) {
    const range = [];
    let from = n - step, to = n + step;
    if (from < 1) {
        to = step * 2;
        from = 0;
    }
    if (to >= max) {
        from = max - step * 2;
        to = max - 1;
    }
    for (let i = from; i <= to; i++) {
        if (i > 0) {
            range.push(i);
        }
    }
    return range;
}