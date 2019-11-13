// pages/setcard/setcard.js

import citydata from './citydata.js'
Page({

      /***************
       * 页面的初始数据
       */
      data: {
            cityData: citydata,
            isShow: false,
            cardData: {
                  headimg: "../img/timg.jpg",
                  name: '瓦力',
                  phone: '13188888888',
                  mail: "123456@qq.com",
                  company: "福建微创时代大数据技术有限公司",
                  post: "运营经理",
                  city: "福建省福州市",
                  detailed: "群生国际御园"
            },
            cityStr:''
      },
      // 方法
      cardsetSubmit(e) {
            console.log(e)
      },

      upHeadImg() {

            let that = this
            let img = 'cardData.headimg'
            wx.chooseImage({

                  count: 1,
                  sizeType: ['compressed'],
                  sourceType: ['album', 'camera'],

                  success(res) {
                        console.log(res)
                        that.setData({
                              [img]: res.tempFilePaths[0]
                        })
                  }
            })
      },


      showChangeCity() {

            this.setData({
                  isShow: true
            })
      },

      unIsShow() {

            this.setData({
                  isShow: false
            })
      },
      confirmCity(res) {
            console.log('pp')
            let city = 'cardData.city'
            console.log(res)
            let citytemp= ''

            res.detail.values.map((item) => {
                  citytemp += item.name

            })
            console.log(citytemp)
            this.setData({
                  [city]: res.detail.values,
                  cityStr: citytemp,
                  isShow: false
            })
      },

      // 方法结束
      /**
       * 生命周期函数--监听页面加载
       */
      onLoad: function(options) {

      },

      /**
       * 生命周期函数--监听页面初次渲染完成
       */
      onReady: function() {

      },

      /**
       * 生命周期函数--监听页面显示
       */
      onShow: function() {

      },

      /**
       * 生命周期函数--监听页面隐藏
       */
      onHide: function() {

      },

      /**
       * 生命周期函数--监听页面卸载
       */
      onUnload: function() {

      },

      /**
       * 页面相关事件处理函数--监听用户下拉动作
       */
      onPullDownRefresh: function() {

      },

      /**
       * 页面上拉触底事件的处理函数
       */
      onReachBottom: function() {

      },

      /**
       * 用户点击右上角分享
       */
      onShareAppMessage: function() {

      }
})