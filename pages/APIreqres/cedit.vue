<template>
  <div>
    <h1>Edit information</h1>
    <div v-if="user">
      <br />
      Name : {{ user.user.name }}
      <v-text-field v-model="name" outlined placeholder="name"></v-text-field>
      Job : {{ user.user.job }}
      <v-text-field v-model="job" outlined placeholder="job"></v-text-field>
      <div>
        <v-btn @click="Updateuser"> Save </v-btn>
        <v-btn :to="{ name: 'APIreqres-data' }"> Cancel </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import * as ReqresApi from '@/utils/reqresApi'
export default {
  data() {
    return {
      user: null,
      name: 'morpheus',
      job: 'zion resident',
    }
  },
  async mounted() {
    console.log('THIS.$ROUTE.PARAMES.DATA ', this.$route.params.userdata)
    this.user = await this.$route.params.userdata
    console.log(this.user)
  },
  method: {
    async Updateuser() {
      console.log('save clicked ')
      const response = await ReqresApi.updateusers(
        this.user.name,
        this.user.job
      )
      console.log('RESPONSE ', response)
      if (response.status === 200) {
        alert('Update user complete')
        this.$router.replace({
          name: 'APIreqres-cindex',
          params: { userdata: response.data },
        })
      } else {
        alert('Cannot update user')
      }
    },
  },
}
</script>
