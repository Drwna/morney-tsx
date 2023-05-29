import { defineComponent, ref } from 'vue'
import { Tabs } from '@/components/Tabs'
import { NumberPad } from '@/components/money/NumberPad'
import { FormItem } from '@/components/money/FormItem'

const recordTypeList = [
  { name: '支出', value: '-' },
  { name: '收入', value: '+' },
]

const MoneyView = defineComponent({
  setup: (props, context) => {
    const num = ref<string>('0')
    const type = ref<string>('-')
    const notes = ref<string>('')
    return () => (
      <div class="h-full flex flex-col">
        <div class="flex-1 overflow-auto">
          标签
        </div>
        <FormItem name='备注' v-model={notes.value} />
        <Tabs dataSource={recordTypeList} v-model={[type.value, 'value']} />
        <NumberPad v-model={num.value} />
      </div>
    )
  },
})

export default MoneyView
