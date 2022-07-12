import React, { useState } from "react"
import LightDarkMode from "./light-DarkMode"
import SectionsLayout from "./sectionsLayout"

const SideBar = () => {
  const [menu, setMenu] = useState(false)
  const handleMenu = () => setMenu(!menu)
  return (
    <div className="w-full py-2 px-4 dark:bg-slate-800 bg-light-main">
      <div className="flex mx-auto max-w-5xl justify-between items-center">
        <button className="flex items-center" onClick={handleMenu}>
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
      <SectionsLayout menu={menu} handleMenu={handleMenu} />
    </div>
  )
}

export default SideBar