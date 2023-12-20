import { render, screen } from '@testing-library/react';
import Sidebar from '../components/Sidebar';
import Main from '../pages/Main';

describe('Sidebar', () => {
  test('application title renders', () => {
    render(<Main />);
    const title = screen.getByText(/World Bank Data Visualizer/i);
    expect(title.textContent).toBe('World Bank Data Visualizer');
  });
  test('countries input renders', () => {
    render(<Main />);
    const countries = screen.getByText(/Countries/i);
    expect(countries.textContent).toBe('Countries');
  });
  test('indicators input renders', () => {
    render(<Main />);
    const indicators = screen.getByText(/Indicators/i);
    expect(indicators.textContent).toBe('Indicators');
  });
  test('from year input renders', () => {
    render(<Main />);
    const from = screen.getByText('From:');
    expect(from.textContent).toBe('From:');
  });
  test('to year input renders', () => {
    render(<Main />);
    const to = screen.getByText('To:');
    expect(to.textContent).toBe('To:');
  });
});
