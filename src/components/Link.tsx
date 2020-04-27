import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
}))

interface Props {
  children?: React.ReactNode
  to: string
}

const App: React.FC<Props> = (prop: Props) => {
  const classes = useStyles()
  return (
    <Link to={prop.to} className={classes.root}>
      {prop.children}
    </Link>
  )
}

export default App
