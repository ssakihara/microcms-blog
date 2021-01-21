import React from 'react'
import Header from '@/layouts/header'
import Footer from '@/layouts/footer'

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
