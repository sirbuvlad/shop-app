import React from 'react';

import SignIn from '../../components/sing-in/sing-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './singn-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUpPage;