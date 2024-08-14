<template>
    <navbar />
    <div class="max-w-screen-xl mx-auto p-4">
      
      <div>
        <a
          href="#"
          class="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {{ locName }}
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            {{ locaddress }}
          </p>
        </a>
      </div>

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
            Update  Item
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
              placeholder="Add Item Name"
            />
            <span
              class="text-red-600 text-sm block text-start"
              v-if="v$.name.$error"
              >{{ v$.name.$errors[0].$message }}</span
            >
          </div>
          <div class="mb-5">
            <input
              v-model.trim="price"
              type="number"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add Item Price"
            />
            <span
              class="text-red-600 text-sm block text-start"
              v-if="v$.price.$error"
              >{{ v$.price.$errors[0].$message }}</span
            >
          </div>
          <div class="mb-5">
            <input
              v-model.trim="qty"
              type="number"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add Item Quantities"
            />
            <span
              class="text-red-600 text-sm block text-start"
              v-if="v$.qty.$error"
              >{{ v$.qty.$errors[0].$message }}</span
            >
          </div>
          <div class="mb-5">
            <textarea id="message" v-model.trim="desc" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write description here..."></textarea>
            <span
              class="text-red-600 text-sm block text-start"
              v-if="v$.desc.$error"
              >{{ v$.desc.$errors[0].$message }}</span
            >
        </div>

          <div class="mb-5">
            <select id="countries" v-model.trim="pickedcategory" class="w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option v-for="(cat , i ) in ListOfCategories " :key="i" :value="cat.id">{{cat.name}}</option>
            </select>
            <span
              class="text-red-600 text-sm block text-start"
              v-if="v$.pickedcategory.$error"
              >{{ v$.pickedcategory.$errors[0].$message }}</span
            >
          </div>
          
          
        </div>
        <!-- Modal footer -->
        <div
          class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"
        >
          <button
            @click="updateItem"
            type="button"
            class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Update Now
          </button>
          <button
            @click="goBackToMenu"
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
  import { mapActions, mapMutations, mapState } from "vuex";
  import Navbar from "../Navbar.vue";
  import axios from "axios";
import { useVuelidate } from '@vuelidate/core'
import { between,  maxLength,  minLength, required } from '@vuelidate/validators'
import { parse } from "vue/compiler-sfc";
  export default {
    components: { Navbar },
    data() {
      return {
        v$:useVuelidate(),
        name:"",
        price:"",
        qty:1,
        desc:"",
        userId: "",
        userName: "",
        locationId: this.$route.params.locationId,
        itemId: this.$route.params.itemId,
        locName: "",
        locaddress: "",
        pickedcategory:"",
        errormsg:'',
        successmsg:'',
      };
    },
    validations(){
        return{
            name:{required,minLength:minLength(6)},
            price:{required,bteween:between(1,10000)},
            qty:{required,bteween:between(1,10000)},
            desc:{required,minLength:minLength(6),maxLength:maxLength(120)},
            pickedcategory:{required},
        }
    },
    async mounted() {
      let user = localStorage.getItem("userInfo");
      if (!user) {
        this.redirectTo({ val: "Login" });
      } else {
        this.userName = JSON.parse(user).name;
        this.userId = JSON.parse(user).id;
        this.isloggedInUser();
        this.displayAllCategories({
          userId: this.userId,
          locationId: this.locationId,
        });
        this.canUserAccessThisLocation({
          userId: this.userId,
          id: this.locationId,
          redirectToPage: "Home",
        });
        this.getLocationInfo();
        this.getItemInfo();
        this.canUserAccessThisItem({
          itemId: this.itemId,
          locationId: this.locationId,
          userId: this.userId,
          redirectToPage: "Home",
        });
      }
    },
    computed: {
      ...mapState([
        "isUserloggedIn",
        "loggedInUserId",
        "numOfCategories",
        "ListOfCategories",
      ]),
    },
    methods: {
      ...mapMutations([
        "isloggedInUser",
        "displayAllCategories",
        "canUserAccessThisLocation",
        "canUserAccessThisItem",
      ]),
      ...mapActions(["redirectTo"]),
      async getItemInfo() {
        let itemDetails = [];
        let res = await axios.get(
          `http://localhost:3000/items?id=${this.itemId}&locationId=${this.locationId}&userId=${this.userId}`
        );
        if (res.status && res.data.length > 0) {
          itemDetails = res.data;
          this.name = itemDetails[0].name;
          this.price = itemDetails[0].price;
          this.qty = itemDetails[0].qty;
          this.desc = itemDetails[0].desc;
          this.pickedcategory = itemDetails[0].catId;
        }
      },
      async getLocationInfo() {
        let locDetails = [];
        let res = await axios.get(
          `http://localhost:3000/locations?locationId=${this.locationId}&userId=${this.userId}`
        );
        if (res.status && res.data.length > 0) {
          locDetails = res.data;
          this.locName = locDetails[0].name;
          this.locaddress = locDetails[0].address;
        }
      },
      async updateItem(){
        this.v$.$validate();
            if(!this.v$.$error){
                const result=await axios.put(`http://localhost:3000/items/${this.itemId}`,{
                name:this.name,
                price:parseFloat(this.price).toFixed(2) ,
                qty:parseInt(this.qty),
                desc:this.desc,
                catId:this.pickedcategory,
                locId:this.locationId,
                userId:this.userId
                })
                if(result.status==200){
                    this.errormsg=""
                    this.successmsg="item Updated Successfully"
                    this.goBackToMenu()
                    // this.redirectTo({val:"Home"})
                    setTimeout(()=>{
                    this.name=""
                    this.price=""
                    this.qty=""
                    this.pickedcategory=""
                    this.desc=""
                    this.successmsg=""
                    this.v$.name.$errors[0].$message=""
                    this.v$.phone.$errors[0].$message=""
                    this.v$.address.$errors[0].$message=""
                    },1000)
                    
                }else{
                    this.successmsg=""
                    this.errormsg="Something went wrong . Try again later"
                }
            }else{
                this.successmsg=""
                this.errormsg="Invalide Data"
            }
      },
      goBackToMenu(){
        this.$router.push({name:"Menu",params:{locationId:this.locationId}})
      }
    },
  };
  </script>
  
  <style>
  </style>