import React from 'react'
import Layout from '@/layouts'
import SEO from '@/components/seo'
import { graphql } from 'gatsby'
import { ContentsTemplateQuery } from 'types/graphql-types'
import Render from '@/components/markdown-render'
import Grid from '@material-ui/core/Grid'

interface Props {
  children?: React.ReactNode
  data: ContentsTemplateQuery
}

const App: React.FC<Props> = (props: Props) => {
  const title: string = props.data.allMicrocmsContent.edges[0].node.title || ''
  const description: string = props.data.allMicrocmsContent.edges[0].node.description || ''
  const body: string = props.data.allMicrocmsContent.edges[0].node.body || ''
  return (
    <Layout>
      <SEO title={title} description={description} />
      <Grid container id="content" direction="row" justify="center" alignItems="center">
        <Grid item>
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
        }
      }
    }
  }
`
