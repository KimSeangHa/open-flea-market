<template>
  <div class="NotFound justify-center text-center main-container margin-0-auto" style="padding-top: 30px;">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card height="400" color="transparent" flat>
            <div class="display-3 mt-5">Page not found.</div>
            <div class="grey--text lighten-5" style="margin-top: 10px;">
              해당 페이지는 존재하지 않습니다.
            </div>
            <div class="paragraph-text mt-2">
              <br />
              <v-btn
                depressed
                class="ma-2"
              >
                  <div>
                    <router-link to='/main' style="text-decoration: none; color: inherit;">메인으로 이동</router-link>
                  </div>
              </v-btn>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}

</script>

<style>
  @import "../../assets/css/common.css";
  .paragraph-text {
    font-size: 18px;
  }

</style>