<script setup>
import { useSessionStore } from "@/stores/session"
const { session, newSession } = useSessionStore()
</script>

<template>
  <form class="form" @submit.prevent="newSession">
    <input type="text" placeholder="Email" v-model="session.email" />
    <input type="password" placeholder="Password" v-model="session.password" />
    <button type="submit">Login</button>
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  row-gap: 1rem;
}
</style>
