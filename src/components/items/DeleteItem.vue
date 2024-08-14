<template>
    <navbar />
    <div class="h-screen flex items-center justify-center">
      <div
        class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Delete Item
        </h5>
        <h5
          class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          Are you sure you want to delete this Item ?
        </h5>
        
        <hr class="py-2 text-slate-900" />
        <a
          href=""
          @click.prevent="deleteItem"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700"
        >
          Delete
        </a>
        <a
          href=""
          @click="goBack"
          class="mx-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Go Back
        </a>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions,mapMutations } from "vuex";
  import Navbar from "../Navbar.vue";
  import axios from "axios";
  export default {
    components: { Navbar },
    data() {
      return {
        locationId: this.$route.params.locationId,
        itemId: this.$route.params.itemId,
        userId: "",
        locationData: [],
        allItemsId:[],
        categoryNames:[]
      };
    },
    async mounted() {
      let user = localStorage.getItem("userInfo");
      if (!user) {
        this.redirectTo({ val: "Login" });
      } else {
        this.userId = JSON.parse(user).id;
        this.locationId = this.$route.params.locationId;
        this.canCurrentUserAccessThisLocation();
        this.canUserAccessThisItem({
          itemId: this.itemId,
          locationId: this.locationId,
          userId: this.userId,
          redirectToPage: "Home",
        });
        this.getCategoryName()
        let res=await axios.get(`http://localhost:3000/items?catID=${this.catId}`)
        let resitems=res.data.length
        for (let i = 0; i < resitems; i++) {
            this.allItemsId.push(res.data[i].id)
            
        }
      }
    },
    methods: {
      ...mapMutations(['canUserAccessThisItem']),
      ...mapActions(['redirectTo']),
      goBack() {
        this.$router.push({name:"ViewCategories",params:{locationId:this.locationId}})
      },
      async getCategoryName(){
        let res=await axios.get(`http://localhost:3000/categories?id=${this.catId}&locationId=${this.locationId}&userId=${this.userId}`)
        if(res.status == 200){
            this.categoryNames=res.data
            if(this.categoryNames.length > 0){
                this.name=this.categoryNames[0].name
            }
        }
    },
      async canCurrentUserAccessThisLocation() {
        const res = await axios.get(
          `http://localhost:3000/locations?id=${this.locationId}&userId=${this.userId}`
        );
        if (res.status == 200 && res.data.length > 0) {
          this.locationData = res.data;
          this.name = this.locationData[0].name;
          this.phone = this.locationData[0].phone;
          this.address = this.locationData[0].address;
        } else {
          this.redirectTo({ val: 'Home' });
        }
      },
      async deleteItem() {
      
        const res = await axios.delete(
          `http://localhost:3000/items/${this.itemId}`
        );
        
        if (res.status == 200) {
          this.$router.push({
            name:'Menu',
            params:{
                locationId:this.locationId
            }
          })
        } else {
          console.log("Try again");
        }
      },
    },
  };
  </script>
  
  <style>
  </style>