<template>
  <v-container>
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
<style lang="scss" scoped>
.tag-wrap {
  padding: 10px 16px 60px 16px;
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

.card-footer {
  position: absolute;
  padding: 10px;
  bottom: 0;
  right: 0;

  p {
    margin: 0;
  }
}
</style>
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
