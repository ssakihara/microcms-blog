import React from 'react'

interface Props {
  children: React.ReactNode
  class: string
}

const App: React.FC<Props> = (props) => {
  return (
    <>
      <main className={`${props.class} px-2 min-h-main dark:bg-gray-800`}>
        <div className="container mx-auto max-w-screen-lg">{props.children}</div>
      </main>
    </>
  )
}
export default App
