import Footer from '@/layouts/footer'
import Header from '@/layouts/header'
import React from 'react'

interface Props {
  children: React.ReactNode
}

const App: React.FC<Props> = (props) => {
  return (
    <>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </>
  )
}

export default App
