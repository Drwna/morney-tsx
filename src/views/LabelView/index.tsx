import type { PropType } from 'vue'
import { defineComponent } from 'vue'

const LabelView = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    return () => (
      <div>
        lable
      </div>
    )
  },
})

export default LabelView
