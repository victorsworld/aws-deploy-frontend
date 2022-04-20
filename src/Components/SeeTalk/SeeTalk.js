import React, { Component } from 'react'
import Spinner from '../../Factory/Spinner/Spinner';
import { connect } from 'react-redux';
import { getTalkByID } from '../../redux/actions/talkAction';

class SeeTalk extends Component {

    state = {
        title: '',
        image: '',
        talk: '',
        isFetching: false
    }

    componentDidMount() {
        console.log(this.props.location)
        if (this.props.location.state !== undefined) {
            this.setState({
                title: this.props.location.state.title,
                image: this.props.location.state.image,
                talk: this.props.location.state.talk
            })
        } else {
            this.setState({
                isFetching: true
            })
            this.props.getTalkByID(this.props.match.params.id)
                .then( talk => {

                    this.setState({
                        title: talk.title, 
                        image: talk.image, 
                        talk: talk.talk, 
                        isFetching: false
                    })
                })  
                .catch( error => {
                    this.setState({
                        isFetching: false
                    })
                    console.log(error);
                })
        }
    }
    render() {
        let talkInfo = (
            <div className='App'>
                <h1>title {this.state.title}</h1>
                <div><img src={this.state.image} alt="hamster"/></div>
                <p>{this.state.talk}</p>
            </div>
        )
        return (
           this.state.isFetching ? <Spinner /> : talkInfo
        )
    }
}

export default connect(null, {getTalkByID})(SeeTalk);