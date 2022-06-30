<template>
  <v-app>
    <div>
      <!-- color="#7986CB" -->
      <v-app-bar
        app
        elevation="3"
        color="#fff"
        style="border: 1px solid #ddd;"
      >
        <v-app-bar-nav-icon @click="drawer = !drawer"/>
        
        <v-spacer></v-spacer>
        
        <!--
        <v-btn
          depressed
          class="ma-2"
        >
            <div>회원가입</div>
        </v-btn>
        -->

        <v-btn
          depressed
          class="ma-2"
        >
            <div>
              <router-link to='/login' style="text-decoration: none; color: inherit;">로그인</router-link>
            </div>
        </v-btn>
        
        <v-btn icon>
            <v-icon>mdi-bell-outline</v-icon>
        </v-btn>
      </v-app-bar>
    </div>
    

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
              <v-list-item-title>플리마켓 관리</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
               <v-icon>mdi-store-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>플리마켓 입점</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>문의사항</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main app>
      <v-row
        class="justify-center border1 boxShadow0"
        color="#fff"
        elevation="0"
        v-if="mainSearchBar"
      >
        <v-toolbar
          dense
          floating
          class="justify-center pa-2 border1 boxShadow0"
          width="30rem"
          height="63px"
          elevation="0"
        >
          <v-text-field
            hide-details
            prepend-icon="mdi-magnify"
            single-line
            style="width: 20rem;"
            placeholder="지역명을 입력해주세요."
          ></v-text-field>
        </v-toolbar>
      </v-row>
      
      <router-view/>
    </v-main>

    <v-footer
      class="v-lazy theme--light"
    >
      <v-spacer>made...</v-spacer>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';

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
  },
  computed: {
    ...mapState({
      mainSearchBar: state => state.common.mainSearchBar,
    }),
  }
};
</script>

<style lang="scss">
  @import '../src/sass/variables.scss';
  @import "../src/assets/css/common.css";
</style>