<template>
  <div class="mt-10">
    <template v-for="(post, index) in posts">
      <FeedPost
        :id="post.id"
        :name="post.name"
        :content="post.content"
        :email="post.email"
      />
    </template>
  </div>
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