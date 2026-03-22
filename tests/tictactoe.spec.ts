import { expect, test } from '../fixtures';

test('can start a game', async ({ formPage, page }) => {
  await formPage.goto();
  await formPage.fillForm('3');
  await formPage.submit();

  await expect(page.locator('table tr')).toHaveCount(3);
});

test('can finish a game', async ({ formPage, boardPage, page }) => {
  await formPage.goto();
  await formPage.fillForm('3');
  await formPage.submit();
  await boardPage.playerXWins();

  await expect(page.locator('[id="endgame"]')).toContainText('Congratulations');
});

test('can start a new game', async ({ formPage, boardPage, page }) => {
  await formPage.goto();
  await formPage.fillForm('3');
  await formPage.submit();
  await boardPage.playerXWins();
  await page.reload();
  await formPage.fillForm('3');
  await formPage.submit();

  await expect(page.locator('table tr')).toHaveCount(3);
  await expect(page.locator('[id="0"]')).not.toContainText('X');
});
