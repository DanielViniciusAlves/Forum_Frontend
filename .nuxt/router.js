import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2381df37 = () => interopDefault(import('../pages/edit.vue' /* webpackChunkName: "pages/edit" */))
const _5819648c = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _1db86266 = () => interopDefault(import('../pages/post.vue' /* webpackChunkName: "pages/post" */))
const _e31c7d16 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/edit",
    component: _2381df37,
    name: "edit"
  }, {
    path: "/login",
    component: _5819648c,
    name: "login"
  }, {
    path: "/post",
    component: _1db86266,
    name: "post"
  }, {
    path: "/",
    component: _e31c7d16,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
