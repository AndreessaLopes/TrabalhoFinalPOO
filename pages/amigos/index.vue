<template>
  <v-banner
    class="mx-auto"
    max-width="1200"
  >
    <v-toolbar color="cyan-lighten-1">
      <v-btn variant="text" icon="mdi-menu"></v-btn>

      <v-toolbar-title>Amigos</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn variant="text" icon="mdi-magnify"></v-btn>
    </v-toolbar>
    
    <v-col>
    <v-card width="400">
      <template v-slot:title>
        Andressa Lopes
      </template>

      <template v-slot:subtitle>
        @dessaa__lopes
      </template>

      <template v-slot:text>
        <v-btn>Adicionar Amigo</v-btn>
        <v-btn>Remover Amigo</v-btn>
      </template>
    </v-card>

    <v-card width="400">
      <template v-slot:title>
        Hugo Cesar
      </template>

      <template v-slot:subtitle>
        @hugocesarleal
      </template>

      <template v-slot:text>
        <v-btn>Adicionar Amigo</v-btn>
        <v-btn>Remover Amigo</v-btn>
      </template>
    </v-card>

    <v-card width="400">
      <template v-slot:title>
        Daniel Reis
      </template>

      <template v-slot:subtitle>
        @drgsantaana
      </template>

      <template v-slot:text>
        <v-btn>Adicionar Amigo</v-btn>
        <v-btn>Remover Amigo</v-btn>
      </template>
    </v-card>

  </v-col>
    
  </v-banner>
</template>