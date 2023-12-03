import Main from '../pages/Main';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('Main', () => {
  test('renders test server button', () => {
    render(<Main />);
    const testServer = screen.getByText(/Test Server/i);
    expect(testServer.textContent).toBe('Test Server');
  });
});
 