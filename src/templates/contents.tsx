import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Layout from '@/layouts'
import SEO from '@/components/Seo'
import { graphql } from 'gatsby'
import { ContentsTemplateQuery } from 'types/graphql-types'
import Render from '@/components/MarkdownRender'
import Grid from '@material-ui/core/Grid'
import moment from 'moment-timezone'

const useStyles = makeStyles({
  root: {
    padding: '30px 10px',
  },
})

interface Props {
  children?: React.ReactNode
  data: ContentsTemplateQuery
}

const App: React.FC<Props> = (props: Props) => {
  const classes = useStyles()
  const title: string = props.data.allMicrocmsContent.edges[0].node.title || ''
  const description: string = props.data.allMicrocmsContent.edges[0].node.description || ''
  const body: string = props.data.allMicrocmsContent.edges[0].node.body || ''
  const updatedAt = moment.utc(props.data.allMicrocmsContent.edges[0].node.updatedAt).format('Y/M/D')

  return (
    <Layout>
      <SEO title={title} description={description} />
      <Grid container direction="row" justify="center" alignItems="center" className={classes.root}>
        <Grid item className="content">
          <p>更新日:{updatedAt}</p>
          <h1 className="title">{title}</h1>
          <Render source={body} />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default App

export const query = graphql`
  query ContentsTemplate($contentId: String) {
    allMicrocmsContent(filter: { contentId: { eq: $contentId } }) {
      edges {
        node {
          contentId
          title
          description
          body
          updatedAt
        }
      }
    }
  }
`
