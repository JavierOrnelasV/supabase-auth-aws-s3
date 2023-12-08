import { serverSupabaseServiceRole } from "#supabase/server"

export default defineEventHandler(async (event) => {
  const client = serverSupabaseServiceRole(event)

  const { data } = await client.from("roles").select("*")

  return {
    statusCode: 200,
    body: data,
  }
})
