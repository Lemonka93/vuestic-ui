<template>
  <docs-content :config="configComputed" />
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import DocsContent from '../../components/DocsContent.vue'
import accessibilityGuideConfig from '../../components/page-configs/getting-started/accessibility-guide/page-config'

@Options({
  name: 'DocsAccessibilityGuide',
  components: {
    DocsContent,
  },
})
export default class AccessibilityGuide extends Vue {
  get configComputed () {
    return accessibilityGuideConfig
  }
}
</script>
