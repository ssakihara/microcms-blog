import React from 'react'
import Header from '@/layouts/header'

interface Props {
  children: React.ReactNode
}

const App: React.FC<Props> = (props) => {
  return (
    <>
      <Header></Header>
      {props.children}
    </>
  )
}
export default App
