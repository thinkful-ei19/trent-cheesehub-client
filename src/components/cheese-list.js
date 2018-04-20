import React from 'react';
import {connect} from 'react-redux';

import {fetchCheeses} from '../actions/cheese';

class CheeseList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchCheeses());
        console.log(this.props)
    }

    render () {
        const cheeses = this.props.cheeses.map((cheese,index) => {
            return <li key={index}>{cheese}</li>
        });
    
        return (<ul>
                {cheeses}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
        cheeses: state.cheese.cheeses
    }
} 

export default connect(mapStateToProps)(CheeseList);