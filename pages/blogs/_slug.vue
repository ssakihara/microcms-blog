<template>
  <v-container>
    <h1 class="mb-5">{{ content.title }}</h1>
    <div v-html="$md.render(content.body)" />
  </v-container>
</template>
<script>
import Prism from '~/plugins/prism'
import microcms from '~/plugins/microcms'
export default {
  head() {
    return {
      title: this.content.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.content.body
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.content.body
        }
      ]
    }
  },
  data() {
    return {
      content: {}
    }
  },
  async asyncData({ params }) {
    const data = await microcms.get(
      `/api/v1/${process.env.MICROCMS_BLOG_ENDPOINT}`
    )
    console.log(data.data)
    const contents = data.data.contents
    for (let index = 0; index < contents.length; index++) {
      const content = contents[index]
      if (content.slug === params.slug) {
        return { content }
      }
    }
  },
  mounted() {
    Prism.highlightAll()
  }
}
</script>
