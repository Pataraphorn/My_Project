<template>
  <div class="container">
    Blogs !!! Required Login
  </div>
</template>

<script>
export default {
  middleware: 'auth',
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>
