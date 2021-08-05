import Link from 'next/link'
import React from 'react'

interface Props {
  className?: string
  href: string
  children: React.ReactNode
}

const App: React.FC<Props> = (props) => {
  return (
    <>
      <Link href={props.href}>
        <span className={`text-black ${props.className}`}>{props.children}</span>
      </Link>
    </>
  )
}

export default App
