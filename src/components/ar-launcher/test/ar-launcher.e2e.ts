import { newE2EPage } from '@stencil/core/testing';

describe('ar-launcher', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ar-launcher></ar-launcher>');

    const element = await page.find('ar-launcher');
    expect(element).toHaveClass('hydrated');
  });
});
