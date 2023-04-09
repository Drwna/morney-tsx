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
      <div className={s.wrapper}>
        hello
      </div>
    )
  },
})

export default MoneyView
