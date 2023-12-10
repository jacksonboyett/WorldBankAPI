import { render, screen } from '@testing-library/react';
import CountriesInput from '../components/CountriesInput';
import user from '@testing-library/user-event';
import { DataProvider } from '../context/DataContext';
import { InputProvider } from '../context/InputContext';

describe('CountriesInput', () => {
	test('country dropdown menu hidden on load', () => {
    render(
      <InputProvider>
        <DataProvider>
          <CountriesInput/>
        </DataProvider>
      </InputProvider>
    );
		const country = screen.queryByText(/Peru/i)
		expect(country).toBeFalsy();
	})
	test('country dropdown menu shows country list when clicked', async () => {
		user.setup();
    render(
      <InputProvider>
        <DataProvider>
          <CountriesInput />
        </DataProvider>
      </InputProvider>
    );
		const countryDropdownBtn = screen.getByRole('countryDropdownBtn');
		await user.click(countryDropdownBtn);
		const country = screen.getByText(/Peru/i);
		expect(country.textContent).toBe('Peru')
	})
})