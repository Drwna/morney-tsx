import type { PropType } from 'vue'
import { defineComponent } from 'vue'

import { useCounterStore } from '../store/useCounterStore'

export const Home = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    const counterStore = useCounterStore()
    return () => (
      <div className="a">
        HelloWorld
        <hr />
        {counterStore.count}
        <button onClick={counterStore.increment}>+1</button>
      </div>
    )
  },
})
