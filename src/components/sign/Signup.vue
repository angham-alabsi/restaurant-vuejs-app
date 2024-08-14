<template>
  <div class="w-full text-center">
    <h2 class="text-4xl font-extrabold dark:text-white py-4">Sign Up</h2>
    <form class="max-w-sm mx-auto" @submit.prevent="">
    <div class="mb-5">
      <input type="text" v-model="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
      <span class="text-red-600 text-sm block text-start" v-if='v$.name.$error'>{{ v$.name.$errors[0].$message }}</span>
    </div>
    <div class="mb-5">
      <input type="email" v-model="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""  />
      <span class="text-red-600 text-sm block text-start" v-if='v$.email.$error'>{{ v$.name.$errors[0].$message }}</span>
    </div>
    <div class="mb-5">
      <input type="password" v-model="pass" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
      <span class="text-red-600 text-sm block text-start" v-if='v$.pass.$error'>{{ v$.pass.$errors[0].$message }}</span>
    </div>
    
    <button type="submit" @click="signupNow" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up Now</button>&nbsp;&nbsp;&nbsp;
    <button type="button" @click="redirectTo({val:'Login'})" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
  </form>

  </div>

  
  

</template>

<script>
import axios from 'axios'
import {mapActions} from 'vuex'
import { useVuelidate } from '@vuelidate/core'
import { required, email ,maxLength,minLength } from '@vuelidate/validators'
export default {
    name:"SignupForm",

    data(){
      return{
        v$: useVuelidate(),
        name:"",
        pass:"",
        email:"",
      }
    },
    validations () {
    return {
      name: { required }, 
      pass: { required ,maxLength:maxLength(6)}, 
      email: { required , email}, 
    }
  },
  mounted(){
    let user=localStorage.getItem('userInfo')
    if(!user){
      this.redirectTo({val:"Login"})
    }
  },
    methods:{
      ...mapActions(['redirectTo']),
      loginPage(){
        this.$router.push({name:"Login"});
      },
      async signupNow(){
        console.log("Sign up Now");
        this.v$.$validate();
        if(! this.v$.$error){
          const result=await axios.post('http://localhost:3000/users',{
            name:this.name,
            password:this.pass,
            email:this.email,
          })
          if(result.status == 201){
            localStorage.setItem('userInfo',JSON.stringify(result.data));
            this.redirectTo({val:'Home'})
          }else{

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