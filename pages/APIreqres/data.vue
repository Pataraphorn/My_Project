<template>
  <div>
    <v-btn @click="logout"> Log out </v-btn>
    <h1>Information</h1>
    <card
      v-for="data in results"
      :key="data.id"
      :content="data"
      @edit-post="postedit"
      @delete-post="postdelete"
    >
    </card>
    <!--    <v-btn :to="{ name: 'APIreqres-create' }"> Create user </v-btn>-->
    <!--    <table id="users">-->
    <!--      <tr>-->
    <!--        <th>Id</th>-->
    <!--        <th>E-mail</th>-->
    <!--        <th>Name</th>-->
    <!--        <th>Image</th>-->
    <!--        <th></th>-->
    <!--      </tr>-->
    <!--      <tr v-for="user in results" :key="user.id">-->
    <!--        <td>{{ user.id }}</td>-->
    <!--        <td>{{ user.email }}</td>-->
    <!--        <td>{{ user.first_name }} {{ user.last_name }}</td>-->
    <!--        <td>-->
    <!--          <img :src="user.avatar" alt="" :style="{ width: '80%' }" />-->
    <!--        </td>-->
    <!--        <td>-->
    <!--          <v-btn :to="{ name: 'APIreqres-id', params: { id: user.id } }">-->
    <!--            show-->
    <!--          </v-btn>-->
    <!--        </td>-->
    <!--      </tr>-->
    <!--    </table>-->
  </div>
</template>

<script>
import * as postApi from '@/utils/postsApi'
import Card from '~/components/Card'
export default {
  middleware: 'authenticated',
  components: {
    card: Card,
  },
  data() {
    return {
      results: [],
    }
  },
  async mounted() {
    const response = await postApi.allposts()
    console.log('RESPONSE : ', response)
    this.results = response.data
  },
  methods: {
    logout() {
      this.$store.commit('logout')
      console.log('Status Login : ', this.$store.state.auth.loggedIn)
    },
    postedit(postid) {
      console.log('edit postid', postid)
    },
    postdelete(postid) {
      console.log('delete postid', postid)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/table.scss';
</style>

<style scoped></style>
