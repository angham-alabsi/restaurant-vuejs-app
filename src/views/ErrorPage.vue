<template>
    <div class="h-screen">
        <div class="bg-contain bg-no-repeat bg-center h-full   bg-[url('assets/img/notfound.png')]"></div>
        <div class="text-center my-4">
            <button @click="redirectTo({val:'Home'})" type="button" class=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Go Home</button>
        </div>

    </div>
  

</template>

<script>
import { mapActions } from 'vuex';

export default {
    methods:{
        ...mapActions(['redirectTo'])
    }

}
</script>

<style>

</style>