import ErrorPage from '@/views/ErrorPage.vue'
import UpdateProfile from '@/components/profile/UpdateProfile.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Profile from '@/views/Profile.vue'
import Signup from '@/views/Signup.vue'
import { createWebHistory, createRouter } from 'vue-router'
import DeleteLocation from '@/components/locations/DeleteLocation.vue'
import DeleteAllLocation from '@/components/locations/DeleteAllLocation.vue'
import UpdateLocation from '@/components/locations/UpdateLocation.vue'
import AddNewCategory from '@/components/menu/AddNewCategory.vue'
import Menu from '@/components/menu/Menu.vue'
import ViewCategories from '@/components/menu/ViewCategories.vue'
import UpdateCategory from '@/components/menu/UpdateCategory.vue'
import DeleteCategory from '@/components/menu/DeleteCategory.vue'
import DeleteAllCategories from '@/components/menu/DeleteAllCategories.vue'
import AddNewItem from '@/components/items/AddNewItem.vue'
import UpdateItem from '@/components/items/UpdateItem.vue'
import DeleteItem from '@/components/items/DeleteItem.vue'
import DeleteAllItems from '@/components/items/DeleteAllItems.vue'



const routes = [
  { path: '/',name:"Home" , component: Home },
  { path: '/signup',name:"Signup", component: Signup },
  { path: '/login',name:"Login", component: Login },
  { path: '/profile',name:"Profile", component: Profile },
  { path: '/menu/location/:locationId',name:"Menu", component: Menu },
  { path: '/menu/location/:locationId/view-categories',name:"ViewCategories", component: ViewCategories },
  { path: '/menu/location/:locationId/add-category',name:"AddNewCategory", component: AddNewCategory },
  { path: '/menu/location/:locationId/add-Item',name:"AddNewItem", component: AddNewItem },
  { path: '/menu/location/:locationId/item/:itemId/update-Item',name:"UpdateItem", component: UpdateItem },
  { path: '/menu/location/:locationId/item/:itemId/dalete-Item',name:"DeleteItem", component: DeleteItem },
  { path: '/menu/location/:locationId/item/dalete-all-Items',name:"DeleteAllItems", component: DeleteAllItems },
  { path: '/menu/location/:locationId/update-category/:catId',name:"UpdateCategory", component: UpdateCategory},
  { path: '/menu/location/:locationId/delete-category/:catId',name:"DeleteCategory", component: DeleteCategory},
  { path: '/menu/location/:locationId/delete-all-categories',name:"DeleteAllCategories", component: DeleteAllCategories},
  { path: '/update-profile',name:"UpdateProfile", component: UpdateProfile },
  { path: '/update-location/:locationId',name:"UpdateLocation", component: UpdateLocation},
  { path: '/delete-location/:locationId',name:"DeleteLocation", component: DeleteLocation },
  { path: '/delete-all-location',name:"DeleteAllLocation", component: DeleteAllLocation },
  { path: '/:catchAll(.*)',name:"ErrorPage", component: ErrorPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to,from,next)=>{
  if(to.params.pageTitle !== undefined){
    document.title=`Restaurant System | ${to.params.pageTitle}`
  }else{
    if(to.name == null){
      document.title=`Restaurant System | Unknow Page `
    }else{
      document.title=`Restaurant System | ${to.name}`
    }
  }
next()
})
export default router