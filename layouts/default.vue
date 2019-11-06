<template>
  <v-app>
    <v-app-bar fixed app flat>
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
    </v-app-bar>
    <div v-if="$route.path === '/'" class="top-mv">
      <h1>{{ topTitle }}</h1>
      <v-btn class="btn" text to="/profile">簡易プロフィール</v-btn>
    </div>
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
            <p class="footer-inner">
              Copyright © 2019 Shinnosuke All Rights Reserved.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>
<style lang="scss">
.v-application {
  code {
    box-shadow: none !important;
  }
}
</style>
<style lang="scss" scoped>
.header-title {
  a {
    color: black !important;
    text-decoration: none !important;
  }
}
.footer {
  background-color: white;
}
.footer-inner {
  border-top: 1px solid black;
  padding: 20px;
}
.top-mv {
  width: 100%;
  height: 400px;
  background-color: #2a3b48;
  text-align: center;
  h1 {
    position: relative;
    top: 200px;
    color: white;
  }
  .btn {
    position: relative;
    top: 220px;
    color: white;
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
      twitterLink: process.env.TWITTER_URL
    }
  }
}
</script>
