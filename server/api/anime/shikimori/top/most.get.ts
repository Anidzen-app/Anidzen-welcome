import {defineEventHandler, getHeaders} from 'h3'

export default defineEventHandler(async (event) => {
  try {
    console.log('Начало обработки события')

    const config = useRuntimeConfig(event)
    const headers = getHeaders(event)
    const apiUrl = config.shikimoriApiBaseUrl

    console.log(`Отправка запроса на ${apiUrl}`)

    const query = `
      query {
        animes(season: "2023_2024", limit: 5, order: popularity, status: "released", kind: "tv") {
          id
          russian
          score
          poster {
            originalUrl
          }
          description
        }
      }
    `

  return await apiClient(event, apiUrl, 'POST', {query}, headers)
  } catch (error) {
    console.error('Ошибка при обработке события:', error)
    return handle(error)
  }
})
