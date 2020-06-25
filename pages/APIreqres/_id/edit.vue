<template>
  <div>
    <h1>Edit information</h1>
    <div v-if="user">
      <h2>Edit information of {{ user.first_name }} {{ user.last_name }}</h2>
      <p>name: "morpheus", job: "zion resident"</p>
      Name :
      <v-text-field v-model="name" outlined placeholder="name"
        >morpheus</v-text-field
      >
      Job :
      <v-text-field v-model="job" outlined placeholder="job"
        >leader</v-text-field
      >
      <v-btn @click="updateUser"> Save </v-btn>
      <v-btn @click="deleteUser"> Cancel </v-btn>
    </div>
  </div>
</template>

<script>
import * as ReqresApi from '@/utils/reqresApi'
export default {
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
  method: {
    async updateUser() {
      console.log('save clicked ', this.blog)
      const response = await ReqresApi.updateusers(
        this.user.id,
        this.user.name,
        this.user.job
      )
      console.log('RESPONSE ', response)
      // this.$router.replace({ name: 'blogs-id', params: { id: this.blog.id } })
    },
    async deleteUser() {
      const response = await ReqresApi.deleteusers(this.id)
      console.log('RESPONSE ', response.status)
      if (response.status === 204) {
        alert('Delete user complete')
      } else {
        alert('Cannot delete user')
      }
      this.$router.replace({
        name: 'APIreqres-data',
      })
    },
  },
}
</script>
