import { test, expect } from '@playwright/test';
import { login } from '../utils/login';


test('test-001: Verify Admin Dashboard', async ({ page }) => {
 
  await login(page, 'qsuperadmin', 'Qsuperadmin@77');
  await expect(page.getByRole('heading', { name: 'Admin Dashboard' })).toBeVisible();
  await expect(page.getByLabel('Open settings').getByRole('paragraph')).toContainText('QA Superadmin');
});

test('test-002: Verify Test Management Page', async ({ page }) => { 
  await login(page, 'qsuperadmin', 'Qsuperadmin@77');

  await page.getByText('Test Management').click();
  await expect(page.getByRole('heading', { name: 'Test Management' })).toBeVisible();
  await expect(page.getByRole('heading')).toContainText('Test Management');
  await expect(page.getByRole('button', { name: 'Test Management' })).toBeVisible();
  await expect(page.locator('#root')).toContainText('Test Management');

});


test('test-003: Verify Issues Management Page', async ({ page, context, browser}) => {
  await login(page, 'qsuperadmin', 'Qsuperadmin@77');

  await page.getByText('Issues Management').click();
  await expect(page.getByRole('heading', { name: 'Issues Management' })).toBeVisible();
  await expect(page.getByRole('heading')).toContainText('Issues Management');
  await expect(page.getByRole('button', { name: 'Issues Management' })).toBeVisible();
  await expect(page.locator('#root')).toContainText('Issues Management');
  await expect(page.getByText('SeverityCustomization Menu')).toBeVisible();
  await expect(page.locator('main')).toContainText('Severity');
  await expect(page.getByRole('button', { name: 'Add Severity' })).toBeVisible();
  await expect(page.getByRole('main')).toContainText('Add Severity');


  // Recommended closing order
  await context.close(); // Gracefully closes pages and flushes data
  await browser.close(); // Final cleanup

});