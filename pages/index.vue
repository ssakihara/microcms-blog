<template>
  <v-container>
    <v-row>
      <v-col v-for="(content, i) in contents" :key="i" cols="12" md="4">
        <v-card :to="to(content.slug)" style="height:100%;">
          <v-img :src="`${content.img.url}?fit=crop&w=320&h=320`" />
          <v-card-title>{{ content.title }}</v-card-title>
          <v-card-text class="text-end">
            更新日:{{ formatDate(content.updatedAt) }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.text-end {
  text-align: right;
}
</style>
<script>
import moment from 'moment-timezone'
import microcms from '~/plugins/microcms'
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
    to(slug) {
      return `/${process.env.MICROCMS_BLOG_ENDPOINT}/${slug}`
    },
    formatDate(date) {
      return moment.utc(date).format('Y/M/D')
    }
  }
}
</script>
