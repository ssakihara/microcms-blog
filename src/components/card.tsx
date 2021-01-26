import { Content } from '@/types/microcms'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import Link from 'next/link'
import emoji from 'node-emoji/lib/emoji.json'
import React from 'react'

interface Props {
  content: Content
}

const App: React.FC<Props> = (props) => {
  dayjs.extend(utc)
  dayjs.extend(timezone)
  dayjs.tz.setDefault('Asia/Tokyo')
  const createdAt = Number(dayjs(props.content.createdAt).format('YYYYMMDD'))
  const emojiArr = Object.entries(emoji).map(([key, emoji]) => ({ key: key, emoji: emoji }))
  const num = createdAt % emojiArr.length
  return (
    <>
      <Link href={`/contents/${props.content.id}`} key={props.content.id}>
        <div className="card w-60 h-12 cursor-pointer">
          <div className="card_inner flex">
            <div className="emoji flex flex-row items-center justify-center mr-3 w-12 h-12 bg-white rounded-lg">
              <div className="emoji_inner w-6 h-6 text-5xl">{emojiArr[num].emoji}</div>
            </div>
            <div className="text flex-1">
              <h1 className="break-all text-lg font-bold md:text-xl">{props.content.title}</h1>
              <div className="tag pt-1">
                <div className="tag_inner flex">
                  {props.content.tags.map((tag) => {
                    return (
                      <div className="mr-1 p-0 text-href" key={tag.id}>
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
      </Link>
    </>
  )
}
export default App
