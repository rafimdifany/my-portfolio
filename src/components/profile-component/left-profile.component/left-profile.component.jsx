import { Component } from "react";

class LeftProfile extends Component {
  render() {
    return (
      <div className="w-1/2 h-full pt-72 pl-20 animate-left-to-right content-center">
        <h1 className="text-6xl mb-5 font-semibold text-primary">Rafi Mufadhal Difany</h1>
        <JobTitleAnimation />
        <ButtonHire />
      </div>
    )
  }
}

const JobTitleAnimation = () => {
  return (
    <div className="text-2xl font-semibold text-secondary h-8 overflow-hidden dark:text-slate-400">
      <div className="h-full animate-move delay-1000">
        <h2 className="">Software Engineer 💻</h2>
        <h2 className="">Web Developer</h2>
        <h2 className="">UI/UX Designer</h2>
      </div>
    </div>
  )
}

const ButtonHire = () => {
  return (
    <div className="mt-5">
      <button className="bg-white-200 border-solid border-2 border-sky-700  mt-3 px-5 py-2 rounded text-primary font-semibold text-md  hover:bg-sky-700 hover:text-secondary">Download Resume</button>
    </div>
  )
}

export default LeftProfile;