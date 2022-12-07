<template>
    <div class="user-comment">
      <h3>{{title}}</h3>
      {{text}}
      {{author}}
      {{date}}
      {{anime}}
      <router-link to="/edit"><button>Edit Comment</button></router-link>
    </div>
</template>

<script>

export default {
  name: 'UserComment',
  props: {
    title: String,
    text: String,
    author: String,
    date: String,
    anime: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user-comment {
  margin-bottom: 10px;
  background-color: #15172b;
  color: #eee;
  border-radius: 10px;
  padding: 10px;
  height: 100px;
}
</style>
