<template>
    <div>
      <button @click="emitDeleteEvent" class="submit">Delete</button>
    </div>
</template>

<script>

export default {
  name: 'DeleteComment',
  props: {
    id: Number
  },
  methods: {
    async emitDeleteEvent() { 
        await this.$axios
        .delete(`http://localhost:4000/comment/delete/${this.id}`)
        .then(res => {
        console.log("deleted")
        this.$emit('reload')
    })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
