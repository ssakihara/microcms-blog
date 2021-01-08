import React from 'react'
import Link from 'next/link'
interface Props {
  children: React.ReactNode
}

const App: React.FC<Props> = (props) => {
  return (
    <>
      <header className="header h-8">
        <div className="header_wrapper h-full container mx-auto max-w-screen-lg">
          <div className="header_inner h-full flex items-center">
            <Link href="/">
              <span className="header_title font-bold text-2xl cursor-pointer px-1">
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
