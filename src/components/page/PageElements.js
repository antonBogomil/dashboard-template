import React from 'react';
import {CollapseContent,Collapse, CollapseItem} from "../../library/collapse/Collapse";

const PageElements = () => {
    return (
        <Collapse>
            <CollapseItem>Item</CollapseItem>
            <CollapseContent>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </CollapseContent>
        </Collapse>
    );
};

export default PageElements;