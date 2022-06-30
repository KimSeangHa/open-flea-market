<template>
  <div class="justify-center text-center">
    <login-form/>
  </div>
</template>

<script>
import loginForm from '@/components/account/loginForm'

  export default {
    name: 'Login',

    components: {
      loginForm,
    }
  }
</script>

<style>
</style>