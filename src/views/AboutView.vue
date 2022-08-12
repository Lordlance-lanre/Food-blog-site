<template>
  <div class="about">
    <!----------big screen media query---->
    <h1 class="text text-5xl text-center py-2 text-amber-600 bg-yellow-200 my-3 md:flex hidden">About Us</h1>
    <div class="grid grid-cols-2 bg-amber-200 md:flex hidden">
      <div>
         <img src="../assets/fast-food.png" alt="#" class=" mx-auto" id="image">
      </div>
      <div>
        <h2 class="mt-20 text-2xl text-center px-4 py-10 text-amber-600 text-justify"><strong>"</strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<strong>"</strong></h2>
        <span class="px-48 text-amber-600 text-2xl text-justify">- Baker Butterfield</span>
        <p class="px-60 text-amber-600 text-sm text-justify">chief baker</p>
      </div>
    </div>

     <div class="grid grid-cols-2 bg-amber-200 md:flex hidden">
      <div class=" ">
        <h2 class="mt-20 text-2xl text-center px-3 py-10 text-amber-600 text-justify "><strong>"</strong>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<strong>"</strong></h2>
        <span class="px-48 text-amber-600 text-2xl text-justify">- Aisha Dankali</span>
        <p class="px-60 pb-4 text-amber-600 text-sm text-justify">chief cook</p>
      </div>
       <div id="slide">
          <img src="../assets/goat-soup.webp" alt="#" class="px-0 mx-5 bg-amber-200">
       </div>
     </div>
   

      <div class="grid grid-cols-2 bg-amber-200 md:flex hidden">
       <div id="slice">
          <img src="../assets/Jollof-and-Beef.jpg" alt="#" class="w-screen h-96 px-0 mx-auto bg-amber-200">
       </div>
       <div class="bg-amber-200">
        <h2 class="mt-20 text-2xl text-center px-3 py-10 text-amber-600 text-justify "><strong>"</strong>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<strong>"</strong></h2>
        <span class="px-48 text-amber-600 text-2xl text-justify">- Obianuju Osikapa</span>
        <p class="px-60 text-amber-600 text-sm text-justify">chief steward</p>
      </div>
     </div>

     <div class="bg-amber-200 md:flex hidden">
        <button class="px-96  py-2 mt-4 rounded bg-amber-700 mx-52 text-white hover:opacity-90">
         <router-link to="/">Back</router-link>
        </button>
     </div>
      
      <!----------small screen media query---->
     
      <div>
        <h1 class="text-5xl text-center py-2 text-amber-600 bg-yellow-200 my-3 md:hidden">About Us</h1>
      </div>

      <div class="block bg-amber-200 md:hidden">
        <div>
         <img src="../assets/fast-food.png" alt="#" class="w-screen h-96 px-0 mx-auto">
        </div>
        <div class="md:hidden">
          <h2 class="mt-2 text-2xl text-center px-3 py-4 text-amber-600 text-justify"><strong>"</strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<strong>"</strong></h2>
          <span class="px-32 text-amber-600 text-xl ">- Baker Butterfield</span>
          <p class="px-44 py-1 text-amber-600 text-sm ">chief baker</p>
        </div>
      </div>

      <div class="block bg-amber-200 md:hidden">
       <div>
          <img src="../assets/goat-soup.webp" alt="#" class="w-screen h-96 px-0 mx-auto pt-5 bg-amber-200">
       </div>
       <div class="bg-amber-200">
        <h2 class="mt-2 text-2xl text-center px-3 py-4 text-amber-600 text-justify "><strong>"</strong>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<strong>"</strong></h2>
        <span class="px-32 text-amber-600 text-2xl text-justify">- Aisha Dankali</span>
        <p class="px-44 pb-4 text-amber-600 text-sm text-justify">chief cook</p>
      </div>
     </div>

     <div class="block bg-amber-200 md:hidden">
       <div>
          <img src="../assets/Jollof-and-Beef.jpg" alt="#" class="w-screen h-96 px-0 mx-auto bg-amber-200">
       </div>
       <div class="bg-amber-200">
        <h2 class="text-2xl text-center py-4 px-3 text-amber-600 text-justify "><strong>"</strong>Ut enim ad minim veniam,slice quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<strong>"</strong></h2>
        <span class="px-24 text-amber-600 text-2xl text-justify">- Obianuju Osikapa</span>
        <p class="px-40 text-amber-600 text-sm text-justify">chief steward</p>
      </div>
     </div>

     <div class="bg-amber-200 md:hidden">
        <button class="btn md:px-52 py-2 my-9 rounded bg-amber-700 mx-auto px-6 text-white hover:opacity-90">
         <router-link to="/">Back</router-link>
        </button>
     </div>
  </div>
</template>

<style scoped>
img {
  border-radius: 4px;
}
.text{
  padding-left: 520px;
}
#image{
  width: 1450px;
  height: 400px;
}
#slide{
  width: 2800px;
  height: 300px;
}
#slice{
  width: 2700px;
  height: 300px;
}
.btn{
  margin-left: 200px;
  padding: 7px 30px;
}

</style>

