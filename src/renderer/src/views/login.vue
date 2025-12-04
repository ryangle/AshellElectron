<template>
  <div class="login">

    <el-form>
      <el-form-item prop="message">
        <el-alert v-show="!verityInput" :title="message" closable="false" type="primary" />
      </el-form-item>
      <el-form-item prop="email">
        <el-input v-model="email" clearable placeholder="please enter email"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="password" show-password placeholder="please enter password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const message = ref('')
const email = ref('ryan@email.com')
const password = ref('admin')
const verityInput = ref(true)
const login = () => {
  console.log('i:', email.value, password.value)
  if (email.value && password.value) {
    verityInput.value = true
    window.ipcRenderer.send('openMainWindow')
    router.push('/main')
  } else {
    message.value = '登录失败'
    verityInput.value = false
  }
}
</script>

<style scoped lang="scss">
.login {
  margin: 40px;
}
</style>
