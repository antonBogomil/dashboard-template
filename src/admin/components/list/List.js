import React, {useState, useEffect, useReducer} from 'react';
import PropTypes from 'prop-types';
import {ICONS, LIST_COLUMN_TYPE} from "../../constants";
import '../../styles/list.scss';
import {Pagination} from "../Pagination";
import CardBlock from "../CardBlock";
import Preloader from "../Preloader";
import {getTotalPages, sliceItems} from "./utils";
import listReducer, {LIST_ACTIONS} from "./reducer";
import {ListTitles, ListBody} from "./List.elements";
import {useTranslation} from "react-i18next";
import {userService} from "../../_service";

const List = ({settings}) => {
    const {fields, editPage} = settings;
    const [t] = useTranslation();
    const initialState = {
        page: 0,
        rows: settings.rows,
        total: 0,
        items: [],
        loading: true,
        error: false,
        initialized: false,
        selected: []
    };
    const [state, dispatch] = useReducer(listReducer, initialState);
    const {page, initialized, error, items, rows, total, selected} = state;
    useEffect(() => {
        // try {
        //     getData(settings.dataUrl, {}, settings.paging ? setPageWithPaging : setPage,
        //         (e) => {
        //             dispatch({type: LIST_ACTIONS.DATA_ERROR});
        //         })
        // } catch (e) {
        //     dispatch({type: LIST_ACTIONS.DATA_ERROR})
        // }

        userService.getList(settings.dataUrl, {}).then((data) => {
            settings.paging ? setPageWithPaging(data) : setPage(data);
        }).catch((e) => {
            dispatch({type: LIST_ACTIONS.DATA_ERROR})
        })
    }, [page]);

    function changePage(pageNumber) {
        dispatch({type: LIST_ACTIONS.PAGE_CHANGE, page: pageNumber})
    }

    function handleSelect(id) {
        const newSelected = selected.slice(0);
        if (selected.indexOf(id) !== -1) {
            newSelected.splice(selected.indexOf(id), 1);
        } else {
            newSelected.push(id);
        }
        dispatch({
            type: LIST_ACTIONS.SELECT,
            selected: newSelected
        });
    }

    function handleSelectAll() {
        let all = selected.slice(0);
        if (selected.length === items.length) {
            all = [];
        } else {
            all = items.map((item) => {
                return item.id
            });
        }
        dispatch({
            type: LIST_ACTIONS.SELECT,
            selected: all
        });
    }

    function setPageWithPaging(data) {
        dispatch({
            type: LIST_ACTIONS.PAGE_LOADED, data: {
                items: data.items,
                total: data.total
            },
        });
    }

    function setPage(data) {
        dispatch({
            type: LIST_ACTIONS.PAGE_LOADED, data: {
                items: data,
                total: getTotalPages(data.length, rows)
            },
        });
    }

    return (
        <>
            {
                initialized ?
                    <>
                        {error ? <p className='text-danger'>404 ERROR</p> :
                            <CardBlock>
                                <CardBlock.Body>
                                    <table className='list-table'>
                                        <ListTitles fields={fields}
                                                    onSelect={handleSelectAll}
                                                    checked={selected.length === items.length}
                                        />
                                        <ListBody fields={fields}
                                                  items={sliceItems(page, rows, items)}
                                                  rows={rows}
                                                  selected={selected}
                                                  editPage={editPage}
                                                  onSelect={handleSelect}
                                        />
                                    </table>
                                    <div className='list-bottom clearfix'>
                                        {
                                            selected.length > 0 &&
                                            <div className='list-details'>
                                                {t('INFO_SELECTED') + selected.length}
                                            </div>
                                        }
                                        {total > 1 &&
                                        <div className='list-pagination'>
                                            <Pagination
                                                pages={total}
                                                activePage={page}
                                                onClick={changePage}
                                            />
                                        </div>}
                                    </div>
                                </CardBlock.Body>
                            </CardBlock>}

                    </> : <Preloader/>
            }
        </>

    );
};


List.propTypes = {
    items: PropTypes.array,
    settings: PropTypes.shape({
        fields: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            type: PropTypes.oneOf(Object.values(LIST_COLUMN_TYPE))
        })).isRequired,
        rowsPerPage: PropTypes.number,
    }).isRequired,
};
export default List;


