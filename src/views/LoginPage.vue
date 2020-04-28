<template>
  <div class="container">
    <form class="login-form box box-center">
      <label for="login-email">Username or Email</label>
      <input type="email" id="login-email" required />
      <label for="login-password">Password</label>
      <input type="password" id="login-password" required />
      <button>Log in</button>
      <p class="font-12">or</p>
      <router-link to="/signup" class="font-12--important clickable">create an account</router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginPage"
};
</script>

<style lang="scss">
</style>