import axios from 'axios'
export async function fetchBlogRoutes() {
  const data = await axios.get(
    `${process.env.MICROCMS_URL}/api/v1/${process.env.MICROCMS_BLOG_ENDPOINT}?fields=slug&limit=1000`,
    {
      headers: {
        'X-API-KEY': process.env.MICROCMS_X_API_KEY
      }
    }
  )
  const route = data.data.contents.map((content) => {
    return `${process.env.MICROCMS_BLOG_ENDPOINT}/${content.slug}`
  })
  return route
}
