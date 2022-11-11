// pages/room/room.js
const app =  getApp()
Page({
  onclick2:function()
{
  wx.navigateTo({
    url: '../mo-peo/mo-peo',
  })
},
  onclick:function()
  {
    wx.navigateTo({
      url: '../tri-pe/tri-peo',
    })
  },

  onclick3:function()
  {
    wx.navigateTo({
      url: '../tw-peo/tw-peo',
    })
  }
})