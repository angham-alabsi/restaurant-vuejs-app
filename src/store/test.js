import vuex from 'vuex'
import { createStore } from 'vuex'

// Create a new store instance.
const getters={
  getToDoneList:(state)=>{
    return state.toDoList.filter(v=>v.done);
  },
  getTodoListbyId:(state)=>(id)=>{
    return state.toDoList.filter(v=>v.id==id)
  },
  getToDoListLength:(state,getters)=>{
    return getters.getToDoneList.length;
  }

}
const store = createStore({
  state () {
    return{
      firstname:"Angham",
      scname:"Ali",
      lastname:"Alabsi",
      count:0,
      toDoList:[
        {id:1 , name:"ttt1" , done:true},
        {id:2 , name:"ttt2" , done:true},
        {id:3 , name:"ttt3" , done:false},
        {id:4 , name:"ttt4" , done:true},
      ]
    }
  },
  getters:getters,
  mutations: {
    increament(state){
      state.count ++;
    },
    decreament(state){
      state.count -- ;
    },
    n_increament(state,n){
      state.count += n
    }
  },
  actions: {},
  modules: {},
})


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
                :to="{
                  name: 'UpdateCategory',
                  params: { catId: cat.id, locationId: locationId },
                }"
              >
                <a
                  href="#"
                  class="pr-3 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >Update</a
                >
              </router-link>

              <router-link
                :to="{
                  name: 'DeleteCategory',
                  params: { catId: cat.id, locationId: locationId },
                }"
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

export default store ;


