import { expect } from 'chai';

import parse from './parse';

describe('parse', () => {
  it('converts comma-separated string of numbers into an array', () => {
    expect(parse('1, 2, 3')).to.eql([1, 2, 3]);
  });
});
