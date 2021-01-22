import axios from 'axios'
import { AxiosResponse } from 'axios'

interface Request {
  draftKey?: string
  limit?: number
  offset?: number
  orders?: string
  q?: string
  fields?: string
  ids?: string
  filters?: string
  depth?: string
}
export interface Response<T> {
  contents: T[]
  totalCount: number
  offset: number
  limit: number
}

const microcms = axios.create({
  baseURL: `${process.env.MICROCMS_URL}/api/v1/`,
  headers: {
    'X-API-KEY': process.env.MICROCMS_X_API_KEY,
  },
})

const getContent = <T>(url: string, params?: Request): Promise<AxiosResponse<T>> => {
  return microcms.get(url, { params })
}

const getContents = <T>(url: string, params?: Request): Promise<AxiosResponse<Response<T>>> => {
  return microcms.get(url, { params })
}

export { microcms, getContent, getContents }
