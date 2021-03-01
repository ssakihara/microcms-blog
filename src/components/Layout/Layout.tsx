import Footer from 'components/Layout/Footer'
import Header from 'components/Layout/Header'
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
