import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

import LoginForm from './loginForm';

const onLogin = () => ({ ok: 1 })


describe('Login Form', () => {
    test('form renders', () => {
        render(
            <Provider store={store}>
                <LoginForm onLogin={() => onLogin()} />
            </Provider>
        );
        
        screen.debug();
    })
});