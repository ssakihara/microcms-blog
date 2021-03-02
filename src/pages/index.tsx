import Text from 'components/DarkMode/Text'
import Main from 'components/Layout/Main'
import Card from 'components/Parts/Card'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import { getContents } from 'plugins/microcms'
import React from 'react'
import { Content } from 'types/microcms'

interface Props {
  contents: Content[]
}

const App: React.FC<Props> = (props) => {
  return (
    <>
      <NextSeo
        title={process.env.NEXT_PUBLIC_APP_NAME}
        description={process.env.NEXT_PUBLIC_APP_DESCRIPTION}
        openGraph={{
          url: process.env.NEXT_PUBLIC_APP_URL,
          title: process.env.NEXT_PUBLIC_APP_NAME,
          description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_APP_URL}/api/ogp?title=${process.env.NEXT_PUBLIC_APP_NAME}`,
              width: 1200,
              height: 840,
            },
          ],
          site_name: process.env.NEXT_PUBLIC_APP_NAME,
        }}
        twitter={{
          handle: `@${process.env.NEXT_PUBLIC_TWITTER_HANDLE}`,
          site: process.env.NEXT_PUBLIC_APP_NAME,
          cardType: 'summary_large_image',
        }}
      />
      <Main class="px-2 bg-top">
        <div className="flex pt-14">
          <Text className="text-4xl">Contents</Text>
        </div>
        <div className="flex flex-wrap justify-between pt-14">
          {props.contents.map((content) => {
            return (
              <div className="my-4 w-full md:w-5/12" key={content.id}>
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
