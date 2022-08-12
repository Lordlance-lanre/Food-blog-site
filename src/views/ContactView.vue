<template>
	<h2 class="text-5xl text-center py-2 text-amber-600 bg-yellow-200 my-5">Contact page</h2>

	<div class="bg-amber-200 ">
		<form @submit.prevent="handleSubmit">
			<div class="flex justify-start md:justify-center my-2">
				<label class="md:mx-6 mx-0 text-amber-600">FullName :</label>
			    <input type="text" placeholder="Name" 
			    class="md:w-4/12 border-amber-400 border-2 py-2 mx-1"
			     v-model="name" 
			     required>
			</div>
			<div class="flex justify-start md:justify-center my-2">
				<label class="md:mx-10 mx-0 text-amber-600">Email :</label>
			    <input type="email" placeholder="Email" 
			    class=" md:w-4/12 border-amber-400 border-2 py-2 mx-8"
			     v-model="email" required>
			</div>
			<div class="flex justify-start md:justify-center mt-2">
				<label class="text-amber-600 md:mx-10 mx-2">Text :</label>
			    <textarea 
			    class="border-amber-400 md:w-4/12 mx-7 mb-4 border-2 md:px-6 px-12 h-52"
			     name="text" placeholder="message" 
			     v-model="text" required></textarea>
			</div>

			<button class=" bg-amber-600 mb-3 md:mb-4 px-2 py-1 md:px-60 md:py-2 text-white rounded mx-48 md:mx-96"
			>Submit</button>
		</form>

	<div class="flex justify-around bg-amber-400 py-1 ">
      <a href="www.facebook.com"><img src="../assets/facebook.svg" alt="" class="w-6 h-6 mx-10" ></a>
      <a href="www.instagram.com"><img src="../assets/instagram.svg" alt="" class="w-6 h-6 mx-10" ></a>
      <a href="www.gmail.com"><img src="../assets/gmail.svg" alt="" class="w-6 h-6 mx-10" ></a>
      <a href="www.twitter.com"><img src="../assets/twitter.svg" alt= "" class="w-6 h-6 mx-10" ></a>
      <a href="www.linkedin.com"><img src="../assets/linkedin.svg" alt="" class="w-6 h-6 mx-10" ></a>
    </div>

	</div>
</template>

<script setup>
import { ref } from "vue"

const name = ref("")
const email = ref (" ")
const text = ref (" ")
const nameError = ref(" ")

const handleSubmit = () =>{
	nameError.value = name.value.length > 5 ? " " : alert('name must be more than 5 letters')

	if(name.value && email.value && text.value){
		alert('Form submitted')
	}else {
		alert('Form not submitted')
	}

}
</script>

<style scoped>
	
</style>