import React, { Component } from 'react'
import Talk from '../Talk/Talk'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import {getAllUserTalks, handleUserDeleteTalkByID} from '../../redux/actions/talkAction';
import Spinner from '../../Factory/Spinner/Spinner'

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 15,
  }
}

class AllUserTalk extends Component {


  state = {
    isFetching: false,
  }

  componentDidMount() {

    this.setState({
      isFetching: true
    })

    this.props.getAllUserTalks(this.props.authUser.user.id)
        .then( allUserTalks => {
  
          this.setState({
            isFetching: false
          })
        })
        .catch(error => {
          this.setState({
            isFetching: false
          })
          console.log(error)
        })
  }


  render() {

    const { userTalks } = this.props.talk; 

    const userProfileUrl = this.props.match.url;

    let userTalksGrid = (
      <Grid container justify="center"  spacing={1}>
      {
        userTalks.map((talk) => {
          return (
            <Grid key={talk._id}  item>
              <Talk {...talk} 
                userProfileUrl={userProfileUrl}
                handleUserDeleteTalkByID={this.props.handleUserDeleteTalkByID}
                />
            </Grid>
             )
            })
          }
      </Grid>
    )

    return (
      <div className={this.props.classes.root}>
          {this.state.isFetching ? <Spinner /> : userTalksGrid}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    talk: state.talk,
    authUser: state.authUser
  }
}

export default connect(mapStateToProps, { getAllUserTalks, handleUserDeleteTalkByID })(withRouter(withStyles(styles)(AllUserTalk)));