import Router from 'vue-router'
import vue from 'vue'
vue.use(Router)
 const home =()=>import('../views/home/home')
 const shopping =()=>import('../views/shopping/shopping')
 const classify=() =>import('../views/classify/classify')
 const my =()=>import('../views/my/my')
 const routes =[
   {
     path:'',
     redirect:'/home'
   },
   {
     path:'/home',
     component:home
   },
   {
     path:'/shopping',
     component:shopping
   },
   {
     path:'/classify',
     component:classify
   },
   {
     path:'/my',
     component:my
   }
 ]
const router = new Router({
  mode:'history',
  routes
})
export default  router
