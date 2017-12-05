import Home from './Home';
import { compose } from 'recompose';
import requireAuth from '../../component/hocs/requireAuth';

const enhance = compose(
  requireAuth
);

export default {
  component: enhance(Home)
};