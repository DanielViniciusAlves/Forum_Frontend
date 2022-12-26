<template>
    <div>
        <div class="post-container">
            <div class="form">
                <div class="title">Login in the forum</div>
                <div class="input-container ic2">
                    <input v-model="username" ref="username" id="username" class="input" type="text" placeholder=" " />
                    <div class="cut"></div>
                    <label for="username" class="placeholder">Username</label>
                </div>
                <div class="input-container ic2">
                    <input v-model="password" ref="password" id="password" class="input" type="text" placeholder=" " />
                    <div class="cut"></div>
                    <label for="password" class="placeholder">Password</label>
                </div>
                <div class="form-footer">
                    <span class="subtitle">If you forgot you password click here</span>
                    <button type="text" class="submit" @click="handleSubmit">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'LoginComponent',
    data() {
        return {
            username: "",
            password: ""
        };
    }, methods: {
        async handleSubmit () {
        const PATH_API = '/login'
        const config = {
            headers: { "Content-Type": "application/json" },
            withCredentials: true , 
        };
        await this.$axios.post(`/api/v1${PATH_API}`, {
            username: this.username,
            password: this.password,
        },
        config)
        .then((response) => {
            this.$cookies.set('refresh-token', response.data.refresh_token, {
              path: '/'
            })
            window.localStorage.setItem('access-token', response.data.access_token)
        }, (error) => {
            console.log(error);
        });

        this.$emit('post-send')
    }}
}
</script>

<style scoped>
.post-container {
  align-items: center; 
  /* display: flex; */
  justify-content: center;
}

.form-footer{
    display: flex;
    margin-top: 15px;
}

.form {
  position: absolute;
  background-color: #15172b;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 20px;
  width: 60%;

  /* position: absolute; */
  left: 50%;
  top: 40%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
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
  margin-left: 5px;
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
  text-align: center;
  width: 80px;
  height: 40px;
  float: right;
  margin-left: auto;
  /* margin-top: 15px; */
}

.submit:active {
  background-color: #06b;
}

</style>

  
  