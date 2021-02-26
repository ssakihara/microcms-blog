import dayjs from '@/plugins/dayjs'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const App: React.FC = () => {
  const now = dayjs().format('YYYY')
  return (
    <>
      <footer className="dark:bg-gray-900">
        <div className="container mx-auto px-2 h-16">
          <div className="flex items-center justify-center h-full dark:text-white">
            <a href={process.env.NEXT_PUBLIC_TWITTER_URL} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faCopyright} />
              <span> {now} @ssakihara0524</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
