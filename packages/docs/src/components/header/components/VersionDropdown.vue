<template>
  <!-- <va-button-dropdown
    color="primary"
    :label="version.value"
    class="version-dropdown"
    flat
  >
    <div
      v-for="(option, index) in version.options"
      :key="index"
      @click="selectOption(option)"
    >
      {{ option }}
    </div>
  </va-button-dropdown> -->
  <div style="color: var(--va-primary);">
    {{ version.value }}
  </div>
</template>

<script lang="ts">
// @ts-nocheck
import { Options, Vue } from 'vue-class-component'
import VaIcon from 'vuestic-ui/src/components/va-icon'

@Options({
  name: 'DocsVersionDropdown',
})

export default class VersionDropdown extends Vue {
  data () {
    return {
      version: { options: ['v1.0'], value: 'v1.0' },
    }
  }

  selectOption (option: string) {
    this.version.value = option
  }
}
</script>

<style lang="scss">
  .version-dropdown .va-button__content {
    font-weight: bold;
    padding-right: 1rem !important;
  }
</style>
