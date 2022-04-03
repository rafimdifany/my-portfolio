import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <nav class="flex items-center justify-between flex-wrap bg-transparent-0 absolute p-6 w-full">
          <div class="flex items-center flex-no-shrink text-primary mr-6">
            <span class="font-semibold text-xl tracking-tight">My Portfolio</span>
          </div>
          <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
              <svg class="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </button>
          </div>
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
              <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-secondary hover:text-primary mr-4">
                Home
              </a>
              <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-secondary hover:text-primary mr-4">
                Experience
              </a>
              <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-secondary hover:text-primary">
                Certificate
              </a>
            </div>
            <div>
              <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-primary mt-4 lg:mt-0">Hire Me</a>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header;