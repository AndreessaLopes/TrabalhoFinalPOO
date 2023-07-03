<template>
    <v-app-bar color='primary-darken-1'>
      <v-toolbar-title>
        <nuxt-link :to="`/feed`">
        <button-outlined text ="Color Friend's"/>
      </nuxt-link>
      </v-toolbar-title>
      <template v-slot:append>
        <nuxt-link :to="`/login`">
        <button-outlined text="logout"/>
      </nuxt-link>
      </template>
    </v-app-bar>
</template>