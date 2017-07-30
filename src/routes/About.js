import AboutPage from 'components/containers/AboutPage';
import {aboutPath} from '../helpers/routes';

const AboutPageRoute = {
  exact: true,
  path: aboutPath(),
  component: AboutPage
};

export default AboutPageRoute;
