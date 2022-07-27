import { getCrypto } from '../redux/cryptoSlice';

it('getCrypto should return a promise', () => {
  expect(getCrypto()).toEqual(expect.any(Function));
});
