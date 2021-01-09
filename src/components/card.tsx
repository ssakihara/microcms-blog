import React from 'react'
import Link from 'next/link'
import { Content } from '../types/content'

interface Props {
  content: Content
}

const App: React.FC<Props> = (props) => {
  return (
    <>
      <Link href={`/contents/${props.content.id}`} key={props.content.id}>
        <div className="card my-2 w-60 h-12 cursor-pointer">
          <div className="card_wrapper container h-full">
            <div className="card_inner flex">
              <div className="emoji flex flex-row items-center justify-center mr-3 w-12 h-12 bg-white rounded-lg">
                <div className="emoji_inner w-6 h-6 text-5xl">{props.content.emoji}</div>
              </div>
              <div className="flex-1">
                <h1 className="break-all text-lg font-bold md:text-xl">{props.content.title}</h1>
                <div className="tag pt-1">
                  <div className="tag_inner flex">
                    {props.content.tags.map((tag) => {
                      return (
                        <div className="mr-1 p-0 text-href rounded-lg" key={tag.id}>
                          <Link href={`/tags/${tag.id}`} key={props.content.id}>
                            {`#${tag.name}`}
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
    </>
  )
}
export default App
