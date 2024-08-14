<template>
  <Navbar />
  <div class="max-w-screen-xl mx-auto p-4">
    <div class="text-white float-end">
      Wellcome
      <router-link :to="{ name: 'Profile' }">
        <button>{{ userName }}</button>
      </router-link>
    </div>
    <add-new-location />
    <UserLocations :allLocations="listOfLocations"/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import { mapActions } from "vuex";
import AddNewLocation from "@/components/locations/AddNewLocation.vue";
import axios from "axios";
import UserLocations from "@/components/locations/UserLocations.vue";
export default {
  components: { Navbar, AddNewLocation ,UserLocations},
  data() {
    return {
      userName: "",
      userId:'',
      listOfLocations:[]
    };
  },
  async mounted() {
    let user = localStorage.getItem("userInfo");
    if (!user) {
      this.redirectTo({ val: "Login" });
    } else {
      this.userName = JSON.parse(user).name;
      this.userId = JSON.parse(user).id;
      let res=await axios.get(`http://localhost:3000/locations?userId=${this.userId}`)
      if(res.status == 200 && res.data.length>0){
        // console.log(res.data)
        this.listOfLocations=res.data
      }
    }

  },
  methods: {
    ...mapActions(["redirectTo"]),
  },
};
</script>

<style></style>
