import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { Icon } from '../icons/Icon'
import s from './index.module.scss'

export const MNavbar = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    return () => (
      <nav class={s.nav}>
        <RouterLink class={s.nav_item} to='/label' exactActiveClass={s.nav_item_active}>
          <Icon name='labels' />
          标签页
        </RouterLink>
        <RouterLink class={s.nav_item} to='/money' exactActiveClass={s.nav_item_active}>
          <Icon name='money' />
          记账页
        </RouterLink>
        <RouterLink class={s.nav_item} to='/statistics' exactActiveClass={s.nav_item_active}>
          <Icon name='statistics' />
          统计页
        </RouterLink>
      </nav>
    )
  },
})
