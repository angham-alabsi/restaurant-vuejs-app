<template>
  <navbar />
  <div class="h-screen flex items-center justify-center">
    <div
      class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        Delete Location
      </h5>
      <h5
        class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
      >
        Are you sure you want to delete this location ?
      </h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ name }}
      </p>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ phone }}
      </p>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ address }}
      </p>
      <hr class="py-2 text-slate-900" />
      <a
        href=""
        @click.prevent="deleteRestaurant"
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
      name: "",
      phone: "",
      address: "",
      userId: "",
      deleteLocation: "",
      locationData: [],
      allItemsId: [],
      allcatesId: [],
    };
  },
  async mounted() {
    let user = localStorage.getItem("userInfo");
    if (!user) {
      this.redirectTo({ val: "Login" });
    } else {
      this.userId = JSON.parse(user).id;
      this.deleteLocation = this.$route.params.locationId;
      this.canCurrentUserAccessThisLocation();
      let res2 = await axios.get(
        `http://localhost:3000/categories?locationId=${this.deleteLocation}`
      );
      console.log(this.deleteLocation)
      let rescate = res2.data.length;
      for (let i = 0; i < rescate; i++) {
        this.allcatesId.push(res2.data[i].id);
      }
      console.table(this.allcatesId)
      let res = await axios.get(
        `http://localhost:3000/items?locationId=${this.deleteLocation}`
      );
      let resitems = res.data.length;
      for (let i = 0; i < resitems; i++) {
        this.allItemsId.push(res.data[i].id);
      }
      console.table(this.allItemsId)
    }
  },
  methods: {
    ...mapActions(["redirectTo"]),
    goBack() {
      this.redirectTo({ val: "Home" });
    },
    async canCurrentUserAccessThisLocation() {
      const res = await axios.get(
        `http://localhost:3000/locations?id=${this.deleteLocation}&userId=${this.userId}`
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
    async deleteRestaurant() {
    
      const res = await axios.delete(
        `http://localhost:3000/locations/${this.deleteLocation}`
      );
      let allcateresault = [];
      for (let i = 0; i < this.allcatesId.length; i++) {
        let res = await axios.delete(
          `http://localhost:3000/categories/${this.allcatesId[i]}`
        );
        if (res.status == 200) {
          allcateresault.push(true);
        } else {
          allcateresault.push(false);
        }
      }
      let allitemresault = [];
      for (let i = 0; i < this.allItemsId.length; i++) {
        let res = await axios.delete(
          `http://localhost:3000/items/${this.allItemsId[i]}`
        );
        if (res.status == 200) {
          allitemresault.push(true);
        } else {
          allitemresault.push(false);
        }
      }
      if (res.status == 200 && !allcateresault.includes(false) && !allitemresault.includes(false)) {
        this.redirectTo({ val: 'Home' });
        
      } else {
        console.log("Not Founded");
      }
    },
  },
};
</script>

<style>
</style>