import { render, screen } from '@testing-library/react';
import Main from '../pages/Main';
import user from '@testing-library/user-event';

describe('IndicatorInput', () => {
	test('indicator dropdown menu hidden on load', () => {
    render(<Main />);
		const indicator = screen.queryByText(/Inflation/i)
		expect(indicator).toBeFalsy();
	})
	test('indicator dropdown menu shows indicator list when clicked', async () => {
		user.setup();
    render(<Main />);
		const indicatorDropdownBtn = screen.getByRole('indicatorDropdownBtn');
		await user.click(indicatorDropdownBtn);
		const indicator = screen.getByText(/Inflation/i);
		expect(indicator.textContent).toBe('Inflation')
	})
})