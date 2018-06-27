// pages/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		address: "点击选择，要勾选哦~",
		type: "sell",
		contact:"",
		message: "",
		items: [
		{
			type: "sell",
			name: "转让"
		},
		{
			type: "buy",
			name: "求购"
		}]
  },
	
	selectAddress: function(){
		// console.log('1')
    wx.chooseLocation({
      success: this.selectAddressSuccess.bind(this)
    })
	},

  selectAddressSuccess(res){
    // console.log(res)
    this.setData({
      address: res.address
    })
  },
	
	radioChange(event){
		// console.log(event)
		this.setData({
			type: event.detail.value
		})
	},
	
	getContact(event){
		// console.log(event.detail.value)
		this.setData({
			contact: event.detail.value
		})
	},
	
	getMessage(event){
		this.setData({
			message: event.detail.value
		})
	},
	
	checkAddress(){
		if(this.data.address ==  "点击选择，要勾选哦~"){
			wx.showToast({
				title: '请选择地址',
				icon: "none",
				duration: 2000
			})
			return false;
		}else {
			return true;
		}
	},
	
	checkContact(){
		// console.log(this.data)
			if(this.data.contact ==  ""){
			wx.showToast({
				title: '请填写联系方式',
				icon: "none",
				duration: 2000
			})
			return false;
		}else {
			return true;
		}
	},
	
	checkMessage(){
		if(this.data.message ==  ""){
			wx.showToast({
				title: '请填写备注信息',
				icon: "none",
				duration: 2000
			})
			return false;
		}else {
			return true;
		}
	},
	
	publishFn(){
		if(!this.checkAddress()){
			return;
		}
		if(!this.checkContact()){
			return;
		}
		if(!this.checkMessage()){
			return;
		}
	},
	
  onLoad: function (options) {
  
  },

  

  
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})