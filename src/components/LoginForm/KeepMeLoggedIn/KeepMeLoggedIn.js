import React from 'react';

function KeepMeLoggedIn() {
    return (
        <div className='form-group form-check'>
            <input
                type='checkbox'
                className='form-check-input'
            />
            <small className='form-check-label'>Keep me logged in</small>
        </div>
    );
}

export default KeepMeLoggedIn;