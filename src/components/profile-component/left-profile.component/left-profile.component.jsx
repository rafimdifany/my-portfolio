import { Component } from "react";

class LeftProfile extends Component {
  render() {
    return (
      <div className="w-1/2 pt-60 pl-24">
        <h1 className="text-6xl mb-5 font-bold text-sky-500">Rafi Mufadhal Difany</h1>
        <JobTitleAnimation />
      </div>
    )
  }
}

const JobTitleAnimation = () => {
  return (
    <div className="text-3xl font-bold text-gray-700 h-12 overflow-hidden">
      <div className="h-full animate-move">
        <h2 className="py-1">Software Engineer</h2>
        <h2 className="py-1">Web Developer</h2>
        <h2 className="py-1">UI/UX Designer</h2>
      </div>
    </div>
  )
}

export default LeftProfile;