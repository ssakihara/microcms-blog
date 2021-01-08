import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'
import { Content } from '../../types/content'
import { Category } from '../../types/category'
import axios from '../../plugins/microcms'
import { NextSeo } from 'next-seo'
import Main from '../../components/main'

interface Props {
  category: Category
  contents: Content[]
}
const App: React.FC<Props> = (prop) => {
  console.log(prop)
  return (
    <>
      <NextSeo title={process.env.NEXT_PUBLIC_APP_NAME} description="" />
      <Main bg="bg-top">
        <div className="flex pt-7">
          <span className="text-4xl mr-5">Category</span>
          <span className="text-4xl">{prop.category.name}</span>
        </div>
        <div className="flex justify-center pt-7 justify-between flex-wrap">
          {prop.contents.map((item) => {
            return (
              <Link href={`/contents/${item.id}`} key={item.id}>
                <div className="card h-12 w-60 my-2 cursor-pointer">
                  <div className="card_wrapper container h-full">
                    <div className="card_inner flex">
                      <div className="emoji h-12 w-12 flex flex-row justify-center items-center bg-white rounded-lg mr-3">
                        <div className="emoji_inner text-5xl h-6 w-6">{item.emoji}</div>
                      </div>
                      <div className="flex-1">
                        <h1 className="text-xl break-all">{item.title}</h1>
                        <div className="category pt-1">
                          <div className="category_inner flex">
                            {item.categories.map((category) => {
                              return (
                                <div className="bg-white rounded-lg pt-0.5 pb-0.5 pr-1 pl-1 mr-1" key={category.id}>
                                  <Link href={`/categories/${category.id}`} key={item.id}>
                                    {category.name}
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
  const response = await axios.get('category')
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
  const responseContent = await axios.get(
    `content?fields=id,emoji,title,categories.id,categories.name&filters=categories[contains]${id}`
  )
  const contents = responseContent.data.contents

  const responseCategory = await axios.get(`category/${id}?fields=name`)
  const category = responseCategory.data
  return {
    props: {
      contents,
      category,
    },
  }
}

export default App
