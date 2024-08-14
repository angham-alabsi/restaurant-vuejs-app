<template>
  <Navbar />
  <form
    @submit.prevent=""
    class=" flex justify-center items-center w-full md:inset-0 "
  >
    <div class="relative p-4 w-full max-w-3xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Update Restaurant
          </h3>
          
        </div>
        <!-- Modal body -->
        <div
          v-if="errormsg !== ''"
          id="alert-border-2"
          class="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800"
          role="alert"
        >
          <svg
            class="flex-shrink-0 w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
            />
          </svg>
          <div class="ms-3 text-sm font-medium">
            {{ errormsg }}
          </div>
          <button
            type="button"
            class="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
            data-dismiss-target="#alert-border-2"
            aria-label="Close"
          >
            <span class="sr-only">Dismiss</span>
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
        <div
          v-if="successmsg !== ''"
          id="alert-border-3"
          class="flex items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800"
          role="alert"
        >
          <svg
            class="flex-shrink-0 w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
            />
          </svg>
          <div class="ms-3 text-sm font-medium">
            {{ successmsg }}
          </div>
          <button
            type="button"
            class="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
            data-dismiss-target="#alert-border-3"
            aria-label="Close"
          >
            <span class="sr-only">Dismiss</span>
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>

        <div class="p-4 md:p-5 space-y-4">
          <div class="mb-5">
            <input
              type="text"
              v-model.trim="state.name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Restaurant Name"
            />
            <span
              class="text-red-600 text-sm block text-start"
              v-if="v$.name.$error"
              >{{ v$.name.$errors[0].$message }}</span
            >
          </div>
          <div class="mb-5">
            <input
              type="text"
              v-model.trim="state.phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Phone Number"
            />
            <span
              class="text-red-600 text-sm block text-start"
              v-if="v$.phone.$error"
              >{{ v$.phone.$errors[0].$message }}</span
            >
          </div>
          <div class="mb-5">
            <input
              type="text"
              v-model.trim="state.address"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Address"
            />
            <span
              class="text-red-600 text-sm block text-start"
              v-if="v$.address.$error"
              >{{ v$.address.$errors[0].$message }}</span
            >
          </div>
        </div>
        <!-- Modal footer -->
        <div
          class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"
        >
          <button
            @click="addLocation"
            type="button"
            class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Update Now
          </button>
          <button
            type="button"
            class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
import {mapActions} from 'vuex'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength} from '@vuelidate/validators'
import { reactive,computed } from 'vue'
import Navbar from "../Navbar.vue";

export default {
  components: { Navbar },
  setup(){
        const state=reactive({
            name:"",
            phone:"",
            address:"",
        })
        const rules=computed(()=>{
            return{
                name:{required,minLength:minLength(10)},
                phone:{required,minLength:minLength(10)},
                address:{required,minLength:minLength(10)},
            }
        })
        const v$=useVuelidate(rules,state)
        return{
            state,
            v$
        }

    },
    data(){
      return{
        locationId:'',
        userId:'',
        errormsg:"",
        successmsg:"",
      }
    },
    mounted(){
    let user=localStorage.getItem('userInfo')
    if(!user){
      this.redirectTo({val:"Login"})
    }else{
        this.userId=JSON.parse(user).id
        this.locationId=this.$route.params.locationId
        this.canCurrentUserAccessThisLocation()
    }
  },
    methods:{
        ...mapActions(['redirectTo']),
        async canCurrentUserAccessThisLocation() {
      const res = await axios.get(
        `http://localhost:3000/locations?id=${this.locationId}&userId=${this.userId}`
      );
      if (res.status == 200 && res.data.length > 0) {
        this.locationData = res.data;
        this.state.name = this.locationData[0].name;
        this.state.phone = this.locationData[0].phone;
        this.state.address = this.locationData[0].address;
      } else {
        this.redirectTo({ val: 'Home' });
      }
    },
        async addLocation(){
            this.v$.$validate();
            if(!this.v$.$error){
                const res=await axios.put(`http://localhost:3000/locations/${this.locationId}`,{
                name:this.state.name,
                phone:this.state.phone,
                address:this.state.address,
                userId:this.userId
                })
                if(res.status == 200){
                    this.errormsg=""
                    this.successmsg="Location Updated Successfully"
                    setTimeout(()=>{
                    this.successmsg=""
                    this.redirectTo({val:"Home"})
                    },1000)
                    
                }else{
                    this.successmsg=""
                    this.errormsg="Something went wrong . Try again later"
                }
                
            }else{
                this.successmsg=""
                this.errormsg="You must fill all required fields"
            }
        }
    
    }
};
</script>

<style>
</style>