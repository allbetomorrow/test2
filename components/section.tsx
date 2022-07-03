import React from "react";
import Link from "next/link";

interface SectionProps {
  section: Section
  handleMenu: () => void
}

const Section = ({ section, handleMenu }: SectionProps) => {


  return (
    <Link href={`/${section.url}`}>
      <a onClick={handleMenu} className="text-2xl duration-200 pt-1 text-light-sec dark:text-dark-sec">{section.title}</a>
    </Link>
  )
}

export default Section