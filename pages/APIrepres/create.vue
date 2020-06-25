<template>
  <div>
    <h1>Create New User</h1>
    <p>name: "morpheus", job: "leader"</p>
    Name :
    <v-text-field v-model="name" outlined placeholder="name"
      >morpheus</v-text-field
    >
    Job :
    <v-text-field v-model="job" outlined placeholder="job">leader</v-text-field>
    <v-btn @click="createUser"> Create </v-btn>
    <v-btn :to="{ name: 'APIrepres-data' }"> Cancel </v-btn>
  </div>
</template>

<script>
import * as RepresApi from '@/utils/represApi'
export default {
  data() {
    return {
      name: '',
      job: '',
    }
  },
  methods: {
    async createUser() {
      const response = await RepresApi.createusers(this.name, this.job)
      console.log('RESPONSE ', response.status)
      if (response.status === 201) {
        alert('Create user complete')
      } else {
        alert('Cannot create user')
      }
      this.$router.replace({
        // name: 'APIrepres-id',
        // params: {
        //   id: response.data.id,
        // },
        name: 'APIrepres-data',
      })
    },
  },
}
</script>
