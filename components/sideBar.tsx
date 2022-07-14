import React from "react"
import LightDarkMode from "./light-DarkMode"

interface SideBarProps {
  handleMenu: () => void
}

const SideBar = ({ handleMenu }: SideBarProps) => {

  return (
    <div className="w-full py-2 px-4 dark:bg-slate-800 bg-light-main border-custom-main md:border-b-2 md:px-2">
      <div className="flex mx-auto max-w-5xl justify-between items-center  md:justify-end">
        <button
          className="flex items-center md:hidden"
          onClick={handleMenu}
        >
          <svg
            className="stroke-light-sec dark:stroke-dark-sec w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h24M4 16h24M4 24h24" />
          </svg>
          <div className="text-3xl ml-2 dark:text-dark-sec">Menu</div>
        </button>
        <LightDarkMode />
      </div>
    </div>
  )
}

export default SideBar