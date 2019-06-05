<template>
  <div class="home">
    <el-container>
      <el-header>无忧宝贝后台管理系统</el-header><span class="goback" @click="go()" style="font-weight:700">退出</span>
      <el-main>
        <el-tabs :tab-position="tabPosition" style="height: 1920px;">
          <el-tab-pane label="用户管理">
            <el-table
              :data="tableData.filter(data => !search || data.num.toLowerCase().includes(search.toLowerCase()))"
              style="width: 100%"
            >
              <el-table-column label="用户名（Phone）" prop="num"></el-table-column>
              <el-table-column label="密码（Password）" prop="pass"></el-table-column>
              <el-table-column label="用户头像（Pic）" prop="imageUrl"></el-table-column>

              <el-table-column align="right">
                <template slot="header" slot-scope="scope">
                  <el-input v-model="search" size="mini" placeholder="输入用户名关键字搜索"/>
                </template>
                <template slot-scope="scope">
                  <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                    @click.native.prevent="handleDelete(scope.$index, tableData)"
                  >Delete</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="商品管理">
              <el-table
              :data="tableData1.filter(data => !search || data.description.toLowerCase().includes(search.toLowerCase()))"
              style="width: 100%"
            >
              <el-table-column label="商品名称" prop="description"></el-table-column>
              <el-table-column label="价格" prop="price"></el-table-column>
              <el-table-column label="数量" prop="number"></el-table-column>
              <el-table-column label="照片" prop="av"></el-table-column>


              <el-table-column align="right">
                <template slot="header" slot-scope="scope">
                  <el-input v-model="search" size="mini" placeholder="输入商品名称关键字搜索"/>
                </template>
                <template slot-scope="scope">
                  <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                    @click.native.prevent="handleDelete(scope.$index, tableData1)"
                  >Delete</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="角色管理">
              <el-table
              :data="tableData2.filter(data => !search || data.description.toLowerCase().includes(search.toLowerCase()))"
              style="width: 100%"
            >
              <el-table-column label="身份" prop="description"></el-table-column>
              <el-table-column label="权限" prop="price"></el-table-column>


              <el-table-column align="right">
                <template slot="header" slot-scope="scope">
                  <el-input v-model="search" size="mini" placeholder="输入商品名称关键字搜索"/>
                </template>
                <template slot-scope="scope">
                  <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                    @click.native.prevent="handleDelete(scope.$index, tableData2)"
                  >Delete</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="订单管理">
              <el-table
              :data="tableData3.filter(data => !search || data.description.toLowerCase().includes(search.toLowerCase()))"
              style="width: 100%"
            >
              <el-table-column label="地址" prop="av"></el-table-column>

              <el-table-column label="商品名称" prop="description"></el-table-column>
              <el-table-column label="价格" prop="price"></el-table-column>
              <el-table-column label="数量" prop="number"></el-table-column>


              <el-table-column align="right">
                <template slot="header" slot-scope="scope">
                  <el-input v-model="search" size="mini" placeholder="输入商品名称关键字搜索"/>
                </template>
                <template slot-scope="scope">
                  <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                    @click.native.prevent="handleDelete(scope.$index, tableData3)"
                  >Delete</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import { Toast } from "mint-ui";

export default {
  name: "login",
  //   props:["login"],
  data() {
    return {
      admin: "",
      pass: "",
      imageUrl:"",
      tabPosition: "left",
      tableData: [
      ],
      tableData1:[],
      tableData2:[],
      tableData3:[],

      search: ""
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
       row.splice(index, 1);
    },
    go(){
        this.$router.push({
            name:"login"
        })
    }
    //登陆方法
    // login() {
      // this.$http.login({
      //     admin_name:this.admin,
      //     admin_pwd:this.pass
      // }).then(res=>{
      //     console.log(res);
      //     let data = res.data;
      //     localStorage.admin_name=data.admin_name;
      //     localStorage.admin_ID=data.admin_ID;
      //     localStorage.admin_jsID=data.admin_jsID;
      //     localStorage.admin_jsName=data.admin_jsName;
      //     localStorage.admin_tokenID=data.admin_tokenID;
      //     this.$router.push({
      //         path:"/"
      //         // name:"head"
      //     })
      // })
     
    // }
  },
  created(){
       var params = new URLSearchParams();

      this.$axios({
        method: "post",
        url: "http://localhost:3000/adminuser",
        data: params
      }).then(res => {
        console.log(res.data)
        this.tableData=res.data
      });
      var params = new URLSearchParams();

      this.$axios({
        method: "post",
        url: "http://localhost:3000/adminProducts",
        data: params
      }).then(res => {
        console.log(res.data)
        this.tableData1=res.data
      });
  }
};
</script>
<style scoped>
.home {
  height: 100%;
  width: 100%;
  position: relative;
}
.goback{
    position: fixed;
    top: 30px;
    right: 90px;
}

.el-header,
.el-footer {
  background-color: #409eff;
  color: #333;
  text-align: center;
  line-height: 60px;
  font-size: 26px;
  font-weight: 700;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
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
.el-container.is-vertical {
  height: 1020px;
}
.el-tabs--left .el-tabs__header.is-left {
}
th{
    height: 100px;
}
</style>
