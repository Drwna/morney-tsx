import type { PropType } from 'vue'
import { defineComponent } from 'vue'

type Name = 'right' | 'left' | 'labels' | 'money' | 'statistics'

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
    const icon = {
      width: '1em',
      height: '1em',
      verticalAlign: '-0.15em',
      fill: 'currentColor',
      overflow: 'hidden',
      fontSize: props.size,
    }
    return () => (
      <svg style={icon} class="icon" aria-hidden="true">
        <use xlink:href={`#icon-${props.name}`}></use>
      </svg >
    )
  },
})
