export default defineEventHandler(async (event) => {
  const env = useRuntimeConfig()
  if(!import.meta.server) return


  return {
    status: 200,
    body: {
      message: 'Hello, World!',
      env: env
    }
  }
})
