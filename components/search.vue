<template>
  <div>
    <input
      v-model="search"
      type="text"
      placeholder="Search.."
      name="search"
      class="input-nav-search"
    />
    <v-btn text @click="clicksearch">Search</v-btn>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/input.scss';
div,
v-btn {
  display: inline-block;
}
</style>

<script>
export default {
  data() {
    return {
      search: '',
    }
  },
  methods: {
    clicksearch() {
      this.$emit('search-post', this.search)
    },
  },
}
</script>
