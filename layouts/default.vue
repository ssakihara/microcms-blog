<template>
  <v-app>
    <v-app-bar fixed app flat extension-height="300">
      <v-toolbar-title class="header-title">
        <nuxt-link to="/" v-text="title" />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text :href="gitHubLink" target="_blank">
        <v-icon>fab fa-github</v-icon>
      </v-btn>
      <v-btn text :href="twitterLink" target="_blank">
        <v-icon>fab fa-twitter</v-icon>
      </v-btn>
      <template v-if="$route.path === '/'" v-slot:extension>
        <div class="top-mv pa-0">
          <h1>{{ topTitle }}</h1>
          <v-btn class="top-mv--btn" text to="/profile">
            簡易プロフィール
          </v-btn>
        </div>
      </template>
    </v-app-bar>
    <v-content>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="6">
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer padless>
      <v-container>
        <v-row class="footer" justify="center">
          <v-col cols="12" md="6">
            <p class="footer__inner">
              Copyright © 2019 Shinnosuke All Rights Reserved.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>
<style lang="scss" scoped>
.header-title {
  a {
    color: $COLOR_MAIN;
    text-decoration: none !important;
  }
}

.footer {
  &__inner {
    border-top: 1px solid $COLOR_MAIN;
    padding: 20px;
  }
}

.top-mv {
  height: 300px;
  width: 100%;
  background-color: #2a3b48;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: white;
  }

  &--btn {
    color: white;
    text-align: center;
  }
}
</style>
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
