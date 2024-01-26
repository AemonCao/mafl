import { yandexMetrika } from '@hywax/vitepress-yandex-metrika'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import PreviewService from '../components/preview-service.vue'
import InVersion from '../components/in-version.vue'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component('PreviewService', PreviewService)
    ctx.app.component('InVersion', InVersion)

    yandexMetrika(ctx, {
      enabled: import.meta.env.MODE === 'production',
      counter: {
        id: 96086220,
        initParams: {
          trustedDomains: ['mafl.hywax.space'],
        },
      },
    })
  },
} satisfies Theme
