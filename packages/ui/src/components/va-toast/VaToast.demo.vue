<template>
  <VbDemo>
    <VbCard title="Basic usage">
      <button @click="$vaToast.init('yo')">notification</button>
    </VbCard>
    <VbCard title="Colors">
      <button
        v-for="(color, index) in colors"
        :key="index"
        @click="$vaToast.init({ message: `${color} notification`, color })"
      >
        {{color}}
      </button>
    </VbCard>
    <VbCard title="Custom Offsets">
      <button @click="$vaToast.init(customOffsets)">notification with custom offsets</button>
    </VbCard>
    <VbCard title="Custom Position">
      <button @click="$vaToast.init(customPosition)">notification with custom position</button>
    </VbCard>
    <VbCard title="Custom onClose">
      <button @click="$vaToast.init(customOnCloseHandler)">notification with custom onClose handler</button>
    </VbCard>
    <VbCard title="Close All">
      <button @click="$vaToast.closeAll()">Close all toasts</button>
    </VbCard>
    <VbCard title="Custom message">
      <button @click="$vaToast.init(customMessage)">Custom message</button>
    </VbCard>
    <VbCard title="Multi-line">
      <button @click="$vaToast.init(multiLine)">Multi-line</button>
    </VbCard>
    <VbCard title="Return ID">
      <button @click="handleToast">Open Toast</button>
      <button @click="$vaToast.close(handleId)">Close {{handleId}}</button>
    </VbCard>
  </VbDemo>
</template>

<script>
import { useGlobalConfig } from '../../services/global-config/global-config'

export default {
  setup () {
    const { setGlobalConfig } = useGlobalConfig()

    setGlobalConfig(config => ({
      ...config,
      VaToast: {
        color: 'red',
      },
    }))
  },

  data () {
    return {
      colors: ['primary', 'secondary', 'danger', 'warning', 'info'],
      customOffsets: {
        message: 'Custom offsets, (Y: 100, X: 100)',
        offsetX: 100,
        offsetY: 100,
      },
      customPosition: {
        position: 'bottom-left',
        message: 'Custom position (bottom-left)',
      },
      customOnCloseHandler: {
        position: 'bottom-right',
        message: 'Custom handler (bottom-right)',
        onClose: () => console.log('Handle onClose'),
      },
      customMessage: {
        message: 'Simple message',
        render: (h) => {
          return h('div', [
            'This is a ',
            h('span', { style: 'font-weight: bold' }, 'custom'),
            ' render message',
          ])
        },
      },
      multiLine: {
        message: 'Multi-line message',
        multiLine: true,
      },
      handleId: null,
    }
  },
  methods: {
    handleToast () {
      this.handleId = this.$vaToast.init({
        message: `Toast ${this.handleId} is opened`, // this example is buggy because of lack of reactivity inside the toast data
        onClose: () => {
          this.handleId = null
        },
      })
    },
  },
}
</script>
