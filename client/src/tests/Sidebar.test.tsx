import { render, screen } from '@testing-library/react';
import Sidebar from "../components/Sidebar";

describe('Sidebar', () => {
	test('application title renders', () => {
		render(<Sidebar/>);
		const title = screen.getByText(/World Bank Data Visualizer/i)
		expect(title.textContent).toBe('World Bank Data Visualizer')
	})
	test('countries input renders', () => {
		render(<Sidebar/>);
		const countries = screen.getByText(/Countries/i)
		expect(countries.textContent).toBe('Countries')
	})
	test('indicators input renders', () => {
		render(<Sidebar/>);
		const indicators = screen.getByText(/Indicators/i)
		expect(indicators.textContent).toBe('Indicators')
	})
	test('from year input renders', () => {
		render(<Sidebar/>);
		const from = screen.getByText(/From/i)
		expect(from.textContent).toBe('From')
	})
	test('to year input renders', () => {
		render(<Sidebar/>);
		const to = screen.getByText('To')
		expect(to.textContent).toBe('To')
	})
})