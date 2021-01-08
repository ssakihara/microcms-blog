import React from 'react'
import Link from 'next/link'
interface Props {
  children: React.ReactNode
}

const App: React.FC<Props> = (props) => {
  return (
    <>
      <header className="header h-8">
        <div className="header_wrapper container mx-auto max-w-screen-lg h-full">
          <div className="header_inner flex items-center h-full">
            <Link href="/">
              <span className="header_title px-1 text-2xl font-bold cursor-pointer">
                {process.env.NEXT_PUBLIC_APP_NAME}
              </span>
            </Link>
          </div>
        </div>
      </header>
      {props.children}
      {/* <footer>footer</footer> */}
    </>
  )
}
export default App
