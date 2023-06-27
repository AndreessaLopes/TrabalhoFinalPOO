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
  const props = defineProps(['posts'])
</script>