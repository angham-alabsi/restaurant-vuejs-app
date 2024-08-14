<template>
  <Navbar />
  <div class="max-w-screen-xl mx-auto p-4">
    <div class="flex justify-between items-center">
      <router-link :to="{ name: 'AddNewCategory', params: { locationId: locationId  } }">
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Add Categories
        </button>
      </router-link>
      <router-link :to="{ name: 'Menu', params: { locationId: locationId } }">
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Go Back
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
      <div class="text-end my-2">
        <router-link :to="{ name: 'DeleteAllCategories' , params:{locationId:locationId}}">
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Delete All
          </a>
        </router-link>
      </div>
      <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Name</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(cat, i) in ListOfCategories"
            :key="i"
            class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ cat.name }}
            </th>

            <td class="px-6 py-4">
              <router-link
                :to="{ name: 'UpdateCategory', params: { catId: cat.id ,locationId:locationId} }"
              >
                <a
                  href="#"
                  class="pr-3 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >Update</a
                >
              </router-link>

              <router-link
                :to="{ name: 'DeleteCategory',params: { catId: cat.id ,locationId:locationId} }"
              >
                <a
                  class="px-3 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >Delete</a
                >
              </router-link>
             
              
            </td>
          </tr>
        </tbody>
      </table>
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
import Navbar from "../Navbar.vue";
import { mapActions, mapMutations, mapState } from "vuex";
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
    };
  },
  computed: {
    ...mapState([
      "isUserloggedIn",
      "loggedInUserId",
      "numOfCategories",
      "ListOfCategories",
      "ListOfLocations",
    ]),
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
    }
  },
  methods: {
    ...mapMutations([
      "isloggedInUser",
      "displayAllCategories",
      "canUserAccessThisLocation",
    ]),
    ...mapActions(["redirectTo"]),
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