interface ButtonProps {
  isLoading?: boolean
  text: string,
  type: "button" | "submit" | "reset" | undefined
}

export default function Button({ isLoading, text, type }: ButtonProps) {
  return (
    <button type={type} disabled={isLoading}
      className="relative px-4 py-2 mt-12 w-full text-purple-600 font-semibold rounded-full border 
    border-purple-200 focus:outline-none focus:ring focus:ring-purple-500 focus:ring-opacity-80 cursor-pointer
    hover:text-white hover:bg-purple-600 hover:border-transparent disabled:opacity-70 disabled:bg-purple-600 disabled:text-white"
    >
      <svg className={`${isLoading ? "opacity-100" : "opacity-0"} absolute left-[4.2rem] top-[0.6rem] h-5 w-5 animate-spin text-white`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <span>{text}</span>
    </button>
  )
}