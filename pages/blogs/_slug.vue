<template>
  <v-container>
    <h1 id="page-title">{{ content.title }}</h1>
    <div id="active-content" v-html="$md.render(content.body)" />
  </v-container>
</template>
<style lang="scss">
#page-title {
  font-size: 40px;
  margin: 0 0 16px;
  padding: 0px;
}
#active-content {
  h1 {
    font-size: 28.8px;
    margin: 63.36px 0 24px;
    padding: 30px 0px 0px 0px;
    border-bottom: 1px solid #ddd;
  }
  h2 {
    font-size: 25.6px;
    margin: 63.36px 0 24px;
    padding: 30px 0px 0px 0px;
    border-bottom: 1px solid #ddd;
  }
  h3 {
    font-size: 22.4px;
    margin: 49.28px 0 24px;
    padding: 30px 0px 0px 0px;
    border-bottom: 1px solid #ddd;
  }
}
</style>
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
          content: this.content.description
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.content.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.content.img.url
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary'
        },
        {
          hid: 'twitter:site',
          property: 'twitter:site',
          content: `@${process.env.TWITTER_USER}`
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
