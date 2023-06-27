<template>
  <Posts :posts="posts"/>
</template>

<script setup>

let { $api } = useNuxtApp()

let posts = useState('posts')

let getPosts = async () => {
  await $api.get('/posts').then(res => {
    posts.value = res.data
  }).catch(error => console.log(error))
}

</script>