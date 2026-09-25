const { test, expect } = require('@playwright/test');

test.describe('Task 5 - Bonus Option A: API Testing against ReqRes', () => {
  test('GET: Successfully fetch a list of users', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=2');

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.data.length).toBeGreaterThan(0);
    expect(body.page).toBe(2);
  });

  test('POST: Successfully create a new user resource', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
      data: {
        name: 'QA Intern Applicant',
        job: 'Automation Engineer'
      }
    });

    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.name).toBe('QA Intern Applicant');
    expect(body.job).toBe('Automation Engineer');
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('createdAt');
  });

  test('FAILURE SCENARIO: Attempt login with missing password returns 400 error', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/login', {
      data: {
        email: 'peter@klaven'
      }
    });

    expect(response.status()).toBe(400);

    const body = await response.json();
    expect(body).toHaveProperty('error', 'Missing password');
  });
});
