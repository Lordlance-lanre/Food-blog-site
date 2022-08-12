<script setup>
import Foodtypes from "../components/Foodtypes.vue"
import { ref, onMounted } from 'vue'
import axios from "axios"


 const words = ref("What we offer")
 const courses = ref(null)

 const loadCourses =  async () => {
  const response = await axios.get("http://localhost:7000/courses")
  courses.value = response.data
  }
  loadCourses()
</script>

<template>
  <!----------big screen media query---->
<div class="home">
  <div class="grid grid-cols-2 py-5">
    <div>
      <img src="../assets/Food-images.jpeg" alt="#" class="image w-full h-full px-8 md:flex hidden">  
    </div>
    
    <div class="md:flex hidden">
      <h1 class="head mx-6 px-9 py-32 text-center bg-amber-200 rounded-xl "><strong class="text-4xl text-amber-700 ">WELCOME TO OUR PAGE!!</strong><span class="text-sm text-amber-900"><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span></h1>
    </div>
  </div>
  <Foodtypes/>

  <div class="space bg-amber-600 text-center py-1 text-slate-200 text-2xl font-bold md:flex hidden">
   <h1 class="">Our Core Values</h1>
  </div>

  <div class="grid grid-cols-2 py-5 text-lg md:flex hidden">
   <div>
      <h2 class="text-amber-600 px-3">Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br> quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</h2>
   </div>

   <div class="text-amber-600">
    <h2>Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br> quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</h2>
   </div>
  </div>

    <div class="flex justify-around bg-amber-400 py-1 md:flex hidden">
      <a href="www.facebook.com"><img src="../assets/facebook.svg" alt="" class="w-6 h-6 mx-10" ></a>
      <a href="www.instagram.com"><img src="../assets/instagram.svg" alt="" class="w-6 h-6 mx-10" ></a>
      <a href="www.gmail.com"><img src="../assets/gmail.svg" alt="" class="w-6 h-6 mx-10" ></a>
      <a href="www.twitter.com"><img src="../assets/twitter.svg" alt= "" class="w-6 h-6 mx-10" ></a>
      <a href="www.linkedin.com"><img src="../assets/linkedin.svg" alt="" class="w-6 h-6 mx-10" ></a>
    </div>

      <!----------small screen media query---->
  <div class="small">
    <div>
      <img src="../assets/Food-images.jpeg" alt="#" class=" image w-full h-full pb-4 md:hidden">  
    </div> 
    <div class="md:hidden mb-4">
      <h1 class="head mx-1 py-24 text-center bg-amber-200 rounded-xl "><strong class="text-3xl text-amber-700 ">WELCOME TO OUR PAGE!!</strong><span class="text-sm text-amber-900"><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span></h1>
    </div>
  </div>

  <div>

    <div>
      <h2 class="food bg-amber-600 text-center py-1 text-slate-200 text-2xl font-bold md:hidden">What we offer</h2>
    </div>
    
    <div class="block px-1 md:hidden">
      <div v-for="course in courses" :key="course.id" >
        <router-link :to="{ name: 'FoodDetails', params: { id: course.id }}">
        <span href="#"><h1 class="mx-6 my-3 px-24 py-32 text-center bg-amber-200 rounded-3xl text-amber-600 font-bold hover:text-yellow-800 transition ease-in-out delay-100 shadow-lg text-lg cursor-pointer hover:shadow-2xl hover:shadow-neutral-500">{{ course.title }}</h1></span>
        </router-link>
      </div>
    </div>

    <div>
      <div class="bg-amber-600 text-center py-1 text-slate-200 text-2xl font-bold md:hidden">
      <h1 class="">Our Core Values</h1>
      </div>

      <div class="block py-3 text-lg md:hidden">
   <div>
      <h2 class="text-amber-600 px-3 py-4">Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br> quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</h2>
   </div>

   <div class="text-amber-600 px-3 py-4">
    <h2>Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br> quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</h2>
   </div>
  </div>

    <div class="flex justify-around bg-amber-400 py-1 md:hidden">
      <a href="www.facebook.com"><img src="../assets/facebook.svg" alt="" class="w-6 h-6 mx-10" ></a>
      <a href="www.instagram.com"><img src="../assets/instagram.svg" alt="" class="w-6 h-6 mx-10" ></a>
      <a href="www.gmail.com"><img src="../assets/gmail.svg" alt="" class="w-6 h-6 mx-10" ></a>
      <a href="www.twitter.com"><img src="../assets/twitter.svg" alt= "" class="w-6 h-6 mx-10" ></a>
      <a href="www.linkedin.com"><img src="../assets/linkedin.svg" alt="" class="w-6 h-6 mx-10" ></a>
    </div>

    </div>

  </div>
</div>
 
</template>

<style scoped>
  .head{
    font-family: 'Anton', sans-serif;
  }
  .space{
    padding-left: 500px;
  }
  .image{
    border-radius: 10px;
  }
</style>