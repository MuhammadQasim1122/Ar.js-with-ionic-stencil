import { newSpecPage } from '@stencil/core/testing';
import { ArLauncher } from '../ar-launcher';

describe('ar-launcher', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ArLauncher],
      html: `<ar-launcher></ar-launcher>`,
    });
    expect(page.root).toEqualHtml(`
      <ar-launcher>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ar-launcher>
    `);
  });
});
