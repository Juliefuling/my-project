import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'

Vue.use(Router)

const routes= [
    {
      path: '/hello',
      name: 'HelloWorld',
      meta: {
            requireAuth: true,
      },
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ];

  const router=new Router({
    routes
  });

  router.beforeEach((to,from,next)=>{
    if(to.matched.some(r=>r.meta.requireAuth)){
      if(store.state.token){
        next();
      }else{
        next({
          path:'/login',
          query:{redirect:to.fullPath}
        })
      }
    }else{
      next();
    }
  })

export default router;
