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
          icon: 'mdi-view-dashboard',
          title: 'Dashboard',
          to: '/inicio',
          role: 'logged',
        },
        {
          icon: 'mdi-account',
          title: 'Minha Conta',
          to: '/perfil',
          role: 'UFA_OPO',
        },
        {
          icon: 'mdi-account-group',
          title: 'Usuários',
          to: '/usuarios',
          role: 'UFA_ADM',
        },
        {
          icon: 'mdi-account-school',
          title: 'Alunos',
          to: '/alunos',
          role: 'UFA_OPO',
        },
        {
          icon: 'mdi-human-queue',
          title: 'Professores',
          to: '/professores',
          role: 'UFA_OPO',
        },
        {
          icon: 'mdi-crowd',
          title: 'Turmas',
          to: '/turmas',
          role: 'UFA_OPO',
        },
        {
          icon: 'mdi-calendar',
          title: 'Calendário',
          to: '/calendario',
          role: 'UFA_OPO',
        }
      ]
</script>