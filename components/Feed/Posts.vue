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

  let posts = [
    {
      id: '1',
      name: 'Bruno Conte',
      email: 'bruno@teste.com',
      content: 'Peguei Xerife ontem no CS' 
    },
    {
      id: '2',
      name: 'Andressa Lopes',
      email: 'andressa@teste.com',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' 
    },
    {
      id: '3',
      name: 'Nathan Silva',
      email: 'nathan@teste.com',
      content: 'Cheguei de viagem ontem!' 
    },
  ]

</script>