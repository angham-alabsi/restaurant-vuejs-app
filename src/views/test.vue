<template>
    <h1>Home Page</h1> 
    <div class="text-white">{{ firstname  +" "+ scname +" "+ lastname }}</div> 
    <div class="text-white">{{ multi}}</div> 
    <div class="text-white">Done list :{{ getDoneToDoList}}</div> 
    <div class="text-white">Done list 4 :{{ getDoneToDoListId(4)}}</div> 
    <div class="text-white">gone count {{ $store.getters.getToDoListLength }}</div> 
    
    <br>
    <br>
    <br>
    
    <div class="text-white">{{ $store.state.count}}</div> 
    <button @click="increament"> + </button>
    <button @click="decreament"> - </button>
    <button @click="n_increament(5)"> +5 </button>
    </template>
    
    <script>
    import { mapState,mapMutations } from 'vuex'
    
    export default {
        name:'Home',
        data(){
            return{
                localcount:2
            }
        },
        // computed:mapState({
        //     // fullname(){
        //     //     return this.$store.state.fullname;
        //     // }
        //     fullname:store=>store.fullname
        // })
        computed:{
        getDoneToDoList(){
            return this.$store.getters.getToDoneList;
        },
        getDoneToDoListId(){
            return this.$store.getters.getTodoListbyId;
        },
        ...mapState({
            count:s=>s.count,
            multi(s){
                return s.count * this.localcount
            }
        }),
        ...mapState(['firstname','scname','lastname']),
    
        },
        methods:{
        ...mapMutations(['increament','decreament','n_increament'])
    
        }
    }
    </script>
    
    <style>
    
    </style>




















