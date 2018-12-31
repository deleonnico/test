import React from 'react';

function EmailForm() {
    return (
        <div className='form-group'>
            <label htmlFor='inputEmail'>Email Address</label>
            <input
                type='email'
                className='form-control'
                placeholder='Enter Email'
            />
        </div>
    );
}

export default EmailForm;