// pages/join/join.js
var app = getApp();
console.log(app);
var com = require("../../utils/common");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    msg: app.a,
    bshow: true,
    arr: ["apple","blue","orange","banana"],
    arrdata: [
      {
        name: "apple",
        age: 10
      },
      {
        name: "blue",
        age: 15
      },
      {
        name: "orange",
        age: 40
      },
      {
        name: "banana",
        age: 19
      }
    ]
  },
  change:function(){
    this.setData({
      bshow: !this.data.bshow
    });
  },

  fnUserState:function(){
    this.setData({
      "msg": com.echoHello("lily")
    });
  }, 

  fnUserState2: function () {
    this.setData({
      "msg": com.echoBye("kate")
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  tell: function(){
    wx.makePhoneCall({
      phoneNumber: '18380460787',
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})