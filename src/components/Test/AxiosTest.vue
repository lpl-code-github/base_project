<!--axios请求测试-->
<template>
  <div>
     <h1>{msg}</h1>
  </div>
</template>

<script>
export default {
  name: "AxiosTest",
  data(){
    return{
      msg:""
    }
  },
  created() {
    this.getHelloAjax()
  },
  methods:{
    // 测试ajax方法
    getHelloAjax(){
      this.$request.getHello().then(value=>{
        console.log(value)
      })
    }
  }
}
</script>

<style scoped>

</style>