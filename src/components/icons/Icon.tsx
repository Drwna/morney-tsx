import type { PropType } from 'vue'
import { defineComponent } from 'vue'

type Name = 'right' | 'left'

export const Icon = defineComponent({
  props: {
    name: {
      type: String as PropType<Name>,
      required: true,
    },
  },
  setup: (props, context) => {
    return () => (
      <svg class="icon" aria-hidden="true">
        <use xlink:href={`#icon-${props.name}`}></use>
      </svg >
    )
  },
})
