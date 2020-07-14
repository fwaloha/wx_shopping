const app = getApp()

Page({
  data: {
    img_src: []
  },
  onLoad: function () {
    wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',

      success: (result) => {
        console.log(result)

        this.setData({
          img_src: result.data.message
        })

      },
      fail: () => { },
      complete: () => { }
    });

  },
})
