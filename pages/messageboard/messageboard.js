// pages/messageboard/messageboard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal: "",
    msgData: []
  },
  changeInputVal:function(ev){
    this.setData({
      inputVal: ev.detail.value
    })
  },
  addMsg:function(){
    var list = this.data.msgData;
    list.push({
      msg: this.data.inputVal
    });
    //缓存list
    wx.setStorage({
      key: "message",
      data: list
    });
    // 更新
    this.setData({
      msgData: list,
      inputVal: ""
    })
  },
  delMsg:function(ev){
    var n = ev.target.dataset.index;
    var list = this.data.msgData;
    list.splice(n,1);
    //缓存list
    wx.setStorage({
      key: "message",
      data: list
    });
    this.setData({
      msgData: list
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    wx.getStorage({
      key: "message",
      success: function(res){
        that.setData({
          msgData: res.data
        });
      }
    });
  }
})