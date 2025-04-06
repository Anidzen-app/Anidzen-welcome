import { defineEventHandler, getHeaders } from 'h3'

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig(event)
    const headers = getHeaders(event)
    const apiUrl = config.shikimoriApiBaseUrl
    const currentYear = new Date().getFullYear()
    if (!config.appSsrDebug) {
      console.log(`Запрос на ${apiUrl}`)
    }

    const query = `
      query {
        animes(season: "${currentYear}", limit: 10, order: popularity, status: "anons", kind: "tv,ona") {
			name
			poster { preview2xUrl }
        }
      }
    `

    return await apiClient(apiUrl, 'POST', { query }, headers)
  } catch (error) {
    return handle(error)
  }
})
