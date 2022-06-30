<template>
  <div class="justify-center text-center">
      <register-form />
  </div>
</template>

<script>
import registerForm from '@/components/account/registerForm'

export default {
  name: 'Register',
  mounted() {
    console.log("@@@@@@")
  },
  components: {
    registerForm
  }
}
</script>

<style>
</style>