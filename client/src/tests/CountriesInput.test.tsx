import Main from '../pages/Main';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

describe('CountriesInput', () => {
	test('country dropdown menu hidden on load', () => {
    render(<Main />);
		const country = screen.queryByText(/Peru/i)
		expect(country).toBeFalsy();
	})
	test('country dropdown menu shows country list when clicked', async () => {
		user.setup();
    render(<Main />);
		const countryDropdownBtn = screen.getByRole('countryDropdownBtn');
		await user.click(countryDropdownBtn);
		const country = screen.getByText(/Peru/i);
		expect(country.textContent).toBe('Peru')
	})
})