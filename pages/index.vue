<template>
  <div>
    <HeaderElement :activate_home="true"/>
    <PostElement @post-send="makeReload" />
    <CommentsLoop @reload="makeReload" :key="componentKey" />
  </div>
</template>

<script>
import HeaderElement from '~/components/HeaderElement.vue'
import CommentsLoop from '~/components/CommentsLoop.vue'
import PostElement from '~/components/PostElement.vue'

import { auth } from "../auth.js";

export default { 
  components: {
    HeaderElement,
    CommentsLoop,
    PostElement
  },
  data() {
    return {
      componentKey: 0,
    };
  },
  methods: {
    makeReload() {
      this.componentKey += 1;
    }
  },
  beforeCreate() {
    auth(this.$axios, this.$router)
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

