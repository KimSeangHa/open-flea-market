<template>
  <v-app>
    <v-app-bar
      app
      color="#7986CB"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-spacer/>
      <v-btn icon>
          <v-icon>mdi-message-alert</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
               <v-icon>mdi-chat-processing</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>오픈 플리마켓이란?</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
               <v-icon>mdi-magnify</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>전국 플리마켓 검색</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

           <v-list-item>
            <v-list-item-icon>
               <v-icon>mdi-account-group</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>플리마켓 오픈</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

           <v-list-item>
            <v-list-item-icon>
               <v-icon>mdi-store-cog</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>나의 플리마켓 관리</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>문의사항</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main app>
      <router-view/>
    </v-main>

    <v-footer
      color="#7986CB"
      dark
    >
      <v-spacer>made...</v-spacer>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    drawer: false,
    group: null
  }),

  watch: {
    group () {
      this.drawer = false
    },
  }
};
</script>
