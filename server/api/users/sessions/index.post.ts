import { serverSupabaseClient } from "#supabase/server"

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event)
  const { email, password } = await readBody(event)
  const { data, error } = await client.auth.signInWithPassword({
    email: email,
    password,
  })

  console.log(data, error)

  if (error) {
    return {
      status: 401,
      code: error.message,
    }
  } else {
    return {
      status: 200,
      code: "success",
      data: {
        session: data.session,
        user: data.user,
      },
    }
  }
})
