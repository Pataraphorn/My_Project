<template>
  <div>
    <h1>Information</h1>
    <v-btn :to="{ name: 'APIreqres-data' }">back</v-btn>
    <div v-if="user">
      <h2>Information of {{ user.first_name }} {{ user.last_name }}</h2>
      <v-btn :to="{ name: 'APIreqres-id-edit', params: { id: user.id } }"
        >Edit</v-btn
      >
      <v-btn color="error" @click="deleteUser"> Delete </v-btn>
      <div>
        <p>
          <img :src="user.avatar" alt="" :style="{ width: '20%' }" />
        </p>
        <p>Id : {{ user.id }}</p>
        <p>Name: {{ user.first_name }} {{ user.last_name }}</p>
        <p>E-mail : {{ user.email }}</p>
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
    console.log('THIS.$ROUTE.PARAMES.ID ', this.$route.params.id)
    const response = await ReqresApi.singleuser(this.$route.params.id)
    console.log('RESPONSE', response)
    this.user = response.data.data
  },
  methods: {
    async deleteUser() {
      const response = await ReqresApi.deleteusers(this.$route.params.id)
      console.log('RESPONSE ', response)
      if (response.status === 204) {
        console.log(this.$router)
        this.$router.replace({
          name: 'APIreqres-data',
        })
      } else {
        alert('Cannot delete user')
      }
    },
  },
}
</script>
