<template>
  estou na pagina certa {{ route.params.id }}
</template>

<script setup>
  let route = useRoute()
</script>