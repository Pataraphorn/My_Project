<template>
  <div>
    <h1>Information</h1>
    <div v-if="user">
      <h2>Information of {{ user.first_name }} {{ user.last_name }}</h2>
      <v-btn :to="{ name: 'APIrepres-id-edit', params: { id: user.id } }">
        Edit user
      </v-btn>
      <v-btn color="error" @click="deleteUser"> Delete </v-btn>

      <div>
        <p>
          <img :src="user.avatar" alt="" :style="{ width: '20%' }" />
        </p>
        <p>Id : {{ user.id }}</p>
        <p>E-mail : {{ user.email }}</p>
        <p>Name : {{ user.first_name }} {{ user.last_name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import * as RepresApi from '@/utils/represApi'
export default {
  // middleware: 'auth',
  data() {
    return {
      user: null,
    }
  },
  async mounted() {
    console.log('THIS.$ROUTE.PARAMES.ID ', this.$route.params.id)
    const response = await RepresApi.singleuser(this.$route.params.id)
    console.log('RESPONSE', response)
    this.user = response.data.data
  },
  methods: {
    async deleteUser() {
      const response = await RepresApi.deleteusers(this.$route.params.id)
      console.log('RESPONSE ', response)
      this.$router.replace({
        name: 'user',
      })
    },
  },
}
</script>
