<template>
  <div>
    <div>EDIT BLOG</div>
    <div v-if="blog">
      <v-text-field v-model="blog.title" label="Title" outlined></v-text-field>
      <v-textarea v-model="blog.body" outlined label="Body"></v-textarea>
      <v-btn @click="handleSaveClicked"> Save </v-btn>
    </div>
  </div>
</template>
<script>
import * as BlogsApi from '@/utils/blogsApi'
export default {
  data() {
    return {
      blog: null,
    }
  },
  async mounted() {
    console.log('THIS.$ROUTE.PARAMES.ID ', this.$route.params.id)
    const response = await BlogsApi.show(this.$route.params.id)
    console.log('RESPONSE', response)
    this.blog = response.data
  },
  method: {
    async handleEditClicked() {
      console.log('save clicked ', this.blog)
      const response = await BlogsApi.update(
        this.blog.id,
        this.blog.title,
        this.blog.body()
      )
      console.log('RESPONSE ', response)
      this.$router.replace({ name: 'blogs-id', params: { id: this.blog.id } })
    },
  },
}
</script>
