import renderer from 'react-test-renderer';
import Home from '../pages/Home';

test('Home component testing', () => {
  const TREE = renderer.create(<Home />).toJSON();
  expect(TREE).toMatchSnapshot();
});
