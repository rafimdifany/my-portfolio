import { Component, Fragment } from "react";
import LeftProfile from "./left-profile.component/left-profile.component";
import RightProfile from "./right-profile-component/right-profile.component";

class Profile extends Component {
  render() {
    return (
      <Fragment>
        <div className="flex bg-gray-100 h-screen">
          <LeftProfile />
          <RightProfile />
        </div>
      </Fragment>
    )
  }
}

export default Profile;