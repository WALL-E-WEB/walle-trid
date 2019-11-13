//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    card: {
      headimg: "",
      companyname: "福建微创时代",
      cardname: "Wall-E",
      post: "运营经理",
      phone: "12345678901",
      mail: "123@qq.com",
      address: "福州市台江区群升国际御园"
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onChange(e) {
    console.log(e.detail)
    if (e.detail === 0) {
      wx.navigateTo({
        url: "/pages/logs/logs"
      })
      
    }
  },
  // 上传文件
  upload(){
    wx.cloud.uploadFile({
      cloudPath: 'pages/img/city.jpg', // 上传至云端的路径
      filePath: 'pages/img/city.jpg', // 小程序临时文件路径
      success: res => {
        // 返回文件 ID
        
      },
      fail: console.error
    })
    
    wx.cloud.downloadFile({
      fileID: 'cloud://walletrip.7761-walletrip-1300646333/timg.jpg', // 文件 ID
      success: res => {
        // 返回临时文件路径
      
      },
      fail: console.error
    })

  },
  login(){
    console.log('aa')

    wx.login({
      success(res) {
        if (res.code) {
          //发起网络请求
         console.log(res)
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })

          // wx.authorize({
          //   scope: 'scope.userInfo',
          //   success(res) {
          //     // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
          //     console.log(res)
          //     wx.getUserInfo({
          //       success: function (res) {
          //         console.log(res)
          //         var userInfo = res.userInfo
          //         var nickName = userInfo.nickName
          //         var avatarUrl = userInfo.avatarUrl
          //         var gender = userInfo.gender //性别 0：未知、1：男、2：女
          //         var province = userInfo.province
          //         var city = userInfo.city
          //         var country = userInfo.country
          //       }
          //     })
          //   }
          // })
        
  },
  // 钩子
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

   
  // 获取云数据
    // const db = wx.cloud.database()
    // db.collection('card').get().then(res => {
    //   console.log(res)
    // })
  
  // 云函数
    wx.cloud.callFunction({
      name: 'login',
      complete: res => {
        console.log('callFunction login result: ', res)
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})