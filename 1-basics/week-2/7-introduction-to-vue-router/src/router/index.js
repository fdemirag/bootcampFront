// router.js
import { createRouter, createWebHistory } from "vue-router";

// Vue Router yapılandırmasını yapın
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: () => import("@/views/HomePage.vue"),
      meta:{
        authRequired:false
      }
    },
    {
      path: "/About",
      name: "AboutPage",
      component: () => import("@/views/AboutPage.vue"),
      meta :{
        translationKey:"about-page",
        authRequired: true
      }
    },
    {
      path: "/Contact",
      name: "ContactPage",
      component: () => import("@/views/ContactPage.vue"),
      children:[
           { path: "update",name:"ContactUpdate" ,component: () => import("@/views/Contacts/ContactUpdate")},
           { path: "new",name:"ContactNew", component: () => import("@/views/Contacts/ContactNew")},
           { path: "list",name:"ContactList", component: () => import("@/views/Contacts/ContactList") }
      ],
      meta:{
        authRequired:true
      }
    },
    {path: '/:pathMatch(.*)*',name:'NotFound',component:()=> import("@/views/Contacts/NotFound.vue")}
  ]
})
  router.beforeEach((to,from,next)=>{ 

    const isAuthenticated = false;
    const authRequiredForRoute = to.meta.authRequired

    if(authRequiredForRoute){
      if(isAuthenticated) {
        next()
      }
      else {
        next({name:"LoginPage"})
      }
    }
    else {
      next()
    }
    console.log(from)
 
  })

export default router; // router'ı dışa aktarın
