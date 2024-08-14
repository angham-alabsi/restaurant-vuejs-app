<template>
  <navbar />
  <div class="max-w-screen-xl mx-auto p-4">
    <div class="flex justify-between items-center">
      <router-link
        :to="{ name: 'ViewCategories', params: { locationId: locationId } }"
      >
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          View/Add Categories
        </button>
      </router-link>
      <router-link
        :to="{ name: 'AddNewItem', params: { locationId: locationId } }"
      >
        <button
          v-if="numOfCategories > 0"
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Add New Items
        </button>
      </router-link>
    </div>
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
    <div
      class="relative overflow-x-auto shadow-md sm:rounded-lg py-4"
      v-if="ListOfCategories.length > 0"
    >
      <div class="text-end my-2" v-if="ListOfUserItems.length > 0">
        <router-link :to="{ name: 'DeleteAllItems',params:{locationId:locationId} }">
          <a
            href="#"
            class="inline-flex items-center focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Delete All Items
          </a>
        </router-link>
      </div>
      
      <div id="accordion-collapse" data-accordion="collapse">
        <div v-for="(cat , i) in ListOfUserCategories" :key="i">
          <h2   :id="'accordion-collapse-heading'+i">
          <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" :data-accordion-target="'#accordion-collapse-body'+i" aria-expanded="true" :aria-controls="'accordion-collapse-body'+i">
            <span>{{cat.name}}</span>
            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
            </svg>
          </button>
        </h2>
        <div :id="'accordion-collapse-body'+i" class="hidden" :aria-labelledby="'accordion-collapse-heading'+i">
          <div v-for="(item , n) in ListOfUserItems " :key="n" >
            <div v-if="item.catId == cat.id" >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <h4 class="mb-2 text-gray-500 dark:text-gray-400">{{ item.name }}</h4>
              <h4 class="mb-2 text-gray-500 dark:text-gray-400">{{ item.price }}</h4>
              <p  class="mb-2 text-gray-500 dark:text-gray-400">{{ item.desc }}</p>
              <div class="flex justify-end items-center">
                <router-link :to="{name:'UpdateItem',params:{locationId:item.locId,itemId:item.id}}">
                  <button  type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update</button>
                </router-link>
                <router-link :to="{name:'DeleteItem',params:{locationId:item.locId,itemId:item.id}}">
                  <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                </router-link>
                
              </div>
            </div>
          </div>
          </div>
        </div>
        </div>
        
        
      </div>

    </div>
    <div
      v-else
      class="flex items-center p-4 my-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800"
      role="alert"
    >
      <svg
        class="flex-shrink-0 inline w-4 h-4 me-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
        />
      </svg>
      <span class="sr-only">Info</span>
      <div>No Categories Yet</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import Navbar from "../Navbar.vue";
import axios from "axios";
export default {
  components: { Navbar },
  data() {
    return {
      userId: "",
      userName: "",
      locationId: this.$route.params.locationId,
      locName: "",
      locaddress: "",
      ListOfUserCategories: [],
      ListOfUserItems: [],
    };
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
      this.getCurrentUserCategories();
      this.getCurrentUserItems();
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
    ]),
    ...mapActions(["redirectTo"]),
    async getCurrentUserItems() {
      let res = await axios.get(
        `http://localhost:3000/items?userId=${this.userId}&locationId=${this.locationId}`
      );
      if (res.status == 200) {
        this.ListOfUserItems = res.data;
        // console.table(this.ListOfUserItems);
      }
    },
    async getCurrentUserCategories() {
      let res = await axios.get(
        `http://localhost:3000/categories?userId=${this.userId}&locationId=${this.locationId}`
      );
      if (res.status == 200) {
        this.ListOfUserCategories = res.data;
        // console.table(this.ListOfUserCategories);
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
  },
};
</script>

<style>
</style>