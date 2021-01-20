import React from 'react'
import Link from 'next/link'

const App: React.FC = () => {
  return (
    <>
      <header className="header container mx-auto px-1 h-8">
        <div className="header_inner flex items-center justify-between h-full">
          <Link href="/">
            <span className="header_title text-2xl font-bold cursor-pointer">{process.env.NEXT_PUBLIC_APP_NAME}</span>
          </Link>
          <div className="link flex items-center justify-between w-6 h-full cursor-pointer">
            <div className="twitter">
              <a href={process.env.NEXT_PUBLIC_TWITTER_URL} target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <div className="github">
              <a href={process.env.NEXT_PUBLIC_GITHUB_URL} target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
export default App
