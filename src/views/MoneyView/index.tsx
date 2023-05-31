import { defineComponent, reactive } from 'vue'
import { useRecordStore } from '@/store/useRecordStore'
import { Tabs } from '@/components/Tabs'
import { NumberPad } from '@/components/money/NumberPad'
import { FormItem } from '@/components/money/FormItem'
import { Tags } from '@/components/money/Tags'
import RecordTypeList from '@/constants/RecordTypeList'

const MoneyView = defineComponent({
  setup: () => {
    const record = reactive<RecordItem>({
      tags: [],
      notes: '',
      type: 'expense',
      amount: '0',
    })
    const recordStore = useRecordStore()
    const submit = () => {
      recordStore.createRecord(record)
    }
    return () => (
      <div class="h-full flex flex-col">
        <div class="flex-1 overflow-auto">
          <Tags tagSource={recordStore.tagList} v-model={[record.tags, 'selected']} />
        </div>
        <FormItem name='备注' v-model={record.notes} placeholder='请输入备注信息' />
        <Tabs dataSource={RecordTypeList} v-model:value={record.type} />
        <NumberPad v-model={record.amount} onSubmit={submit} />
      </div>
    )
  },
})

export default MoneyView
