import request from './request'
export  function getHomeDate(){
    return request({
      url:'/home/data'
    })
}
