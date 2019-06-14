import React,{useState} from 'react';
import PropTypes from 'prop-types';
import WrappedPage from "../WrappedPage";
import CardBlock from "../CardBlock";
import {FORM_FIELD_TYPES} from "../../constants/const";
import Form from "../form/Form";

const UFormsPage = props => {

    const settings = {
        fields: [
            {
                id: 1, name: 'email', type: FORM_FIELD_TYPES.EMAIL, placeholder: 'Your email',
            },
            {
                id: 2, name: 'username', type: FORM_FIELD_TYPES.TEXT, placeholder: 'Your full name',
            },
            {
                id: 3, name: 'password', type: FORM_FIELD_TYPES.PASSWORD, placeholder: 'Your password',
            }
        ]
    };

    const [state,setState] = useState({
        username: '',
        email: '',
        password: '',
    });

    return (
        <div className='flex-row'>
            <div className='flex-col'>
                <CardBlock>
                    <CardBlock.Title>Simple</CardBlock.Title>
                    <CardBlock.Body>
                        <Form settings={settings} values={state}/>
                    </CardBlock.Body>
                </CardBlock>
            </div>
        </div>
    );
};

UFormsPage.propTypes = {

};

export default UFormsPage
// export default WrappedPage(UFormsPage,{title: 'Form elements'});