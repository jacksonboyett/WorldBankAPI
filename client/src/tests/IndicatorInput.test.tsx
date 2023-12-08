import { render, screen } from '@testing-library/react';
import IndicatorInput from '../components/IndicatorInput';
import user from '@testing-library/user-event';

describe('IndicatorInput', () => {
	test('indicator dropdown menu hidden on load', () => {
		render(<IndicatorInput/>);
		const indicator = screen.queryByText(/Inflation/i)
		expect(indicator).toBeFalsy();
	})
	test('indicator dropdown menu shows indicator list when clicked', async () => {
		user.setup();
		render(<IndicatorInput/>)
		const indicatorDropdownBtn = screen.getByRole('indicatorDropdownBtn');
		console.log(indicatorDropdownBtn.textContent)
		await user.click(indicatorDropdownBtn);
		const indicator = screen.getByText(/Inflation/i);
		expect(indicator.textContent).toBe('Inflation')
	})
})