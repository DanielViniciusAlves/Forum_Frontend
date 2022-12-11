<template>
    <div>   
        <LoginComponent @post-send="makeReload" />
    </div>
</template>
  
<script>
import LoginComponent from '~/components/LoginComponent.vue'
export default {
    name: "LoginPage",
    components: {
        LoginComponent
    },
    data() {
        return {
            componentKey: 0,
        }
    },
    methods: {
        makeReload() {
        this.componentKey += 1;
        }
    }
}
</script>

<style>
.comments-container { 
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;
}
</style>
