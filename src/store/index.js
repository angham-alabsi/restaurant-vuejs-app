import vuex from 'vuex'
import { createStore } from 'vuex'
import router from '@/router'
import axios from 'axios'

const state=()=>{
  return{
    isUserloggedIn:"",
    loggedInUserId:"",
    numOfCategories:"",
    ListOfCategories:[],
    ListOfLocations:[],
    ListOfItems:[]

  }
}
const getters={}
const mutations={
  redirectTo(state,payload){
    router.push({name:payload.val})
  },
  isloggedInUser(state){
    let user=localStorage.getItem('userInfo')
    if(user){
      state.isUserloggedIn=true
      state.loggedInUserId=JSON.parse(user).id
    }else{
      state.isUserloggedIn=false
    }

  },
  async displayAllCategories(state,payload){
    let res=await axios.get(`http://localhost:3000/categories?locationId=${payload.locationId}&userId=${payload.userId}`)
    if(res.status == 200){
      state.ListOfCategories=res.data
      state.numOfCategories=state.ListOfCategories.length
    }
  },
  async canUserAccessThisLocation(state,payload){
    let res=await axios.get(`http://localhost:3000/locations?id=${payload.id}&userId=${payload.userId}`)
    if(res.status == 200){
      state.ListOfLocations=res.data
      console.log(state.ListOfLocations.length)
      if(state.ListOfLocations.length == 0){
        // this.commit('redirectTo',payload.redirectToPage)
        router.push({name:"Home"})
      }

    }
  },
  async canUserAccessThisCategory(state,payload){
    let res=await axios.get(`http://localhost:3000/categories?id=${payload.id}&locationId=${payload.locationId}&userId=${payload.userId}`)
    if(res.status == 200){
      state.ListOfCategories=res.data
      console.log(state.ListOfCategories.length)
      if(state.ListOfCategories.length == 0){
        // this.commit('redirectTo',payload.redirectToPage)
        router.push({name:"Home"})
      }
      
    }
  },
  async canUserAccessThisItem(state,payload){
    let res=await axios.get(`http://localhost:3000/items?id=${payload.itemId}&locationId=${payload.locationId}&userId=${payload.userId}`)
    if(res.status == 200){
      state.ListOfItems=res.data
      console.log(state.ListOfItems.length)
      if(state.ListOfItems.length == 0){
        // this.dispatch('redirectTo',payload.redirectToPage)
        router.push({name:"Home"})
      }
    }
  }
}
const actions={
  redirectTo({commit},payload){
    commit('redirectTo',payload);
  },
  
}
const modules={}

const store = createStore({
  state ,
  getters,
  mutations,
  actions,
  modules,
})

export default store ;


