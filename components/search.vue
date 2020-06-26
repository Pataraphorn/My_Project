<template>
  <div>
    <input
      v-model="navsearch"
      type="text"
      placeholder="Search.."
      name="search"
      class="input-nav-search"
    />
    <button type="submit" class="button-search-nav">search</button>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/input.scss';
@import '~/assets/scss/button.scss';
</style>

<script>
export default {
  data() {
    return {
      navsearch: null,
    }
  },
}
</script>
