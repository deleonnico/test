import React from 'react';
import EmailForm from './EmailForm/EmailForm';
import PasswordForm from './PasswordForm/PasswordForm';
import KeepMeLoggedIn from './KeepMeLoggedIn/KeepMeLoggedIn';
import SubmitForm from './SubmitForm/SubmitForm';
import SignUpLink from './SignUpLink/SignUpLink';

function LoginForm() {
    return (
        <form className='login-form'>
            <EmailForm />
            <PasswordForm />
            <KeepMeLoggedIn />
            <SubmitForm />
            <SignUpLink />
        </form>
    );
}

export default LoginForm;