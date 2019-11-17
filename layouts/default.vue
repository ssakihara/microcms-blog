<template>
  <v-app>
    <v-app-bar fixed app flat>
      <v-toolbar-title class="header">
        <nuxt-link v-text="title" to="/" class="header__title" />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn :href="gitHubLink" text target="_blank">
        <v-icon>fab fa-github</v-icon>
      </v-btn>
      <v-btn :href="twitterLink" text target="_blank">
        <v-icon>fab fa-twitter</v-icon>
      </v-btn>
    </v-app-bar>
    <div v-if="$route.path === '/'" class="main-visual">
      <h1 class="main-visual__title">{{ topTitle }}</h1>
      <v-btn class="main-visual__btn" text to="/profile">
        簡易プロフィール
      </v-btn>
    </div>
    <v-content>
      <v-container id="main">
        <v-row justify="center">
          <v-col cols="0" md="3">
            <adsbygoogle />
          </v-col>
          <v-col cols="12" md="6">
            <nuxt />
          </v-col>
          <v-col cols="0" md="3">
            <adsbygoogle />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer padless>
      <v-container class="footer">
        <v-row justify="center">
          <v-col cols="12" md="6">
            <p class="footer__notes">
              ご意見やご指摘はTwitterのDMにて対応します
            </p>
            <p class="footer__notes">本サイトはダークモードに対応しています</p>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" md="6">
            <p class="footer__copyright">
              Copyright © 2019 Shinnosuke All Rights Reserved.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      title: process.env.APP_NAME,
      topTitle: process.env.APP_DESCRIPTION,
      gitHubLink: process.env.GITHUB_URL,
      twitterLink: `https://twitter.com/${process.env.TWITTER_USER}`
    }
  },
  mounted() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.$vuetify.theme.dark = true
    }
  }
}
</script>
