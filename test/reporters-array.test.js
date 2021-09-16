import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../reporters-array.js';

describe('ReportersArray', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture(html`<reporters-array></reporters-array>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture(html`<reporters-array></reporters-array>`);
    el.shadowRoot.querySelector('button').click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture(html`<reporters-array title="attribute title"></reporters-array>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`<reporters-array></reporters-array>`);

    await expect(el).shadowDom.to.be.accessible();
  });
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture(html`<reporters-array></reporters-array>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture(html`<reporters-array></reporters-array>`);
    el.shadowRoot.querySelector('button').click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture(html`<reporters-array title="attribute title"></reporters-array>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`<reporters-array></reporters-array>`);

    await expect(el).shadowDom.to.be.accessible();
  });

  it('can override the title via attribute CLONE - 1', async () => {
    const el = await fixture(html`<reporters-array title="attribute title"></reporters-array>`);

    expect(el.title).to.equal('attribute title');
  });
  it('can override the title via attribute CLONE - 2', async () => {
    const el = await fixture(html`<reporters-array title="attribute title"></reporters-array>`);

    expect(el.title).to.equal('attribute title');
  });
  it('can override the title via attribute CLONE - 3', async () => {
    const el = await fixture(html`<reporters-array title="attribute title"></reporters-array>`);

    expect(el.title).to.equal('attribute title');
  });
});
