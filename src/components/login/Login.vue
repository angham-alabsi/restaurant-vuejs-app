<template>
  <div class="w-full text-center">
    <h2 class="text-4xl font-extrabold dark:text-white py-4">Login</h2>
    <form class="max-w-sm mx-auto" @submit.prevent="">
      <div class="mb-5">
        <input type="email" v-model="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        <span class="text-red-600 text-sm block text-start" v-if='v$.email.$error'>{{ v$.email.$errors[0].$message }}</span>
      </div>
      <div class="mb-5">
        <input type="password" v-model="pass" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        <span class="text-red-600 text-sm block text-start" v-if='v$.pass.$error'>{{ v$.pass.$errors[0].$message }}</span>
      </div>
      
      <button type="submit" @click="userLogin" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>&nbsp;&nbsp;&nbsp;
      <button type="button" @click="redirectTo({val:'Signup'})" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>
  
      <span class="text-red-600 text-sm block text-start" >{{ userNotFoundErr }}</span>

    </form>

  </div>

  
  

</template>

<script>
import axios from 'axios'
import {mapActions} from 'vuex'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
export default {
    name:"LoginForm",

    data(){
      return{
        v$:useVuelidate(),
        pass:"",
        email:"",
        userNotFoundErr:""
      }
    },
    mounted(){
      let user=localStorage.getItem('userInfo')
      if(user){
      this.redirectTo({val:"Home"})
      }
  
  },
    validations () {
    return {
      pass: { required}, 
      email: { required , email}, 
    }
  },
  mounted(){
    let user=localStorage.getItem('userInfo')
    if(user){
      this.redirectTo({val:"Home"})
    }
  },
    methods:{
      ...mapActions(['redirectTo']),
      signupPage(){
        this.$router.push({name:"Signup"});
      },
      async userLogin(){
        this.v$.$validate();
        if(! this.v$.$error){
          const result=await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.pass}`)
          if(result.status == 200 && result.data.length>0){
            console.log(result.data)
            localStorage.setItem('userInfo',JSON.stringify(result.data[0]))
            this.redirectTo({val:'Home'})
          }else{
            this.userNotFoundErr="user not found" 
          }
        }else{
          console.log("fail");
        }
        
      }
    }
}
</script>

<style>

</style>