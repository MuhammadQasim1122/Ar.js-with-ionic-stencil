import { newE2EPage } from '@stencil/core/testing';

describe('ar-location', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ar-location></ar-location>');

    const element = await page.find('ar-location');
    expect(element).toHaveClass('hydrated');
  });
});
