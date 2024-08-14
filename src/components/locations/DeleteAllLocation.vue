<template>
  <navbar />
  <div class="h-screen flex items-center justify-center">
    <div
      class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        Delete All Locations
      </h5>
      <h5
        class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
      >
        Are you sure you want to delete all locations ?
      </h5>

      <hr class="py-2 text-slate-900" />
      <a
        href=""
        @click.prevent="deleteAllRestaurant"
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
import { mapActions } from "vuex";
import Navbar from "../Navbar.vue";
import axios from "axios";
export default {
  components: { Navbar },
  data() {
    return {
      userId: "",
      allLocationsId: [],
      allcatesId: [],
      allitemsId: [],
    };
  },
  async mounted() {
    let user = localStorage.getItem("userInfo");
    if (!user) {
      this.redirectTo({ val: "Login" });
    } else {
      this.userId = JSON.parse(user).id;
      // Get all Locations id
      const res = await axios.get(
        `http://localhost:3000/locations?userId=${this.userId}`
      );
      for (let i = 0; i < res.data.length; i++) {
        this.allLocationsId.push(res.data[i].id);
      }
      // Get all categories id
      const res2 = await axios.get(
        `http://localhost:3000/categories?userId=${this.userId}`
      );
      for (let i = 0; i < res2.data.length; i++) {
        this.allcatesId.push(res2.data[i].id);
      }
      // Get all items id
      const res3 = await axios.get(
        `http://localhost:3000/items?userId=${this.userId}`
      );
      for (let i = 0; i < res3.data.length; i++) {
        this.allitemsId.push(res3.data[i].id);
      }
    }
  },
  methods: {
    ...mapActions(["redirectTo"]),
    goBack() {
      this.redirectTo({ val: "Home" });
    },
    async deleteAllRestaurant() {

      // First Delete All Items

      let allitemResault=[]  
      for (let i = 0; i < this.allitemsId.length; i++) {
        let res = await axios.delete(
          `http://localhost:3000/items/${this.allitemsId[i]}`
        );
        if (res.status == 200) {
          allitemResault.push(true)
        } else {
          allitemResault.push(false)
        }
      }

      // Second Delete All Categories

      let allcateResault=[]  
      for (let i = 0; i < this.allcatesId.length; i++) {
        let res = await axios.delete(
          `http://localhost:3000/categories/${this.allcatesId[i]}`
        );
        if (res.status == 200) {
          allcateResault.push(true)
        } else {
          allcateResault.push(false)
        }
      }

      // Last Delete All Locations

      let allLocationResault=[]  
      for (let i = 0; i < this.allLocationsId.length; i++) {
        let res = await axios.delete(
          `http://localhost:3000/locations/${this.allLocationsId[i]}`
        );
        if (res.status == 200) {
          allLocationResault.push(true)
        } else {
          allLocationResault.push(false)
        }
      }
      
      if(!allLocationResault.includes(false) && !allcateResault.includes(false) && !allitemResault.includes(false)){
        this.redirectTo({val:'Home'})
      }else{
        console.log("Something went wrong")
      }
    },
  },
};
</script>

<style>
</style>