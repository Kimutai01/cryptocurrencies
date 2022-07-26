import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import store from '../app/store';
import Popular from '../components/Popular';
import { getCrypto } from '../redux/cryptoSlice';

test('Popular component testing', () => {
  const TREE = TestRenderer.create(
    <Provider store={store}>
      <Popular />
    </Provider>,
  );
  expect(TREE).toMatchSnapshot();
});

it('getCrypto should return a promise', () => {
  expect(getCrypto()).toEqual(expect.any(Function));
});
