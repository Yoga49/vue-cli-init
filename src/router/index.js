import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from 'components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
