<template>
  <docs-content :config="configComputed" />
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import DocsContent from '../../components/DocsContent.vue'
import iconConfig from '../../components/page-configs/ui-elements/va-icon/page-config'

@Options({
  name: 'DocsIcon',
  components: {
    DocsContent,
  },
})
export default class Icon extends Vue {
  get configComputed () {
    return iconConfig
  }
}
</script>
