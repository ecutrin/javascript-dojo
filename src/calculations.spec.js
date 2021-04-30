import { expect } from 'chai';

import { max } from './calculations';

describe('calculations', () => {
  describe('max', () => {
    context('when numbers are undefined', () => {
      it('returns null', () => {
        expect(max(undefined)).to.eql(null);
      });
    });
  });
});
