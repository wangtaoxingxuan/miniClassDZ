// components/empty/empty.js
Component({

  externalClasses: ['empty-container'],
  /**
   * 组件的属性列表
   */
  properties: {
    imagePath: {
      type: String,
      value: "/images/ic_no_data.png"
    },
    txt: {
      type: String,
      value: "暂无数据",
    }

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
