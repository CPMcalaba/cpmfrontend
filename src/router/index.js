import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import ViewPost from '../views/ViewPost.vue'
import SundaySchool from '../views/SundaySchool.vue'
import Sermon from '../views/Sermon.vue'
import BibleStudy from '../views/BibleStudy.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Page404 from '../views/Page404.vue'
import ForgotPassword from '../views/ForgotPassword.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "Home",
      
    }
  },

  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    meta: {
      title: "Blog",
      
    }
  },


  //postdetail starts here
  {
    path: '/view_post/:id',
    name: 'ViewPost',
    component: ViewPost,
    meta: {
      title: "ViewPost",
      
    }
  },
  //postdetail ends here

  {
    path: '/sunday_school',
    name: 'SundaySchool',
    component: SundaySchool,
    meta: {
      title: "Sunday School",
      
    }
  },

  {
    path: '/sermons',
    name: 'Sermon',
    component: Sermon,
    meta: {
      title: "Sermon",
      
    }
  },
  
  {
    path: '/bible_study',
    name: 'BibleStudy',
    component: BibleStudy,
    meta: {
      title: "Bible Study",
      
    }
  },
  ///requireLogin: true,
  /*{
    path: '/about',
    name: 'About',
    component: About
  },*/
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: "Register"
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: "Login"
    }
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta: {
      title: "Forgot Password"
    }
  },

  //404 page
  {
    path: '/:catchAll(.*)',
    name: 'Page404',
    component: Page404,
    meta: {
      title: "404 PageNotFound"
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | CPM`;
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated){
    next({name: 'Login'})
  }else next();
});

export default router
