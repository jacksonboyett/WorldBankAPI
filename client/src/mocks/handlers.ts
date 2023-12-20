import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(
    'http://api.worldbank.org/v2/country/AF/indicator/FP.CPI.TOTL.ZG?&format=json&date=2010:2011&per_page=2000',
    () => {
      return HttpResponse.json([
        { page: 1, pages: 1, per_page: 2000, total: 2, sourceid: '2' },
        [
          {
            country: { id: 'AF', value: 'Afghanistan' },
            countryiso3code: 'AFG',
            date: '2011',
            decimal: 1,
            indicator: {
              id: 'FP.CPI.TOTL.ZG',
              value: 'Inflation, consumer prices (annual %)',
            },
            obs_status: '',
            unit: '',
            value: 11.8041858089129,
          },
          {
            country: { id: 'AF', value: 'Afghanistan' },
            countryiso3code: 'AFG',
            date: '2010',
            decimal: 1,
            indicator: {
              id: 'FP.CPI.TOTL.ZG',
              value: 'Inflation, consumer prices (annual %)',
            },
            obs_status: '',
            unit: '',
            value: 2.1785375238942,
          },
        ],
      ]);
    }
  ),
];
