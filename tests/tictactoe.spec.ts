import { expect, test } from '../fixtures';

test('can start a game', async ({ formPage, page }) => {
  await formPage.goto();
  await formPage.fillForm('3');
  await formPage.submit();

  const board = page.getByTestId('table').locator('tr');
  await expect(board).toHaveCount(3);
});

test('can finish a game', async ({ formPage, boardPage, page }) => {
  await formPage.goto();
  await formPage.fillForm('3');
  await formPage.submit();
  await boardPage.playerXWins();

  const winningMessage = page.getByTestId('endgame');
  await expect(winningMessage).toContainText('Congratulations');
});

test('can start a new game', async ({ formPage, boardPage, page }) => {
  await formPage.goto();
  await formPage.fillForm('3');
  await formPage.submit();
  await boardPage.playerXWins();
  await page.reload();
  await formPage.fillForm('3');
  await formPage.submit();

  const board = page.getByTestId('table').locator('tr');
  const firstCell = page.getByTestId('table').getByTestId('0');
  await expect(board).toHaveCount(3);
  await expect(firstCell).not.toContainText('X');
});
