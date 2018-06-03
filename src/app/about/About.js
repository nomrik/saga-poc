import AboutView from './AboutView';
import {connect} from 'react-redux';
import {aboutSelectors} from './ducks';

const mapStateToProps = ({about}) => ({
  info: aboutSelectors.getInfo(about)
});

const About = connect(mapStateToProps)(AboutView);

export default About;