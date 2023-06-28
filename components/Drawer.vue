<template>
  <v-navigation-drawer
    expand-on-hover
    rail
    permanent
  >
    <v-list>
      <v-list-item
        title='User'
        subtitle='user@email.com'
      >
      </v-list-item>
    </v-list>
    <v-divider></v-divider>

    <v-list density='compact' nav>
      <template
        v-for="(item, idx) in items"
        :key="idx"
      >
        <v-list-item
          :prepend-icon=item.icon
          :title="item.title"
          @click="redirct(item.to)"
        />
      </template>


    </v-list>
  </v-navigation-drawer>
</template>
<script setup>
  let items =  [
        {
          icon: 'mdi-newspaper',
          title: 'Feed',
          to: '/feed',
          role: 'logged',
        },
        {
          icon: 'mdi-account-circle',
          title: 'Minha Conta',
          to: '/profile',
          role: 'UFA_OPO',
        },
        {
          icon: 'mdi-account-multiple',
          title: 'Amigos',
          to: '/amigos',
          role: 'UFA_ADM',
        },
      ]
</script>