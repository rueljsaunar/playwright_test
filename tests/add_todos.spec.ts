import { test, expect } from '@playwright/test';

test('Add todos and mark one as completed', async ({ page }) => {
  // Navigate to the TodoMVC demo page
  await page.goto('https://demo.playwright.dev/todomvc');

  // Add todos
  const todoInput = '.new-todo';
  await page.fill(todoInput, 'Buy milk');
  await page.press(todoInput, 'Enter');
  await page.fill(todoInput, 'Write Demo');
  await page.press(todoInput, 'Enter');
  await page.fill(todoInput, 'Ship product');
  await page.press(todoInput, 'Enter');

  // Mark "Write Demo" as completed
  const todoItems = await page.locator('.todo-list li');
  await todoItems.nth(1).locator('.toggle').check();

  // Take a screenshot
  await page.screenshot({ path: 'todo-screenshot.png' });
});