import React, { Component } from 'react'
import Talks from '../Talks/Talks';
import { connect } from 'react-redux';
import Spinner from '../../Factory/Spinner/Spinner';
import { getAllTalks } from '../../redux/actions/talkAction';

class ShowAllTalks extends Component {

    state = {
        loading: false
    }

    componentDidMount() {
        this.setState({
            loading: true
        })
        this.props.getAllTalks()
            .then(() => {
                this.setState({
                    loading: false
                })
            })
            .catch(() => {
                this.setState({
                    loading: false
                })
            })
    }

    render() {
        return (
            <div className='App'>
                { this.state.loading ? <Spinner /> : <Talks />}
            </div>
        )
    }
}


export default connect(null, { getAllTalks})(ShowAllTalks);