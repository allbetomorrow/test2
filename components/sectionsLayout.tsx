import axios from "axios"
import React, { useState } from "react"
import { useQuery } from "react-query"
import { isServer } from "../utils/isServer"
import Section from "./section"

interface SectionsLayoutProps {
  menu: boolean,
  handleMenu: () => void
}


const SectionsLayout = ({ menu, handleMenu }: SectionsLayoutProps) => {
  const { data: sections } = useQuery('sections', async () => {
    const res = await axios.get('/api/sections', { withCredentials: true })
    return res.data as Section[]
  })

  return (
    <div
      className={`flex flex-col items-center h-full z-10 pt-16 fixed top-0 left-0
      dark:bg-dark-main bg-light-main dark:border-r-custom-main dark:rounded-r-lg dark:md:bg-slate-800
        md:relative md:w-full md:border-none md:transition-none md:pt-8
        overflow-x-hidden duration-500 
        ${menu ? "w-full  dark:border-r-4" : "w-0 dark:border-r-0"}`}
    >
      <button className="md:hidden absolute top-2 right-2" onClick={handleMenu}>
        <svg
          className="stroke-light-sec fill-light-sec dark:stroke-dark-sec dark:fill-dark-sec w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36 36">
          <path d="m19.41 18l8.29-8.29a1 1 0 0 0-1.41-1.41L18 16.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29l-8.3 8.29A1 1 0 1 0 9.7 27.7l8.3-8.29l8.29 8.29a1 1 0 0 0 1.41-1.41Z" />
        </svg>
      </button>

      {sections && !isServer
        ?
        <div className="flex flex-col items-center">
          {sections.map(sec => <Section key={sec.id} section={sec} handleMenu={handleMenu} />)}
        </div>
        :
        <div className="text-2xl duration-200 pt-1 text-light-sec dark:text-dark-sec">Loading...</div>

      }

    </div>
  )

}

export default SectionsLayout