<template>
  <div class="d-flex align-center justify-center" style="height: 90vh">
    <v-card
      class="elevation-12 rounded-xl" 
    >
      <v-toolbar 
      dark 
      color="primary-darken-1">
        <v-toolbar-title
          text="Login"
        />
      </v-toolbar>
      <v-sheet 
        width="400"
        class="mx-5 my-5"
      >
        <v-form 
          fast-fail
          @submit.prevent="loading = true"
        >
          <input-email v-model="email"/>
          <input-password v-model="password"/>
          <button-dark
            block
            text="Acessar"
            :loading="loading"
            @click="handleLogin"
          />
        </v-form>
      </v-sheet>
    </v-card>
  </div>
</template>
<script setup>
  let { $api } = useNuxtApp()

  let email = useState('email')
  let password = useState('password')
  let loading = useState('loading')

  let stall = async (stallTime = 3000) => {
    await new Promise(resolve => setTimeout(resolve, stallTime))
  }

  let handleLogin = async () => {
    await stall().then(() => {
      loading.value = false
      navigateTo('/feed')
    })
  }




  // let handleLogin = async () => {
  //   $api.post('/login', {
  //     email: email.value,
  //     password: password.value
  //   })
  // }

</script>