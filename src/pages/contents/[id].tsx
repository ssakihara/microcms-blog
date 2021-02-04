import Html from '@/components/html'
import Main from '@/components/main'
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
        <div className="px-1 py-8">
          <h1 className="mb-1 text-2xl font-bold md:text-3xl">{props.content.title}</h1>
          <span className="text-gray-400">
            <FontAwesomeIcon icon={faSyncAlt} className="mr-1" />
            <span>{updatedAt}</span>
            {props.content.tags.map((tag) => {
              return (
                <span className="ml-1 text-href" key={tag.id}>
                  <Link href={`/tags/${tag.id}`}>{`#${tag.name}`}</Link>
                </span>
              )
            })}
          </span>
        </div>
        <div className="pb-10">
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
