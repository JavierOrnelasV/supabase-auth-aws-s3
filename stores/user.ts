import { defineStore } from "pinia"

export const usUserStore = defineStore("userStore", () => {
  const user = ref({
    email: "",
    password: "",
  })
})
