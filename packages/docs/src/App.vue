<template>
  <metainfo />
  <router-view />
</template>

<script>
import emitter from 'tiny-emitter/instance'
import { setColors } from '../../ui/src/main'
import { COLOR_THEMES, ThemeName } from './config/theme-config'

const eventBus = {
  $on: (...args) => emitter.on(...args),
  $once: (...args) => emitter.once(...args),
  $off: (...args) => emitter.off(...args),
  $emit: (...args) => emitter.emit(...args),
}

export default {
  name: 'App',
  data () {
    return {
      eventBus,
    }
  },
  setup () {
    setColors(COLOR_THEMES[ThemeName.DEFAULT])
  },
}
</script>
