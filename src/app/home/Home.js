import HomeView from './HomeView';
import {connect} from 'react-redux';
import {homeSelectors, homeActionCreators} from './ducks'

const mapStateToProps = ({home}) => ({
    count: homeSelectors.getCount(home)
})

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(homeActionCreators.incrementCount()),
    onDecrement: () => dispatch(homeActionCreators.decrementCount()),
})

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeView);

export default Home;