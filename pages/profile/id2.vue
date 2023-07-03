<template>
<v-banner class="mx-auto my-5" color="white" colorText="black" width="87,5%">
    <v-card-actions>
      <v-list-item class="w-100">
        <template v-slot:prepend>
          <v-img class="mx-auto" :width="100" aspect-ratio="16/9" cover
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-img>
        </template>
  
        <v-col cols="6" class="text-h5" align-self="center">
          <p class="mr-15">
            Hugo Cesar
          </p>
          <a class="text-subtitle-2 text-center">
            @hugocesarleal
          </a>
        </v-col>
  
        <template v-slot:append>
          <div class="justify-self-end">
            <v-btn1 size="small"></v-btn1>
            <v-btn variant="tonal">Nova Publicação</v-btn>
            <span class="subheading me-2"></span>
            <v-btn variant="tonal">Editar Perfil</v-btn>
            <span class="subheading me-2"></span>
          </div>
        </template>
      </v-list-item>
  
    </v-card-actions>
  
  </v-banner>
</template>