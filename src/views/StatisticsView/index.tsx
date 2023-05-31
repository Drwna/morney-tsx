import type { PropType } from 'vue'
import { defineComponent, ref } from 'vue'
import { Tabs } from '@/components/Tabs'
import RecordTypeList from '@/constants/RecordTypeList'

const StatisticView = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: () => {
    const type = ref('income')
    return () => (
      <>
        <Tabs dataSource={RecordTypeList} v-model:value={type.value} />
        <div>
          {type.value}
          <div> 没有记录 </div>
        </div>
      </>
    )
  },
})

export default StatisticView
