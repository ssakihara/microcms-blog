<template>
  <v-container>
    <div class="date">
      <p>更新日:{{ date(content.updatedAt) }}</p>
    </div>
    <h1 id="page-title">{{ content.title }}</h1>
    <div class="tag-wrap">
      <div v-for="(tag, j) in tags(content.tags)" :key="j" class="tag">
        <strong>{{ tag }}</strong>
      </div>
    </div>
    <div id="active-content" v-html="$md.render(content.body)" />
  </v-container>
</template>
<style lang="scss">
.tag-wrap {
  padding: 10px 0;
  margin-bottom: 30px;
}
.tag {
  margin: 0 10px 0 0;
  padding: 0 5px;
  display: inline-block;
  text-align: center;
  color: #fff;
  background-color: #f83;
  border-radius: 5px;
}
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
  h4 {
    font-size: 19.2px;
    margin: 42.24px 0 24px;
    padding: 30px 0px 0px 0px;
    border-bottom: 1px solid #ddd;
  }
  table,
  td,
  th {
    border-collapse: collapse;
    border: 1px solid #333;
    padding: 5px;
  }
}
</style>
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
      `/api/v1/${process.env.MICROCMS_BLOG_ENDPOINT}/${params.id}`
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
    },
    tags(tags) {
      if (/,/.test(tags)) {
        return tags.split(',')
      }
      return [tags]
    }
  }
}
</script>
