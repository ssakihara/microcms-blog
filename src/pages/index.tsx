import Card from '@/components/card'
import Main from '@/components/main'
import { getContents } from '@/plugins/microcms'
import { Content } from '@/types/microcms'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import React from 'react'

interface Props {
  contents: Content[]
}

const App: React.FC<Props> = (props) => {
  return (
    <>
      <NextSeo title={process.env.NEXT_PUBLIC_APP_NAME} description={process.env.NEXT_PUBLIC_APP_DESCRIPTION} />
      <Main class="px-1 bg-top">
        <div className="flex pt-7">
          <span className="text-4xl">Contents</span>
        </div>
        <div className="flex flex-wrap justify-between pt-7">
          {props.contents.map((content) => {
            return (
              <div className="my-2 w-full md:w-5/12" key={content.id}>
                <Card content={content}></Card>
              </div>
            )
          })}
        </div>
      </Main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await getContents<Content>('content', {
    fields: 'id,title,createdAt,tags.id,tags.name',
  })
  const props = response.data
  return {
    props,
  }
}

export default App
