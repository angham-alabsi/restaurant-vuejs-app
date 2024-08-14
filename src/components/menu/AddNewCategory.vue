<template>
    <div class="max-w-screen-xl mx-auto p-4">
        <div class="flex justify-between items-center">
            <router-link :to="{name:'ViewCategories',params: { locationId: locationId }}">
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Go Back</button>
            </router-link>
        </div>
        <div>
            <a href="#" class="block  p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{locName}}</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">{{locaddress}}</p>
            </a>
        </div>
        <!-- Main modal -->
  <form
    @submit.prevent=""
    tabindex="-1"
    class=" justify-center items-center w-full  max-h-full"
  >
    <div class="relative py-4 w-full  max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Add New Category
          </h3>
          
        </div>
        <!-- Modal body -->
        <div v-if="errormsg !== ''" id="alert-border-2" class="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800" role="alert">
            <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <div class="ms-3 text-sm font-medium">
                {{ errormsg }}
            </div>
            <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"  data-dismiss-target="#alert-border-2" aria-label="Close">
            <span class="sr-only">Dismiss</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            </button>
        </div>
        <div v-if="successmsg !== ''" id="alert-border-3" class="flex items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800" role="alert">
            <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <div class="ms-3 text-sm font-medium">
                {{ successmsg }}
            </div>
            <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"  data-dismiss-target="#alert-border-3" aria-label="Close">
            <span class="sr-only">Dismiss</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            </button>
        </div>

        <div class="p-4 md:p-5 space-y-4">
          <div class="mb-5">
            <input
              type="text"
              v-model.trim="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add Category Name"
            />
            <span
              class="text-red-600 text-sm block text-start"
              v-if="v$.name.$error"
              >{{ v$.name.$errors[0].$message }}</span
            >
          </div>
          
        </div>
        <!-- Modal footer -->
        <div
          class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"
        >
          <button
            @click="addCategory"
            type="button"
            class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Add Now
          </button>
          <button
            type="button"
            class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </form>
    </div>
</template>

<script>
import Navbar from '../Navbar.vue';
import { mapActions,mapMutations} from 'vuex';
import axios from 'axios';
import { useVuelidate } from '@vuelidate/core'
import { maxLength, minLength, required } from '@vuelidate/validators'
export default {
    components:{Navbar},
    data(){
        return{
            v$:useVuelidate(),
            name:'',
            userId:'',
            userName:'',
            locationId: this.$route.params.locationId,
            locName:'',
            locaddress:'',
            errormsg:'',
            successmsg:'',
            listOfUserCategories:[]
        }
    },
    validations(){
        return{
            name:{required,minLength:minLength(3),maxLength:maxLength(15)}
        }
    },
    async mounted() {
    let user = localStorage.getItem("userInfo");
    if (!user) {
      this.redirectTo({ val: "Login" });
    } else {
      this.userName = JSON.parse(user).name;
      this.userId = JSON.parse(user).id;
      this.canUserAccessThisLocation({userId:this.userId,id:this.locationId,redirectToPage:"Home"})
      this.getLocationInfo()
      this.displayUserCategories()
    }
    },
    methods: {
        ...mapMutations(['isloggedInUser','displayAllCategories','canUserAccessThisLocation']),
        ...mapActions(["redirectTo"]),
        async displayUserCategories(){
          let res=await axios.get(`http://localhost:3000/categories?locationId=${this.locationId}&userId=${this.userId}`)
          if(res.status == 200){
            this.listOfUserCategories=res.data
          }
        },
        async getLocationInfo(){
            let locDetails=[]
            let res=await axios.get(`http://localhost:3000/locations?locationId=${this.locationId}&userId=${this.userId}`)
            if(res.status && res.data.length>0){
                locDetails=res.data
                this.locName=locDetails[0].name
                this.locaddress=locDetails[0].address
            }
        },
        async addCategory(){
            this.v$.$validate()
            if(!this.v$.$error){
              let filterCategoriesName=this.listOfUserCategories.filter((v)=> v.name.toLocaleLowerCase()==this.name.toLocaleLowerCase())
              if(filterCategoriesName.length > 0){
                this.successmsg=""
                this.errormsg="Category Name is already exists, Try another name"

              }else{
                const res=await axios.post(`http://localhost:3000/categories`,{
                    name:this.name,
                    locationId:this.locationId,
                    userId:this.userId,
                })
                if(res.status == 201){
                    this.successmsg="Category inserted successfully"
                    this.name=""
                    this.errormsg=""
                    setTimeout(()=>{
                        this.$router.push({
                            name:'Menu',
                            params:{locationId:this.locationId}
                        })
                    },1000)
                }

              }
            }else{
                this.successmsg=""
                this.errormsg="Invalid Data"

            }
        }
    },
}
</script>

<style>

</style>