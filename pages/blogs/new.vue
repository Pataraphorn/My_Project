<template>
  <div>
    <div>NEW BLOG</div>
    <v-text-field v-model="title" label="Title" outlined></v-text-field>
    <v-textarea v-model="body" outlined label="Body"></v-textarea>
    <v-btn @click="handleCreateClicked"> Create </v-btn>
  </div>
</template>

<script>
import * as BlogsApi from '@/utils/blogsApi'
export default {
  data() {
    return {
      title: '',
      body: '',
    }
  },
  methods: {
    async handleCreateClicked() {
      if (this.title.length === 0) {
        return
      }
      const response = await BlogsApi.create(this.title, this.body)
      console.log('RESPONSE ', response)
      this.$router.replace({
        name: 'blogs-id',
        params: {
          id: response.data.id,
        },
      })
    },
  },
}
</script>
