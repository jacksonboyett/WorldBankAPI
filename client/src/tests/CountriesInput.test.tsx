import { render, screen } from '@testing-library/react';
import CountriesInput from '../components/CountriesInput';
import user from '@testing-library/user-event';

describe('CountriesInput', () => {
	test('country dropdown menu hidden on load', () => {
		render(<CountriesInput/>);
		const country = screen.queryByText(/Peru/i)
		expect(country).toBeFalsy();
	})
	test('country dropdown menu shows country list when clicked', async () => {
		user.setup();
		render(<CountriesInput/>)
		const countryDropdownBtn = screen.getByRole('countryDropdownBtn');
		console.log(countryDropdownBtn.textContent)
		await user.click(countryDropdownBtn);
		const country = screen.getByText(/Peru/i);
		expect(country.textContent).toBe('Peru')
	})
})