import { defineConfig } from 'vitepress'
import { getVersion } from '../utils'

export default defineConfig({
  description: 'Интуитивно понятный сервис для организации вашей домашней страницы',
  lang: 'ru-RU',
  themeConfig: {
    nav: [
      { text: 'Главная', link: '/ru/' },
      { text: 'Конфигурация', link: '/ru/reference/configuration' },
      { text: 'Примеры', link: '/ru/community/showcase' },
      {
        text: getVersion(),
        items: [
          { text: 'Журнал изменений', link: '/ru/other/changelog' },
          { text: 'Внести свой вклад', link: '/ru/community/contributing' },
        ],
      },
    ],

    sidebar: [
      {
        text: 'Руководство',
        base: '/ru/guide',
        items: [
          { text: 'Что такое Mafl?', link: '/what-is' },
          { text: 'Начало работы', link: '/getting-started' },
          // { text: 'Deployment', link: '/deployment' },
        ],
      },
      {
        text: 'Ссылки',
        base: '/ru/reference',
        items: [
          { text: 'Конфигурация', link: '/configuration' },
          { text: 'Иконки', link: '/icons' },
          { text: 'Логотип', link: '/favicons' },
        ],
      },
      {
        text: 'Сервисы',
        base: '/ru/services',
        items: [
          { text: 'Базовый', link: '/base' },
        ],
      },
      {
        text: 'Сообщество',
        base: '/ru/community',
        collapsed: true,
        items: [
          { text: 'Примеры пользователей', link: '/showcase' },
          { text: 'Разработка', link: '/development' },
          { text: 'Внести свой вклад', link: '/contributing' },
        ],
      },
      {
        text: 'Прочее',
        base: '/ru/other',
        collapsed: true,
        items: [
          { text: 'Журнал изменений', link: '/changelog' },
          { text: 'Лицензия', link: '/license' },
        ],
      },
    ],
  },
})
