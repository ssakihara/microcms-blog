import React from 'react'
import Link from 'next/link'

const App: React.FC = () => {
  return (
    <>
      <header className="header h-8">
        <div className="header_wrapper container mx-auto max-w-screen-lg h-full">
          <div className="header_inner flex items-center justify-between h-full">
            <Link href="/">
              <span className="header_title px-1 text-2xl font-bold cursor-pointer">
                {process.env.NEXT_PUBLIC_APP_NAME}
              </span>
            </Link>
            <div className="links flex items-center justify-between w-8 h-full">
              <div className="twitter px-1">
                <a href={process.env.NEXT_PUBLIC_TWITTER_URL} target="_blank" rel="noreferrer">
                  <i className="fab fa-twitter cursor-pointer"></i>
                </a>
              </div>
              <div className="github px-1">
                <a href={process.env.NEXT_PUBLIC_GITHUB_URL} target="_blank" rel="noreferrer">
                  <i className="fab fa-github cursor-pointer"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
export default App
