import React from 'react';
import PropTypes from 'prop-types';

import WrappedPage from "../../hoc/WrappedPage";

import useFetch from 'use-http'

const List = ({config}) => {
    const [data, loading, error, request] = useFetch({
        url: config.dataUrl,
        onMount: true
    });
    if (error) return 'Error!'
    if (loading) return 'Loading...'
    return (
        <div className='items'>
            <ul className='items-list'>
                {/*{items.map((item, i) => {*/}
                    {/*return (*/}
                        {/*<ListItem key={i}>*/}

                            {/*<div className='item-row'></div>*/}
                        {/*</ListItem>*/}
                    {/*)*/}
                {/*})}*/}
            </ul>
        </div>
    );
};
const ListItem = ({children}) => {
    return (
        <li className='item'>
            {children}
        </li>
    )
};
ListItem.propTypes = {
    name: PropTypes.string.isRequired,

}
export default WrappedPage(List, 'List Page', 'List of sample items - e.g. books, movies, events, etc...');