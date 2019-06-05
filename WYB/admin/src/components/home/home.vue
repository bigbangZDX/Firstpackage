<template>
  <div class="home">
    <el-container>
      <el-header>
        高端母婴产品销售App后台管理系统
        <span
          class="goback"
          @click="go()"
          style=" cursor: pointer;font-weight:700;font-size:16px;display:block;margin-top:-20px;color:green;"
        >退出</span>
      </el-header>

      <el-main>
        <el-tabs :tab-position="tabPosition" style="height:100%;">
          <el-tab-pane label="用户管理">
            <el-table
              :data="tableData.filter(data => !search || data.num.toLowerCase().includes(search.toLowerCase()))"
              height="400"
              border
              style="width: 100%"
            >
              <el-table-column prop="num" label="用户名" width="180"></el-table-column>
              <el-table-column prop="pass" label="密码" width="180"></el-table-column>
              <el-table-column prop="imageUrl" label="头像"></el-table-column>
              <el-table-column align="right">
                <template slot="header" slot-scope="scope">
                  <el-input v-model="search" size="mini" placeholder="输入用户名称关键字搜索"/>
                </template>
                <template slot-scope="scope">
                  <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                    @click.native.prevent="handleDelete(scope.$index, tableData)"
                  >Delete</el-button>
                  <el-dialog
                    title
                    :visible.sync="editFormVisible"
                    :close-on-click-modal="false"
                    class="edit-form"
                    :before-close="handleClose"
                  >
                    <el-form
                      :model="tableData"
                      label-width="80px"
                      :rules="tableData"
                      ref="tableData"
                    >
                      <el-form-item label="用户名" prop="num">
                        <el-input v-model="tableData.num" auto-complete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="密码" prop="pass">
                        <el-input v-model="tableData.pass" auto-complete="off"></el-input>
                      </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                      <el-button @click.native="handleCancel('tableData')">取消</el-button>
                      <el-button type="primary" @click.native="handleUpdate(tableData)">更新</el-button>
                    </div>
                  </el-dialog>
                </template>
              </el-table-column>
            </el-table>
            <div style="margin-left:-1220px;margin-top:-65px">{{"数据总条数："+tableData.length}}</div>
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item>
                <el-input v-model="formInline.user" placeholder="用户名(11位数字)"></el-input>
                <el-input v-model="formInline.pass" placeholder="密码(6位数字)"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  type="primary"
                  @click="onSubmit(formInline)"
                  style="margin-top:-100px;margin-left:100px"
                >新增</el-button>
              </el-form-item>
              <template>
                <el-upload
                  class="avatar-uploader"
                  action="http://localhost:3000/login"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="imgUrl" :src="imgUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>上传用户头像
                </el-upload>
              </template>
            </el-form>
          </el-tab-pane>
          <!-- <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="活动名称">
    <el-input v-model="form.name"></el-input>
          </el-form-item></el-form>-->

          <el-tab-pane label="商品管理">
            <el-table
              :data="tableData1.filter(data => !search || data.description.toLowerCase().includes(search.toLowerCase()))"
              style="width: 100%"
              height="450"
            >
              <el-table-column label="商品名称" prop="description"></el-table-column>
              <el-table-column label="价格" prop="price"></el-table-column>
              <el-table-column label="数量" prop="number"></el-table-column>
              <el-table-column label="图片" prop="av"></el-table-column>

              <el-table-column align="right">
                <template slot="header" slot-scope="scope">
                  <el-input v-model="search" size="mini" placeholder="输入商品名称关键字搜索"/>
                </template>
                <template slot-scope="scope">
                  <el-button size="mini" @click="handleEdit1(scope.$index, scope.row)">Edit</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete1(scope.$index, scope.row)"
                    @click.native.prevent="handleDelete1(scope.$index, tableData1)"
                  >Delete</el-button>
                  <el-dialog
                    title
                    :visible.sync="editFormVisible1"
                    :close-on-click-modal="false"
                    class="edit-form"
                    :before-close="handleClose1"
                  >
                    <el-form
                      :model="tableData1"
                      label-width="80px"
                      :rules="tableData1"
                      ref="tableData1"
                    >
                      <el-form-item label="商品名称" prop="description">
                        <el-input v-model="tableData1.description" auto-complete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="价格" prop="price">
                        <el-input v-model="tableData1.price" auto-complete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="数量" prop="number">
                        <el-input v-model="tableData1.number" auto-complete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="图片" prop="av">
                        <el-input v-model="tableData1.av" auto-complete="off"></el-input>
                      </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                      <el-button @click.native="handleCancel1('tableData1')">取消</el-button>
                      <el-button type="primary" @click.native="handleUpdate1(tableData1)">更新</el-button>
                    </div>
                  </el-dialog>
                </template>
              </el-table-column>
            </el-table>
            <div style="margin-left:-1220px;margin-top:-65px">{{"数据总条数："+tableData1.length}}</div>
            <el-form :inline="true" :model="formInline1" class="demo-form-inline">
              <el-form-item style="margin-left:50px">
                <el-input v-model="formInline1.description" placeholder="商品名称"></el-input>
                <el-input v-model="formInline1.price" placeholder="价格"></el-input>
                <el-input v-model="formInline1.number" placeholder="数量"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  type="primary"
                  @click="onS(formInline1)"
                  style="margin-top:-150px;margin-left:100px"
                >新增</el-button>
              </el-form-item>
              <template>
                <el-upload
                  class="avatar-uploader"
                  action="http://localhost:3000/login"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="imgUrl1" :src="imgUrl1" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>上传图片
                </el-upload>
              </template>
            </el-form>
          </el-tab-pane>

          <el-tab-pane label="分类管理">
            <el-table
              :data="tableData2.filter(data => !search || data.description.toLowerCase().includes(search.toLowerCase()))"
              style="width: 100%"
            >
              <el-table-column label="商品分类名" prop="description"></el-table-column>
              <el-table-column label="分类下所有商品" prop="price"></el-table-column>

              <el-table-column align="right">
                <template slot="header" slot-scope="scope">
                  <el-input v-model="search" size="mini" placeholder="输入分类名称查询"/>
                </template>
                <template slot-scope="scope">
                  <el-button size="mini" @click="handleEdit2(scope.$index, scope.row)">Edit</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete2(scope.$index, scope.row)"
                    @click.native.prevent="handleDelete2(scope.$index, tableData2)"
                  >Delete</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>

          <el-tab-pane label="订单管理">
            <el-table
              :data="tableData3.filter(data => !search || data._id.toLowerCase().includes(search.toLowerCase()))"
              border
              style="width: 100%"
            >
              <el-table-column label="订单号" prop="_id"></el-table-column>
              <el-table-column label="商品名称" prop="description"></el-table-column>
              <el-table-column label="商品图片" prop="pic"></el-table-column>

              <!-- <el-table-column label="收货人姓名" prop="description"></el-table-column> -->
              <!-- <el-table-column label="收货地址" prop="dizhi"></el-table-column> -->
              <el-table-column label="手机号码" prop="phone"></el-table-column>
              <!-- <el-table-column label="购买数量" prop="number"></el-table-column> -->
              <el-table-column label="价格总计" prop="price"></el-table-column>
              <!-- <el-table-column label="支付方式" prop="fshi"></el-table-column> -->
              <!-- <el-table-column label="订单状态" prop="zhuangtai"></el-table-column> -->
              <el-table-column label="下单时间" prop="time"></el-table-column>

              <el-table-column align="right">
                <template slot="header" slot-scope="scope">
                  <el-input v-model="search" size="mini" placeholder="输入订单号"/>
                </template>
                <template slot-scope="scope">
                  <el-button size="mini" @click="handleEdit3(scope.$index, scope.row)">Edit</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete3(scope.$index, scope.row)"
                    @click.native.prevent="handleDelete3(scope.$index, tableData3)"
                  >Delete</el-button>
                  <el-dialog
                    title
                    :visible.sync="editFormVisible3"
                    :close-on-click-modal="false"
                    class="edit-form"
                    :before-close="handleClose3"
                  >
                    <el-form
                      :model="tableData3"
                      label-width="80px"
                      :rules="tableData3"
                      ref="tableData3"
                    >
                      <el-form-item label="商品名称" prop="description">
                        <el-input v-model="tableData3.description" auto-complete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="商品图片" prop="pic">
                        <el-input v-model="tableData3.pic" auto-complete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="手机号码" prop="phone">
                        <el-input v-model="tableData3.phone" auto-complete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="价格总计" prop="price">
                        <el-input v-model="tableData3.price" auto-complete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="下单时间" prop="time">
                        <el-input v-model="tableData3.time" auto-complete="off"></el-input>
                      </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                      <el-button @click.native="handleCancel3()">取消</el-button>
                      <el-button type="primary" @click.native="handleUpdate3(tableData3)">更新</el-button>
                    </div>
                  </el-dialog>
                </template>
              </el-table-column>
            </el-table>
            <div style="margin-left:-1220px;margin-top:-65px">{{"数据总条数："+tableData3.length}}</div>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </div>
