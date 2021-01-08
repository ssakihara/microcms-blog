import React from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { Content } from '../types/content'
import axios from '../plugins/microcms'
import { NextSeo } from 'next-seo'
import Main from '../components/main'

interface Props {
  contents: Content[]
}
const App: React.FC<Props> = (prop) => {
  return (
    <>
      <NextSeo title={process.env.NEXT_PUBLIC_APP_NAME} description="" />
      <Main bg="bg-top">
        <div className="flex pt-7">
          <span className="text-4xl">Contents</span>
        </div>
        <div className="flex justify-center pt-7 justify-between flex-wrap">
          {prop.contents.map((item) => {
            return (
              <Link href={`/contents/${item.id}`} key={item.id}>
                <div className="card h-12 w-60 my-2 cursor-pointer">
                  <div className="card_wrapper container h-full">
                    <div className="card_inner flex">
                      <div className="emoji_wrapper h-12 w-12 flex flex-row justify-center items-center bg-white rounded-lg mr-3">
                        <div className="emoji_inner text-5xl h-6 w-6">{item.emoji}</div>
                      </div>
                      <div className="flex-1">
                        <h1 className="text-xl break-all">{item.title}</h1>
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

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get('content?fields=id,emoji,title')
  const props = response.data
  return {
    props,
  }
}

export default App
