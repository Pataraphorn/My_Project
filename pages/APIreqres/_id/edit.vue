<template>
  <div>
    <h1>Edit information</h1>
    <div v-if="user">
      <h3>ID : {{ user.id }}</h3>
      <div>
        <img :src="user.avatar" alt="" :style="{ width: '40%' }" />
        <v-file-input
          v-model="user.avatar"
          counter
          label="image"
          placeholder="Select your image"
          prepend-icon="mdi-camera"
          outlined
          :show-size="1000"
        >
        </v-file-input>
      </div>
      Firstname :
      <v-text-field
        v-model="user.first_name"
        outlined
        placeholder="firstname"
      ></v-text-field>
      Lastname :
      <v-text-field
        v-model="user.last_name"
        outlined
        placeholder="firstname"
      ></v-text-field>
      Email :
      <v-text-field
        v-model="user.email"
        outlined
        placeholder="firstname"
      ></v-text-field>
      <v-btn @click="updateUser"> Save </v-btn>
      <v-btn :to="{ name: 'APIreqres-data' }" color="error"> Cancel </v-btn>
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
      console.log('save clicked ', this.user)
      const response = await ReqresApi.updateusers(
        this.user.id,
        this.user.first_name,
        this.user.last_name
      )
      console.log('RESPONSE ', response)
      this.$router.replace({
        name: 'APIreqres-id',
        params: { id: this.user.id },
      })
    },
  },
}
</script>
