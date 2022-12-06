<template>
  <router-link to="/post"><button>Create New Comment</button></router-link>
  <div class="home-component" v-for="user in users" v-bind:key="user.id">
      <div>
        <UserComment :title="user.title" :text="user.text" :author="user.author" :date="user.date" :anime="user.anime"/>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import UserComment from '@/components/UserComment.vue'
import axios from 'axios';
  export default {
    name: "HomeView",
    components: {
      UserComment
    },
    data() {
      return {
        users: null,
      };
    },
    created: function() {
      axios
        .get('http://localhost:4000/comments')
        .then(res => {
          console.log(res.data)
          this.users = res.data;
        })
    }
  }
</script>

<style>
.home-component {
  width: 40%;
}
</style>
