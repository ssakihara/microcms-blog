import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Layout from '@/layouts'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Link } from 'gatsby'

const useStyles = makeStyles({
  root: {
    padding: 10,
  },
  title: {
    marginTop: 30,
  },
})

const App: React.FC = () => {
  const classes = useStyles()

  return (
    <Layout>
      <Grid container justify="center" alignItems="center" className={classes.root}>
        <Grid item>
          <Typography variant="h4" component="h1" className={classes.title}>
            404 not found
          </Typography>
          <Typography variant="body1" component="p">
            お探しのページは一時的にアクセスができない状況にあるか、移動もしくは削除された可能性があります。
            また、URL、ファイル名にタイプミスがないか再度ご確認ください。
          </Typography>
          <Link to={'/'}>トップページへ</Link>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default App
