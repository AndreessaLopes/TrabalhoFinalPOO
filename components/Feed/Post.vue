<template>
  <v-card class="mx-auto my-5" color="white" colorText="black" theme="dark" max-width="600">
    <v-card-text class="text-h5 py-2">
      {{ content }}
    </v-card-text>
    <v-card-actions>
      <v-list-item class="w-100">
        <template v-slot:prepend>
          <v-avatar color="#7a7a7a"
            image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-avatar>
        </template>

        <nuxt-link :to="`/profile/${id}`">
          <v-list-item-title>{{ name }}</v-list-item-title>
        </nuxt-link>

        <v-list-item-subtitle>{{ email }}</v-list-item-subtitle>

        <template v-slot:append>
          <div class="justify-self-end">
            <v-btn1 size="x-small"></v-btn1>
            <v-btn icon="mdi-heart"></v-btn>
            <span class="subheading me-2"></span>
            <span class="me-1">·</span>
            <v-btn icon=" mdi-share-variant"></v-btn>
            <span class="subheading me-2"></span>
            <span class="me-1">·</span>
            <v-btn icon=" mdi-comment"></v-btn>
            <span class="subheading me-2"></span>
          </div>
        </template>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script setup>
  const props = defineProps(['id', 'content', 'name', 'email'])
</script>
