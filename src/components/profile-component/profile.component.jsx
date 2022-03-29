import { Component, Fragment } from "react";
import LeftProfile from "./left-profile.component/left-profile.component";
import RightProfile from "./right-profile-component/right-profile.component";
import "./profile.component.css";

class Profile extends Component {
  render() {
    return (
      <Fragment>
        <div className="shape h-full w-full bg-sky-500 absolute">asdws</div>
        <div className="flex bg-grey-100 h-screen">
          <LeftProfile />
          <RightProfile />
        </div>
      </Fragment>
    )
  }
}

export default Profile;