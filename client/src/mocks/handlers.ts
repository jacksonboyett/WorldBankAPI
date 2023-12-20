import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(
    'http://api.worldbank.org/v2/country/AF/indicator/FP.CPI.TOTL.ZG?&format=json&date=2010:2011&per_page=2000',
    () => {
      return HttpResponse.json([
        {},
        [
          {
            value: 2.1785375238942,
          },
        ],
      ]);
    }
  ),
];
 