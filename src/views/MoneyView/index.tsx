import { defineComponent, ref } from 'vue'
import { NumberPad } from './NumberPad'

const MoneyView = defineComponent({
  setup: (props, context) => {
    const num = ref<string>('0')
    return () => (
      <>
        <div>1. 标签</div>
        <div>2. 备注</div>
        <div>3. 类型</div>
        {num.value}
        <NumberPad v-model={num.value} />
      </>
    )
  },
})

export default MoneyView
