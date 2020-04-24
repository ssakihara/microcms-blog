import React from 'react'
import Layout from '@/layouts'
import SEO from '@/components/seo'
import { graphql } from 'gatsby'
import { ContentsTemplateQuery } from 'types/graphql-types'

interface Props {
  children?: React.ReactNode
  data: ContentsTemplateQuery
}

const App: React.FC<Props> = (props: Props) => {
  const body: string = props.data.allMicrocmsContent.edges[0].node.body || ''
  return (
    <Layout>
      <SEO title="Content" />
      <div dangerouslySetInnerHTML={{ __html: body }} />
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
          body
        }
      }
    }
  }
`
