import type { PropType } from 'vue'
import { defineComponent } from 'vue'

export const Home = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    return () => (
      <div className="a">
        HelloWorld
      </div>
    )
  },
})
