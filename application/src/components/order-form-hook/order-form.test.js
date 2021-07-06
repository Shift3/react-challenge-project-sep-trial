import React from 'react';
import { render, screen } from '@testing-library/react';

import OrderForm from './order-form';

describe('Order Form', () => {
    test('renders order form', () => {
        render(<div />);

        screen.debug();
    })
});