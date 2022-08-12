<template>
<div class="foodtype">
	<!--------big screen media query------>
		<h2 class="food bg-amber-600 text-center py-1 text-slate-200 text-2xl font-bold md:flex hidden">{{ words }}</h2>

	<div class="grid grid-cols-3 px-1 md:flex hidden">
		<div v-for="course in courses" :key="course.id" >
			<router-link :to="{ name: 'FoodDetails', params: { id: course.id }}">
				<span href="#"><h1 class="mx-6 my-3 px-24 py-32 text-center bg-amber-200 rounded-3xl text-amber-600 font-bold hover:text-yellow-800 transition ease-in-out delay-100 shadow-lg text-lg cursor-pointer hover:shadow-2xl hover:shadow-neutral-500">{{ course.title }}</h1></span>
			</router-link>
		</div>
	</div>

	<!--------small screen media query------>
</div>

</template>


<style scoped>
.head{
		 font-family: 'Anton', sans-serif;
	}

.food{
		padding-left: 510px;
	}
</style>

<script setup>
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