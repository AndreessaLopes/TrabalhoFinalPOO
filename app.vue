<template>
  <v-app>
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
  return route.path === '/login' ? 'login' : 'default'
}

</script>

<style>
.main-content {
  margin-top: 50px;
}
</style>
