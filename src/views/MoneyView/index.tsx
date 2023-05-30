import { defineComponent, ref } from 'vue'
import { Tabs } from '@/components/Tabs'
import { NumberPad } from '@/components/money/NumberPad'

const recordTypeList = [
  { name: '支出', value: '-' },
  { name: '收入', value: '+' },
]

const MoneyView = defineComponent({
  setup: (props, context) => {
    const num = ref<string>('0')
    const type = ref<string>('-')
    return () => (
      <>
        <div>1. 标签</div>
        <div>2. 备注</div>
        <Tabs dataSource={recordTypeList} v-model={[type.value, 'value']} />
        <NumberPad v-model={num.value} />
      </>
    )
  },
})

export default MoneyView
