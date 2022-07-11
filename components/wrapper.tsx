import { ReactNode } from "react";

interface Wrapper {
  children: ReactNode
}

export default function Wrapper({ children }: Wrapper) {
  return (
    <div className="h-screen relative dark:bg-dark-main overflow-x-auto">
      {children}
    </div>
  )
}