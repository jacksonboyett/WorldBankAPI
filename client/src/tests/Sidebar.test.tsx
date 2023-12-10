import { render, screen } from '@testing-library/react';
import Sidebar from '../components/Sidebar';
import { DataProvider } from '../context/DataContext';
import { InputProvider } from '../context/InputContext';

describe('Sidebar', () => {
  const fakeSubmitProp = { submit: () => 'submit' }
  test('application title renders', () => {
    render(
      <InputProvider>
        <DataProvider>
          <Sidebar submit={fakeSubmitProp.submit}/>
        </DataProvider>
      </InputProvider>
    );
    const title = screen.getByText(/World Bank Data Visualizer/i);
    expect(title.textContent).toBe('World Bank Data Visualizer');
  });
  test('countries input renders', () => {
    render(
      <InputProvider>
        <DataProvider>
          <Sidebar submit={fakeSubmitProp.submit}/>
        </DataProvider>
      </InputProvider>
    );
    const countries = screen.getByText(/Countries/i);
    expect(countries.textContent).toBe('Countries');
  });
  test('indicators input renders', () => {
    render(
      <InputProvider>
        <DataProvider>
          <Sidebar submit={fakeSubmitProp.submit}/>
        </DataProvider>
      </InputProvider>
    );
    const indicators = screen.getByText(/Indicators/i);
    expect(indicators.textContent).toBe('Indicators');
  });
  test('from year input renders', () => {
    render(
      <InputProvider>
        <DataProvider>
        <Sidebar submit={fakeSubmitProp.submit}/>
        </DataProvider>
      </InputProvider>
    );
    const from = screen.getByText('From:');
    expect(from.textContent).toBe('From:');
  });
  test('to year input renders', () => {
    render(
      <InputProvider>
        <DataProvider>
        <Sidebar submit={fakeSubmitProp.submit}/>
        </DataProvider>
      </InputProvider>
    );
    const to = screen.getByText('To:');
    expect(to.textContent).toBe('To:');
  });
});
