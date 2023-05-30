import { defineComponent, ref } from 'vue'
import { Tabs } from '@/components/Tabs'
import { NumberPad } from '@/components/money/NumberPad'
import { FormItem } from '@/components/money/FormItem'
import { Tags } from '@/components/money/Tags'

const recordTypeList = [
  { name: '支出', value: '-' },
  { name: '收入', value: '+' },
]

const MoneyView = defineComponent({
  setup: (props, context) => {
    const num = ref<string>('0')
    const type = ref<string>('-')
    const notes = ref<string>('')
    const tags = ref<string[]>(['吃饭'])
    return () => (
      <div class="h-full flex flex-col">
        <div class="flex-1 overflow-auto">
          <Tags tagSource={['买衣服', '吃饭', '收租']} v-model:selected={tags.value} />
        </div>
        <FormItem name='备注' v-model={notes.value} placeholder='请输入备注信息' />
        <Tabs dataSource={recordTypeList} v-model={[type.value, 'value']} />
        <NumberPad v-model={num.value} />
      </div>
    )
  },
})

export default MoneyView
