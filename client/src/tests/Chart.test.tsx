import Chart from '../components/Chart';
import Main from '../pages/Main';
import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';
import user from '@testing-library/user-event';
import { DataProvider, DataContext } from '../context/DataContext';
import { InputProvider, InputContext } from '../context/InputContext';
import { waitFor } from '@testing-library/react';
import { useReducer } from 'react';

function ChartWithContext() {
	return (
		<InputProvider>
		<DataProvider>
			<Main/>
		</DataProvider>
	</InputProvider>
	)
}

describe('Chart', () => {
  test('Chart displays proper data', async () => {
		user.setup();
		render(<ChartWithContext/>)
		screen.debug(undefined, Infinity)
  });
});