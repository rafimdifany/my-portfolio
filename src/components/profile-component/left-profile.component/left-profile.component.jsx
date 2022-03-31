import { Component } from "react";

class LeftProfile extends Component {
  render() {
    return (
      <div className="w-1/2 h-full pt-72 pl-20 animate-left-to-right content-center">
        <h1 className="text-6xl mb-5 font-bold text-sky-600">Rafi Mufadhal Difany</h1>
        <JobTitleAnimation />
        <ButtonHire />
      </div>
    )
  }
}

const JobTitleAnimation = () => {
  return (
    <div className="text-3xl font-extrabold text-slate-900 h-12 overflow-hidden dark:text-slate-400">
      <div className="h-full animate-move delay-1000">
        <h2 className="py-1">Software Engineer</h2>
        <h2 className="py-1">Web Developer</h2>
        <h2 className="py-1">UI/UX Designer</h2>
      </div>
    </div>
  )
}

const ButtonHire = () => {
  return (
    <button className="bg-white-200 border-solid border-2 border-sky-700  mt-3 px-5 py-2 rounded text-slate-900 font-semibold text-md  hover:bg-sky-700 hover:text-white">Hire Me</button>
  )
}

export default LeftProfile;