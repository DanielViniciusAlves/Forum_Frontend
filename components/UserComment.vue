<template>
    <div v-if="!editMode" class="user-comment">
      <div class="title">{{title}}</div>
      <div class="subtitle"> 
        <span class="author-subtitle">Author: {{author}}, {{date}}</span> 
        <span class="anime-subtitle">Topic: {{anime}}</span> 
      </div>
      <div class="commentary">{{text}}</div>
      <div class="button-container">
        <button v-on:click="editMode = true" class="submit">Edit</button>
        <DeleteComment v-on="$listeners" :id="this.id" />
      </div>
    </div>
    <div  class="edit-comment" v-else>
      <EditComment @edit-send="editModeOff" v-on="$listeners" :id="this.id" :title="this.title" :text="this.text" :author="this.author" :date="this.date" :anime="this.anime"/>
    </div>
</template>

<script>
import DeleteComment from '@/components/DeleteComment.vue'
import EditComment from '@/components/EditComment.vue'

export default {
  components: {
    DeleteComment,
    EditComment
  },
  name: 'UserComment',
  props: {
    id: Number,
    title: String,
    text: String,
    author: String,
    date: String,
    anime: String
  },
  data() {
    return {
      editMode: false
    }
  },
  methods: {
    editModeOff() { 
        this.editMode = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.commentary {
  background-color: #303245;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  font-size: 18px;
  height: 50%;
  outline: 0;
  padding: 10px 10px 5px;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
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
  float: right;
}
.title {
  color: #eee;
  font-family: sans-serif;
  font-size: 25px;
  font-weight: 600;
  padding-left: 5px;
}
.user-comment {
  margin-bottom: 30px;
  background-color: #15172b;
  color: #eee;
  border-radius: 10px;
  padding: 20px;
  height: 100%;
  width: 45%;
}

.edit-comment {
  margin-bottom: 30px;
  background-color: #15172b;
  color: #eee;
  border-radius: 10px;
  padding: 20px;
  height: 100%;
  width: 45%;
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

.post-container {
    align-items: center; 
    display: flex;
    justify-content: center;
  }

</style>
