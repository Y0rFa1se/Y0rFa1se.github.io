import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import theme from './theme.js'

export default defineUserConfig({
  lang: 'en-US',

  title: 'Y0rFa1se',
  description: 'Github Pages',

  theme,

  bundler: viteBundler(),
})
