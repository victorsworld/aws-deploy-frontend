import React, { Component } from 'react'
import Talk from '../Talk/Talk';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';


const styles = {
    root: {
        flexGrow: 1,
        marginTop: 15
    }
}

class Talks extends Component {
    render() {
        const { talks } = this.props.talk;
        return (
            <div className={this.props.classes.root}>
                <Grid container justify='center' spacing={1}>
                    {
                        talks.map((talk) => {
                            return (
                                <Grid key={talk._id} item>
                                    <Talk {...talk} />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        talk: state.talk
    }
}

export default connect(mapStateToProps, null)(withStyles(styles)(Talks));