import { test, expect } from '@playwright/test';

test('portfolio', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.waitForTimeout(1000);
  await expect(page.getByRole('heading', { name: 'Hi, I\'m Vinushaanth' })).toBeVisible();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'View Projects' }).click();
  await page.waitForTimeout(1000);
  await expect(page.getByRole('heading', { name: 'Featured Projects' })).toBeVisible();
  await page.waitForTimeout(1000);

  await expect(page.getByRole('heading', { name: 'What I Do Best' })).toBeVisible();
  await page.waitForTimeout(1000);
  await expect(page.getByRole('heading', { name: 'Technologies I Use' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'My Certifications' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Let\'s Connect' })).toBeVisible();
  await page.getByRole('navigation').getByRole('link', { name: 'Projects' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('navigation').getByRole('link', { name: 'Skills' }).click();
  await page.getByRole('link', { name: 'Certifications' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Contact' }).click();
  await page.getByRole('button', { name: 'Let\'s Talk' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Back to top' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Preview CV' }).click();
  await page.waitForTimeout(1000);
  await expect(page.getByRole('heading', { name: 'Vinushaanth\'s Resume' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Open in Tab' })).toBeVisible();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Close' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('heading', { name: 'Hi, I\'m Vinushaanth' }).click();
});


