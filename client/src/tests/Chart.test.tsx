import Main from '../pages/Main';
import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';
import user from '@testing-library/user-event';

describe('Chart', () => {
  test('Chart displays proper data', async () => {
		user.setup();
    render(<Main />);
  });
});