</template>
<script scoped>
import { Toast } from "mint-ui";

export default {
  name: "login",
  //   props:["login"],
  data() {
    return {
      admin: "",
      pass: "",
      imageUrl: "",
      tabPosition: "left",
      tableData: [],
      tableData1: [],
      tableData2: [],
      tableData3: [],

      search: "",
      editFormVisible: false, //默认不显示编辑弹层
      editFormVisible1: false, //默认不显示编辑弹层

      editFormVisible3: false, //默认不显示编辑弹层

      // form: {
      //     name: '',
      //     }
      formInline: {
        user: "",
        pass: ""
      },
      formInline1: {
        description: "",
        number: "",
        price: ""
      },
      imgUrl: "",
      imgUrl1: ""
    };
  },
  methods: {
    //点击新增
    onSubmit(a) {
      console.log("submit!");
      var in1 = a.user;
      var in2 = a.pass;
      const url = "http://localhost:3000/login";
      // var params = new URLSearchParams();
      if (this.imgUrl != "" && in1.length == 11 && in2.length == 6) {
        this.$axios({
          method: "post",
          url: url,
          data: {
            num: in1,
            pass: in2,
            imageUrl: this.imgUrl
          },
          headers: {
            "Content-Type": "application/json; charset=UTF-8"
          }
        }).then(res => {
          Toast({
            message: "添加成功！",
            position: "middle",
            duration: 2000,
            className: "toasts"
          });
          this.reload();
        });
      } else {
        Toast({
          message: "上传头像不为空，注意提示信息！",
          position: "middle",
          duration: 2000,
          className: "toasts"
        });
      }
    },
    //点击新增
    onS(b) {
      console.log("submit!");
      var in1 = b.description;
      var in2 = b.price;
      var in3 = b.number;
      const url = "http://localhost:3000/insertProducts";
      // var params = new URLSearchParams();
      if (this.imgUrl1 != ""&&in1.length!=0&&in2.length!=0&&in3.length!=0) {
        this.$axios({
          method: "post",
          url: url,
          data: {
            description: in1,
            price: in2,
            number: in3,
            av: this.imgUrl1
          },
          headers: {
            "Content-Type": "application/json; charset=UTF-8"
          }
        }).then(res => {
          Toast({
            message: "添加成功！",
            position: "middle",
            duration: 2000,
            className: "toasts"
          });
          this.reload();

        });
      } else {
        Toast({
          message: "上传头像和所填信息不为空！",
          position: "middle",
          duration: 2000,
          className: "toasts"
        });
      }
    },
    handleAvatarSuccess(res, file) {
      this.imgUrl = URL.createObjectURL(file.raw);
      this.imgUrl1 = URL.createObjectURL(file.raw);

      console.log(this.imgUrl);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        // this.$message.error("上传头像图片只能是 JPG 格式!");
        Toast({
          message: "上传头像图片只能是 JPG 格式!",
          position: "middle",
          duration: 2000,
          className: "toasts"
        });
      }
      if (!isLt2M) {
        // this.$message.error("上传头像图片大小不能超过 2MB!");
        Toast({
          message: "上传头像图片大小不能超过 2MB!",
          position: "middle",
          duration: 2000,
          className: "toasts"
        });
      }
      return isJPG && isLt2M;
    },
    //点击编辑
    handleEdit(index, row) {
      this.editFormVisible = true;
      this.tableData = Object.assign({}, row); //这句是关键！！！
    },
    handleEdit1(index, row) {
      this.editFormVisible1 = true;
      this.tableData1 = Object.assign({}, row); //这句是关键！！！
    },
    handleEdit3(index, row) {
      this.editFormVisible3 = true;
      this.tableData3 = Object.assign({}, row); //这句是关键！！！
    },
    //点击关闭dialog
    handleClose(done) {
      /*done();
    location.reload();*/
      this.editFormVisible = false;
    },
    handleClose1(done) {
      /*done();
    location.reload();*/
      this.editFormVisible1 = false;
    },
    handleClose3(done) {
      /*done();
    location.reload();*/
      this.editFormVisible3 = false;
    },
    //点击取消
    handleCancel(formName) {
      this.editFormVisible = false;
      // this.reload();
    },
    handleCancel1(formName) {
      this.editFormVisible1 = false;
      // this.reload();
    },
    handleCancel3(formName) {
      this.editFormVisible3 = false;
      // this.reload();
    },
    //点击更新
    handleUpdate(forName) {
      //更新的时候就把弹出来的表单中的数据写到要修改的表格中
      var postData = {
        num: forName.num,
        pass: forName.pass
      };
      console.log(forName);
      //这里再向后台发个post请求重新渲染表格数据
      this.editFormVisible = false;
      var params = new URLSearchParams();

      this.$axios({
        method: "post",
        url: "http://localhost:3000/gengxinuser",
        data: {
          _id: forName._id,
          num: forName.num,
          pass: forName.pass
        }
      }).then(res => {
        // console.log(res.data);
        // this.tableData = res.data;
        var params = new URLSearchParams();

        this.$axios({
          method: "post",
          url: "http://localhost:3000/adminuser",
          data: params
        }).then(res => {
          console.log(res.data);
          this.tableData = res.data;
        });
      });
      // this.reload()
    },
    handleUpdate1(forName) {
      //更新的时候就把弹出来的表单中的数据写到要修改的表格中
      var postData = {
        description: forName.description,
        price: forName.price,
        number: forName.number,
        av: forName.av
      };
      console.log(forName);
      //这里再向后台发个post请求重新渲染表格数据
      this.editFormVisible1 = false;
      var params = new URLSearchParams();

      this.$axios({
        method: "post",
        url: "http://localhost:3000/gengxinproducts",
        data: {
          _id: forName._id,
          description: forName.description,
          price: forName.price,
          number: forName.number,
          av: forName.av
        }
      }).then(res => {
        // console.log(res.data);
        // this.tableData = res.data;
        var params = new URLSearchParams();

        this.$axios({
          method: "post",
          url: "http://localhost:3000/adminProducts",
          data: params
        }).then(res => {
          console.log(res.data);
          this.tableData1 = res.data;
        });
      });
      // this.reload()
    },
    handleUpdate3(forName) {
      //更新的时候就把弹出来的表单中的数据写到要修改的表格中
      var postData = {
        description: forName.description,
        pic: forName.pic,
        time: forName.time,
        phone: forName.phone,
        price: forName.price
      };
      console.log(forName);
      //这里再向后台发个post请求重新渲染表格数据
      this.editFormVisible3 = false;
      var params = new URLSearchParams();

      this.$axios({
        method: "post",
        url: "http://localhost:3000/gengxindingdan",
        data: {
          _id: forName._id,
          description: forName.description,
          pic: forName.pic,
          time: forName.time,
          phone: forName.phone,
          price: forName.price
        }
      }).then(res => {
        // console.log(res.data);
        // this.tableData = res.data;
        var params = new URLSearchParams();

        this.$axios({
          method: "post",
          url: "http://localhost:3000/admindingdan",
          data: params
        }).then(res => {
          console.log(res.data);
          this.tableData3 = res.data;
        });
      });
      // this.reload()
    },
    // handleEdit(index, row) {
    //   console.log(index, row);
    // },
    handleDelete(index, row) {
      console.log(index, row);
      // row.splice(index, 1);
      this.$axios({
        method: "post",
        url: "http://localhost:3000/removeuser",
        data: {
          _id: row._id
        }
      }).then(res => {
        // console.log(res.data);
        // this.tableData = res.data;
        var params = new URLSearchParams();

        this.$axios({
          method: "post",
          url: "http://localhost:3000/adminuser",
          data: params
        }).then(res => {
          console.log(res.data);
          this.tableData = res.data;
        });
      });
    },
    handleDelete1(index, row) {
      console.log(index, row);
      // row.splice(index, 1);
      this.$axios({
        method: "post",
        url: "http://localhost:3000/removeproducts",
        data: {
          _id: row._id
        }
      }).then(res => {
        // console.log(res.data);
        // this.tableData = res.data;
        var params = new URLSearchParams();

        this.$axios({
          method: "post",
          url: "http://localhost:3000/adminProducts",
          data: params
        }).then(res => {
          console.log(res.data);
          this.tableData1 = res.data;
        });
      });
    },
    handleDelete3(index, row) {
      console.log(index, row);
      // row.splice(index, 1);
      this.$axios({
        method: "post",
        url: "http://localhost:3000/removedingdan",
        data: {
          _id: row._id
        }
      }).then(res => {
        // console.log(res.data);
        // this.tableData = res.data;
        var params = new URLSearchParams();

        this.$axios({
          method: "post",
          url: "http://localhost:3000/admindingdan",
          data: params
        }).then(res => {
          console.log(res.data);
          this.tableData3 = res.data;
        });
      });
    },
    go() {
      this.$router.push({
        name: "login"
      });
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
  inject: ["reload"], //注入reload方法

  created() {
    var params = new URLSearchParams();

    this.$axios({
      method: "post",
      url: "http://localhost:3000/adminuser",
      data: params
    }).then(res => {
      console.log(res.data);
      this.tableData = res.data;
    });
    var params = new URLSearchParams();

    this.$axios({
      method: "post",
      url: "http://localhost:3000/adminProducts",
      data: params
    }).then(res => {
      console.log(res.data);
      this.tableData1 = res.data;
    });
    var params = new URLSearchParams();

    this.$axios({
      method: "post",
      url: "http://localhost:3000/admindingdan",
      data: params
    }).then(res => {
      console.log(res.data);
      this.tableData3 = res.data;
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
.goback {
  position: fixed;
  top: 30px;
  right: 90px;
}
.el-header {
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 1000;
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
  margin-top: 50px;
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
  height: 800px;
}
.el-tabs--left .el-tabs__header.is-left {
}
th {
  height: 100px;
}
thead.has-gutter {
  height: 80px !important;
}
.el-table__header-wrapper {
  height: 80px !important;
}
.avatar {
  width: 110px;
  height: 110px;
}
.demo-form-inline {
  width: 500px;
  height: 250px;
  margin-top: -60px;
  margin-left: -30px;
}
.avatar-uploader {
  margin-top: -270px;
  margin-left: -220px;
}
</style>
