<template>
  <v-card class="mx-auto" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">ID : {{ content.id }}</div>
        <div class="overline mb-4">User ID : {{ content.userId }}</div>
        <v-list-item-title class="headline mb-1" v-if="!edit">{{
          content.title
        }}</v-list-item-title>
        <v-list-item-title class="headline mb-1" v-else>
          <v-textarea v-model="title" auto-grow></v-textarea>
        </v-list-item-title>
        <v-list-item-subtitle v-if="!edit">{{
          content.body
        }}</v-list-item-subtitle>
        <v-list-item-title class="headline mb-1" v-else>
          <v-textarea v-model="body" auto-grow></v-textarea>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions v-if="!edit">
      <v-btn text @click="clickpost">Show</v-btn>
      <v-btn text @click="clickedit">Edit</v-btn>
      <v-btn text @click="clickdelete">Delete</v-btn>
    </v-card-actions>
    <v-card-actions v-else>
      <v-btn text @click="clicksave">Save</v-btn>
      <v-btn text @click="clickcancel">Cancel</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['content'],
  data() {
    return {
      postid: '',
      edit: null,
      title: '',
      body: '',
    }
  },
  methods: {
    clickpost() {
      this.postid = this.content.id
      this.$emit('show-post', this.postid)
    },
    clickedit() {
      this.edit = true
      this.title = this.content.title
      this.body = this.content.body
    },
    clicksave() {
      this.postid = this.content.id
      this.edit = false
      this.$emit('save-edit-post', this.postid, this.title, this.body)
    },
    clickcancel() {
      this.edit = false
    },
    clickdelete() {
      this.postid = this.content.id
      this.$emit('delete-post', this.postid)
    },
  },
}
</script>
