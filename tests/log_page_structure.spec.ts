import { test } from '@playwright/test';

test('Log page structure', async ({ page }) => {
  // Navigate to the TodoMVC demo page
  await page.goto('https://demo.playwright.dev/todomvc');

  // Log the page structure
  const pageStructure = await page.content();
  console.log(pageStructure);
});