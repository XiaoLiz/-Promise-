//index.js
/*****
 *  
 *  注意如果小程序后续接口依赖 openid
 *  用code换取 openid，不要进行异步请求获取openid
 **/

import promisify from "wechat-minapp-promise"
import getcode from '../../servers/getCode'   
import api from '../../servers/url'

const app = getApp()
const {wxrequest} = app.globalData

Page({
    /**
     * 页面的初始数据
     */
    data: {
        code: ''
    },
  
    onLoad: function (options) {
        const login = promisify(wx.login)
        login()
        .then(res => {
            console.log(res.code, 'login')
        })
    },
  
    /**举个栗子**/
    onShow: function () {
        getcode()
            .then(res => {
                console.log(res, 'res====')
                this.setData({
                    code: res.code
                })

                return this.useLogin()
            })
            .then(res => {
                console.log(res, 'useLogin')

            })
            .catch(err => {
                console.log(err, 'err')
            })
    },

    useLogin() {
        return wxrequest({
            url: `${api.wxLogin}`
        })
    }
  })

