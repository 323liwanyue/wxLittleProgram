// pages/storage/storage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //text: "这是一个页面"
    storageContent: "",
    storageSyncContent: ""
  },

  /**
   * 异步存储
   */
  saveStorage: function(){
    //以键值对的形式存储，传进去是一个对象
    wx.setStorage({
      key: "key",
      data: "我是说storage异步存储的信息",
      success: function(res){
        console.log(res);
      }
    });
  },

  /**
   * 异步信息
   */
  getStorage: function(){
    var that = this;
    wx.getStorage({
      //获取数据的key
      key: "key",
      success: function(res){
        console.log(res);
        that.setData({
          storageContent: res.data
        });
      }
    });
  },

  /**
   * 失败会调用
   */
  fail:function(res){
    console.log(res);
  },

  /**
   * 清除数据
   */
  clearStorage:function(){
    var that = this;
    wx.clearStorage({
     success:function(res){
       that.setData({
         storageContent: ""
       })
     }
    });
  },
  /**
   * 数据同步存储
   */
  saveSyncStorage: function () {
    wx.setStorageSync('key', '我是同步存储的数据')
  },

  /**
   * 数据同步获取
   */
  getSyncStorage: function () {
    // var that = this;
    var value = wx.getStorageSync('key')
    this.setData({
      storageSyncContent: value
    })
  },

  /**
   * 清除同步存储数据
   */
  clearSyncStorage: function () {
    wx.clearStorageSync()
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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