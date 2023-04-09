import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import s from './index.module.scss'
import { MLayout } from '@/components/layout'

const MoneyView = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    return () => (
      <MLayout>
        <div className={s.wrapper}>
          hello
        </div>
      </MLayout>
    )
  },
})

export default MoneyView
