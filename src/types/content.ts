import { Tag } from './tag'
export interface Content {
  id: string
  tags: Tag[]
  emoji: string
  title: string
  description: string
  body: string
  updatedAt: string
}
