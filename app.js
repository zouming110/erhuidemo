//app.js  是全局的js文件:提供共享的数据源以及共享的方法,
// 对所有的文件（组件）都适用
App({
  onLaunch: function () {
    console.log("app.js中的钩子函数onLaunch,小程序加载完成");
  },
  onShow:function(){
     console.log("打开小程序");
  },
  onHide(){
      console.log("退出，进入后台");
  },
  // 存储全局的数据源部分,可以让多个界面共享数据
  globalData: {
     shops:["香蕉","苹果","桃子"],
     globalName:"俊杰"
  },
  /**
   * 封装一个request网络请求方法，供所有页面调用
   * url:请求的地址
   * data：接收传递的参数
   * method：接收请求方式：POST/GET
   * callback：网络请求成功的回调函数
   * error：请求失败的回调函数
   * succOrErr:不管成功还是失败的回调函数
   */
  reqHttp(url,data,method,callback,error,succOrErr){
      // 网络请求
      wx.request({
        url,
        method,
        data,
        header:{
          "content-type":method == "GET" ? "json" : "application/x-www-form-urlencoded"
        },
        dataType:"json",
        success:(res)=>{
          callback(res);//回调函数
        },
        fail:(res)=>{
          error(res);
        },
        complete:()=>{
          succOrErr();
        }
      })
  }
})