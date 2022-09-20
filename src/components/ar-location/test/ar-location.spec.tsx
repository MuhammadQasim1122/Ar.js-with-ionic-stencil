import { newSpecPage } from '@stencil/core/testing';
import { ArLocation } from '../ar-location';

describe('ar-location', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ArLocation],
      html: `<ar-location></ar-location>`,
    });
    expect(page.root).toEqualHtml(`
      <ar-location>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ar-location>
    `);
  });
});
