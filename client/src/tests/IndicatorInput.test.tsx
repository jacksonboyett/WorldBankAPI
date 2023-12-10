import { render, screen } from '@testing-library/react';
import IndicatorInput from '../components/IndicatorInput';
import Main from '../pages/Main';
import user from '@testing-library/user-event';
import { DataProvider } from '../context/DataContext';
import { InputProvider } from '../context/InputContext';

describe('IndicatorInput', () => {
	test('indicator dropdown menu hidden on load', () => {
    render(
      <InputProvider>
        <DataProvider>
          <Main />
        </DataProvider>
      </InputProvider>
    );
		const indicator = screen.queryByText(/Inflation/i)
		expect(indicator).toBeFalsy();
	})
	test('indicator dropdown menu shows indicator list when clicked', async () => {
		user.setup();
    render(
      <InputProvider>
        <DataProvider>
          <IndicatorInput />
        </DataProvider>
      </InputProvider>
    );
		const indicatorDropdownBtn = screen.getByRole('indicatorDropdownBtn');
		await user.click(indicatorDropdownBtn);
		const indicator = screen.getByText(/Inflation/i);
		expect(indicator.textContent).toBe('Inflation')
	})
})