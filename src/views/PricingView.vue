<template>
	<h3 class="text-5xl text-center py-2 text-amber-600 bg-yellow-200 my-3 mb-9">Pricing page</h3>
	<div v-if="courses">
		<div v-for="price in courses" :key="price" class="text-center bg-amber-200 ">
			<h2 class="py-4 text-amber-700 md:text-2xl text-xl"> {{ price.choice }}  price is {{ price.amount }}</h2>
			<button @click="orderPlaced" class="bg-amber-600 py-2 px-1 rounded mb-4 text-white hover:opacity-90">Make Order</button>
		</div>
	</div>

	<div>
		<button class="px-12  py-2 my-4 rounded bg-amber-700 mx-40 md:px-96 md:mx-52 text-white hover:opacity-90">
		<router-link to="/">Back</router-link>
		</button>
	</div>
</template>


<script setup>
import { ref,onMounted } from 'vue'
import axios from "axios"

const courses = ref(null)
 
 onMounted(async () => {
 	await axios
 		.get("http://localhost:7000/courses/")
 		.then( res => {res.data.filter(element => { courses.value = element.prices})})
 		return courses
 })

 const orderPlaced = () => {
 	alert("You have placed your order")
 }
</script>

