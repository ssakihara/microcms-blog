<template>
  <v-container>
    <h1>{{ title }}</h1>
    <p>
      お探しのページは一時的にアクセスができない状況にあるか、移動もしくは削除された可能性があります。
      また、URL、ファイル名にタイプミスがないか再度ご確認ください。
    </p>
    <p><nuxt-link to="/">トップページへ</nuxt-link></p>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: '404 Not Found'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>
