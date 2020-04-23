import React from 'react'
import Layout from '@/layouts'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const App: React.FC = () => {
  return (
    <Layout>
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <Typography variant="h4" component="h1">
            404 not found
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default App
