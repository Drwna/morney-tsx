import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/money',
  },
  {
    path: '/money',
    name: 'Money',
    component: () => import('@/views/MoneyView'),
  },
  {
    path: '/label',
    children: [
      {
        path: '',
        name: 'Label',
        component: () => import('@/views/LabelView'),
      },
      {
        path: 'edit/:id',
        name: 'LabelEdit',
        component: () => import('@/views/LabelEditView'),
      },
    ],
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: () => import('@/views/StatisticsView'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
