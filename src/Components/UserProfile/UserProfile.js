import React, { Component } from 'react'
import UserProfileInfo from '../UserProfileInfo/UserProfileInfo'
import AllUserTalk from '../AllUserTalk/AllUserTalk';

export default class UserProfile extends Component {
    render() {
        return (
            <div className='App'>
                <UserProfileInfo />

                <br />
                <hr style={{width: '50%'}} />
                
                <AllUserTalk />
            </div>
        )
    }
}
