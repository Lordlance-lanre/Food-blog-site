<template>
	<div>
		<!--------big screen media query------>
		<div v-if="course">
		<h1 class="md:text-5xl text-2xl text-center py-2 text-amber-600 bg-yellow-200 my-3">{{ course.title }}</h1>
		
		<div class="grid grid-cols-3">
				<div v-for="item in course.items" :key="item">
					<img :src="item" class="w-6/12 h-4/12 my-2 mx-2 hover:opacity-50 hover:transition ease-in-out delay-150">
					<h1 class="md:text-2xl text-xl my-1 mx-3">The Cuisine is {{ $route.params.id }}</h1>
					<h6 class="text-sm mx-4">{{course.details}}</h6>

					<Buttons/>

					<router-link to="/pricing">
						<button class="px-4 py-1 md:py-1  my-4 rounded bg-amber-700 mx-3 text-white hover:opacity-90">
						Check Price
						</button>
					</router-link>

				</div>
		</div>
	</div>

		<button class="px-4 py-1 my-4 rounded bg-amber-700 mx-3 	text-white hover:opacity-90">
			<router-link to="/">Back</router-link>
		</button>

	</div>

</template>

<script setup>
 import Buttons from "../components/Buttons.vue"
 import { ref, onMounted} from 'vue'
 import {useRoute} from 'vue-router'
 import axios from "axios"

 const props = defineProps(["id"])
 const intro = ref('Menu and Cuisines')
 const course = ref(null)
 const route = useRoute()

 onMounted(async () => {
  await axios
    .get("http://localhost:7000/courses/" + route.params.id)
    .then ((res) => (course.value = res.data));
    console.log(course.value)
})

</script>