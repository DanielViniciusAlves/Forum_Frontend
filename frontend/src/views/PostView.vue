<template>
  <HeaderElement :activate_post="true"/>
  <div class="post-container">
    <div class="form">
      <div class="title">Creating new Post</div>
      <div class="subtitle">It's time for a new post!</div>
      <div class="input-container ic1">
        <input id="title" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="title" class="placeholder">Title</label>
      </div>
      <div class="text-input-container ic2">
        <textarea rows="4" cols="50" id="text" class="input" type="text-input" placeholder=" "></textarea>
        <div class="cut cut-short"></div>
        <label for="text" class="placeholder">Put here you post text!</label>
      </div>
      <div class="input-container ic2">
        <input id="author" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="author" class="placeholder">Author</label>
      </div>
      <div class="input-container ic2">
        <input id="author" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="author" class="placeholder">Anime</label>
      </div>
      <button type="text" class="submit" @click="handleSubmit">Submit</button>
    </div>
  </div>
</template>

<script>
import HeaderElement from '@/components/HeaderElement.vue'

export default {
  name: "PostView",
  components: {
    HeaderElement
  },
  data() {
    return {
      email: ''
    }
  },
  methods: {
    handleSubmit: function() {
      console.log(this.email)
  }}
}

</script>

<style scoped>
.post-container {
  align-items: center; 
  display: flex;
  justify-content: center;
}

.form {
  background-color: #15172b;
  border-radius: 20px;
  box-sizing: border-box;
  height: 700px;
  padding: 20px;
  width: 60%;
}

.title {
  color: #eee;
  font-family: sans-serif;
  font-size: 36px;
  font-weight: 600;
  margin-top: 30px;
}

.subtitle {
  color: #eee;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
}

.input-container {
  height: 50px;
  position: relative;
  width: 100%;
}

.text-input-container {
  height: 200px;
  position: relative;
  width: 100%;
}

.ic1 {
  margin-top: 40px;
}

.ic2 {
  margin-top: 30px;
}

.input {
  background-color: #303245;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  font-size: 18px;
  height: 100%;
  outline: 0;
  padding: 20px 20px 10px;
  width: 100%;
}

.text-input {
  background-color: #303245;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  font-size: 18px;
  height: 100%;
  outline: 0;
  padding: 4px 20px 0;
  width: 100%;
}

.cut {
  background-color: #15172b;
  border-radius: 10px;
  height: 20px;
  left: 20px;
  position: absolute;
  top: -20px;
  transform: translateY(0);
  transition: transform 200ms;
  width: 60px;
}

.cut-short {
  width: 170px;
}

.input:focus ~ .cut,
.input:not(:placeholder-shown) ~ .cut {
  transform: translateY(8px);
}

.placeholder {
  color: #65657b;
  font-family: sans-serif;
  left: 20px;
  line-height: 14px;
  pointer-events: none;
  position: absolute;
  transform-origin: 0 50%;
  transition: transform 200ms, color 200ms;
  top: 20px;
}

.input:focus ~ .placeholder,
.input:not(:placeholder-shown) ~ .placeholder {
  transform: translateY(-30px) translateX(10px) scale(0.75);
}

.input:not(:placeholder-shown) ~ .placeholder {
  color: #808097;
}

.input:focus ~ .placeholder {
  color: #808097;
}

.submit {
  background-color: #08d;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  height: 50px;
  margin-top: 38px;
  text-align: center;
  width: 80px;
  float: right;
}

.submit:active {
  background-color: #06b;
}

</style>
