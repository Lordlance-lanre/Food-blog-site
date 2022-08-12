<template>
	<div class="home">
        <div class="w-40 h-40 mx-auto md:flex hidden">
          <img src="../assets/restaurant-logo.jpg" alt="#">  
        </div>
        <div class="bg-amber-600 w-full ">
            <div class="bg-amber-600 flex justify-between font-bold text-lg px-20 py-2 md:flex hidden text-orange-900">
            <RouterLink class="transition ease-in-out delay-150 hover:text-slate-100" to="/">Home</RouterLink> 
             <RouterLink class="transition ease-in-out delay-150 hover:text-slate-100" to="/about">About</RouterLink>
             <router-link to="/pricing" href="#" class="transition ease-in-out delay-150 hover:text-slate-100">Pricing</router-link>
              <router-link to="/contact" href="#" class="transition ease-in-out delay-150 hover:text-slate-100">Contact</router-link>
             <div>
                <router-link to="/signup">
                    <button href="#" class="transition ease-in-out delay-150 hover:text-slate-700 mx-3 bg-rose-200 rounded-full px-3">Sign up</button>
                </router-link>
                <button href="#" class="transition ease-in-out delay-150 bg-rose-200 rounded-full px-4 hover:text-slate-700">Login</button>
             </div>
            </div>
             <div >
                <img src="../assets/Food1.webp" alt="#" class="mx-auto w-full h-96 md:flex hidden">
                <h3 class="image absolute inset-96 text-white font-extrabold text-5xl my-18 -mx-52 md:flex hidden text-center">Cuisines So Delicious,You'll Come Back For More</h3>
                <p class="para text-sm py-3 text-slate-200 text-lg font-extrabold text-center md:flex hidden">Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Libero ducimus veniam....</p>
             </div>
        </div>

            <!-------small screen media query ----->

        <div class="md:hidden">
             <div class="w-40 h-40 mx-auto">
                 <img src="../assets/restaurant-logo.jpg" alt="#">  
             </div>
        <div class="bg-amber-600">
            <div class="flex justify-end" @click="toggleNav">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div class="bg-amber-600 block text-center font-bold text-lg text-orange-900" v-show="toggle">
             <RouterLink class="transition block ease-in-out delay-150 hover:text-slate-100 py-2 hover:bg-amber-200" to="/">Home</RouterLink> 
             <RouterLink class="transition ease-in-out block delay-150 hover:text-slate-100 py-2 hover:bg-amber-200" to="/about">About</RouterLink>
             <router-link to="/pricing" href="#" class="transition ease-in-out delay-150 hover:text-slate-100 block py-2 hover:bg-amber-200">Pricing</router-link>
             <router-link to="/contact" href="#" class="transition ease-in-out delay-150 hover:text-slate-100 py-2 block hover:bg-amber-200">Contact</router-link>
             <div>
                <button href="#" class="transition ease-in-out delay-150 hover:text-slate-100 mt-3 mx-3 px-4 bg-amber-200 rounded"><router-link to="/signup">Sign up</router-link></button>
                <button href="#" class="transition ease-in-out delay-150 hover:text-slate-100  px-4 rounded  bg-amber-200">Login</button>
             </div>
            </div>
             <div >
                <img src="../assets/Food1.webp" alt="#" class="mx-auto w-full h-72 py-0 my-1">
                <h3 class="image static inset-96 text-white font-extrabold text-2xl -my-40 -mx-52 text-center">Cuisines So Delicious,<br>You'll Come Back For More</h3>
                <p class="para text-sm mt-64 text-sm font-extrabold text-center text-amber-900">Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Libero ducimus veniam....</p>
             </div>
        </div>
        </div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@200&family=Fascinate+Inline&family=Tai+Heritage+Pro&family=Work+Sans:wght@100&display=swap');
.image{
    font-family: 'Work Sans', sans-serif;
}
.para {
    justify-content: center;
}
</style>

<script setup>
import { ref } from 'vue'

const toggle = ref(false)

const toggleNav = () => {
    toggle.value = !toggle.value
}

</script>

