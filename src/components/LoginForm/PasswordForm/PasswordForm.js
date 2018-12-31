import React from 'react';

function PasswordForm() {
    return (
        <div className='form-group'>
            <label>Password</label>
            <input
                type='password'
                className='form-control'
                placeholder='Password'
            />
            <small className='form-text'>
                <a href='/'>Recover password</a>
            </small>
        </div>
    );
}

export default PasswordForm;