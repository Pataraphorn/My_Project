<template>
  <div>
    <h1>Create New User</h1>
    Name :
    <v-text-field
      v-model="name"
      outlined
      placeholder="name"
      value="morpheus"
    ></v-text-field>
    Job :
    <v-text-field
      v-model="job"
      outlined
      placeholder="job"
      value="leader"
    ></v-text-field>
    <v-btn @click="createUser"> Create </v-btn>
    <v-btn :to="{ name: 'APIreqres-data' }"> Cancel </v-btn>
  </div>
</template>

<script>
import * as ReqresApi from '@/utils/reqresApi'
export default {
  data() {
    return {
      name: 'morpheus',
      job: 'leader',
    }
  },
  methods: {
    async createUser() {
      const response = await ReqresApi.createusers(this.name, this.job)
      console.log('RESPONSE ', response.data)
      if (response.status === 201) {
        alert('Create user complete')
        console.log('RESPONSE ', response)
        this.$router.replace({
          name: 'APIreqres-cindex',
          params: { userdata: response.data },
        })
      } else {
        alert('Cannot create user')
      }
    },
  },
}
</script>
