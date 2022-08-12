<template>
	<div>
		<form @submit.prevent="signUp">
			<div class="flex justify-around ">
				<label class="mt-3 text-sm md:text-2xl">Username: </label>
				<input type="text" placeholder="Username" class="border-amber-400 rounded md:w-6/12 border-2 py-2 my-3" v-model="username" required>
			</div>
			<div class="flex justify-around ">
				<label class="text-sm md:text-2xl">Email:</label>
				<input class="border-amber-400 border-2 -mx-4 md:-mx-6 mb-3 py-2 md:w-6/12 rounded" type="Email" placeholder="Email" v-model="email" required>
			</div>
			<div class="flex justify-around ">
				<label class="text-sm md:text-2xl">Password:</label>
				<input class="border-amber-400 md:w-6/12 border-2 py-2 mb-3 rounded" type="Password" placeholder="Password" v-model="password" required>
			</div>
			<div class="flex justify-around ">
				<label class="text-sm md:text-2xl">Confirm Password:</label>
				<input class="border-amber-400 md:w-6/12 border-2 py-2 mx-7 md:mx-12 rounded" type="password" placeholder="Confirm password" v-model="confirmPassword" required>
			</div>
			<button class="px-4 py-2 bg-amber-600 rounded my-2 md:mt-5 mx-60 md:w-8/12 md:mx-96 text-white text-sm md:text-lg">
				Submit
			</button>
		</form>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')


const signUp = async() => {
	console.log(username.value, email.value, password.value,confirmPassword.value)
	let result = await axios.post(" http://localhost:7000/users",{
		username: username.value,
		email: email.value,
		password: password.value,
		confirmPassword: confirmPassword.value
	})
	console.log(result)

	if(result.status == 201){
		localStorage.setItem('users', JSON.stringify(result.data))
		username.value = " "
		email.value = " "
		password.value = " "
		confirmPassword.value = " "
		
		alert('signUp complete')

	}else{
		alert('signup error')
	}
}	

</script>