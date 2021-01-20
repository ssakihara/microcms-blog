import { Tag } from '@/types/tag'
export interface Content {
  id: string
  tags: Tag[]
  emoji: string
  title: string
  description: string
  body: string
  createdAt: string
  updatedAt: string
}
