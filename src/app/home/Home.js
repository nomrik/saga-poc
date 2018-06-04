/* Container for home, connecting the redux state and dispatch to the view */

import HomeView from './HomeView';
import {connect} from 'react-redux';
import {homeSelectors, homeActionCreators} from './ducks'

const mapStateToProps = ({home}) => ({
    animals: homeSelectors.getAnimals(home),
    status: homeSelectors.getStatus(home)
})

const mapDispatchToProps = (dispatch) => ({
    onRequestAnimals: () => dispatch(homeActionCreators.startPolling()),
    onStopUpdate: () => dispatch(homeActionCreators.stopPolling())
})

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeView);

export default Home;