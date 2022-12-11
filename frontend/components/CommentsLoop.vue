<template>
    <div>
        <div class="comments-container" v-for="user in users" v-bind:key="user.id">
            <UserComment v-on="$listeners" :id="user.id" :title="user.title" :text="user.text" :author="user.author" :date="user.date" :anime="user.anime"/>
        </div>
    </div>
</template>
  
<script>
import UserComment from '~/components/UserComment.vue'

export default {
name: "ComponentsLoop",
components: {
    UserComment,
},
data() {
    return {
    users: null,
    };
},
async created() {
    await this.$axios
    .get('http://localhost:4000/comments')
    .then(res => {
        console.log("loop")
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
height: 350px;
}
</style>
  
  