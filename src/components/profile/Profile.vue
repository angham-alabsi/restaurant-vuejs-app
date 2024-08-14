<template>
  <div class="w-full text-center">
    <h2 class="text-4xl font-extrabold dark:text-white py-4">Profile</h2>
    <form class="max-w-sm mx-auto" @submit.prevent="">
      <div class="mb-5">
        <input
          type="text"
          v-model="name"
          disabled
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        
      </div>
      <div class="mb-5">
        <input
          type="email"
          v-model="email"
          disabled
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
        />
        
      </div>
      <div class="mb-5">
        <input
          type="password"
          v-model="pass"
          disable
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        
      </div>

      <button
        type="submit"
        @click="updateProfile"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Update Profile Now</button
      >&nbsp;&nbsp;&nbsp;
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "ProfileForm",
  data() {
    return {
      name: "",
      pass: "",
      email: "",
    };
  },
  
  mounted() {
    let user = localStorage.getItem("userInfo");
    if (user) {
      this.name = JSON.parse(user).name;
      this.email = JSON.parse(user).email;
      this.pass = JSON.parse(user).password;
    } else {
      this.redirectTo({val:"Login"})
    }
  },
  methods:{
    ...mapActions(['redirectTo']),
    updateProfile(){
      this.redirectTo({val:"UpdateProfile"})
    }
  }
};
</script>

<style>
</style>