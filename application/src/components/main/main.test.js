import React from 'react';
import { render, screen } from '@testing-library/react';

import Main from './main';

describe('Order Form', () => {
    test('renders order form', () => {
        render(<Main />);

        screen.debug();
    })
});