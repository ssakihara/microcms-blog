import { Category } from './category'
export interface Content {
  id: string
  categories: Category[]
  emoji: string
  title: string
  description: string
  body: string
  updatedAt: string
}
