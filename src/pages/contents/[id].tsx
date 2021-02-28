import Text from '@/components/DarkMode/Text'
import Main from '@/components/Layout/Main'
import Html from '@/components/Parts/Html'
import dayjs from '@/plugins/dayjs'
import { getContent, getContents } from '@/plugins/microcms'
import { Content } from '@/types/microcms'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GetStaticProps, GetStaticPaths } from 'next'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import React from 'react'

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
          <Html html={props.content.body}></Html>
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
