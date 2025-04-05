import en from './locales/en-US.json'
import ru from './locales/ru-RU.json'

export default defineI18nConfig(() => ({
  messages: {
    en,
    ru
  }
}))
