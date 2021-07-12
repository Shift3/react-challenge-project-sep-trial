import React from 'react';
import { render, screen } from '@testing-library/react';

import OrdersList from './ordersList';

describe('Orders List', () => {
    test('renders with no prop', () => {
        render(
            <OrdersList
            />
        )
        screen.debug();
        const emptyDiv = document.getElementsByClassName('empy-orders');
        const arr = Array.from(emptyDiv);
        expect(arr.length).toBe(1);
    });
})