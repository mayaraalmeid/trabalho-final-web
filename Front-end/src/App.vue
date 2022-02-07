
<template>

   <Navbar />

   <router-view/>
  
</template>

<script >


import Home from './views/home.vue';
import Navbar from './components/Navbar.vue';


export default {
  name: 'App',
  components: {
    Home,
    Navbar
}
}

</script>