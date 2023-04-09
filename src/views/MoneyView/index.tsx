import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import s from './index.module.scss'
import { Nav } from '@/components/nav'

const MoneyView = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    return () => (
      <>
        <div className={s.layout}>
        <Nav />
        </div>
      </>
    )
  },
})

export default MoneyView
