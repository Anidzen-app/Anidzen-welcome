export const getBaseHeaders = (event: any) => {
  const config = useRuntimeConfig(event)

  console.log('Получение базовых заголовков')
  console.log('Используем API ключ:', config.apiKey)

  return {
    'X-Api-Key': config.apiKey
  }
}
