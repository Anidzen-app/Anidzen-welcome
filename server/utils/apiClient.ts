import type { RequestHeaders } from 'h3'
import { getBaseHeaders } from './apiHelper'
import { handle } from './handle'

type HttpMethod =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'PATCH'
  | 'OPTIONS'
  | 'HEAD'

export const apiClient = async (
  event: any,
  url: string,
  method?: HttpMethod,
  body: any = null,
  extraHeaders?: RequestHeaders
) => {
  try {
    console.log('Запрос отправляется с параметрами:')
    console.log('URL:', url)
    console.log('Метод:', method)

    console.log('Базовые заголовки:', getBaseHeaders(event))
    console.log('Дополнительные заголовки:', extraHeaders)

    const blockedHeaders = [
      'sec-ch-ua',
      'sec-ch-ua-platform',
      'sec-ch-prefers-color-scheme',
      'sec-ch-ua-mobile'
    ]

    const filteredExtraHeaders = Object.fromEntries(
      Object.entries(extraHeaders || {}).filter(
        ([key]) => !blockedHeaders.includes(key)
      )
    )

    console.log('Отфильтрованные заголовки:', filteredExtraHeaders)

    const headers = {
      ...getBaseHeaders(event),
      ...filteredExtraHeaders
    }

    console.log('Заголовки:', headers)
    console.log('Тело запроса:', body)

    const response = await $fetch(url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : null
    })

    console.log('Ответ от API:', response)
    return response
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error)
    return handle(error)
  }
}
