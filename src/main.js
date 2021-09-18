import vue from 'vue'
import App from './App.vue'
import router from './router'

new vue({
  router,
  render:h=>h(App)
}).$mount('#app')
