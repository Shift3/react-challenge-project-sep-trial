import React from 'react';
import { render, screen } from '@testing-library/react';

import LoginForm from './loginForm';

const onLogin = (formValue) => {
    return { ok: 1 }
}

describe('Login Form', () => {
    test('form renders', () => {
        render(
            <div />
        );
    })
});