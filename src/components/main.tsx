import React from 'react'
interface Props {
  children: React.ReactNode
  bg: string
}

const App: React.FC<Props> = (props) => {
  return (
    <>
      <main className={`${props.bg} min-h-screen`}>
        <div className="container mx-auto max-w-screen-lg">{props.children}</div>
      </main>
    </>
  )
}
export default App
