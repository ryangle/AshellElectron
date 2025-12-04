import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  mode: 'hash',
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '主页',
      redirect: '/login'
    },
    {
      path: '/login',
      name: '登录',
      component: () => import('@renderer/views/login.vue')
    },
    {
      path: '/main',
      name: '主窗口',
      component: () => import('@renderer/views/main.vue'),
      children: [
        {
          path: 'file',
          name: '文件',
          component: () => import('@renderer/views/file.vue')
        },
        {
          path: 'search',
          name: '搜索',
          component: () => import('@renderer/views/search.vue')
        },
        {
          path: 'extension',
          name: '扩展',
          component: () => import('@renderer/views/extension.vue')
        }
      ]
    }
  ]
})

export default router
