import { defineComponent } from 'vue'
import { MNavbar } from '../nav/index'
import s from './index.module.scss'

export const MLayout = defineComponent({
  setup: (props, context) => {
    return () => (
      <div className={s.layout}>
        <div className={s.main}>
          {context.slots.default?.()}
        </div>
        <MNavbar />
      </div>
    )
  },
})
