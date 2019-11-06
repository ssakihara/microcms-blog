<template>
  <v-container>
    <h1>{{ title }}</h1>
    <v-simple-table>
      <tbody>
        <tr v-for="(content, i) in contents" :key="i">
          <td>{{ content.head }}</td>
          <td>
            <div>{{ content.element }}</div>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-container>
</template>

<script>
import microcms from '~/plugins/microcms'
export default {
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description
        }
      ]
    }
  },
  data() {
    return {
      title: 'プロフィール',
      description: '簡易プロフィール'
    }
  },
  async asyncData() {
    const data = await microcms.get(
      `/api/v1/${process.env.MICROCMS_PROFILE_ENDPOINT}?limit=1000`
    )
    console.log(data.data)
    const contents = data.data.contents
    return { contents }
  }
}
</script>
