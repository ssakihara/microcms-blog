import React from 'react'
interface Props {
  children: React.ReactNode
  class: string
}

const App: React.FC<Props> = (props) => {
  return (
    <>
      <main className={`${props.class} min-h-main`}>
        <div className="container mx-auto max-w-screen-lg">{props.children}</div>
      </main>
    </>
  )
}
export default App
