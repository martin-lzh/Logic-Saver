import { createI18n } from 'vue-i18n'
import en from './en'
import zhCN from './zh-CN'

function detectLocale(): string {
  const stored = localStorage.getItem('locale')
  if (stored) return stored
  if (navigator.language.startsWith('zh')) return 'zh-CN'
  return 'en'
}

const i18n = createI18n({
  legacy: false,
  locale: detectLocale(),
  fallbackLocale: 'en',
  messages: {
    en,
    'zh-CN': zhCN,
  },
})

export default i18n
