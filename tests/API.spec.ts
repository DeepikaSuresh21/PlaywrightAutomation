import { test, expect } from '@playwright/test';

test('API Test', async ({ request }) => {
  const response = await request.get('https://api.example.com/data/1');
  console.log('Response status:', response.status());
  const responseBody = await response.text();
  console.log('Response body:', responseBody);
  expect(response.status()).toBe(200);
});

test('API Test with JSON Response', async ({ request }) => {
  const response = await request.post('https://api.restful-api.dev/objects', {
    data: {
      name: 'Apple iPhone 12 Pro Max',
      data: {
        color: 'Cloudy White',
        'capacity GB': 512
      }
    }
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  console.log(body);
});
