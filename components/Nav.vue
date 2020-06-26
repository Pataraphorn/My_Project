<template>
  <div>
    <nav>
      <ul>
        <li class="boxicon l" @click="OpenMenu">
          <a>icon</a>
        </li>
        <li class="boxlogo l">
          My Project
        </li>
        <li class="boxsearch">
          <Search />
        </li>
        <li class="boxicon r active">
          <a>icon</a>
        </li>
        <li class="boxicon r">
          <a>icon</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/nav.scss';
</style>

<script>
import Search from '~/components/search.vue'
export default {
  components: {
    Search,
  },
  methods: {
    OpenMenu() {
      console.log('open menu')
    },
  },
}
</script>
