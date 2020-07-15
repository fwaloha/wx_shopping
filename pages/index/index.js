const app = getApp()

import { request } from "../../request/index.js"

Page({
  data: {
    img_src: [],
    catglist: [],
    floorlist:[]
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

    this.floorimageFun();

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

  floorimageFun() {
    request({ url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata'})
      .then(result => {
        this.setData({
          floorlist: result.data.message
        })
      })
  },
})
