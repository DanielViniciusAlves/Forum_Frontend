<template>
    <div class="form">
        <div class="title">Quick Post</div>
        <span class="form-header">
        <div class="input-container ic1 title-input">
            <input ref="title" id="title" class="input" type="text" placeholder=" " v-model="title"/>
            <div class="cut"></div>
            <label for="title" class="placeholder">Title</label>
        </div>
        <div class="input-container ic1 anime-input">
            <input ref="anime" id="anime" class="input" type="text" placeholder=" " v-model="anime"/>
            <div class="cut"></div>
            <label for="anime" class="placeholder">Anime</label>
        </div>
    </span>
        <div class="text-input-container ic2">
        <textarea ref="text" rows="4" cols="50" id="text" class="input" type="text-input" placeholder=" " v-model="text"></textarea>
        <div class="cut cut-short"></div>
        <label for="text" class="placeholder">Put here you post text!</label>
        </div>
        <button @click="saveEdition" class="submit">Save</button>
    </div>
</template>

<script>

export default {
  name: 'EditComment',
  props: {
    id: Number,
    title: String,
    text: String,
    author: String,
    date: String,
    anime: String
  },
  methods: {
    async saveEdition() { 
        const PATH_API = `/comment/update/${this.id}`
        const config = {
            headers: { "content-type": "application/json" }
        };
        await this.$axios.put(`/api/v1${PATH_API}`, {
            title: this.title,
            anime: this.anime,
            text: this.text,
            author: "Daniel",
            date: "08/12/2022"
        },
        config)
        .then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });

        this.$emit('reload')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  color: #eee;
  font-family: sans-serif;
  font-size: 25px;
  font-weight: 600;
  padding-left: 5px;
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

.form-header{
   display: flex;
  }

  .anime-input{
    margin-left: 3%;
    width: 35%;
  }

  .title-input{
    width: 62%;
  }

  
  .form {
    background-color: #15172b;
    border-radius: 10px;
    height: 300px;
  }
  
  .title {
    color: #eee;
    font-family: sans-serif;
    font-size: 25px;
    font-weight: 600;
    /* margin-top: 30px; */
  }
  
  
  .input-container {
    height: 50px;
    position: relative;
    /* width: 50%; */
  }
  
  .text-input-container {
    height: 40%;
    position: relative;
    width: 100%;
  }
  
  .ic1 {
    margin-top: 20px;
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
    font-size: 15px;
    text-align: center;
    width: 60px;
    height: 30px;
    float: right;
    margin-top: 15px;
  }
  
  .submit:active {
    background-color: #06b;
  }
</style>
