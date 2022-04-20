import React, { Component } from 'react'
import ShowAllTalks from '../ShowAllTalks/ShowAllTalks';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return (
            <div className="App">
                {this.props.authUser.isAuthenticated ? <ShowAllTalks /> : <h1>Please sign up to see all the talks</h1>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        authUser: state.authUser
    }
}

export default connect(mapStateToProps, null)(Home);
