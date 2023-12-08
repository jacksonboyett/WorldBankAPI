import { render, screen } from '@testing-library/react';
import Sidebar from "../components/Sidebar";

describe('Sidebar', () => {
	test('application title renders', () => {
		render(<Sidebar/>);
		const getTitle = screen.getByText(/World Bank Data Visualizer/i)
		expect(getTitle.textContent).toBe('World Bank Data Visualizer')
	})
	test('countries input renders', () => {
		render(<Sidebar/>);
		const getCountries = screen.getByText(/Countries/i)
		expect(getCountries.textContent).toBe('Countries')
	})
	test('indicators input renders', () => {
		render(<Sidebar/>);
		const getIndicators = screen.getByText(/Indicator/i)
		expect(getIndicators.textContent).toBe('Indicator')
	})
	test('from year input renders', () => {
		render(<Sidebar/>);
		const getFrom = screen.getByText(/From/i)
		expect(getFrom.textContent).toBe('From')
	})
	test('to year input renders', () => {
		render(<Sidebar/>);
		const getTo = screen.getByText('To')
		expect(getTo.textContent).toBe('To')
	})
})