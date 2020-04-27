import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Layout from '@/layouts'
import SEO from '@/components/Seo'
import MainVisual from '@/components/MainVisual'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Link from '@/components/Link'
import { useStaticQuery, graphql } from 'gatsby'
import { MicrocmsContent } from 'types/graphql-types'

const useStyles = makeStyles({
  root: {
    height: '100%',
  },
})

const App: React.FC = () => {
  const contents = useStaticQuery(
    graphql`
      query IndexPage {
        allMicrocmsContent {
          edges {
            node {
              title
              description
            }
          }
        }
      }
    `
  )

  const classes = useStyles()

  const items = contents.allMicrocmsContent.edges.map(
    (edge: { node: Pick<MicrocmsContent, 'title' | 'description'> }, index: number) => {
      return (
        <Grid item key={index} xs={12} sm={4}>
          <Link to={'/home'}>
            <Card variant="outlined" className={classes.root}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {edge.node.title}
                </Typography>
                <Typography variant="body2" component="p">
                  {edge.node.description}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      )
    }
  )

  return (
    <Layout>
      <SEO title="Top" />
      <MainVisual></MainVisual>
      <Container>
        <Grid container spacing={3}>
          {items}
        </Grid>
      </Container>
    </Layout>
  )
}

export default App
