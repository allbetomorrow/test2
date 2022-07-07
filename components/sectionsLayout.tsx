import axios from "axios"
import React, { useState } from "react"
import { useQuery } from "react-query"
import { isServer } from "../utils/isServer"
import Section from "./section"

interface SectionsLayoutProps {
  menu: boolean,
  handleMenu: () => void
}


const SectionsLayout = (props: SectionsLayoutProps) => {
  const { data: sections } = useQuery('sections', async () => {
    const res = await axios.get('/api/sections', { withCredentials: true })
    return res.data as Section[]
  })

  return (
    <div
      className={`flex dark:bg-dark-main pt-16
        bg-light-main dark:border-r-dark-th dark:rounded-r-lg
        flex-col h-full z-10 items-center fixed top-0 left-0 overflow-x-hidden duration-500
        ${props.menu ? "w-full dark:border-r-4" : "w-0 dark:border-r-0"}`}
    >
      <button className="sm:hidden absolute top-2 right-2" onClick={props.handleMenu}>
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
          {sections.map(sec => <Section key={sec.id} section={sec} handleMenu={props.handleMenu} />)}
        </div>
        :
        <div className="text-2xl duration-200 pt-1 text-light-sec dark:text-dark-sec">Loading...</div>

      }

    </div>
  )

}

export default SectionsLayout