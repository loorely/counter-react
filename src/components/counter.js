import React, {
  Component
} from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { increment, decrement, fetchInitial } from 'actions';

class Counter extends Component {

  componentDidMount() {
    this.props.fetchInitialCounter();
  }


  render() {
    const {
      counter
    } = this.props;
    return (
      <React.Fragment>
        <Button
          variant="contained"
          color="primary"
          onClick={() => this.props.increment()}> Increase
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => this.props.decrement()}
        >
          Decrease
        </Button>
        <p>
          {counter}
        </p>
      </React.Fragment>
    );
  }

}
//Definir que parte del estado voy a usar    
const mapStateProps = state => ({
  counter: state.counter
});

//Lanzar acciones     
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  fetchInitialCounter: () => dispatch(fetchInitial()),
})

export default connect(mapStateProps, mapDispatchToProps)(Counter);