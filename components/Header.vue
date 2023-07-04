<template>
    <v-app-bar color='primary-darken-1'>
      <v-toolbar-title>
        <nuxt-link :to="`/feed`">
        <img :src="icon" alt="icon" class="icon"/>
      </nuxt-link>
      </v-toolbar-title>
      <template v-slot:append>
        <nuxt-link :to="`/login`">
        <button-outlined text="logout"/>
      </nuxt-link>
      </template>
    </v-app-bar>
</template>

<script>

import icon from "@/assets/icon.png";
export default{
data() {
  return {
    icon : icon,
  }
}
}

</script>

<style>
.icon{
  width: 70px;
  height: 87px;
  margin-top: 13px;
}

</style>