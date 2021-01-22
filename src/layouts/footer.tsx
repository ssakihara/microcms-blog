import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import React from 'react'

const App: React.FC = () => {
  dayjs.extend(utc)
  dayjs.extend(timezone)
  dayjs.tz.setDefault('Asia/Tokyo')
  const now = dayjs().format('YYYY')
  return (
    <>
      <footer className="container mx-auto px-1 h-8">
        <div className="flex items-center h-full">
          <a href={process.env.NEXT_PUBLIC_TWITTER_URL} target="_blank" rel="noreferrer">
            <span>©️ {now} @ssakihara0524</span>
          </a>
        </div>
      </footer>
    </>
  )
}

export default App
