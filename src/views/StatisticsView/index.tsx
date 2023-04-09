import type { PropType } from 'vue'
import { defineComponent } from 'vue'

const StatisticView = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    return () => (
      <div>
        统计
      </div>
    )
  },
})

export default StatisticView
