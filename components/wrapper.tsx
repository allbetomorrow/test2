import { ReactNode } from "react";

interface Wrapper {
  children: ReactNode
}

export default function Wrapper({ children }: Wrapper) {
  return (
    <div className="h-full relative dark:bg-dark-main overflow-x-auto">
      {children}
    </div>
  )
}