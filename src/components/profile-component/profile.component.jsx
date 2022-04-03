import { Component } from "react";
import LeftProfile from "./left-profile.component/left-profile.component";
import RightProfile from "./right-profile-component/right-profile.component";
import "./profile.component.css";

class Profile extends Component {
  render() {
    return (
      <div className="dark:bg-slate-900">
        <div className="shape h-full w-full -z-50 bg-primary absolute"></div>
        <div className="flex bg-grey-100 h-screen dark:bg-slate-900">
          <LeftProfile />
          <RightProfile />
        </div>
      </div>
    )
  }
}


export default Profile;