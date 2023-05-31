import type { PropType } from 'vue'
import { defineComponent } from 'vue'

export const MButton = defineComponent({
  props: {
    onClick: {
      type: Function as PropType<() => void>,
    },
  },
  setup: (props, context) => {
    return () => (
      <button
        onClick={() => { context.emit('click') }}
        // onClick={props.onClick} // 两种写法都可以响应点击事件
        class="bg-[#767676] h-[40px] text-white rounded-md px-4">
        {context.slots.default?.()}
      </button>
    )
  },
})
