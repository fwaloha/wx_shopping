const app = getApp()

import { request } from "../../request/index.js"

Page({
  data: {
    img_src: [],
    catglist: []
  },
  onLoad: function () {
    // wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',

    //   success: (result) => {
    //     console.log(result)

    //     this.setData({
    //       img_src: result.data.message
    //     })

    //   },
    //   fail: () => { },
    //   complete: () => { }
    // });

    request({ url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'})
      .then(result => {
        this.setData({
          img_src: result.data.message
        })
      })
      
    this.swipeFun();
    this.catgFun();


  },
  swipeFun() {
    request({ url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'})
      .then(result => {
        this.setData({
          img_src: result.data.message
        })
      })
  },
  catgFun() {
    request({ url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems'})
      .then(result => {
        this.setData({
          catglist: result.data.message
        })
      })
  },
})
