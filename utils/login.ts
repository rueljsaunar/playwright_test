import { Page, expect } from '@playwright/test';

export async function login(page: Page, username: string, password: string) {
  await page.goto('https://qa-test-management-dev.ap-southeast-1.elasticbeanstalk.com/seven-seven-qa/login');
  await page.fill('input[name="username"]', username);
  await page.fill('input[name="password"]', password);
  await page.click('button[type="submit"]');
  await expect(page.getByRole('heading', { name: 'Admin Dashboard' })).toBeVisible();
}