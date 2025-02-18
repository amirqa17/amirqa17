import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import AboutMe from './pages/AboutMe.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      title: 'Amir Ibraimov | Frontend Engineer in Tokyo',
      metaTags: [
        {
          name: 'description',
          content: 'Frontend Engineer with 4+ years of experience specializing in Vue.js, React, and modern web technologies. Based in Tokyo, Japan.'
        }
      ]
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutMe,
    meta: {
      title: 'About Amir Ibraimov | Frontend Engineer',
      metaTags: [
        {
          name: 'description',
          content: 'Learn more about Amir Ibraimov, a Frontend Engineer based in Tokyo with experience in Vue.js, React, and modern web development.'
        }
      ]
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return { 
        top: 0,
        behavior: 'smooth'
      }
    }
  }
})

// Update meta tags for each route
router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta?.title)
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta?.metaTags)

  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title
  }

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))

  if (!nearestWithMeta) return next()

  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta')
    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key])
    })
    tag.setAttribute('data-vue-router-controlled', '')
    return tag
  })
  .forEach(tag => document.head.appendChild(tag))

  next()
})

export default router 