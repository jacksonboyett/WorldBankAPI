import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(
    'http://api.worldbank.org/v2/country/PER/indicator/FP.CPI.TOTL.ZG?&format=json&date=2022',
    () => {
      return HttpResponse.json([
        {},
        [
          {
            value: 8.33370630096232,
          },
        ],
      ]);
    }
  ),
];
