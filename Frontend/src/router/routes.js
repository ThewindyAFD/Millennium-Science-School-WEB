
const routes = [
  {
    path: '/',
    component: () => import('layouts/HomeLayouts.vue'),
  },
  {
    path: '/clubs',
    component: () => import('layouts/ClubLayout.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
