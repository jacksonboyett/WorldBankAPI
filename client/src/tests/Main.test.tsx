import Main from '../pages/Main';
import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';
import user from '@testing-library/user-event';
import { DataProvider } from '../context/DataContext';
import { InputProvider, InputContext } from '../context/InputContext';
import { waitFor } from '@testing-library/react';

function MainWithContext() {
	return (
		<InputProvider>
		<DataProvider>
			<Main/>
		</DataProvider>
	</InputProvider>
	)
}

describe('Main', () => {
  test('api call returns with data', async () => {
		user.setup();
		render(<MainWithContext/>);
		const countryDropdownBtn = screen.getByRole('countryDropdownBtn')
		await user.click(countryDropdownBtn)
		const country = screen.getByText(/Afghanistan/i);
		await user.click(country)
		const indicatorDropdownBtn = screen.getByRole('indicatorDropdownBtn')
		await user.click(indicatorDropdownBtn)
		const indicator = screen.getByText(/Inflation/i);
		const fromInput = screen.getByRole('fromInput');
		const toInput = screen.getByRole('toInput');
		const submitBtn = screen.getByRole('submitBtn');
		// const dataTest = screen.getByRole('dataTest');
				// const chart = screen.getByRole('chart')
		await user.click(indicator)
		await user.type(fromInput, '2010')
		await user.type(toInput, '2011')
		await waitFor(() => user.click(submitBtn))
		screen.debug(undefined, Infinity)
		// expect(indicator.textContent).toBe('Inflation')
		// expect(dataTest.innerHTML).toBe('2.1785375238942')
  });
});