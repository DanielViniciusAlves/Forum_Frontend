<template>
    <div class="user-comment">
      <div class="title">{{title}}</div>
      <div class="subtitle"> 
        <span class="author-subtitle">Author: {{author}}, {{date}}</span> 
        <span class="anime-subtitle">Topic: {{anime}}</span> 
      </div>
      <div class="commentary">{{text}}</div>
      <div class="button-container">
        <router-link to="/edit"><button class="submit">Edit</button></router-link>  
      </div>
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
.commentary {
  /* color: #eee;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 500;
  margin-top: 10px;
  height: 120px; */
  background-color: #303245;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  font-size: 18px;
  height: 120px;
  outline: 0;
  padding: 10px 10px 5px;
  width: 100%;
}
.subtitle {
  margin: 15px 0px;
  padding: 0px 10px;
}
.author-subtitle {
  color: #eee;
  font-family: sans-serif;
  font-size: 12px;
  font-weight: 600;
}
.anime-subtitle{
  color: #eee;
  font-family: sans-serif;
  font-size: 12px;
  font-weight: 600;
  /* margin: 10px 0px; */
  /* padding-left: 10px; */
  float: right;
}
.title {
  color: #eee;
  font-family: sans-serif;
  font-size: 36px;
  font-weight: 600;
  margin-top: 15px;
  padding-left: 5px;
}
.user-comment {
  margin-bottom: 30px;
  background-color: #15172b;
  color: #eee;
  border-radius: 10px;
  padding: 20px;
  /* height: 100px; */
  width: 60%;
}

.button-container {
  height: 50px;
  /* margin-top: 10px; */
}

.submit {
  background-color: #08d;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 15px;
  text-align: center;
  width: 60px;
  height: 30px;
  float: right;
  margin-top: 15px;
}

</style>
