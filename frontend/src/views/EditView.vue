<template>
    <tr v-for="user in users" v-bind:key="user.id"> 
      <th scope="row"><UserComment :title="user.title" :text="user.text" :author="user.author" :date="user.date" :anime="user.anime"/></th>
    </tr>
  </template>
  
  <script>
  // @ is an alias to /src
  import UserComment from '@/components/UserComment.vue'
  import axios from 'axios';
    export default {
      name: "PostView",
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
  </style>
  