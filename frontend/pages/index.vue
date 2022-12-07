<template>
  <div>
    <HeaderElement :activate_home="true"/>
    <div class="comments-container" v-for="user in users" v-bind:key="user.id">
        <UserComment :title="user.title" :text="user.text" :author="user.author" :date="user.date" :anime="user.anime"/>
    </div>
  </div>
</template>

<script>
import HeaderElement from '~/components/HeaderElement.vue'
import UserComment from '~/components/UserComment.vue'

export default {
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

<style scoped>
.comments-container { 
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

