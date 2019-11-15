<template>
  <v-container class="top">
    <v-row>
      <v-col v-for="(content, i) in contents" :key="i" cols="12" md="4">
        <v-card :to="to(content.id)" style="height: 100%;">
          <v-img
            :src="`${content.img.url}?fit=crop&w=320&h=320`"
            alt="コンテンツ各種画像"
          />
          <v-card-title class="py-0">{{ content.title }}</v-card-title>
          <div class="tag-wrap">
            <div v-for="(tag, j) in content.tags" :key="j" class="tag">
              <strong>{{ tag.name }}</strong>
            </div>
          </div>
          <div class="card-footer">
            <p>更新日:{{ date(content.updatedAt) }}</p>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import microcms from '~/plugins/microcms'
import { formatDate } from '~/util/date'
export default {
  head() {
    return { titleTemplate: null, title: process.env.APP_NAME }
  },
  async asyncData() {
    const data = await microcms.get(
      `/api/v1/${process.env.MICROCMS_BLOG_ENDPOINT}?limit=1000`
    )
    console.log(data.data)
    const contents = data.data.contents
    return { contents }
  },
  methods: {
    to(id) {
      return `/${process.env.MICROCMS_BLOG_ENDPOINT}/${id}`
    },
    date(date) {
      return formatDate(date)
    }
  }
}
</script>
