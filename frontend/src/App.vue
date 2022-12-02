<template>
      <tbody>
        <tr v-for="user in users" v-bind:key="user.id"> 
          <th scope="row">{{user.id}}</th>
          <td>{{user.title}}</td>
          <td>{{user.text}}</td>
          <td>{{user.author}}</td>
          <td>{{user.date}}</td>
          <td>{{user.anime}}</td>
        </tr>
      </tbody>
</template>

<script>
  import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      users: null,
    };
  },
  created: function() {
    axios
      .get('http://localhost:4000/comments')
      .then(res => {
        console.log(res)
        this.users = res.data;
      })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
