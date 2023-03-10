import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact Form component', () => {
    // baseline test
    test('renders', () => {
        render(<ContactForm />);
    });

    // snapshot test
    test('matches snapshot', () => {
        const { asFragment } = render(<ContactForm />);

        expect(asFragment()).toMatchSnapshot();
    });
});

describe('tags are visibile', () => {
    test('h1 and btn are visible', () => {
        const { getByTestId } = render(<ContactForm />);

        expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
        expect(getByTestId('btntag')).toHaveTextContent('Submit');
    });
});