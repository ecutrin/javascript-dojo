/*
  eslint
  max-len: 0
  global-require: 0
*/

/*
  Note: This test uses an HTML Fixture. Fixture elements are essentially an insertion of HTML onto your DOM for your tests to run on if your JS operates on the DOM.
  Using fixtures is a good practice in JS testing, and generally fixtures should be separated out from the code.
*/

import { expect } from 'chai';
import { JSDOM } from 'jsdom';

describe('index', () => {
  const expectedMax = '3';
  const fixture = `
    <input id="input-box" value="1, ${expectedMax}, 2">
    <button id="max" />
    <div id="result-value"></div>
  `;

  global.document = new JSDOM(fixture).window.document;
  require('./index.js');

  beforeEach(() => {
    document.getElementById('result-value').textContent = '';
  });

  it.skip('calculates max', () => {
    document.getElementById('max').click();
    expect(document.getElementById('result-value').textContent).to.eql(expectedMax);
  });
});
