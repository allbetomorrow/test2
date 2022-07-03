import { ReactNode } from "react";
import LightDarkMode from "./light-DarkMode"

interface Wrapper {
  children: ReactNode
}

export default function Wrapper({ children }: Wrapper) {
  return (
    <div className="h-screen relative dark:bg-dark-main overflow-x-auto">
      <LightDarkMode />
      {children}
    </div>
  )
}