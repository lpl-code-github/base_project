<template>
  <div class="index">
    <School :msg="getMsg"></School>
<!--    <Business></Business>-->
<!--    <el-container>-->
<!--      <el-header>Header</el-header>-->
<!--      <el-container>-->
<!--        <el-aside width="200px">Aside</el-aside>-->
<!--        <el-container>-->
<!--          <el-main>Main</el-main>-->
<!--          <el-footer>Footer</el-footer>-->
<!--        </el-container>-->
<!--      </el-container>-->
<!--    </el-container>-->
<!--    <div class="ui secondary pointing menu">-->
<!--      <a class="item active"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-->
<!--        家-->
<!--      </font></font></a>-->
<!--      <a class="item"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-->
<!--        留言-->
<!--      </font></font></a>-->
<!--      <a class="item"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-->
<!--        朋友们-->
<!--      </font></font></a>-->
<!--      <div class="right menu">-->
<!--        <a class="ui item"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-->
<!--          登出-->
<!--        </font></font></a>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="ui segment">-->
<!--      <p></p>-->
<!--    </div>-->
  </div>
</template>

<script>
import School from "@/components/School";
// import Business from "@/components/Business";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "index",
  components:{
    School,
    // Business
  },
  methods:{
    getMsg(m){
      console.log(m)
    }
  }
}
</script>

<style  scoped>

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;

}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>