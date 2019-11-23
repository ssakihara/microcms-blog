<template>
  <v-container class="blogs">
    <div class="date">
      <p>更新日:{{ date(content.updatedAt) }}</p>
    </div>
    <h1 id="page-title">{{ content.title }}</h1>
    <div class="tag-wrap">
      <div v-for="(tag, j) in content.tags" :key="j" class="tag">
        <strong>{{ tag.name }}</strong>
      </div>
    </div>
    <div id="active-content" v-html="$md.render(content.body)" />
  </v-container>
</template>

<script>
import Prism from '~/plugins/prism'
import microcms from '~/plugins/microcms'
import { formatDate } from '~/util/date'
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
      `${process.env.MICROCMS_BLOG_ENDPOINT}/${params.id}`
    )
    console.log(data.data)
    return { content: data.data }
  },
  mounted() {
    Prism.highlightAll()
  },
  methods: {
    date(date) {
      return formatDate(date)
    }
  }
}
</script>
