import type { PropType } from 'vue'
import { computed, defineComponent, reactive, ref, watchEffect } from 'vue'

import dayjs from 'dayjs'
import { Tabs } from '@/components/Tabs'
import RecordTypeList from '@/constants/RecordTypeList'
import { useRecordStore } from '@/store/useRecordStore'
import clone from '@/util/clone'

type GroupeList = {
  title: string
  total: string
  items: RecordItem[]
}[]

const StatisticView = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: () => {
    const recordStore = useRecordStore()
    const recordList = recordStore.recordList
    const type = ref('expense')

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

    const groupList = reactive<GroupeList>([
      // Q: 为什么要先 push 一个空的？
      // A: 因为下面的逻辑是拿最后一个元素来比较，如果不先 push 一个空的，那么最后一个元素就会被忽略
      {
        title: dayjs().format('YYYY-MM-DD'),
        total: '0',
        items: [],
      },
    ])

    const tagString = (tags: Tag[]) => {
      return tags.length === 0 ? '无标签' : tags.map(t => t.name).join('，')
    }

    const newList = computed(() =>
      clone(recordList)
        .filter(record => record.type === type.value)
        .sort((a, b) => a.createdAt! > b.createdAt! ? -1 : 1),
    )

    const updateGroupList = () => {
      newList.value.forEach((record) => {
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
    }

    watchEffect(() => {
      Object.assign(groupList, [{
        title: dayjs(newList.value[0]?.createdAt).format('YYYY-MM-DD'),
        total: '0',
        items: [],
      }])
      updateGroupList()
    })

    return () => (
      <>
        <Tabs dataSource={RecordTypeList} v-model:value={type.value} />
        <ol>
          {
            groupList.length === 0
              ? <li class="flex justify-center items-center h-20 text-[#999]">暂无数据</li>
              : groupList.map(group => (
                <li>
                  <h3 class="flex justify-between px-2 py-3 text-base">
                    {group.title}
                    <span>￥{group.total}</span>
                  </h3>
                  <ol>
                    {
                      group.items.map(item => (
                        <li class="flex justify-between bg-white px-2 py-3">
                          <span class="flex-shrink-0">{tagString(item.tags)}</span>
                          <span class="ml-2 mr-auto pr-1 text-[#999]">{item.notes}</span>
                          <span>￥{item.amount}</span>
                        </li>
                      ))
                    }
                  </ol>
                </li>
              ))
          }
        </ol>
      </>
    )
  },
})

export default StatisticView
