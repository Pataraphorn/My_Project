<template>
  <v-card class="mx-auto" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">ID : {{ content.id }}</div>
        <div class="overline mb-4">User ID : {{ content.userId }}</div>
        <v-list-item-title class="headline mb-1">{{
          content.title
        }}</v-list-item-title>
        <v-list-item-subtitle>{{ content.body }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn text @click="clickedit">Edit</v-btn>
      <v-btn text @click="clickdelete">Delete</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['content'],
  data() {
    return {
      postid: '',
    }
  },
  methods: {
    clickedit() {
      this.postid = this.content.id
      this.$emit('edit-post', this.postid)
    },
    clickdelete() {
      this.postid = this.content.id
      this.$emit('delete-post', this.postid)
    },
  },
}
</script>
