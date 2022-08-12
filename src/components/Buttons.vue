<template>
	<div class=" px-7">
			<h2 class="mx-3">Qty: {{ sum }}</h2>
			<button @click="addItem" class="bg-amber-600 px-2 mx-2 rounded hover:opacity-90">+</button>
			<button @click="minusItem" class="bg-amber-600 px-2 rounded hover:opacity-90">-</button>
		</div>
</template>

<script setup>
import { ref } from 'vue'

const sum = ref(0)

const addItem = () => {
 	sum.value += 1;
 }
 

 const minusItem = () => {
 	sum.value = Math.max(0, sum.value - 1)
 }
</script>