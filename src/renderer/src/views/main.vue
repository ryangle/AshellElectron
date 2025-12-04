<template>
  <div class="left-side">
    <template v-for="(menu, key) in menuList" :key="key">
      <router-link :to="menu.name">{{ menu.name }}</router-link><br/>
    </template>
  </div>
  <div class="right-container">
    <router-view></router-view>
  </div>
</template>
<script setup lang="js">
import { ref } from 'vue'

//router
const menuList = ref([
  {
    name: '/main/file',
    icon: 'icon-file'
  },
  {
    name: '/main/search',
    icon: 'icon-file'
  },
  {
    name: '/main/extension',
    icon: 'icon-file'
  }
])
</script>
<style lang="scss" scoped>
.left-side {
  width: 100px;
}
</style>
