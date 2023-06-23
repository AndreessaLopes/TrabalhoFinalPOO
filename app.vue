<template>
  <v-app class="bg-gradient-blue">
    <NuxtLayout :name="getLayout()">
      <v-container class="main-content">
        <NuxtPage />
      </v-container>
    </NuxtLayout>
  </v-app>
</template>

<script setup>
let route = useRoute()

function getLayout() {
  if (route.path === '/login') {
    return 'login'
  } if (route.path === '/') {
    return 'register'
  }
  if (route.path === '/') {
    return 'feed'
  }
}



</script>

<style>
.main-content {
  margin-top: 50px;
}

.bg-gradient-blue {
  background: #3B28CC;
  background: linear-gradient(99deg, #abc4ff 0%, #ADD7F6 35%, #FFFFFF 100%); 
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
