import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class BoardPage extends BasePage {
  private readonly cell0: Locator;
  private readonly cell1: Locator;
  private readonly cell2: Locator;
  private readonly cell3: Locator;
  private readonly cell4: Locator;
  private readonly cell5: Locator;
  private readonly cell6: Locator;
  private readonly cell7: Locator;
  private readonly cell8: Locator;

  constructor(page: Page) {
    super(page);
    this.cell0 = page.locator('[id="0"]');
    this.cell1 = page.locator('[id="1"]');
    this.cell2 = page.locator('[id="2"]');
    this.cell3 = page.locator('[id="3"]');
    this.cell4 = page.locator('[id="4"]');
    this.cell5 = page.locator('[id="5"]');
    this.cell6 = page.locator('[id="6"]');
    this.cell7 = page.locator('[id="7"]');
    this.cell8 = page.locator('[id="8"]');
  }

  async goto(): Promise<void> {
    await this.page.goto('/cypress_tictactoe/');
  }

  async playerXWins(): Promise<void> {
    await this.cell0.click();
    await this.cell1.click();
    await this.cell3.click();
    await this.cell2.click();
    await this.cell6.click();
  }
}
