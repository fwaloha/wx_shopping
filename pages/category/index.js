
import { request } from "../../request/index.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {

    first_cat: [],
    second_cat: [],
    third_cat: []
  },

  Cates: [],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.getData()
  },

  getData() {

    request({ url: "https://api-hmugo-web.itheima.net/api/public/v1/categories" })
      .then(result => {

        this.Cates = result.data.message
        let first_cat = this.Cates.map(v =>v.cat_name)

        let second_cat = this.Cates[0].children
        this.setData({
          first_cat,
          second_cat
        })

      })
  },

})