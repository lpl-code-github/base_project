<template>
  <div>
    <form class="ui  form" style="text-align: left;margin: 20px">
      <div class="field">
        <label>手机号</label>
        <input type="text" name="first-name" placeholder="手机号" v-model="formData.userId">
      </div>
      <div class="field">
        <label>密码</label>
        <input type="password" name="last-name" placeholder="密码" v-model="formData.password">
      </div>
      <div class="field">
        <div class="ui checkbox">
          <input type="checkbox" tabindex="0" class="hidden">
          <label>I agree to the Terms and Conditions</label>
        </div>
      </div>
      <button class="ui button" type="button" @click="login">登陆</button>
    </form>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  data(){
    return{
        formData:{
          userId:"",
          password:""
        }
    }
  },
  methods:{
    login(){
      this.$request.login(this.formData).then(value => {
        if (value.data.code ===200){
          this.$message.success(value.data.message)
          this.$store.dispatch('setToken', value.data.data)
          this.$router.push("/category")
        }else {
          this.$message.error(value.data.message)
        }
        //console.log(value)
        // console.log(this.listCategory)
      })

    }
  }
}
</script>

<style scoped>

</style>