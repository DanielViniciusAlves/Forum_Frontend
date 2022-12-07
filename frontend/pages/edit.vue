<template>
  <div>
    <HeaderElement />
    <div class="comments-container" v-for="user in users" v-bind:key="user.id">
        <UserComment :title="user.title" :text="user.text" :author="user.author" :date="user.date" :anime="user.anime"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderElement from '~/components/HeaderElement.vue'
import UserComment from '~/components/UserComment.vue'
// import axios from 'axios';
  export default {
    name: "PostView",
    components: {
      HeaderElement,
      UserComment
    },
    data() {
      return {
        users: null,
      };
    },
    created: function() {
      this.$axios
        .get('http://localhost:4000/comments')
        .then(res => {
          console.log(res.data)
          this.users = res.data;
        })
    }
  }
</script>

<style>
.comments-container { 
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
  