import { defineStore } from "pinia"

export const useSessionStore = defineStore("session", () => {
  const session = ref({
    email: "",
    password: "",
  })

  const sessionLogged = ref({})

  async function newSession() {
    console.log("agh")

    const { data } = await useFetch<Response>("/api/users/sessions", {
      method: "POST",
      body: session,
    })

    if (data.value?.status === 200) {
      console.log(data.value.data)
      sessionLogged.value = data.value.data
    }
  }

  return { session, sessionLogged, newSession }
})

type Response = {
  status: number
  code: string
  message?: string
  data?: any
}
