import type { PropType } from 'vue'
import { computed, defineComponent } from 'vue'

interface DataSourceItem {
  name: string
  value: string
}

export const Tabs = defineComponent({
  props: {
    dataSource: {
      type: Array as PropType<DataSourceItem[]>,
      required: true,
    },
    value: {
      type: String as PropType<string>,
    },
  },
  emits: ['update:dataSource', 'update:value'],
  setup: (props, context) => {
    const activeIndex = computed(() => props.dataSource.findIndex(item => item.value === props.value))
    const indicatorWidth = 100 / props.dataSource.length
    const indicatorStyle = computed(() => ({
      width: `${indicatorWidth}%`,
      left: `${indicatorWidth * activeIndex.value}%`,
    }))
    const select = (item: DataSourceItem) => {
      context.emit('update:value', item.value)
    }
    return () => (
      <div class="relative flex bg-[#c4c4c4] text-2xl">
        {
          props.dataSource.map(item => (
            <div onClick={() => select(item)}
              class="h-16 flex flex-1 items-center justify-center">
              {item.name}
            </div>
          ))
        }
        <div style={indicatorStyle.value}
          class='indicator absolute duration-200 bg-black bottom-0 h-1 rounded'></div>
      </div>
    )
  },
})
