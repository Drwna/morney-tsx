import type { PropType } from 'vue'
import { defineComponent, ref } from 'vue'

import dayjs from 'dayjs'
import { Tabs } from '@/components/Tabs'
import RecordTypeList from '@/constants/RecordTypeList'
import { useRecordStore } from '@/store/useRecordStore'
import clone from '@/util/clone'

const StatisticView = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: () => {
    const recordStore = useRecordStore()
    const recordList = recordStore.recordList
    const type = ref('income')

    /*
    [
      {
        title: '2023-06-01',
        total: '2342',
        items: [
          {
            amount: 256592
            createdAt: "2023-06-02T07:40:07.472Z"
            notes: "asdfasdfsa"
            tags: [{ id: 'xxx', name: 'xxx' }]
            type: "expense"
          }
        ]
      }
    ]
    */

    type GroupeList = {
      title: string
      total: string
      items: RecordItem[]
    }[]

    const newList = clone(recordList)
      .filter(record => record.type === type.value)
      .sort((a, b) => a.createdAt! > b.createdAt! ? -1 : 1)

    const groupList: GroupeList = []

    groupList.push({
      title: dayjs(newList[0]?.createdAt).format('YYYY-MM-DD'),
      total: '0',
      items: [],
    })

    newList.forEach((record) => {
      const lastGroup = groupList[groupList.length - 1]
      const lastGroupTitle = lastGroup.title
      const lastGroupTotal = lastGroup.total
      const lastGroupItems = lastGroup.items

      if (dayjs(record.createdAt).format('YYYY-MM-DD') === lastGroupTitle) {
        lastGroupItems.push(record)
        lastGroup.total = (Number(lastGroupTotal) + Number(record.amount)).toString()
      }
      else {
        groupList.push({
          title: dayjs(record.createdAt).format('YYYY-MM-DD'),
          total: record.amount,
          items: [record],
        })
      }
    })

    console.log('newList ==>', newList)
    console.log('groupList ==>', groupList)

    return () => (
      <>
        <Tabs dataSource={RecordTypeList} v-model:value={type.value} />
        <div>
          {/* <div> 没有记录 </div> */}
          <div>
            <div class="item">

            </div>
          </div>
        </div>
      </>
    )
  },
})

export default StatisticView
