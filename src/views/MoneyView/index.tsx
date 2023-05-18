import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import s from './index.module.scss'

const MoneyView = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    return () => (
      <>
        <div class={s.wrapper}>
          hello
        </div>
        <div class="text-yellow-900">
          测试 tailwind css
        </div>
        <h1 class="text-3xl font-bold underline">
          Hello world!
        </h1>
      </>
    )
  },
})

export default MoneyView
