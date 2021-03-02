import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Text from 'components/DarkMode/Text'
import Main from 'components/Layout/Main'
import Html from 'components/Parts/Html'
import { GetStaticProps, GetStaticPaths } from 'next'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import dayjs from 'plugins/dayjs'
import { getContent, getContents } from 'plugins/microcms'
import React from 'react'
import styles from 'styles/pages/contents/id.module.css'
import { Content } from 'types/microcms'

interface Props {
  content: Content
}

const App: React.FC<Props> = (props) => {
  const updatedAt = dayjs(props.content.updatedAt).format('YYYY/MM/DD HH:mm')
  return (
    <>
      <NextSeo
        title={`${props.content.title} | ${process.env.NEXT_PUBLIC_APP_NAME}`}
        description={`${props.content.description}`}
        openGraph={{
          url: process.env.NEXT_PUBLIC_APP_URL,
          title: `${props.content.title} | ${process.env.NEXT_PUBLIC_APP_NAME}`,
          description: props.content.description,
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_APP_URL}/api/ogp?title=${props.content.title}`,
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
      <Main class="bg-contents">
        <div className="px-2 py-16">
          <Text>
            <h1 className="mb-2 text-2xl font-bold md:text-3xl">{props.content.title}</h1>
          </Text>
          <span className="text-gray-400">
            <FontAwesomeIcon icon={faSyncAlt} className="mr-2" />
            <span>{updatedAt}</span>
            {props.content.tags.map((tag) => {
              return (
                <span className="ml-2 text-href" key={tag.id}>
                  <Link href={`/tags/${tag.id}`}>{`#${tag.name}`}</Link>
                </span>
              )
            })}
          </span>
        </div>
        <div className="pb-20">
          <Html html={props.content.body} className={`${styles.html}`}></Html>
        </div>
      </Main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths<any> = async () => {
  const limit = 10000
  const response = await getContents<Content>('content', {
    limit,
  })
  const paths = response.data.contents.map((params) => ({
    params,
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params.id
  const response = await getContent<Content>(`content/${id}`)
  const content = response.data
  return {
    props: {
      content,
    },
  }
}

export default App
