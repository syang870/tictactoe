import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class FormPage extends BasePage {
  private readonly valueInput: Locator;
  private readonly playButton: Locator;

  constructor(page: Page) {
    super(page);
    this.valueInput = page.getByRole('textbox', {
      name: 'Enter a number to generate a',
    });
    this.playButton = page.getByRole('button', { name: 'Play' });
  }

  async goto(): Promise<void> {
    await this.page.goto('/cypress_tictactoe/');
  }

  async fillForm(value: string): Promise<void> {
    await this.valueInput.fill(value);
  }

  async submit(): Promise<void> {
    await this.playButton.click();
  }
}
