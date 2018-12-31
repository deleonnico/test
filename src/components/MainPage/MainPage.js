import React from 'react';
import MainContent from './MainContent';
import LoginForm from '../LoginForm/LoginForm';

function MainPage() {
    return (
        <main className='main-page row'>
            <div className='col-8'>
                <MainContent />
            </div>
            <div className='col-4'>
                <LoginForm />
            </div>
        </main>
    );
}

export default MainPage;