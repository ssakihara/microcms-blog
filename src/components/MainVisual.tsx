import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    height: 300,
    width: '100%',
    backgroundColor: '#2a3b48',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: 50,
  },
  title: {
    color: 'white',
    textAlign: 'center',
  },
}))

const App: React.FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>駆け出しエンジニアの備忘録的な技術ブログ</h1>
    </div>
  )
}

export default App
