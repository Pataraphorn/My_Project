<template>
  <div>
    <h1>Information (create)</h1>
    <v-btn :to="{ name: 'APIreqres-data' }">back</v-btn>
    <div v-if="user">
      <v-btn @click="editUser">Edit</v-btn>
      <v-btn color="error" @click="deleteUser"> Delete </v-btn>
      <div>
        <br />
        <h3>ID : {{ user.id }}</h3>
        <h5>CreatedAt : {{ user.createdAt }}</h5>
        <br />
        <p>Name : {{ user.user.name }}</p>
        <p>Job : {{ user.user.job }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import * as ReqresApi from '@/utils/reqresApi'
export default {
  // middleware: 'auth',
  data() {
    return {
      user: null,
    }
  },
  async mounted() {
    console.log('THIS.$ROUTE.PARAMES.DATA ', this.$route.params.userdata)
    this.user = await this.$route.params.userdata
    console.log(this.user)
  },
  methods: {
    async deleteUser() {
      const response = await ReqresApi.deleteusers(this.$route.params.id)
      console.log('RESPONSE ', response)
      if (response.status === 204) {
        alert('Delete user complete')
        this.$router.replace({
          name: 'APIreqres-data',
        })
      } else {
        alert('Cannot delete user')
      }
    },
    editUser() {
      this.$router.replace({
        name: 'APIreqres-cedit',
        params: { userdata: this.user },
      })
    },
  },
}
</script>
