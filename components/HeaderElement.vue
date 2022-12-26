<template>
    <div class="header">
    <a href="#default" class="logo">CompanyLogo</a>
    <div class="header-right">
      <router-link to="/" v-bind:class="{ active: home }">Home</router-link>
      <router-link to="/post" v-bind:class="{ active: post }">Post</router-link>
    </div>
  </div>
</template>

<script>

export default {
    name: 'HeaderElement',
    props: {
      activate_home: Boolean,
      activate_post: Boolean,
    },
    data() {
      return {
        home: this.activate_home,
        post: this.activate_post
      };
    }
}

</script>

<style scoped>
.header {
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px; 
  margin-bottom: 50px;
}

.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 25px;
  border-radius: 4px;
}

.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

.header a.active {
  background-color: #06b;
}

.header a:hover {
  box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
}

.header-right {
  float: right;
}

@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }
  
  .header-right {
    float: none;
  }
}
</style>