import Main from '../pages/Main';
import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';
import user from '@testing-library/user-event';
import { waitFor } from '@testing-library/react';

describe('Main', () => {
  test('api call returns with data', async () => {
		user.setup();
		render(<Main/>);
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
		const dataTest = screen.getByRole('dataTest');
				// const chart = screen.getByRole('chart')
		await user.click(indicator)
		await user.type(fromInput, '2010')
		await user.type(toInput, '2011')
		await waitFor(() => user.click(submitBtn))
		// expect(indicator.textContent).toBe('Inflation')
		expect(dataTest.innerHTML).toBe('2.1785375238942')
  });
});