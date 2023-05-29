import type { PropType } from 'vue'
import { defineComponent } from 'vue'

type Name = 'right' | 'left' | 'labels' | 'money' | 'statistics' | 'clear'

export const Icon = defineComponent({
  props: {
    name: {
      type: String as PropType<Name>,
      required: true,
    },
    size: {
      type: [String, Number] as PropType<string | number>,
      default: 24,
    },
  },
  setup: (props, context) => {
    return () => (
      <svg style={{ fontSize: props.size }} class="icon" aria-hidden="true">
        <use xlinkHref={`#icon-${props.name}`}></use>
      </svg >
    )
  },
})
