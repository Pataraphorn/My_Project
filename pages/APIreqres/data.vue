<template>
  <div>
    <v-btn @click="logout"> Log out </v-btn>
    <div class="loading-content" v-if="loading">
      <p>Loading.....</p>
    </div>
    <p v-if="$fetchState.pending">Fetching posts...</p>
    <p v-else-if="$fetchState.error">
      Error while fetching posts {{ $fetchState.error.message }}
    </p>
    <div v-else>
      <h1>All post</h1>
      <search @search-post="postsearch">Search postId : </search>
      <card
        v-for="data in pagedata(results)"
        :key="data.id"
        :content="data"
        @show-post="postshow"
        @save-edit-post="postedit"
        @delete-post="postdelete"
      >
      </card>
      <div>
        <div class="paginate">
          <div class="paging" v-if="this.page != 1" @click="previous">
            &laquo;
          </div>
          <div
            :class="`paging ${n === page ? 'active' : ''}`"
            v-for="n in totalpage"
            :key="n"
            :v-model="page"
            @click="selectpage(n)"
          >
            {{ n }}
          </div>
          <div class="paging" v-if="this.page != totalpage" @click="next">
            &laquo;
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as postApi from '@/utils/postsApi'
import Card from '~/components/Card'
import Search from '~/components/search'
export default {
  middleware: 'authenticated',
  components: {
    card: Card,
    search: Search,
  },
  data() {
    return {
      loading: false,
      results: [],
      page: 1,
      totalpage: 0,
      pagesize: 20,
    }
  },
  async fetch() {
    await this.get(this.page)
  },
  methods: {
    logout() {
      this.$store.commit('logout')
      console.log('Status Login : ', this.$store.state.auth.loggedIn)
    },
    start(){
      this.loading = true
    },
    finish(){
      this.loading = false
    }
    async get(page) {
      const response = await postApi.allposts()
      console.log('RESPONSE : ', response)
      this.results = response.data
      this.totalpage = Math.ceil(this.results.length / this.pagesize)
    },
    previous() {
      this.page -= 1
    },
    next() {
      this.page += 1
    },
    selectpage(page) {
      this.page = page
    },
    pagedata(results) {
      return results.slice(
        0 + this.pagesize * (this.page - 1),
        this.pagesize + this.pagesize * (this.page - 1)
      )
    },
    postsearch(search) {
      console.log('search', search)
    },
    postshow(postid) {
      console.log('show postid', postid)
    },
    postedit(postid, title, body) {
      console.log('edit postid', postid)
      this.results.title = title
      this.results.body = body
    },
    postdelete(postid) {
      console.log('delete postid', postid)
      this.results.splice(postid, 1)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/table.scss';
</style>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
}
</style>
