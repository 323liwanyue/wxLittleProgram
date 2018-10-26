//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: 'Hello World',
        imgUrls: [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        indicatorDots: false,
        autoplay: false,
        interval: 5000,
        duration: 1000,
        proList: [
          {
            logo: '/images/1.jpg',
            title: "test1",
            desc: "asssssdf"
          }, {
            logo: '/images/1.jpg',
            title: "test2",
            desc: "asssssdf"
          },{
            logo: '/images/1.jpg',
            title: "test3",
            desc: "asssssdf"
          }
        ],
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    //事件处理函数
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function () {
      this.setData({
        test: "01"
      });
      
  
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
    },
    getUserInfo: function (e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },
    toDetail: function(e){
      console.log(e);
      var index = e.currentTarget.dataset.index;
      console.log(index);
      console.log(1);
      console.log(this.data.proList);
      var title = this.data.proList[index].title;
      wx.navigateTo({
        url: "/pages/join/join?title=" + title
      })
    },
    copy:function(){
      console.log(this);
      if (wx.setClipboardData){
        wx.setClipboardData({
          data: '这是我要复制对的内容',
          success: function (res) {
            wx.showModal({
              title: '复制成功',
              content: '内容已经复制成功！',
            })
          }
        })
      }else{
        wx.showModal({
          title: '提示',
          content: '您的微信版本太低，请升级！',
        })
      }
    },
    aaa:function(){
      wx.navigateTo({
        url: "../home/home"
      })
    },
    changeMotto:function(){
      this.setData({
        motto: "aaa" + Date.now()
      })
    }
})
