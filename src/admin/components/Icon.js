import React from 'react';
import getIcons from "../../utils/getIcons";

const Icon = ({name}) => {
    return (
        <span className={'icon'}>
            {getIcons(name)}
        </span>
    );
};

export default Icon;