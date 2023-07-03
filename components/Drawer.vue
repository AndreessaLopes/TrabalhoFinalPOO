<template>
  <v-navigation-drawer expand-on-hover rail permanent>
    <v-list>
      <v-list-item title='User' subtitle='user@email.com'>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>

    <v-list density='compact' nav>
      <nuxt-link :to="`/feed`">
        <v-btn icon="mdi-newspaper"></v-btn>
      </nuxt-link>
      <v-list-item-title>Feed</v-list-item-title>

      <nuxt-link :to="`/profile/id`">
        <v-btn icon="mdi-account-circle"></v-btn>
      </nuxt-link>
      <v-list-item-title>Minha Conta</v-list-item-title>

      <nuxt-link :to="`/amigos`">
        <v-btn icon="mdi-account-multiple"></v-btn>
      </nuxt-link>
      <v-list-item-title>Amigos</v-list-item-title>

    </v-list>
  </v-navigation-drawer>
</template>
