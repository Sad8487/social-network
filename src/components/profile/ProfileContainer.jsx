import React from 'react';
import Profile from "./Profile";
import axios from "axios/index";
import {connect} from 'react-redux'
import {setUserProfile} from "../../redux/profile-reducer";


class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                // debugger;
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} /> //кроме пропсов, возьми еще профайл из mapStateToProps
        )
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)