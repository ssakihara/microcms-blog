import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'
import { Content } from '../../types/content'
import { Tag } from '../../types/tag'
import axios from '../../plugins/microcms'
import { NextSeo } from 'next-seo'
import Main from '../../components/main'

interface Props {
  tag: Tag
  contents: Content[]
}
const App: React.FC<Props> = (prop) => {
  return (
    <>
      <NextSeo title={process.env.NEXT_PUBLIC_APP_NAME} description="" />
      <Main bg="bg-contents">
        <div className="flex pt-7">
          <span className="mr-2 text-3xl md:text-4xl">Tag</span>
          <span className="break-all text-3xl md:text-4xl">{prop.tag.name}</span>
        </div>
        <div className="flex flex-wrap justify-between justify-center pt-7">
          {prop.contents.map((item) => {
            return (
              <Link href={`/contents/${item.id}`} key={item.id}>
                <div className="card my-2 w-60 h-12 cursor-pointer">
                  <div className="card_wrapper container h-full">
                    <div className="card_inner flex">
                      <div className="emoji flex flex-row items-center justify-center mr-3 w-12 h-12 bg-white rounded-lg">
                        <div className="emoji_inner w-6 h-6 text-5xl">{item.emoji}</div>
                      </div>
                      <div className="flex-1">
                        <h1 className="break-all text-lg font-bold md:text-xl">{item.title}</h1>
                        <div className="tag pt-1">
                          <div className="tag_inner flex">
                            {item.tags.map((tag) => {
                              return (
                                <div className="mr-1 pb-0.5 pl-1 pr-1 pt-0.5 bg-white rounded-lg" key={tag.id}>
                                  <Link href={`/tags/${tag.id}`} key={tag.id}>
                                    <span>{tag.name}</span>
                                  </Link>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </Main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await axios.get('tag')
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
  const responseContent = await axios.get(`content?fields=id,emoji,title,tags.id,tags.name&filters=tags[contains]${id}`)
  const contents = responseContent.data.contents

  const responseTag = await axios.get(`tag/${id}?fields=name`)
  const tag = responseTag.data
  return {
    props: {
      contents,
      tag,
    },
  }
}

export default App
