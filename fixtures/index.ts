import { test as base } from '@playwright/test';
import { FormPage } from '../pages/FormPage';
import { BoardPage } from '../pages/BoardPage';

type Fixtures = {
  formPage: FormPage;
  boardPage: BoardPage;
};

export const test = base.extend<Fixtures>({
  formPage: async ({ page }, use) => {
    await use(new FormPage(page));
  },
  boardPage: async ({ page }, use) => {
    await use(new BoardPage(page));
  },
});

export { expect } from '@playwright/test';
