import React from 'react'

interface Props {
  className?: string
  children: React.ReactNode
}

const App: React.FC<Props> = (props) => {
  const className = props.className ?? ''
  return (
    <>
      <span className={`text-black dark:text-white ${className}`}>{props.children}</span>
    </>
  )
}

export default App
