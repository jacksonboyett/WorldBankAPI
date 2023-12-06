import Sidebar from "../components/Sidebar";
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event'
import { describe, expect } from 'vitest';


describe('Sidebar', () => {
  test('worldbank url query returns correct value', async () => {
    user.setup();
    render(<Sidebar />);
    const getDataButton = screen.getByRole('getDataButton');
    await user.click(getDataButton)
    const dataDisplay = await screen.getByRole('dataDisplay');
    expect(dataDisplay.textContent).toBe('8.33370630096232');
  });
});