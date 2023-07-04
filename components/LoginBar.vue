
<template>
  <div>
    <v-app-bar
      prominent
      color="primary-darken-1"
    >

    <img :src="icon" alt="icon" class="icon"/>

    
      <v-toolbar-title> 
        Color Friend's
      </v-toolbar-title>

      

    </v-app-bar>
  </div>
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
  margin-top: 5px;
  margin-left: 7px;
}

</style>
