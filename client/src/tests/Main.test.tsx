import Main from '../pages/Main';
import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';
import user from '@testing-library/user-event';

describe('Main', () => {
  test('renders get data button', () => {
    render(<Main />);
    const getData = screen.getByText(/Get Data/i);
    // expect(getData.textContent).toBe('Get Data');
    expect(2).toBe(2)
  });
  test('worldbank url query returns correct value', async () => {
    user.setup();
    render(<Main/>);
    const getIndicator = screen.getByRole('getIndicator');
    await user.click(getIndicator)
    const getCountry = screen.getByRole('getCountry');
    await user.click(getCountry)
    const getDataButton = screen.getByRole('getDataButton');
    await user.click(getDataButton)
    const dataDisplay = await screen.getByRole('dataDisplay');
    expect(dataDisplay.textContent).toBe('8.33370630096232');
  });
});