import { Fragment } from "react";
import "./App.css";
import Header from "./components/header-component/header-component";
import Profile from "./components/profile-component/profile.component";

function App() {
  return (
    <Fragment>
      <div>
        <Header/>
        <Profile />
      </div>
    </Fragment>
  );
}

export default App;
