<template>
  <div>
    <v-btn @click="logout"> Log out </v-btn>
    <h1>User Information</h1>
    <v-btn :to="{ name: 'APIreqres-create' }"> Create user </v-btn>
    <div class="pagination">
      <p>{{ currentpage }} / {{ totalpages }}</p>
      <a v-if="previous" @click="previousPage">❮</a>
      <a v-if="next" @click="nextPage">❯</a>
    </div>
    <table id="users">
      <tr>
        <th>Id</th>
        <th>E-mail</th>
        <th>Name</th>
        <th>Image</th>
        <th></th>
      </tr>
      <tr v-for="user in results" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.first_name }} {{ user.last_name }}</td>
        <td>
          <img :src="user.avatar" alt="" :style="{ width: '80%' }" />
        </td>
        <td>
          <v-btn :to="{ name: 'APIreqres-id', params: { id: user.id } }">
            show
          </v-btn>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import * as ReqresApi from '@/utils/reqresApi'
export default {
  middleware: 'authenticated',
  data() {
    return {
      results: [],
      page: 1,
      next: null,
      previous: null,
      currentpage: null,
      totalpages: null,
    }
  },
  async mounted() {
    const response = await ReqresApi.listusers(this.page)
    console.log('RESPONSE : ', response)
    this.results = response.data.data
    console.log('this : ', this.results)
    this.currentpage = response.data.page
    this.totalpages = response.data.total_pages
    if (this.currentpage === 1) {
      this.previous = null
      this.next = 1
    } else if (this.currentpage < this.totalpages) {
      this.previous = 1
      this.next = 1
    } else if (this.currentpage === this.totalpages) {
      this.previous = 1
      this.next = null
    }
  },
  methods: {
    previousPage() {
      this.page = this.page - 1
      console.log(this.page)
    },
    nextPage() {
      this.page = this.page + 1
      console.log(this.page)
    },
    logout() {
      this.$store.commit('logout')
      console.log('Status Login : ', this.$store.state.auth.loggedIn)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/table.scss';
</style>

<style scoped>
.pagination {
  display: inline-block;
}

.pagination a {
  color: slateblue;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  border: 1px solid #ddd;
}

.pagination a.active {
  background-color: #4caf50;
  color: white;
  border: 1px solid #4caf50;
}

.pagination a:hover:not(.active) {
  background-color: #ddd;
}
</style>
