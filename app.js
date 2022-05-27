//app.js

import http from './servers/request'
const wxrequest = http.$ajax

App({
  onLaunch: function () {
  },
  globalData: {
    userInfo: null,
    
    wxrequest: wxrequest
  }
})