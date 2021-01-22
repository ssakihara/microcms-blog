interface InitialColumn {
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}

export interface Tag extends InitialColumn {
  id: string
  name: string
}

export interface Content extends InitialColumn {
  id: string
  tags: Tag[]
  title: string
  description: string
  body: string
}
