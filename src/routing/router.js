import Vue from 'vue'
import Router from 'vue-router'
import IndexView from '@/views/IndexView'
import ListView from '@/views/ListView'
import NoteView from '@/views/NoteView'
import NotFoundView from '@/views/NotFoundView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'IndexView',
      component: IndexView
    },
    {
      path: '/list',
      name: 'ListView',
      component: ListView
    },
    {
      path: '/note/:id',
      name: 'NoteView',
      component: NoteView
    },
    {
      path: '*',
      name: 'NotFountView',
      component: NotFoundView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition ? savedPosition : { x: 0, y: 0 }
  }
})
