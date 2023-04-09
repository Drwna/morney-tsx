import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import router from '@/router/index'

const NotFound = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    return () => (
      <>
        <button onClick={() => router.replace('/')}>返回首页</button>
      </>
    )
  },
})

export default NotFound
