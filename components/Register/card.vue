<template>
  <div class="d-flex align-center justify-center" style="height: 90vh">
    <v-card
      class="elevation-12 rounded-xl" 
      height="600"
    >
      <v-sheet 
        height="200"
        class="d-flex align-center justify-center text-h3"
      >
        <p>Cadastro</p>
      </v-sheet>
      <v-sheet 
        width="400"
        class="mx-5 my-5"
      >
        <v-form 
          fast-fail
          @submit.prevent="loading = true"
        >
          <input-name v-model="name"/>
          <input-email v-model="email"/>
          <input-password v-model="password"/>
          <button-dark
            block
            text="Cadastrar"
            class="mb-2"
            to="/login"
          />
          <p class="text-subtitle-2 text-center">Já possuí uma conta?</p>
          <button-dark
            block
            text="Login"
            to="/login"
          />
        </v-form>
      </v-sheet>
    </v-card>
  </div>
</template>
<script setup>

  let name = useState('name')
  let email = useState('email')
  let password = useState('password')
  let loading = useState('loading')

</script>