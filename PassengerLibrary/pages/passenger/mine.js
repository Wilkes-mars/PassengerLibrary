Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    
  },
  attached() {
    // console.log("success")
    let that = this;
    wx.showLoading({
      title: '数据加载中',
      mask: true,
    })
    let i = 0;
    numDH();
    function numDH() {
      if (i < 20) {
        setTimeout(function () {
          that.setData({
            
          })
          i++
          numDH();
        }, 20)
      } else {
        that.setData({
          
        })
      }
    }
    wx.hideLoading()
  },
  methods: {
    coutNum(e) {
      if (e > 1000 && e < 10000) {
        e = (e / 1000).toFixed(1) + 'k'
      }
      if (e > 10000) {
        e = (e / 10000).toFixed(1) + 'W'
      }
      return e
    },

    onUpdateRecordButton(e) {
      wx.navigateTo({
        url: '/pages/passenger/about/log'
      })
    },

    onGitHubButton(e) {
      wx.setClipboardData({
        data: e.currentTarget.dataset.link,
        success: res => {
          wx.showToast({
            title: '已复制地址',
            duration: 1200,
          })
        }
      })
    },

    showModal(e) {
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    },

    hideModal(e) {
      this.setData({
        modalName: null
      })
    },

    onRewardQrcode() {
      wx.cloud.getTempFileURL({
        fileList: [],
        success: function (res) {
          // console.log(res)
          if (res.fileList[0].status == 0 && res.fileList[0].tempFileURL != '') {
            wx.previewImage({
              urls: [res.fileList[0].tempFileURL],
              current: res.fileList[0].tempFileURL // 当前显示图片的http链接      
            })
          }
        },
        fail: function (res) {
          console.log('res: ', res)
        }
      })
    },

    onAboutButton(e) {
      wx.navigateTo({
        url: '/pages/passenger/about/about'
      })
    },
  }
})