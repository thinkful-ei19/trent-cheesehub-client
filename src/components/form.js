import React from 'react';
import {reduxForm, Field} from 'redux-form';

function Form() {
    return (
        <form>
            <label htmlFor='add-cheese'>Add your favorite Cheese</label>
            <Field component='input' type='text' name='add-cheese'/>
        </form>
    );
}

export default reduxForm({
    form: 'add-cheese'
})(Form);