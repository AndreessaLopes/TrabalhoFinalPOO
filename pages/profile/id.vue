<template>
  <v-banner class="mx-auto my-5" color="white" colorText="black" width="87.5%">
    <v-card-actions>
      <v-list-item class="w-100">
        <template v-slot:prepend>
          <v-img class="mx-auto" :width="100" aspect-ratio="16/9" cover
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-img>
        </template>

        <v-col cols="6" class="text-h5" align-self="center">
          <p class="mr-15">
            Andressa Lopes
          </p>
          <a class="text-subtitle-2 text-center">
            @dessaa__lopes
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



    <div>
      <ul>
        <li v-for="feed in meusFeeds" :key="feed.id">
          <v-for>
            <v-card class="mx-auto my-6" color="#ADD7F6" colorText="Black" theme="dark" max-width="6000">
              <v-card-text class="text-h5 py-4">
                Peguei Global no CS hoje !!
              </v-card-text>
              <v-card-actions>
                <v-list-item class="w-100">
                  <template v-slot:prepend>
                    <nuxt-link :to="`/avatar`">
                      <v-btn1><v-avatar color="#7a7a7a"
                          image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-avatar></v-btn1>
                    </nuxt-link>
                  </template>

                  <div class="mx-4">
                    <nuxt-link :to="`/profile/id`">
                      <v-list-item-title>Andressa Lopes</v-list-item-title>
                    </nuxt-link>
                    <v-list-item-subtitle>@dessaa__lopes</v-list-item-subtitle>
                  </div>

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
          </v-for>

          <v-card class="mx-auto my-6" color="#ADD7F6" colorText="black" theme="dark" max-width="6000">
            <v-card-text class="text-h5 py-4">
              Bom diaaa !!
            </v-card-text>
            <v-card-actions>
              <v-list-item class="w-100">
                <template v-slot:prepend>
                  <nuxt-link :to="`/avatar`">
                    <v-btn1><v-avatar color="#7a7a7a"
                        image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-avatar></v-btn1>
                  </nuxt-link>
                </template>

                <div class="mx-4">
                  <nuxt-link :to="`/profile/id`">
                    <v-list-item-title>Andressa Lopes</v-list-item-title>
                  </nuxt-link>
                  <v-list-item-subtitle>@dessaa__lopes</v-list-item-subtitle>
                </div>

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
          <p>{{ feed.content }}</p>
        </li>
      </ul>
    </div>

  </v-banner>
</template>


 



<script>
export default {
  data() {
    return {
      feeds: [
        { id: 1, author: 'Você' },
      ]
    };
  },
  computed: {
    meusFeeds() {
      return this.feeds.filter(feed => feed.author === 'Você');
    }
  }
};
</script>

  






<script setup>
let route = useRoute()

let { $api } = useNuxtApp()

let posts = useState('feed')

let getPosts = async () => {
  await $api.get(`/feed/${route.params.id}`).then(res => {
    posts.value = res.data
  }).catch(error => console.log(error))
}


</script>
