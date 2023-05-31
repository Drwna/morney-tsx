import { defineComponent, reactive } from 'vue'
import { Tabs } from '@/components/Tabs'
import { NumberPad } from '@/components/money/NumberPad'
import { FormItem } from '@/components/money/FormItem'
import { Tags } from '@/components/money/Tags'
import RecordTypeList from '@/constants/RecordTypeList'

interface ItemRecord {
  tags: string[]
  notes: string
  type: string
  amound: string
}

const MoneyView = defineComponent({
  setup: (props, context) => {
    const tagSource = ['买衣服', '吃饭', '收租', '兼职']
    const record = reactive<ItemRecord>({
      tags: ['吃饭', '兼职'],
      notes: '我是备注',
      type: '-',
      amound: '',
    })
    return () => (
      <div class="h-full flex flex-col">
        <div class="flex-1 overflow-auto">
          <Tags tagSource={tagSource} v-model={[record.tags, 'selected']} />
        </div>
        <FormItem name='备注' v-model={record.notes} placeholder='请输入备注信息' />
        <Tabs dataSource={RecordTypeList} v-model:value={record.type} />
        <NumberPad v-model={record.amound} />
      </div>
    )
  },
})

export default MoneyView
